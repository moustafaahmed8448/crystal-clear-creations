import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import { Send, Calculator } from 'lucide-react';

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(20),
  project_type: z.string().trim().min(1),
  glass_type: z.string().trim().min(1).max(100),
  dimensions: z.string().trim().min(1).max(300),
  timeline: z.string().trim().max(100).optional().or(z.literal('')),
  budget: z.string().trim().max(100).optional().or(z.literal('')),
  notes: z.string().trim().max(2000).optional().or(z.literal('')),
});

const Quote = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', project_type: '', glass_type: '',
    dimensions: '', timeline: '', budget: '', notes: '',
  });

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: 'Validation Error', description: Object.values(parsed.error.flatten().fieldErrors).flat().join(', '), variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      const d = parsed.data;
      const message = [
        `Project Type: ${d.project_type}`,
        `Glass Type: ${d.glass_type}`,
        `Dimensions/Quantity: ${d.dimensions}`,
        d.timeline ? `Timeline: ${d.timeline}` : null,
        d.budget ? `Budget: ${d.budget}` : null,
        d.notes ? `\nNotes:\n${d.notes}` : null,
      ].filter(Boolean).join('\n');
      await supabase.from('contact_submissions').insert([{
        name: d.name, email: d.email, phone: d.phone,
        subject: `Quote Request: ${d.project_type}`,
        message,
      }]);
      toast({ title: t('contact.success') });
      setForm({ name: '', email: '', phone: '', project_type: '', glass_type: '', dimensions: '', timeline: '', budget: '', notes: '' });
    } catch {
      toast({ title: t('contact.error'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const selectClass = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Calculator className="h-8 w-8 text-accent" />
          </div>
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('quote.label')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{t('quote.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('quote.subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit} className="glass-card p-8 max-w-3xl mx-auto space-y-5">
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
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.phone')}</label>
              <Input value={form.phone} onChange={update('phone')} required maxLength={20} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('quote.project_type')}</label>
                <select value={form.project_type} onChange={update('project_type')} required className={selectClass}>
                  <option value="">{t('quote.select_option')}</option>
                  <option value={t('projects.residential')}>{t('projects.residential')}</option>
                  <option value={t('projects.commercial')}>{t('projects.commercial')}</option>
                  <option value={t('projects.industrial')}>{t('projects.industrial')}</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('quote.glass_type')}</label>
                <Input value={form.glass_type} onChange={update('glass_type')} required maxLength={100} placeholder="e.g. Tempered, Laminated, Insulated" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('quote.dimensions')}</label>
              <Textarea value={form.dimensions} onChange={update('dimensions')} required rows={3} maxLength={300} placeholder="e.g. 50 panels, 1200x2400mm, 10mm thick" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('quote.timeline')}</label>
                <Input value={form.timeline} onChange={update('timeline')} maxLength={100} placeholder="e.g. 4-6 weeks" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('quote.budget')}</label>
                <Input value={form.budget} onChange={update('budget')} maxLength={100} placeholder="e.g. 50,000 - 100,000" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('quote.notes')}</label>
              <Textarea value={form.notes} onChange={update('notes')} rows={4} maxLength={2000} />
            </div>
            <Button type="submit" disabled={loading} className="rounded-full px-8 w-full sm:w-auto" size="lg">
              {loading ? t('contact.sending') : t('quote.submit')}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Quote;
