import { useLanguage } from '@/i18n/LanguageContext';
import { Eye, Target, Factory, Award } from 'lucide-react';

const timelineEvents = [
  { year: '1998', title: 'Founded', desc: 'Started as a small glass workshop in Riyadh' },
  { year: '2005', title: 'First Factory', desc: 'Opened our first dedicated glass manufacturing facility' },
  { year: '2012', title: 'Expansion', desc: 'Expanded to a 50,000 sqm state-of-the-art facility' },
  { year: '2018', title: 'International Standards', desc: 'Achieved ISO 9001 and ISO 14001 certifications' },
  { year: '2023', title: 'Innovation Hub', desc: 'Launched R&D center for smart glass technologies' },
];

const certifications = [
  'ISO 9001:2015', 'ISO 14001:2015', 'SASO Certified', 'Saudi Building Code Compliant',
  'CE Marking', 'IGCC Certified',
];

const capabilities = [
  { title: 'Tempering', desc: 'Up to 6m x 3m glass panels' },
  { title: 'Laminating', desc: 'Multi-layer security glass' },
  { title: 'Insulating', desc: 'Double & triple glazed units' },
  { title: 'Printing', desc: 'Digital ceramic printing' },
  { title: 'Bending', desc: 'Curved glass processing' },
  { title: 'Cutting', desc: 'CNC precision cutting' },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('about.story.label')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{t('about.story.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('about.story.desc')}</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            <div className="absolute top-0 bottom-0 start-6 md:start-1/2 w-px bg-border" />
            {timelineEvents.map((event, i) => (
              <div key={event.year} className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 text-accent-foreground font-bold text-xs">
                  {event.year}
                </div>
                <div className="flex-1 glass-card p-6">
                  <h3 className="font-bold text-foreground text-lg">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.vision.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('about.vision.desc')}</p>
            </div>
            <div className="glass-card p-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.mission.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('about.mission.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Factory className="h-8 w-8 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">{t('about.factory.title')}</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">{t('about.factory.desc')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {capabilities.map((cap) => (
              <div key={cap.title} className="glass-card p-6">
                <h4 className="font-semibold text-foreground mb-1">{cap.title}</h4>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-12">{t('about.certifications.title')}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="glass-card px-6 py-3 font-medium text-sm text-foreground">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
