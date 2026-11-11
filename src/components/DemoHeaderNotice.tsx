import React from 'react';
import { usePackage, PackageType } from '../context/PackageContext';
import { useLanguage } from '../context/LanguageContext';
import { Layers, CheckCircle2, SlidersHorizontal, ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DemoHeaderNotice: React.FC = () => {
  const { activePackage, setActivePackage, openComparisonModal } = usePackage();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleSelectPackage = (pkg: PackageType) => {
    setActivePackage(pkg);
    if (pkg === 'pkg1') {
      // If currently on an admin page or complaint registration, navigate back to home or relevant page
      if (window.location.pathname.startsWith('/admin')) {
        navigate('/');
      }
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 border-b border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2.5">
          {/* Notice & Branding */}
          <div className="flex items-center gap-2 flex-wrap text-center sm:text-left justify-center sm:justify-start">
            <span className="bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded text-[11px] tracking-wide border border-amber-500/30">
              {language === 'hi' ? 'कॉन्सेप्ट डेमो' : 'CONCEPT DEMO'}
            </span>
            <span className="text-slate-300 font-medium">
              {language === 'hi' 
                ? 'यह वास्तविक संगठन की आधिकारिक वेबसाइट नहीं है।'
                : 'Not an official organization website.'}
            </span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-400">
              {language === 'hi' ? 'प्रस्तुतकर्ता:' : 'Presented by:'}{' '}
              <a
                href="https://digitalgulzar.com"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:text-amber-300 underline font-medium inline-flex items-center gap-1"
              >
                Digital Gulzar Marketing Services
                <ExternalLink className="w-3 h-3" />
              </a>
            </span>
          </div>

          {/* Interactive Package Switcher Controls */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-slate-400 font-medium flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              {language === 'hi' ? 'डेमो मोड:' : 'Demo Tier:'}
            </span>

            <div className="inline-flex bg-slate-800/90 p-0.5 rounded-lg border border-slate-700">
              <button
                type="button"
                onClick={() => handleSelectPackage('pkg1')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  activePackage === 'pkg1'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
                title={language === 'hi' ? 'केवल सार्वजनिक वेबसाइट' : 'Website Only'}
              >
                {language === 'hi' ? 'पैकेज 1: वेबसाइट' : 'Pkg 1: Website'}
              </button>

              <button
                type="button"
                onClick={() => handleSelectPackage('pkg2')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  activePackage === 'pkg2'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
                title={language === 'hi' ? 'वेबसाइट + शिकायत पोर्टल' : 'Website + Complaints'}
              >
                {language === 'hi' ? 'पैकेज 2: + शिकायत पोर्टल' : 'Pkg 2: + Complaints'}
              </button>

              <button
                type="button"
                onClick={() => handleSelectPackage('pkg3')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  activePackage === 'pkg3'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
                title={language === 'hi' ? 'संपूर्ण राष्ट्रीय प्रबंधन प्रणाली' : 'Complete National System'}
              >
                {language === 'hi' ? 'पैकेज 3: राष्ट्रीय ERP' : 'Pkg 3: National ERP'}
              </button>
            </div>

            <button
              type="button"
              onClick={openComparisonModal}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-2.5 py-1 rounded border border-slate-700 font-medium inline-flex items-center gap-1 transition-colors"
            >
              <SlidersHorizontal className="w-3 h-3 text-amber-400" />
              <span>{language === 'hi' ? 'तुलना तालिका' : 'Compare'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
