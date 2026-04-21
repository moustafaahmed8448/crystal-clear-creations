import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Factory, Layers, Wrench, Shield, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional().or(z.literal('')),
  service: z.string().trim().min(1),
  message: z.string().trim().min(1).max(2000),
});

const Services = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const services = [
    {
      icon: Factory,
      titleKey: 'services.manufacturing.title' as const,
      descKey: 'services.manufacturing.desc' as const,
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
        'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=80',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
      ],
      features: ['Tempered glass production', 'Float glass processing', 'High-volume capacity', 'Quality-controlled environment'],
      process: ['Raw material selection', 'Cutting & shaping', 'Tempering / treatment', 'Quality inspection', 'Packaging & dispatch'],
    },
    {
      icon: Layers,
      titleKey: 'services.custom.title' as const,
      descKey: 'services.custom.desc' as const,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=600&q=80',
        'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80',
        'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
      ],
      features: ['Architectural glass design', 'Decorative glass solutions', 'Smart glass integration', 'Custom shapes and sizes'],
      process: ['Consultation & briefing', 'CAD design & prototyping', 'Client approval', 'Custom production', 'Delivery'],
    },
    {
      icon: Wrench,
      titleKey: 'services.installation.title' as const,
      descKey: 'services.installation.desc' as const,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80',
        'https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=600&q=80',
        'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=600&q=80',
      ],
      features: ['Certified technicians', 'Safety compliance', 'Project management', 'Timely delivery'],
      process: ['Site survey', 'Logistics planning', 'Safe installation', 'Quality verification', 'Handover'],
    },
    {
      icon: Shield,
      titleKey: 'services.maintenance.title' as const,
      descKey: 'services.maintenance.desc' as const,
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
      ],
      features: ['Regular inspections', 'Emergency repairs', 'Seal replacements', 'Cleaning services'],
      process: ['Schedule inspection', 'Issue diagnosis', 'Repair / replace', 'Performance test', 'Maintenance report'],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: 'Validation Error', description: Object.values(parsed.error.flatten().fieldErrors).flat().join(', '), variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      const { name, email, phone, service, message } = parsed.data;
      await supabase.from('contact_submissions').insert([{
        name, email, phone: phone || null,
        subject: `Service Inquiry: ${service}`,
        message,
      }]);
      toast({ title: t('contact.success') });
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      toast({ title: t('contact.error'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('services.label')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{t('services.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('services.subtitle')}</p>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-32">
          {services.map((service, i) => (
            <div key={service.titleKey} id={service.titleKey} className="scroll-mt-24">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`}>
                <div className={i % 2 !== 0 ? 'md:[direction:ltr]' : ''}>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{t(service.titleKey)}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{t(service.descKey)}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    type="button"
                    className="rounded-full px-6"
                    onClick={() => {
                      setForm((f) => ({ ...f, service: t(service.titleKey) }));
                      document.getElementById('service-inquiry')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('services.send_inquiry')}
                  </Button>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? 'md:[direction:ltr]' : ''}`}>
                  <img src={service.image} alt={t(service.titleKey)} className="w-full h-96 object-cover" loading="lazy" />
                </div>
              </div>

              {/* Process */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-foreground mb-6 text-center">{t('services.process')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {service.process.map((step, idx) => (
                    <div key={step} className="glass-card p-5 text-center">
                      <div className="w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center mx-auto mb-3">
                        {idx + 1}
                      </div>
                      <div className="text-sm text-foreground">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-foreground mb-6 text-center">{t('services.gallery')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.gallery.map((img, idx) => (
                    <div key={img} className="rounded-xl overflow-hidden aspect-[4/3]">
                      <img src={img} alt={`${t(service.titleKey)} ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="service-inquiry" className="py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3">{t('services.cta_title')}</h2>
              <p className="text-muted-foreground">{t('services.cta_subtitle')}</p>
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
                  <Input value={form.phone} onChange={update('phone')} maxLength={20} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t('nav.services')}</label>
                  <select
                    value={form.service}
                    onChange={update('service')}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">{t('quote.select_option')}</option>
                    {services.map((s) => (
                      <option key={s.titleKey} value={t(s.titleKey)}>{t(s.titleKey)}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.message')}</label>
                <Textarea value={form.message} onChange={update('message')} required rows={5} maxLength={2000} />
              </div>
              <Button type="submit" disabled={loading} className="rounded-full px-8 w-full sm:w-auto" size="lg">
                {loading ? t('contact.sending') : t('services.send_inquiry')}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
