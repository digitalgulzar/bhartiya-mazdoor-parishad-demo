import React from 'react';
import { usePackage } from '../context/PackageContext';
import { useLanguage } from '../context/LanguageContext';
import { SlidersHorizontal, Layers } from 'lucide-react';

export const FloatingCompareButton: React.FC = () => {
  const { openComparisonModal, activePackage } = usePackage();
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
      <button
        type="button"
        onClick={openComparisonModal}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-xl border border-slate-700 transition-all hover:scale-105 active:scale-95"
        title="Compare all 3 packages side by side"
      >
        <span className="p-1 rounded-full bg-amber-500 text-slate-950">
          <SlidersHorizontal className="w-3.5 h-3.5" />
        </span>
        <span className="whitespace-nowrap">
          {language === 'hi' ? 'पैकेज तुलना (Compare All)' : 'Compare All Packages'}
        </span>
      </button>

      {/* Small badge showing active package */}
      <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-slate-700 border border-slate-200 shadow-sm font-mono">
        {activePackage.toUpperCase()}
      </span>
    </div>
  );
};
