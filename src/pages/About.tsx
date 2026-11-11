import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, CheckCircle2, AlertTriangle, Users, MapPin, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
          {language === 'hi' ? 'संगठन परिचय' : 'About Organization'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === 'hi' ? 'भारतीय मजदूर परिषद' : 'Bhartiya Mazdoor Parishad'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {language === 'hi'
            ? 'भारत के असंगठित, संविदा एवं औद्योगिक श्रमिकों के संवैधानिक अधिकारों और सामाजिक सुरक्षा हेतु समर्पित राष्ट्रव्यापी मंच।'
            : 'A nationwide organizational movement dedicated to protecting constitutional rights, wage justice, and social security for India’s workforce.'}
        </p>

        {/* Mandatory Demo Disclaimer (§2, §6.C) */}
        <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 text-left flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-semibold">
              {language === 'hi' ? 'प्रारूप सामग्री सूचना (Concept Demo Notice):' : 'Concept Demonstration Notice:'}
            </strong>
            <p className="leading-relaxed">
              {language === 'hi'
                ? 'यह वेबसाइट डिजिटल गुलज़ार मार्केटिंग सर्विसेज द्वारा भारतीय मजदूर परिषद के लिए प्रस्तावित तकनीकी एवं प्रबंधन मॉडल का प्रदर्शन है। यह आधिकारिक संगठन वेबसाइट नहीं है। प्रदर्शित इतिहास, आंकड़े और पदधारक विवरण अनुमोदनोपरांत अद्यतन किए जाएंगे।'
                : 'This is a concept demonstration developed by Digital Gulzar Marketing Services. It is not the official website of Bhartiya Mazdoor Parishad. Official history and registrations will be integrated upon verified client approval.'}
            </p>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {language === 'hi' ? 'हमारी मूल वैचारिकी एवं आधारभूत सिद्धांत' : 'Our Ideological Foundation & Principles'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <strong className="text-blue-900 font-bold block text-sm flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-blue-900" />
              <span>संवैधानिक श्रम न्याय</span>
            </strong>
            <p className="text-slate-600 leading-relaxed">
              भारतीय संविधान के अनुच्छेद 21 (सम्मानपूर्वक जीवन), अनुच्छेद 23 (शोषण के विरुद्ध अधिकार) एवं अनुच्छेद 39(घ) (समान कार्य हेतु समान वेतन) के क्रियान्वयन हेतु निरंतर प्रतिबद्धता।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <strong className="text-blue-900 font-bold block text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-900" />
              <span>असंगठित क्षेत्र को संरक्षण</span>
            </strong>
            <p className="text-slate-600 leading-relaxed">
              निर्माण मजदूर, कृषि श्रमिक, घरेलू कामगार और गिग वर्कर्स को ई-श्रम पोर्टल, ईएसआई चिकित्सा और सामाजिक सुरक्षा पेंशन के दायरे में लाने हेतु जमीनी सहायता।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <strong className="text-blue-900 font-bold block text-sm flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-900" />
              <span>पारदर्शी शिकायत तंत्र</span>
            </strong>
            <p className="text-slate-600 leading-relaxed">
              पारंपरिक श्रम यूनियनों से आगे बढ़कर आधुनिक सूचना प्रौद्योगिकी और डिजिटल ट्रैकिंग के माध्यम से त्वरित, निष्पक्ष और पारदर्शी समाधान सुनिश्चित करना।
            </p>
          </div>
        </div>
      </div>

      {/* Presence Across India */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-lg space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
            {language === 'hi' ? 'राष्ट्रव्यापी संरचना' : 'National Footprint'}
          </span>
          <h3 className="text-2xl font-bold">
            {language === 'hi' ? '18 राज्यों में सक्रिय संगठनात्मक उपस्थिति' : 'Active Footprint Across 18 States'}
          </h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            उत्तर प्रदेश, महाराष्ट्र, बिहार, गुजरात, मध्य प्रदेश, राजस्थान, दिल्ली एनसीआर, हरियाणा एवं पश्चिम बंगाल सहित प्रमुख औद्योगिक गलियारों में संगठन की अधिकृत जिला समितियां कार्यरत हैं।
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-2">
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
            <strong className="text-2xl font-extrabold text-amber-400 font-mono block">18+</strong>
            <span className="text-xs text-slate-300">राज्यीय शाखाएं</span>
          </div>
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
            <strong className="text-2xl font-extrabold text-amber-400 font-mono block">142+</strong>
            <span className="text-xs text-slate-300">जिला समन्वय केंद्र</span>
          </div>
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
            <strong className="text-2xl font-extrabold text-amber-400 font-mono block">14,800+</strong>
            <span className="text-xs text-slate-300">पंजीकृत सदस्य</span>
          </div>
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
            <strong className="text-2xl font-extrabold text-emerald-400 font-mono block">100%</strong>
            <span className="text-xs text-slate-300">डिजिटल पारदर्शिता</span>
          </div>
        </div>
      </div>

      {/* Next steps CTA */}
      <div className="text-center pt-4">
        <Link
          to="/packages"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white font-bold text-xs sm:text-sm hover:bg-blue-800 transition-colors shadow-xs"
        >
          <span>{language === 'hi' ? 'संगठन प्रबंधन पैकेज का अध्ययन करें' : 'Explore Proposed Management Packages'}</span>
        </Link>
      </div>
    </div>
  );
};
