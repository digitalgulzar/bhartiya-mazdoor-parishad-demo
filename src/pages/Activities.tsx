import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ACTIVITIES_DATA } from '../data/organizationContent';
import { Calendar, MapPin, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Activities: React.FC = () => {
  const { language } = useLanguage();
  const activityImagePath = '/src/assets/images/bmp_activity_convention_1794406322865.jpg';

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
          {language === 'hi' ? 'संगठनात्मक गतिविधियां' : 'Our Activities & Events'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === 'hi'
            ? 'राष्ट्रव्यापी सम्मेलन, शिविर एवं ज्ञापन अभियान'
            : 'Conventions, Awareness Camps & Advocacy Drives'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {language === 'hi'
            ? 'भारतीय मजदूर परिषद द्वारा विभिन्न राज्यों में आयोजित किए गए प्रमुख कार्यक्रम एवं श्रमिक सम्मेलन।'
            : 'A retrospective of national conventions, regional delegate meetings, and legal literacy workshops.'}
        </p>
      </div>

      {/* Featured Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-16/9 bg-slate-900">
        <img
          src={activityImagePath}
          alt="Bhartiya Mazdoor Parishad National Convention"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-6 sm:p-8">
          <div className="text-white space-y-2">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
              विशेष सम्मेलन वृत्तांत (National Convention Spotlight)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              अखिल भारतीय श्रमिक संकल्प महाधिवेशन – नई दिल्ली
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl">
              12 राज्यों के 450+ अधिकृत प्रतिनिधियों की उपस्थिति में कामगारों की सामाजिक सुरक्षा एवं पारदर्शी डिजिटल शिकायत तंत्र के विस्तार का ऐतिहासिक संकल्प।
            </p>
          </div>
        </div>
      </div>

      {/* Activities Timeline List */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">
          {language === 'hi' ? 'हालिया गतिविधियां एवं कार्यक्रम पंजी' : 'Recent Activities Register'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACTIVITIES_DATA.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-blue-900">{act.categoryHi}</span>
                  <span className="font-mono">{act.date}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {language === 'hi' ? act.titleHi : act.titleEn}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'hi' ? act.summaryHi : act.summaryEn}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{act.locationHi}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{act.attendees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
