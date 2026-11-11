import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldAlert, ExternalLink, Scale, Lock } from 'lucide-react';

export const Privacy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {language === 'hi' ? 'वैधानिक नीतियां एवं अस्वीकरण' : 'Legal & Compliance'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {language === 'hi' ? 'गोपनीयता नीति, नियम व शर्तें' : 'Privacy Policy & Terms of Service'}
        </h1>
        <p className="text-xs text-slate-500">
          अंतिम अद्यतन: नवंबर 2026 · संस्करण 1.0 (कांसेप्ट डेमो)
        </p>
      </div>

      {/* Mandatory Disclaimer Box (§13) */}
      <div className="bg-amber-50 rounded-2xl border-2 border-amber-300 p-6 sm:p-7 space-y-3 text-amber-950">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
          <h2 className="text-base sm:text-lg font-bold">
            Concept Website & Digital Portal Demonstration Disclaimer
          </h2>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed font-medium">
          "This website is a concept demo prepared for presentation purposes only. It is not an official website of Bhartiya Mazdoor Parishad. All names, records, statistics, leadership details and complaints shown are sample placeholders. Actual services, decisions and assistance are subject to the organization's verified rules and authorized approval."
        </p>

        <p className="text-xs text-amber-900/90 leading-relaxed pt-2 border-t border-amber-200">
          यह वेबसाइट डिजिटल गुलज़ार मार्केटिंग सर्विसेज द्वारा भारतीय मजदूर परिषद के लिए प्रस्तावित तकनीकी एवं प्रबंधन मॉडल का प्रदर्शन है। यह वास्तविक संगठन की आधिकारिक वेबसाइट नहीं है। प्रदर्शित सभी आंकड़े, पंजीयन संख्या, पदधारक नाम एवं शिकायतें केवल तकनीकी परीक्षण हेतु प्रारूप (Placeholders) हैं।
        </p>
      </div>

      {/* Section 1: Privacy Policy */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs text-xs sm:text-sm text-slate-700">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Lock className="w-5 h-5 text-blue-900" />
          <span>1. गोपनीयता नीति (Privacy Policy)</span>
        </h3>
        <p className="leading-relaxed">
          इस डेमो पोर्टल पर दर्ज की जाने वाली कोई भी जानकारी किसी वास्तविक सरकारी सर्वर या बाहरी संस्था को प्रेषित नहीं की जाती है। यह डेमो उपयोगकर्ता के स्थानीय ब्राउज़र (LocalStorage) में ही सुरक्षित रहता है ताकि क्लाइंट शिकायत दर्ज करने, आईडी जनरेट करने और स्थिति ट्रैक करने के अनुभव का परीक्षण कर सके।
        </p>
        <p className="leading-relaxed">
          हम वास्तविक उत्पादन प्रणाली में भारतीय डिजिटल व्यक्तिगत डेटा संरक्षण (DPDP) अधिनियम 2023 के समस्त सुरक्षा मानकों का अनुपालन सुनिश्चित करते हैं, जिसमें डेटा एन्क्रिप्शन, नियंत्रित भूमिका पहुंच (RBAC) और सहमति-आधारित डेटा प्रबंधन शामिल है।
        </p>
      </div>

      {/* Section 2: Terms and Conditions */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs text-xs sm:text-sm text-slate-700">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Scale className="w-5 h-5 text-blue-900" />
          <span>2. नियम एवं शर्तें (Terms and Conditions)</span>
        </h3>
        <ul className="space-y-2 list-disc pl-5 leading-relaxed">
          <li>
            <strong>सहायता का विवेकाधिकार:</strong> इस पोर्टल पर शिकायत दर्ज होने से कानूनी कार्यवाही अथवा आर्थिक सहायता की कोई स्वतः गारंटी नहीं होती। प्रत्येक मामले का निर्णय संगठन के अधिकृत नियमों और जांच के आधार पर सक्षम पदाधिकारियों द्वारा लिया जाता है।
          </li>
          <li>
            <strong>साक्ष्य सत्यापन:</strong> किसी भी औद्योगिक विवाद अथवा श्रम आयुक्त के समक्ष प्रस्तुति से पूर्व मूल दस्तावेजों का भौतिक सत्यापन अनिवार्य होता है।
          </li>
          <li>
            <strong>डेमो क्रेडेंशियल्स:</strong> एडमिन डैशबोर्ड में दिए गए क्रेडेंशियल्स केवल तकनीकी प्रदर्शन के लिए हैं।
          </li>
        </ul>
      </div>

      {/* Section 3: Developer Presentation Credit */}
      <div className="p-6 bg-slate-900 text-slate-300 rounded-2xl border border-slate-800 text-xs space-y-2">
        <span className="text-amber-400 font-bold uppercase tracking-wider block">
          Designed and Developed by:
        </span>
        <div className="text-white font-bold text-sm">
          Digital Gulzar Marketing Services
        </div>
        <p className="text-slate-400">
          आधिकारिक वेबसाइट: <a href="https://digitalgulzar.com" target="_blank" rel="noreferrer" className="text-amber-400 underline">https://digitalgulzar.com</a>
        </p>
      </div>

    </div>
  );
};
