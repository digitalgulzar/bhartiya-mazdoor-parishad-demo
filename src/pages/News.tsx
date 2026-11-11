import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NEWS_UPDATES } from '../data/organizationContent';
import { Bell, FileText, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const News: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
          {language === 'hi' ? 'समाचार एवं आधिकारिक विज्ञप्ति' : 'News & Circulars'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === 'hi'
            ? 'संगठनात्मक सूचनाएं, परिपत्र एवं प्रेस विज्ञप्तियां'
            : 'Press Releases, Circulars & Announcements'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {language === 'hi'
            ? 'भारतीय मजदूर परिषद के केंद्रीय कार्यालय द्वारा जारी आधिकारिक परिपत्र एवं महत्वपूर्ण अपडेट।'
            : 'Stay informed on statutory compliance advisories, wage negotiations, and welfare directives.'}
        </p>
      </div>

      {/* News List */}
      <div className="space-y-4">
        {NEWS_UPDATES.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-start justify-between gap-4"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {item.type}
                </span>
                <span>·</span>
                <span className="font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {item.date}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {language === 'hi' ? item.titleHi : item.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'hi' ? item.summaryHi : item.summaryEn}
              </p>
            </div>

            <div className="shrink-0 pt-2 sm:pt-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <span>विज्ञप्ति प्रतिलिपि</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
