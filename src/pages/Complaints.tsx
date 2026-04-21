import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import { Send, MessageSquareWarning } from 'lucide-react';

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional().or(z.literal('')),
  reference: z.string().trim().max(100).optional().or(z.literal('')),
  category: z.string().trim().min(1),
  description: z.string().trim().min(10).max(2000),
});

const Complaints = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', reference: '', category: '', description: '' });

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
        d.reference ? `Reference: ${d.reference}` : null,
        `Category: ${d.category}`,
        '',
        d.description,
      ].filter(Boolean).join('\n');
      await supabase.from('contact_submissions').insert([{
        name: d.name, email: d.email, phone: d.phone || null,
        subject: `Complaint: ${d.category}`,
        message,
      }]);
      toast({ title: t('contact.success') });
      setForm({ name: '', email: '', phone: '', reference: '', category: '', description: '' });
    } catch {
      toast({ title: t('contact.error'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { key: 'cat_quality', label: t('complaints.cat_quality') },
    { key: 'cat_delivery', label: t('complaints.cat_delivery') },
    { key: 'cat_installation', label: t('complaints.cat_installation') },
    { key: 'cat_service', label: t('complaints.cat_service') },
    { key: 'cat_other', label: t('complaints.cat_other') },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <MessageSquareWarning className="h-8 w-8 text-accent" />
          </div>
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('complaints.label')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{t('complaints.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('complaints.subtitle')}</p>
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
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('contact.phone')}</label>
                <Input value={form.phone} onChange={update('phone')} maxLength={20} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t('complaints.reference')}</label>
                <Input value={form.reference} onChange={update('reference')} maxLength={100} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('complaints.category')}</label>
              <select
                value={form.category}
                onChange={update('category')}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">{t('quote.select_option')}</option>
                {categories.map((c) => (
                  <option key={c.key} value={c.label}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t('complaints.description')}</label>
              <Textarea value={form.description} onChange={update('description')} required rows={6} maxLength={2000} />
            </div>
            <Button type="submit" disabled={loading} className="rounded-full px-8 w-full sm:w-auto" size="lg">
              {loading ? t('contact.sending') : t('complaints.submit')}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Complaints;
