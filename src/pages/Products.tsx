import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const productCategories = [
  {
    title: 'Tempered Glass',
    titleAr: 'الزجاج المقسى',
    desc: 'Heat-strengthened safety glass, 4-5x stronger than regular glass. Ideal for facades, doors, and shower enclosures.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    specs: ['Thickness: 4-19mm', 'Max size: 3000x6000mm', 'Safety certified'],
  },
  {
    title: 'Laminated Glass',
    titleAr: 'الزجاج المصفح',
    desc: 'Multi-layer security glass with PVB interlayer. Provides sound insulation and UV protection.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    specs: ['Thickness: 6-40mm', 'PVB/SGP interlayer', 'Hurricane rated'],
  },
  {
    title: 'Insulated Glass',
    titleAr: 'الزجاج العازل',
    desc: 'Double and triple glazed units for superior thermal and acoustic insulation.',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80',
    specs: ['Double/triple glazed', 'Argon filled', 'Low-E coating'],
  },
  {
    title: 'Decorative Glass',
    titleAr: 'الزجاج الزخرفي',
    desc: 'Digitally printed, frosted, and colored glass for architectural and interior applications.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
    specs: ['Ceramic printing', 'Acid etching', 'Color options'],
  },
  {
    title: 'Fire-Rated Glass',
    titleAr: 'زجاج مقاوم للحريق',
    desc: 'Specialized glass that maintains integrity during fire exposure for safety compliance.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    specs: ['30-120 min rating', 'EI classification', 'Certified'],
  },
  {
    title: 'Smart Glass',
    titleAr: 'الزجاج الذكي',
    desc: 'Switchable privacy glass with electrochromic technology for modern buildings.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
    specs: ['Switchable opacity', 'IoT enabled', 'Energy efficient'],
  },
];

const Products = () => {
  const { t, language, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('products.label')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{t('products.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('products.subtitle')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
              <div key={product.title} className="glass-card overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {language === 'ar' ? product.titleAr : product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec) => (
                      <span key={spec} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="ghost" size="sm" className="gap-1 text-accent p-0 h-auto hover:bg-transparent hover:underline">
                    <Link to="/contact">{t('products.view_details')} <Arrow className="h-3 w-3" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
