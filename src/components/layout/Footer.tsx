import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const quickLinks = [
    { key: 'nav.home' as const, path: '/' },
    { key: 'nav.about' as const, path: '/about' },
    { key: 'nav.services' as const, path: '/services' },
    { key: 'nav.projects' as const, path: '/projects' },
  ];

  const serviceLinks = [
    { key: 'services.manufacturing.title' as const, path: '/services' },
    { key: 'services.custom.title' as const, path: '/services' },
    { key: 'services.installation.title' as const, path: '/services' },
    { key: 'services.maintenance.title' as const, path: '/services' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-lg">{t('footer.company')}</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path + link.key}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{t('contact.address_value')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{t('contact.phone_value')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>{t('contact.email_value')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>{t('contact.hours_value')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          © {year} {t('footer.company')}. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
