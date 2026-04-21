import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import { MapPin, Briefcase, Send, Upload } from 'lucide-react';

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(20),
  position: z.string().trim().min(1).max(100),
  experience: z.string().trim().max(20).optional().or(z.literal('')),
  message: z.string().trim().min(1).max(2000),
});

const openings = [
  { en: 'Senior Glass Engineer', ar: 'مهندس زجاج أول', loc: { en: 'Riyadh', ar: 'الرياض' }, type: 'full_time' as const },
  { en: 'Production Supervisor', ar: 'مشرف إنتاج', loc: { en: 'Dammam', ar: 'الدمام' }, type: 'full_time' as const },
  { en: 'CAD Designer', ar: 'مصمم CAD', loc: { en: 'Riyadh', ar: 'الرياض' }, type: 'full_time' as const },
  { en: 'Installation Technician', ar: 'فني تركيب', loc: { en: 'Jeddah', ar: 'جدة' }, type: 'contract' as const },
  { en: 'Quality Control Inspector', ar: 'مفتش جودة', loc: { en: 'Riyadh', ar: 'الرياض' }, type: 'full_time' as const },
  { en: 'Sales Representative', ar: 'مندوب مبيعات', loc: { en: 'All Regions', ar: 'جميع المناطق' }, type: 'full_time' as const },
];

const Careers = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' });

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (f && f.size > 5 * 1024 * 1024) {
      toast({ title: 'File too large (max 5MB)', variant: 'destructive' });
      return;
    }
    setCvFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: 'Validation Error', description: Object.values(parsed.error.flatten().fieldErrors).flat().join(', '), variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      let cvPath: string | null = null;
      if (cvFile) {
        const ext = cvFile.name.split('.').pop();
        const path = `cvs/${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${ext}`;
        const { error: upErr } = await supabase.storage.from('job-applications').upload(path, cvFile, { upsert: false });
        if (upErr) throw upErr;
        cvPath = path;
      }
      const { name, email, phone, position, experience, message } = parsed.data;
      await supabase.from('contact_submissions').insert([{
        name, email, phone,
        subject: `Job Application: ${position}`,
        message: `Experience: ${experience || 'N/A'}\n\n${message}`,
        cv_path: cvPath,
      }]);
      toast({ title: t('careers.success') });
      setForm({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
      setCvFile(null);
    } catch (err: any) {
      toast({ title: t('contact.error'), description: err?.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const selectPosition = (pos: string) => {
    setForm((f) => ({ ...f, position: pos }));
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('careers.label')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{t('careers.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('careers.subtitle')}</p>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">{t('careers.openings')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openings.map((job) => {
              const title = language === 'ar' ? job.ar : job.en;
              return (
                <div key={job.en} className="glass-card p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4" /> {language === 'ar' ? job.loc.ar : job.loc.en}
                  </div>
                  <div className="text-xs text-accent font-medium mb-4">{t(`careers.${job.type}` as any)}</div>
                  <Button variant="outline" className="rounded-full mt-auto" onClick={() => selectPosition(job.en)}>
                    {t('careers.apply')}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="apply-form" className="py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3">{t('careers.apply_title')}</h2>
              <p className="text-muted-foreground">{t('careers.apply_subtitle')}</p>
            </div>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.name')}</label>
                  <Input value={form.name} onChange={update('name')} required maxLength={100} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.email')}</label>
                  <Input type="email" value={form.email} onChange={update('email')} required maxLength={255} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.phone')}</label>
                  <Input value={form.phone} onChange={update('phone')} required maxLength={20} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t('careers.experience')}</label>
                  <Input value={form.experience} onChange={update('experience')} placeholder="e.g. 3-5 years" maxLength={20} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('careers.position')}</label>
                <Input value={form.position} onChange={update('position')} required maxLength={100} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('careers.cover_letter')}</label>
                <Textarea value={form.message} onChange={update('message')} required rows={5} maxLength={2000} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('careers.cv')}</label>
                <label className="glass-card p-4 flex items-center gap-3 cursor-pointer hover:bg-muted/50 transition">
                  <Upload className="h-5 w-5 text-accent" />
                  <span className="text-sm text-foreground flex-1 truncate">
                    {cvFile ? cvFile.name : t('careers.cv')}
                  </span>
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="hidden" />
                </label>
              </div>
              <Button type="submit" disabled={loading} className="rounded-full px-8 w-full sm:w-auto" size="lg">
                {loading ? t('contact.sending') : t('careers.submit')}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
