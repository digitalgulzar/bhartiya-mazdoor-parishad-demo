import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { usePackage } from '../context/PackageContext';
import { 
  FileText, 
  Menu, 
  X, 
  Globe, 
  Search, 
  ShieldCheck, 
  Layers, 
  Lock,
  ArrowRight
} from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { activePackage, hasComplaintPortal, hasStandardAdmin, hasNationalSystem } = usePackage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi');
  };

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/mission', label: t.nav.mission },
    { to: '/leadership', label: t.nav.leadership },
    { to: '/rights', label: t.nav.rights },
    { to: '/activities', label: t.nav.activities },
    { to: '/news', label: t.nav.news },
    { to: '/packages', label: t.nav.packages, highlight: true },
    { to: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Mark (Zone 1) */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-xl shadow-xs border border-blue-950">
              BMP
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight uppercase group-hover:text-blue-900 transition-colors">
                BHARTIYA MAZDOOR PARISHAD
              </span>
              <span className="text-xs text-amber-700 font-medium -mt-0.5 tracking-wide">
                {language === 'hi' ? 'भारतीय मजदूर परिषद · राष्ट्रीय श्रमिक कल्याण' : 'Indian Council of Workers · National Welfare'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Zone 2) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-700">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`whitespace-nowrap transition-colors py-1 ${
                  isActive(item.to)
                    ? 'text-blue-900 font-semibold border-b-2 border-blue-900'
                    : item.highlight
                    ? 'text-amber-800 font-semibold hover:text-amber-900'
                    : 'hover:text-blue-900 hover:border-b-2 hover:border-slate-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Zone (Zone 3) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              title="Switch language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-blue-800" />
              <span className="font-semibold">{language === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>

            {/* Quick Track link if complaint portal enabled */}
            {hasComplaintPortal && (
              <Link
                to="/complaints/track"
                className="hidden lg:inline-flex items-center gap-1 text-xs text-slate-600 hover:text-blue-900 font-medium px-2 py-1.5 rounded hover:bg-slate-100 transition-colors"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span>{language === 'hi' ? 'ट्रैक करें' : 'Track'}</span>
              </Link>
            )}

            {/* Admin Portal quick link depending on active package */}
            {hasNationalSystem ? (
              <Link
                to="/admin/national"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'hi' ? 'राष्ट्रीय एडमिन' : 'National Admin'}</span>
              </Link>
            ) : hasStandardAdmin ? (
              <Link
                to="/admin/p2"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-900 text-white text-xs font-semibold hover:bg-blue-800 transition-all shadow-xs"
              >
                <Lock className="w-3.5 h-3.5 text-blue-200" />
                <span>{language === 'hi' ? 'शिकायत एडमिन' : 'Portal Admin'}</span>
              </Link>
            ) : null}

            {/* Prominent CTA Button: "शिकायत दर्ज करें / Register Complaint" */}
            {hasComplaintPortal ? (
              <Link
                to="/complaints/register"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs sm:text-sm font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span className="whitespace-nowrap">
                  {language === 'hi' ? 'शिकायत दर्ज करें' : 'Register Complaint'}
                </span>
              </Link>
            ) : (
              <Link
                to="/packages"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-300 text-slate-700 text-xs sm:text-sm font-medium hover:bg-slate-200 transition-all"
                title="Complaint registration is a Package 2 & 3 feature"
              >
                <Layers className="w-4 h-4 text-amber-600" />
                <span className="whitespace-nowrap">
                  {language === 'hi' ? 'शिकायत पोर्टल (P2/P3)' : 'Portal (P2/P3)'}
                </span>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-1.5 p-2 rounded border border-slate-200 text-xs font-semibold text-slate-800"
            >
              <Globe className="w-3.5 h-3.5 text-blue-800" />
              {language === 'hi' ? 'Switch to English' : 'हिंदी भाषा चुनें'}
            </button>
            <Link
              to="/packages"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 p-2 rounded bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900"
            >
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              {language === 'hi' ? 'प्रबंधन पैकेज' : 'Packages'}
            </Link>
          </div>

          <div className="space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.to)
                    ? 'bg-blue-50 text-blue-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            {hasComplaintPortal && (
              <>
                <Link
                  to="/complaints/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-600 text-white font-semibold text-sm"
                >
                  <FileText className="w-4 h-4" />
                  {language === 'hi' ? 'शिकायत दर्ज करें' : 'Register Complaint'}
                </Link>

                <Link
                  to="/complaints/track"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200"
                >
                  <Search className="w-4 h-4 text-slate-500" />
                  {language === 'hi' ? 'शिकायत स्थिति जांचें' : 'Track Complaint Status'}
                </Link>
              </>
            )}

            {hasNationalSystem ? (
              <Link
                to="/admin/national"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-sm"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                {language === 'hi' ? 'राष्ट्रीय प्रशासनिक प्रणाली (P3)' : 'National Admin Console (P3)'}
              </Link>
            ) : hasStandardAdmin ? (
              <Link
                to="/admin/p2"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-900 text-white font-semibold text-sm"
              >
                <Lock className="w-4 h-4 text-blue-200" />
                {language === 'hi' ? 'शिकायत प्रबंधन एडमिन (P2)' : 'Portal Admin Dashboard (P2)'}
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
};
