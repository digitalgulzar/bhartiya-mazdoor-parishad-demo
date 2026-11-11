import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePackage, PackageType } from '../context/PackageContext';
import { COMPARISON_MATRIX, PACKAGES_DATA } from '../data/packagesData';
import { Check, X, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PackageComparisonTable: React.FC<{ onSelect?: () => void }> = ({ onSelect }) => {
  const { language } = useLanguage();
  const { activePackage, setActivePackage } = usePackage();
  const navigate = useNavigate();

  const handleSelect = (pkg: PackageType) => {
    setActivePackage(pkg);
    if (onSelect) onSelect();
    if (pkg === 'pkg1') {
      navigate('/');
    } else if (pkg === 'pkg2') {
      navigate('/admin/p2');
    } else {
      navigate('/admin/national');
    }
  };

  // Group features by category
  const categories = Array.from(new Set(COMPARISON_MATRIX.map(f => f.category)));

  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50/80">
            <th className="p-4 sm:p-5 text-sm font-semibold text-slate-800 w-2/5">
              {language === 'hi' ? 'विशेषताएं एवं क्षमताएं' : 'Features & Capabilities'}
            </th>
            <th className={`p-4 sm:p-5 text-center w-1/5 border-l border-slate-200 transition-colors ${
              activePackage === 'pkg1' ? 'bg-blue-50/50' : ''
            }`}>
              <div className="font-bold text-slate-900 text-sm sm:text-base">
                {language === 'hi' ? 'पैकेज 1' : 'Package 1'}
              </div>
              <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                {language === 'hi' ? 'प्रोफेशनल वेबसाइट' : 'Website'}
              </div>
              <button
                type="button"
                onClick={() => handleSelect('pkg1')}
                className={`mt-2.5 px-3 py-1 rounded text-xs font-semibold w-full transition-all ${
                  activePackage === 'pkg1'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {activePackage === 'pkg1'
                  ? (language === 'hi' ? 'सक्रिय मोड' : 'Active')
                  : (language === 'hi' ? 'पूर्वावलोकन' : 'Preview')}
              </button>
            </th>

            <th className={`p-4 sm:p-5 text-center w-1/5 border-l border-slate-200 transition-colors ${
              activePackage === 'pkg2' ? 'bg-blue-50/70' : ''
            }`}>
              <div className="font-bold text-blue-950 text-sm sm:text-base">
                {language === 'hi' ? 'पैकेज 2' : 'Package 2'}
              </div>
              <div className="text-[11px] text-blue-700 font-medium mt-0.5">
                {language === 'hi' ? 'वेबसाइट + शिकायत' : 'Website + Portal'}
              </div>
              <button
                type="button"
                onClick={() => handleSelect('pkg2')}
                className={`mt-2.5 px-3 py-1 rounded text-xs font-semibold w-full transition-all ${
                  activePackage === 'pkg2'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-blue-50 border border-blue-300 text-blue-900 hover:bg-blue-100'
                }`}
              >
                {activePackage === 'pkg2'
                  ? (language === 'hi' ? 'सक्रिय मोड' : 'Active')
                  : (language === 'hi' ? 'पूर्वावलोकन' : 'Preview')}
              </button>
            </th>

            <th className={`p-4 sm:p-5 text-center w-1/5 border-l border-slate-200 transition-colors ${
              activePackage === 'pkg3' ? 'bg-amber-50/70' : ''
            }`}>
              <div className="flex items-center justify-center gap-1">
                <span className="font-bold text-amber-950 text-sm sm:text-base">
                  {language === 'hi' ? 'पैकेज 3' : 'Package 3'}
                </span>
                <span className="text-[10px] bg-amber-600 text-white px-1.5 py-0.2 rounded font-bold">
                  ERP
                </span>
              </div>
              <div className="text-[11px] text-amber-800 font-medium mt-0.5">
                {language === 'hi' ? 'राष्ट्रीय प्रबंधन ERP' : 'National System'}
              </div>
              <button
                type="button"
                onClick={() => handleSelect('pkg3')}
                className={`mt-2.5 px-3 py-1 rounded text-xs font-semibold w-full transition-all ${
                  activePackage === 'pkg3'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-amber-50 border border-amber-300 text-amber-900 hover:bg-amber-100'
                }`}
              >
                {activePackage === 'pkg3'
                  ? (language === 'hi' ? 'सक्रिय मोड' : 'Active')
                  : (language === 'hi' ? 'पूर्वावलोकन' : 'Preview')}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <React.Fragment key={category}>
              <tr className="bg-slate-100/70 border-y border-slate-200">
                <td colSpan={4} className="px-4 py-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
                  {category}
                </td>
              </tr>
              {COMPARISON_MATRIX.filter(item => item.category === category).map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors text-xs sm:text-sm"
                >
                  <td className="p-3.5 sm:p-4 text-slate-800 font-medium">
                    <div>{language === 'hi' ? item.featureNameHi : item.featureNameEn}</div>
                    {(item.noteHi || item.noteEn) && (
                      <span className="text-[11px] text-slate-500 font-normal">
                        {language === 'hi' ? item.noteHi : item.noteEn}
                      </span>
                    )}
                  </td>

                  {/* P1 */}
                  <td className={`p-3.5 sm:p-4 text-center border-l border-slate-100 ${
                    activePackage === 'pkg1' ? 'bg-blue-50/30' : ''
                  }`}>
                    {item.pkg1 ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                        <X className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>

                  {/* P2 */}
                  <td className={`p-3.5 sm:p-4 text-center border-l border-slate-100 ${
                    activePackage === 'pkg2' ? 'bg-blue-50/40' : ''
                  }`}>
                    {item.pkg2 ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                        <X className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>

                  {/* P3 */}
                  <td className={`p-3.5 sm:p-4 text-center border-l border-slate-100 ${
                    activePackage === 'pkg3' ? 'bg-amber-50/40' : ''
                  }`}>
                    {item.pkg3 ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                        <X className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Upgrade Path Strip */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-900 via-slate-900 to-amber-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
            {language === 'hi' ? 'स्पष्ट उन्नयन मार्ग (Seamless Upgrade Path)' : 'Seamless Evolution Path'}
          </span>
          <span className="text-sm font-semibold text-slate-100">
            Package 1 (वेबसाइट) → Package 2 (शिकायत पोर्टल) → Package 3 (राष्ट्रीय ERP)
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            if (onSelect) onSelect();
            navigate('/contact');
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition-all whitespace-nowrap shadow-xs"
        >
          <span>{language === 'hi' ? 'प्रस्ताव हेतु चर्चा करें' : 'Discuss Implementation'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
