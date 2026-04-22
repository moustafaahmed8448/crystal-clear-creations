import { useLanguage } from '@/i18n/LanguageContext';

const MarqueeBanner = () => {
  const { t } = useLanguage();
  const text = t('marquee.text');
  // One "track" repeats the text several times. We render two identical
  // tracks side by side and translate by exactly -50% so the seam is invisible.
  const items = Array.from({ length: 6 });

  const Track = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div className="flex shrink-0" aria-hidden={ariaHidden || undefined}>
      {items.map((_, i) => (
        <span
          key={i}
          className="mx-8 text-base md:text-lg font-medium inline-flex items-center gap-6 shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
          {text}
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground py-4 overflow-hidden border-y border-accent/20">
      <div className="flex animate-marquee w-max whitespace-nowrap">
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
};

export default MarqueeBanner;
