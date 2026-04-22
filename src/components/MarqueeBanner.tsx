import { useLanguage } from '@/i18n/LanguageContext';

const MarqueeBanner = () => {
  const { t } = useLanguage();
  const text = t('marquee.text');
  // Repeat the text so the strip is always full
  const items = Array.from({ length: 6 });

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground py-4 overflow-hidden border-y border-accent/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((_, i) => (
          <span
            key={i}
            className="mx-8 text-base md:text-lg font-medium inline-flex items-center gap-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
            {text}
          </span>
        ))}
        {items.map((_, i) => (
          <span
            key={`b-${i}`}
            className="mx-8 text-base md:text-lg font-medium inline-flex items-center gap-6"
            aria-hidden="true"
          >
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
