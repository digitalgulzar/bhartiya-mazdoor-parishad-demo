import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LEADERSHIP_PROFILES } from '../data/organizationContent';
import { DEMO_TEAM_MEMBERS } from '../data/demoComplaints';
import { Users, AlertTriangle, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const Leadership: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
          {language === 'hi' ? 'संगठनात्मक नेतृत्व' : 'Organizational Leadership'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === 'hi' ? 'राष्ट्रीय एवं राज्य नेतृत्व परिषद' : 'National & State Leadership Directory'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {language === 'hi'
            ? 'भारतीय मजदूर परिषद के राष्ट्रीय पदाधिकारी, कानूनी सलाहकार एवं जोनल संयोजक।'
            : 'National office bearers, legal counselors, and divisional conveners representing the workforce.'}
        </p>

        {/* Mandatory Placeholder notice */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 text-left flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">
              {language === 'hi' ? 'डेमो प्रोफाइल सूचना (Concept Placeholder Notice):' : 'Demo Notice:'}
            </strong>
            {language === 'hi'
              ? 'प्रदर्शित सभी नेतृत्व प्रोफाइल और नाम तकनीकी प्रदर्शन हेतु प्रारूप हैं। आधिकारिक संस्थागत नेतृत्व का अंतिम विवरण संगठन के अधिकृत अनुमोदन के उपरांत ही प्रकाशित किया जाएगा।'
              : 'All leadership profiles, phone numbers, and biographies are sample placeholders for this concept demonstration.'}
          </div>
        </div>
      </div>

      {/* Leadership Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LEADERSHIP_PROFILES.map((mem) => (
          <div
            key={mem.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-950 text-amber-400 font-extrabold flex items-center justify-center text-xl shrink-0 border border-blue-900">
                {mem.nameHi.substring(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                  ID: {mem.id.toUpperCase()} (Demo)
                </span>
                <h3 className="text-lg font-bold text-slate-900 truncate">
                  {language === 'hi' ? mem.nameHi : mem.nameEn}
                </h3>
                <span className="text-xs font-semibold text-blue-900 block mt-0.5">
                  {language === 'hi' ? mem.designationHi : mem.designationEn}
                </span>
                <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{language === 'hi' ? mem.regionHi : mem.regionEn}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              {language === 'hi' ? mem.bioHi : mem.bioEn}
            </p>
          </div>
        ))}
      </div>

      {/* State & District Coordinators Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-900">
            {language === 'hi' ? 'राज्य एवं क्षेत्रीय संयोजक निर्देशिका' : 'State & Divisional Conveners'}
          </h3>
          <span className="text-xs text-slate-500 font-mono">Demo Directory</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <th className="p-3">नाम (Name)</th>
                <th className="p-3">पदभार (Designation)</th>
                <th className="p-3">क्षेत्र / राज्य (Region)</th>
                <th className="p-3">हेल्पलाइन (Demo Phone)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {DEMO_TEAM_MEMBERS.map(tm => (
                <tr key={tm.id} className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">{tm.name}</td>
                  <td className="p-3 text-blue-900 font-medium">{tm.role}</td>
                  <td className="p-3 text-slate-600">{tm.state}</td>
                  <td className="p-3 font-mono text-slate-500">{tm.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
