import React from 'react';
import { usePackage } from '../context/PackageContext';
import { useLanguage } from '../context/LanguageContext';
import { PackageComparisonTable } from './PackageComparisonTable';
import { X, SlidersHorizontal, Info } from 'lucide-react';

export const PackageComparisonModal: React.FC = () => {
  const { isComparisonModalOpen, closeComparisonModal } = usePackage();
  const { language } = useLanguage();

  if (!isComparisonModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-lg text-amber-800">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {language === 'hi' 
                  ? 'भारतीय मजदूर परिषद: संगठनात्मक प्रबंधन पैकेज तुलना'
                  : 'Bhartiya Mazdoor Parishad: Package Comparison Matrix'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {language === 'hi'
                  ? 'प्रस्तावित तीनों पैकेजों की विस्तृत विशेषताओं का तकनीकी विश्लेषण'
                  : 'Comprehensive side-by-side feature comparison across proposed tiers'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeComparisonModal}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">
                {language === 'hi' ? 'लाइव डेमो स्विचिंग:' : 'Interactive Live Demo Mode:'}
              </span>{' '}
              {language === 'hi'
                ? 'आप किसी भी पैकेज के "पूर्वावलोकन" बटन पर क्लिक करके उस स्तर की वास्तविक कार्यप्रणाली को तुरंत देख सकते हैं।'
                : 'Click "Preview" under any column to instantly switch this demo into that tier\'s interactive mode.'}
            </div>
          </div>

          <PackageComparisonTable onSelect={closeComparisonModal} />
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>
            {language === 'hi' 
              ? 'संकल्पना एवं विकास: डिजिटल गुलज़ार मार्केटिंग सर्विसेज'
              : 'Concept & Development: Digital Gulzar Marketing Services'}
          </span>
          <button
            type="button"
            onClick={closeComparisonModal}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            {language === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
