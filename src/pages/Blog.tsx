import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'The Future of Smart Glass Technology',
    titleAr: 'مستقبل تقنية الزجاج الذكي',
    excerpt: 'Explore how electrochromic and thermochromic glass technologies are revolutionizing building design and energy efficiency.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    date: '2024-03-15',
    category: 'Technology',
  },
  {
    title: 'Glass in Saudi Vision 2030 Architecture',
    titleAr: 'الزجاج في عمارة رؤية السعودية 2030',
    excerpt: 'How modern glass solutions are shaping the iconic buildings of NEOM, The Line, and other Vision 2030 megaprojects.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    date: '2024-02-28',
    category: 'Industry',
  },
  {
    title: 'Energy-Efficient Glazing Solutions for Hot Climates',
    titleAr: 'حلول الزجاج الموفرة للطاقة للمناخات الحارة',
    excerpt: 'Best practices for selecting glass that reduces cooling costs while maximizing natural light in GCC buildings.',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80',
    date: '2024-02-10',
    category: 'Sustainability',
  },
  {
    title: 'Safety Standards for Architectural Glass',
    titleAr: 'معايير السلامة للزجاج المعماري',
    excerpt: 'A comprehensive guide to safety standards and certifications required for architectural glass in Saudi Arabia.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    date: '2024-01-20',
    category: 'Standards',
  },
  {
    title: 'Decorative Glass Trends in Interior Design',
    titleAr: 'اتجاهات الزجاج الزخرفي في التصميم الداخلي',
    excerpt: 'From backlit panels to textured partitions — discover the latest decorative glass trends transforming Saudi interiors.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
    date: '2024-01-05',
    category: 'Design',
  },
  {
    title: 'Maintaining Your Glass Installations',
    titleAr: 'صيانة تركيبات الزجاج',
    excerpt: 'Expert tips for maintaining the clarity, safety, and longevity of your commercial and residential glass installations.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    date: '2023-12-15',
    category: 'Maintenance',
  },
];

const Blog = () => {
  const { t, language, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{t('blog.label')}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">{t('blog.title')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t('blog.subtitle')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="glass-card overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={language === 'ar' ? post.titleAr : post.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium">{post.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2 line-clamp-2">
                    {language === 'ar' ? post.titleAr : post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button variant="ghost" size="sm" className="gap-1 text-accent p-0 h-auto hover:bg-transparent hover:underline">
                    {t('blog.read_more')} <Arrow className="h-3 w-3" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
