import { useLanguage } from '@/i18n/LanguageContext';
import { Factory, Layers, Wrench, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Factory,
      titleKey: 'services.manufacturing.title' as const,
      descKey: 'services.manufacturing.desc' as const,
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80',
      features: ['Tempered glass production', 'Float glass processing', 'High-volume capacity', 'Quality-controlled environment'],
    },
    {
      icon: Layers,
      titleKey: 'services.custom.title' as const,
      descKey: 'services.custom.desc' as const,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      features: ['Architectural glass design', 'Decorative glass solutions', 'Smart glass integration', 'Custom shapes and sizes'],
    },
    {
      icon: Wrench,
      titleKey: 'services.installation.title' as const,
      descKey: 'services.installation.desc' as const,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      features: ['Certified technicians', 'Safety compliance', 'Project management', 'Timely delivery'],
    },
    {
      icon: Shield,
      titleKey: 'services.maintenance.title' as const,
      descKey: 'services.maintenance.desc' as const,
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80',
      features: ['Regular inspections', 'Emergency repairs', 'Seal replacements', 'Cleaning services'],
    },
  ];

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

      {/* Services Detail */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-32">
          {services.map((service, i) => (
            <div key={service.titleKey} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`}>
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
                <Button asChild className="rounded-full px-6">
                  <Link to="/contact">{t('hero.secondary')}</Link>
                </Button>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-xl ${i % 2 !== 0 ? 'md:[direction:ltr]' : ''}`}>
                <img src={service.image} alt={t(service.titleKey)} className="w-full h-96 object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
