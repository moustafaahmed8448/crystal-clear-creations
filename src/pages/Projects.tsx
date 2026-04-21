import { useLanguage } from '@/i18n/LanguageContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Projects = () => {
  const { t, language, isRTL } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const filters = [
    { key: 'all', label: t('projects.all') },
    { key: 'residential', label: t('projects.residential') },
    { key: 'commercial', label: t('projects.commercial') },
    { key: 'industrial', label: t('projects.industrial') },
  ] as const;

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

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
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group glass-card overflow-hidden block"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title[language]}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {t(`projects.${project.category}` as any)}
                  </span>
                  <h3 className="font-bold text-foreground text-lg mt-1 mb-2">{project.title[language]}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.shortDesc[language]}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                    {t('projects.view_project')} <Arrow className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
