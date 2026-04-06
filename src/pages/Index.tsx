import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Factory, Layers, Wrench, Shield, ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    overlay: 'linear-gradient(135deg, rgba(15,25,45,0.7), rgba(30,60,90,0.4))',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    overlay: 'linear-gradient(135deg, rgba(10,20,40,0.7), rgba(20,50,80,0.4))',
  },
  {
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80',
    overlay: 'linear-gradient(135deg, rgba(15,25,45,0.7), rgba(30,60,90,0.4))',
  },
];

const stats = [
  { value: '25+', key: 'intro.experience' as const },
  { value: '500+', key: 'intro.projects_completed' as const },
  { value: '300+', key: 'intro.clients' as const },
  { value: '50+', key: 'intro.products_count' as const },
];

const testimonials = [
  { name: 'Ahmed Al-Rashid', role: 'CEO, Al-Rashid Development', text: 'Exceptional quality and professionalism. Their glass solutions transformed our commercial tower into a landmark.', rating: 5 },
  { name: 'Sara Al-Faisal', role: 'Interior Designer', text: 'The custom glass partitions they created for our hotel project were absolutely stunning. Highly recommended.', rating: 5 },
  { name: 'Mohammed Al-Qahtani', role: 'Project Manager, Saudi Construction', text: 'Reliable, precise, and always on schedule. They are our go-to glass manufacturer for large-scale projects.', rating: 5 },
];

const clientLogos = [
  'Saudi Aramco', 'SABIC', 'Al-Futtaim', 'Emaar', 'NEOM', 'Red Sea Global', 'Roshn', 'Dar Al-Arkan',
];

const Index = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const ChevPrev = isRTL ? ChevronRight : ChevronLeft;
  const ChevNext = isRTL ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: Factory, titleKey: 'services.manufacturing.title' as const, descKey: 'services.manufacturing.desc' as const },
    { icon: Layers, titleKey: 'services.custom.title' as const, descKey: 'services.custom.desc' as const },
    { icon: Wrench, titleKey: 'services.installation.title' as const, descKey: 'services.installation.desc' as const },
    { icon: Shield, titleKey: 'services.maintenance.title' as const, descKey: 'services.maintenance.desc' as const },
  ];

  const featuredProjects = [
    { title: 'Riyadh Tower', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
    { title: 'Jeddah Residence', category: 'Residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80' },
    { title: 'KAFD Office Complex', category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
    { title: 'Dammam Factory', category: 'Industrial', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80' },
    { title: 'Khobar Mall', category: 'Commercial', image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80' },
    { title: 'Al-Ula Resort', category: 'Residential', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
            <div className="absolute inset-0" style={{ background: slide.overlay }} />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="glass inline-block px-4 py-1.5 rounded-full mb-6">
                <span className="text-sm font-medium text-white/90">🏭 {t('footer.company')}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
                  <Link to="/projects">{t('hero.cta')} <Arrow className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                  <Link to="/contact">{t('hero.secondary')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-accent' : 'w-2 bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="glass-strong rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{t(stat.key)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('intro.label')}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">{t('intro.title')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{t('intro.desc')}</p>
              <Button asChild className="rounded-full px-6">
                <Link to="/about">{t('nav.about')} <Arrow className="h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
                  alt="Glass factory"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -start-6 glass-strong rounded-xl p-6 max-w-[200px]">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">{t('intro.experience')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('services.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t('services.title')}</h2>
            <p className="text-muted-foreground">{t('services.subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.titleKey} className="glass-card p-8 text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">{t(service.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('projects.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t('projects.title')}</h2>
            <p className="text-muted-foreground">{t('projects.subtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.title} className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-white font-bold text-lg mt-1">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link to="/projects">{t('projects.view_all')} <Arrow className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-lg mx-auto">{t('cta.subtitle')}</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 text-lg">
            <Link to="/contact">{t('cta.button')} <Arrow className="h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('testimonials.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{t('testimonials.title')}</h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="glass-card p-10 text-center">
              <Quote className="h-10 w-10 text-accent/30 mx-auto mb-6" />
              <p className="text-lg text-foreground leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
              <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => setCurrentTestimonial((c) => (c - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevPrev className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => setCurrentTestimonial((c) => (c + 1) % testimonials.length)}
              >
                <ChevNext className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('clients.label')}</span>
            <h2 className="text-2xl font-bold text-foreground mt-2">{t('clients.title')}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {clientLogos.map((name) => (
              <div key={name} className="glass-card px-8 py-4 text-muted-foreground font-semibold text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
