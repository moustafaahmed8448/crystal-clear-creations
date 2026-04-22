import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';

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
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="glass-card overflow-hidden group block"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.cover}
                    alt={product.title[language]}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.title[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.shortDesc[language]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:underline">
                    {t('products.view_details')} <Arrow className="h-3 w-3" />
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

export default Products;
