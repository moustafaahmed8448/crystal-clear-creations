import { useLanguage } from '@/i18n/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const allProjects = [
  { title: 'Riyadh Financial District Tower', category: 'commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', desc: 'Full curtain wall glazing system for a 40-story commercial tower.' },
  { title: 'Jeddah Waterfront Residence', category: 'residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', desc: 'Custom laminated glass balustrades and panoramic windows.' },
  { title: 'KAFD Office Complex', category: 'commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', desc: 'Energy-efficient double-glazed units for a prestigious office complex.' },
  { title: 'Dammam Industrial Plant', category: 'industrial', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80', desc: 'Fire-rated glass partitions and safety glazing for industrial facilities.' },
  { title: 'Al Khobar Shopping Mall', category: 'commercial', image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80', desc: 'Structural glass skylights and decorative glass features.' },
  { title: 'Al-Ula Luxury Resort', category: 'residential', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', desc: 'Floor-to-ceiling glass walls blending desert views with luxury interiors.' },
  { title: 'Jubail Refinery', category: 'industrial', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', desc: 'Blast-resistant and chemically treated glass for refinery control rooms.' },
  { title: 'Medina Hotel Complex', category: 'commercial', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80', desc: 'Decorative printed glass panels and automated glass doors.' },
  { title: 'NEOM Smart Villa', category: 'residential', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80', desc: 'Smart switchable glass and solar-integrated glazing systems.' },
];

const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('projects.all') },
    { key: 'residential', label: t('projects.residential') },
    { key: 'commercial', label: t('projects.commercial') },
    { key: 'industrial', label: t('projects.industrial') },
  ];

  const filtered = filter === 'all' ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('projects.label')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{t('projects.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('projects.subtitle')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <Button
                key={f.key}
                variant={filter === f.key ? 'default' : 'outline'}
                className="rounded-full px-6"
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </Button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.title} className="group glass-card overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-bold text-foreground text-lg mt-1 mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
