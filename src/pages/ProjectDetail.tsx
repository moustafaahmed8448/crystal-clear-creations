import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { getProjectBySlug, projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Maximize2,
  CheckCircle2,
  Send,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional().or(z.literal('')),
  message: z.string().trim().min(1).max(2000),
});

const ProjectDetail = () => {
  const { slug } = useParams();
  const { t, language, isRTL } = useLanguage();
  const { toast } = useToast();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const project = slug ? getProjectBySlug(slug) : undefined;
  if (!project) return <Navigate to="/projects" replace />;

  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const Back = isRTL ? ArrowRight : ArrowLeft;
  const ChevPrev = isRTL ? ChevronRight : ChevronLeft;
  const ChevNext = isRTL ? ChevronLeft : ChevronRight;

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: 'Validation Error',
        description: Object.values(parsed.error.flatten().fieldErrors).flat().join(', '),
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    try {
      const { name, email, phone, message } = parsed.data;
      await supabase.from('contact_submissions').insert([
        {
          name,
          email,
          phone: phone || null,
          subject: `Project Inquiry: ${project.title.en}`,
          message,
        },
      ]);
      toast({ title: t('contact.success') });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast({ title: t('contact.error'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const meta = [
    { icon: MapPin, label: t('projects.location'), value: project.location[language] },
    { icon: Calendar, label: t('projects.year'), value: project.year },
    { icon: Users, label: t('projects.client'), value: project.client[language] },
    { icon: Maximize2, label: t('projects.area'), value: project.area },
  ];

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const nextImg = () =>
    setLightboxIdx((i) => (i === null ? 0 : (i + 1) % project.gallery.length));
  const prevImg = () =>
    setLightboxIdx((i) =>
      i === null ? 0 : (i - 1 + project.gallery.length) % project.gallery.length
    );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={project.cover} alt={project.title[language]} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="mb-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent"
              >
                <Back className="h-4 w-4" /> {t('projects.back_to_projects')}
              </Link>
            </div>
            <span className="block text-accent text-sm font-semibold uppercase tracking-wider">
              {t(`projects.${project.category}` as any)}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2 max-w-3xl">
              {project.title[language]}
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">{project.shortDesc[language]}</p>
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {meta.map((m) => (
              <div key={m.label} className="glass-card p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <m.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                  <div className="font-semibold text-foreground text-sm mt-0.5">{m.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + Scope/Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t('projects.overview')}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description[language]}
              </p>

              <h3 className="text-xl font-bold text-foreground mt-10 mb-4">{t('projects.scope')}</h3>
              <ul className="space-y-3">
                {project.scope[language].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6 h-fit lg:sticky lg:top-24">
              <h3 className="text-lg font-bold text-foreground mb-4">{t('projects.features')}</h3>
              <ul className="space-y-3">
                {project.features[language].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {t('projects.gallery')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => openLightbox(i)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={img}
                  alt={`${project.title[language]} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Maximize2 className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {t('projects.inquire_title')}
              </h2>
              <p className="text-muted-foreground">{t('projects.inquire_subtitle')}</p>
            </div>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t('contact.name')}
                  </label>
                  <Input value={form.name} onChange={update('name')} required maxLength={100} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {t('contact.email')}
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    required
                    maxLength={255}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  {t('contact.phone')}
                </label>
                <Input value={form.phone} onChange={update('phone')} maxLength={20} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  {t('contact.message')}
                </label>
                <Textarea
                  value={form.message}
                  onChange={update('message')}
                  required
                  rows={5}
                  maxLength={2000}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="rounded-full px-8 w-full sm:w-auto"
                size="lg"
              >
                {loading ? t('contact.sending') : t('contact.send')}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              {t('projects.related')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group relative rounded-2xl overflow-hidden block"
                >
                  <img
                    src={p.cover}
                    alt={p.title[language]}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                      {t(`projects.${p.category}` as any)}
                    </span>
                    <h3 className="text-white font-bold text-lg mt-1">{p.title[language]}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevPrev className="h-6 w-6" />
          </button>
          <img
            src={project.gallery[lightboxIdx]}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Next"
          >
            <ChevNext className="h-6 w-6" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIdx + 1} / {project.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
