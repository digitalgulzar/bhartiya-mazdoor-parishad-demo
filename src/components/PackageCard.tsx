import React from 'react';
import { PackageTier } from '../data/packagesData';
import { useLanguage } from '../context/LanguageContext';
import { usePackage } from '../context/PackageContext';
import { Check, X, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PackageCardProps {
  pkg: PackageTier;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const { language } = useLanguage();
  const { activePackage, setActivePackage } = usePackage();
  const navigate = useNavigate();

  const isCurrent = activePackage === pkg.id;

  const handleActivate = () => {
    setActivePackage(pkg.id);
    if (pkg.id === 'pkg1') {
      navigate('/');
    } else if (pkg.id === 'pkg2') {
      navigate('/admin/p2');
    } else {
      navigate('/admin/national');
    }
  };

  return (
    <div
      className={`rounded-2xl bg-white border transition-all flex flex-col justify-between relative shadow-xs hover:shadow-md ${
        pkg.id === 'pkg3'
          ? 'border-amber-500/80 ring-2 ring-amber-500/20'
          : pkg.id === 'pkg2'
          ? 'border-blue-500/80 ring-2 ring-blue-500/20'
          : 'border-slate-200'
      }`}
    >
      {/* Top Banner for Package 2 / 3 */}
      {pkg.id === 'pkg3' && (
        <div className="bg-amber-600 text-white text-center py-1.5 px-3 rounded-t-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'फ्लैगशिप: संपूर्ण राष्ट्रीय समाधान' : 'Flagship: Complete National Suite'}</span>
        </div>
      )}
      {pkg.id === 'pkg2' && (
        <div className="bg-blue-800 text-white text-center py-1.5 px-3 rounded-t-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'सर्वाधिक लोकप्रिय स्तर' : 'Most Popular Tier'}</span>
        </div>
      )}

      <div className="p-6 sm:p-7 flex-1">
        {/* Tier Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {language === 'hi' ? `स्तर ${pkg.tierNumber}` : `Tier ${pkg.tierNumber}`}
          </span>
          {isCurrent && (
            <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              {language === 'hi' ? 'डेमो सक्रिय' : 'Active Demo'}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
          {language === 'hi' ? pkg.nameHi : pkg.nameEn}
        </h3>

        <p className="text-xs sm:text-sm font-semibold text-blue-900 mt-2 mb-3">
          {language === 'hi' ? pkg.taglineHi : pkg.taglineEn}
        </p>

        <p className="text-xs text-slate-600 leading-relaxed pb-4 border-b border-slate-100">
          {language === 'hi' ? pkg.descriptionHi : pkg.descriptionEn}
        </p>

        {/* Highlight Note */}
        <div className="my-4 p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs">
          <span className="font-semibold text-slate-700 block mb-0.5">
            {language === 'hi' ? 'किसके लिए उपयुक्त:' : 'Ideal Organizational Scale:'}
          </span>
          <p className="text-slate-600">
            {language === 'hi' ? pkg.idealForHi : pkg.idealForEn}
          </p>
        </div>

        {/* Inclusions */}
        <div className="mt-5 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-800 block">
            {language === 'hi' ? 'सम्मिलित मुख्य क्षमताएं:' : 'Included Capabilities:'}
          </span>
          <ul className="space-y-2 text-xs text-slate-700">
            {(language === 'hi' ? pkg.includedFeaturesHi : pkg.includedFeaturesEn).map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions if any */}
        {(language === 'hi' ? pkg.notIncludedHi : pkg.notIncludedEn).length > 0 && (
          <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wide text-rose-700 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {language === 'hi' ? 'सम्मिलित नहीं (NOT INCLUDED):' : 'NOT INCLUDED:'}
            </span>
            <ul className="space-y-1.5 text-xs text-slate-500">
              {(language === 'hi' ? pkg.notIncludedHi : pkg.notIncludedEn).map((notFeat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </span>
                  <span>{notFeat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Legal & Decision Disclaimer Box for Package 2 & 3 */}
        {pkg.id === 'pkg2' && (
          <div className="mt-5 p-3 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed">
            <span className="font-semibold block mb-0.5">
              {language === 'hi' ? 'महत्वपूर्ण प्रक्रियात्मक स्पष्टीकरण:' : 'Procedural Clarification:'}
            </span>
            {language === 'hi'
              ? 'यह पैकेज संगठन को एक व्यवस्थित शिकायत प्रबंधन तंत्र प्रदान करता है। कानूनी सहायता या सहायता की गारंटी स्वतः नहीं दी जाती; सभी निर्णय संगठन के अधिकृत पदाधिकारियों के विवेक पर निर्भर करते हैं।'
              : 'This package provides a complaint management system for the organization. Assistance or legal action is never automatically guaranteed. Decisions remain with authorized organization officials.'}
          </div>
        )}

        {pkg.id === 'pkg3' && (
          <div className="mt-5 p-3 rounded-lg bg-slate-900 text-slate-200 text-[11px] leading-relaxed">
            <span className="font-semibold text-amber-400 block mb-0.5">
              {language === 'hi' ? 'राष्ट्रीय स्तर की संगठनात्मक संरचना:' : 'National Multi-Tier Structure:'}
            </span>
            {language === 'hi'
              ? 'राष्ट्रीय स्तर की प्रबंधन प्रणाली बहु-राज्यीय एवं बहु-जिला संगठनों के लिए बनाई गई है जिसमें 100+ जिलों, कानूनी प्रकोष्ठों, और राज्य स्तरीय इकाइयों का वास्तविक समय में समन्वय होता है।'
              : 'The National-Level Management System is intended for larger organizations operating across multiple states and districts with dedicated authorized leadership cells.'}
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="p-6 pt-0">
        <button
          type="button"
          onClick={handleActivate}
          className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs ${
            pkg.id === 'pkg3'
              ? 'bg-amber-600 hover:bg-amber-700 text-white'
              : pkg.id === 'pkg2'
              ? 'bg-blue-700 hover:bg-blue-800 text-white'
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          <span>
            {language === 'hi' 
              ? (pkg.id === 'pkg1' ? 'पैकेज 1 का पूर्वावलोकन (Explore Package 1)' : pkg.id === 'pkg2' ? 'पैकेज 2 का पूर्वावलोकन (Explore Package 2)' : 'पैकेज 3 का पूर्वावलोकन (Explore Package 3)')
              : (pkg.id === 'pkg1' ? 'Explore Package 1' : pkg.id === 'pkg2' ? 'Explore Package 2' : 'Explore Package 3')}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
