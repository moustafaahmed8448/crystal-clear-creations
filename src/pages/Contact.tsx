import { useLanguage } from '@/i18n/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  phone: z.string().trim().max(20).optional().or(z.literal('')),
  subject: z.string().trim().min(1, 'Subject is required').max(200),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: 'Validation Error', description: Object.values(parsed.error.flatten().fieldErrors).flat().join(', '), variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert([parsed.data]);
      if (error) throw error;
      toast({ title: t('contact.success') });
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      toast({ title: t('contact.error'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const contactInfo = [
    { icon: MapPin, label: t('contact.address'), value: t('contact.address_value') },
    { icon: Phone, label: t('contact.phone'), value: t('contact.phone_value') },
    { icon: Mail, label: t('contact.email'), value: t('contact.email_value') },
    { icon: Clock, label: t('contact.hours'), value: t('contact.hours_value') },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('contact.label')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{t('contact.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{item.label}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64 glass-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.674936408799!2d46.6752957!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location"
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card p-8 space-y-5">
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
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.subject')}</label>
                  <Input value={form.subject} onChange={update('subject')} required maxLength={200} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.message')}</label>
                <Textarea value={form.message} onChange={update('message')} required rows={6} maxLength={2000} />
              </div>
              <Button type="submit" disabled={loading} className="rounded-full px-8 w-full sm:w-auto" size="lg">
                {loading ? t('contact.sending') : t('contact.send')}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
