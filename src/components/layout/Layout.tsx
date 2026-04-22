import { ReactNode } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Header from './Header';
import Footer from './Footer';
import MarqueeBanner from '@/components/MarqueeBanner';
import { MessageCircle } from 'lucide-react';

const Layout = ({ children }: { children: ReactNode }) => {
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>

      {/* Global marquee — visible on every page above the footer */}
      <MarqueeBanner />

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/96611XXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${isRTL ? 'left-6' : 'right-6'}`}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Layout;
