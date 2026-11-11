import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePackage } from '../context/PackageContext';
import { LABOUR_ARTICLES } from '../data/organizationContent';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Scale, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const LabourRights: React.FC = () => {
  const { language } = useLanguage();
  const { hasComplaintPortal } = usePackage();
  const [expandedId, setExpandedId] = useState<string | null>('art-1');

  const rightsImagePath = '/src/assets/images/bmp_rights_awareness_1794406322822.jpg';

  const faqs = [
    {
      qHi: 'यदि कंपनी या ठेकेदार समय पर वेतन न दे तो क्या करें?',
      qEn: 'What should a worker do if wages are delayed?',
      aHi: 'मजदूरी संहिता 2019 के अंतर्गत प्रत्येक कामगार का वेतन अगले माह की 7 से 10 तारीख तक भुगतान होना अनिवार्य है। यदि भुगतान रुका है, तो अपनी हाजिरी या वेतन पर्ची के साथ संगठन के पोर्टल पर तुरंत शिकायत दर्ज कराएं ताकि श्रम निरीक्षक अथवा श्रमायुक्त को ज्ञापन भेजा जा सके।',
      aEn: 'Under the Code on Wages, salary must be paid within 7 to 10 days of the wage period. Workers can record a grievance on our portal with proof of attendance for conciliation.'
    },
    {
      qHi: 'क्या संविदा (Contract) कामगारों को भी पीएफ और ईएसआई का अधिकार है?',
      qEn: 'Are contract workers eligible for EPF & ESIC?',
      aHi: 'हाँ। यदि किसी प्रतिष्ठान में 10 या अधिक (ईएसआई हेतु) अथवा 20 या अधिक (ईपीएफ हेतु) कामगार हैं, तो प्रत्येक संविदा एवं दैनिक वेतनभोगी श्रमिक का पीएफ एवं ईएसआई कटना और सरकारी खाते में जमा होना कानूनी अनिवार्यता है।',
      aEn: 'Yes. All eligible contract and permanent workers are entitled to social security deductions and government remittance.'
    },
    {
      qHi: 'कार्यस्थल पर बिना नोटिस नौकरी से निकालने पर क्या कानूनी प्रावधान हैं?',
      qEn: 'What protections exist against arbitrary retrenchment?',
      aHi: 'औद्योगिक विवाद अधिनियम के अनुसार निरंतर 240 दिन की सेवा पूर्ण कर चुके कामगार को बिना 1 माह का पूर्व नोटिस या नोटिस वेतन तथा छंटनी मुआवजा (Retrenchment Compensation) दिए बिना नहीं हटाया जा सकता।',
      aEn: 'Workers who have rendered 240 days of continuous service cannot be terminated without statutory notice or severance compensation.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          {language === 'hi' ? 'श्रम अधिकार एवं विधिक साक्षरता' : 'Statutory Labour Rights'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === 'hi'
            ? 'भारतीय श्रमिकों के कानूनी अधिकार एवं वैधानिक सुरक्षा'
            : 'Indian Worker Rights & Legal Safeguards Handbook'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {language === 'hi'
            ? 'मजदूरी संहिता 2019, काम के घंटे, कार्यस्थल सुरक्षा और सामाजिक सुरक्षा नियमों की सरल एवं प्रामाणिक जानकारी।'
            : 'Essential guidance on statutory floor wages, working hours, safety rules, and social security provisions.'}
        </p>
      </div>

      {/* Featured Educational Image + Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-200 aspect-4/3">
          <img
            src={rightsImagePath}
            alt="Labour rights training guide and handbook session"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm">
          <h2 className="text-xl font-bold text-slate-900">
            {language === 'hi' ? 'सचेत श्रमिक — सशक्त राष्ट्र' : 'Aware Workers Build Stronger Nations'}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            अधिकांश श्रमिकों का शोषण केवल इसलिए होता है क्योंकि उन्हें अपने बुनियादी कानूनी अधिकारों की जानकारी नहीं होती। भारतीय मजदूर परिषद का लक्ष्य प्रत्येक कामगार को कानूनी रूप से जागरूक बनाना है ताकि कोई भी नियोक्ता या बिचौलिया उनका हक न छीन सके।
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-700">
            <span className="flex items-center gap-1 font-semibold text-blue-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              समान कार्य हेतु समान वेतन
            </span>
            <span className="flex items-center gap-1 font-semibold text-blue-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              दोगुना ओवरटाइम भुगतान
            </span>
            <span className="flex items-center gap-1 font-semibold text-blue-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              निःशुल्क सुरक्षा उपकरण
            </span>
          </div>
        </div>
      </div>

      {/* Articles Accordion */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          {language === 'hi' ? 'श्रम कानून मार्गदर्शिका लेख' : 'Detailed Labour Law Articles'}
        </h3>

        <div className="space-y-4">
          {LABOUR_ARTICLES.map((art) => {
            const isExpanded = expandedId === art.id;
            return (
              <div
                key={art.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : art.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-bold text-blue-900 uppercase tracking-wide">
                        {language === 'hi' ? art.categoryHi : art.categoryEn}
                      </span>
                      <span>·</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {language === 'hi' ? art.titleHi : art.titleEn}
                    </h4>
                  </div>
                  <div className="p-2 rounded-full bg-slate-100 text-slate-600 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm space-y-4 bg-slate-50/40">
                    <p className="text-slate-700 leading-relaxed">
                      {language === 'hi' ? art.summaryHi : art.summaryEn}
                    </p>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-900 text-xs uppercase tracking-wide block">
                        महत्वपूर्ण कानूनी बिंदु (Key Legal Provisions):
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {(language === 'hi' ? art.keyPointsHi : art.keyPointsEn).map((kp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-mono">
                        अद्यतन: {art.date}
                      </span>
                      {hasComplaintPortal && (
                        <Link
                          to="/complaints/register"
                          className="text-xs text-amber-700 font-bold hover:underline inline-flex items-center gap-1"
                        >
                          <span>इस विषय पर शिकायत दर्ज करें</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <h3 className="text-xl font-bold text-slate-900">
          {language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ)' : 'Frequently Asked Labour Questions'}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm">
          {faqs.map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <strong className="text-slate-900 font-bold block text-sm">
                Q: {language === 'hi' ? item.qHi : item.qEn}
              </strong>
              <p className="text-slate-600 leading-relaxed">
                {language === 'hi' ? item.aHi : item.aEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
