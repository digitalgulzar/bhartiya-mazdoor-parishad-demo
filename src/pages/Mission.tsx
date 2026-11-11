import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Shield, Heart, Award, ArrowRight, BookOpen, Users, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Mission: React.FC = () => {
  const { language } = useLanguage();

  const missionPillars = [
    {
      titleHi: '1. श्रमिक गरिमा एवं सम्मान (Worker Dignity)',
      titleEn: '1. Worker Dignity & Self-Esteem',
      descHi: 'प्रत्येक कामगार को केवल उत्पादन का साधन नहीं, अपितु राष्ट्र निर्माण का सच्चा शिल्पी मानकर उसके साथ मानवीय व्यवहार और सम्मानजनक कार्यस्थल का वातावरण सुनिश्चित करना।',
      descEn: 'Treating every worker not merely as an economic unit, but as the authentic builder of modern infrastructure entitled to absolute workplace dignity.',
      icon: Award
    },
    {
      titleHi: '2. श्रम अधिकार एवं कानूनी साक्षरता (Labour Awareness & Education)',
      titleEn: '2. Labour Rights Literacy & Education',
      descHi: 'संविदा कामगारों, दैनिक वेतनभोगियों और प्रवासी श्रमिकों को न्यूनतम मजदूरी, ग्रेच्युटी, मातृत्व लाभ और ईएसआई नियमों की सरल भाषा में संपूर्ण विधिक जानकारी प्रदान करना।',
      descEn: 'Empowering contract, unorganized, and inter-state migrant labor with transparent knowledge of floor wages, ESIC healthcare, and safety protocols.',
      icon: BookOpen
    },
    {
      titleHi: '3. संगठनात्मक संबल एवं सहयोग (Organizational Support)',
      titleEn: '3. Comprehensive Organizational Support',
      descHi: 'कार्यस्थल पर होने वाले अन्याय, अचानक वेतन रोके जाने, अथवा दुर्घटना के समय कामगार और उसके परिवार के साथ एक मजबूत संगठनात्मक ढाल बनकर खड़े होना।',
      descEn: 'Providing dependable institutional backing and moral solidarity during arbitrary retrenchment, occupational hazards, or wage disputes.',
      icon: Heart
    },
    {
      titleHi: '4. सामूहिक एवं संगठित प्रतिनिधित्व (Collective Representation)',
      titleEn: '4. Collective Representation & Advocacy',
      descHi: 'श्रम आयुक्त कार्यालयों, सुलह वार्ताओं, औद्योगिक न्यायाधिकरणों एवं सरकार की त्रिपक्षीय समितियों में श्रमिकों के पक्ष को मजबूती और संवैधानिक साक्ष्यों के साथ रखना।',
      descEn: 'Articulating workers’ legitimate claims with documented rigor before Labour Commissioners, conciliation boards, and industrial tribunals.',
      icon: Scale
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          {language === 'hi' ? 'हमारा विज़न एवं उद्देश्य' : 'Mission & Vision'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === 'hi'
            ? 'न्याय, सुरक्षा और गरिमापूर्ण जीवन का संकल्प'
            : 'Committed to Justice, Security & Worker Dignity'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {language === 'hi'
            ? 'भारतीय मजदूर परिषद का विज़न भारत के प्रत्येक कामगार को आर्थिक शोषण से मुक्त और सामाजिक सुरक्षा से युक्त देखना है।'
            : 'Our vision is an India where no worker faces exploitation, wage denial, or hazardous conditions without access to immediate institutional redressal.'}
        </p>
      </div>

      {/* Mission Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {missionPillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'hi' ? p.titleHi : p.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'hi' ? p.descHi : p.descEn}
              </p>
            </div>
          );
        })}
      </div>

      {/* Callout Box */}
      <div className="p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
        <div>
          <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
            {language === 'hi' ? 'डिजिटल निष्पक्षता' : 'Digital Accountability'}
          </span>
          <h4 className="text-xl font-bold">
            {language === 'hi' ? 'संगठन के नियमों के अनुसार पारदर्शी सहायता' : 'Transparent Redressal Under Verified Rules'}
          </h4>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            हम किसी झूठे वादे या गारंटी के स्थान पर स्थापित कानूनी प्रक्रिया और संगठनात्मक नियमों के पालन को सर्वोच्च प्राथमिकता देते हैं।
          </p>
        </div>
        <Link
          to="/complaints/register"
          className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm transition-all shrink-0 shadow-xs"
        >
          {language === 'hi' ? 'शिकायत दर्ज करें' : 'Register Complaint'}
        </Link>
      </div>
    </div>
  );
};
