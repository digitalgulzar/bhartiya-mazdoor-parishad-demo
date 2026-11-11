import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePackage, PackageType } from '../context/PackageContext';
import { PACKAGES_DATA } from '../data/packagesData';
import { PackageCard } from '../components/PackageCard';
import { PackageComparisonTable } from '../components/PackageComparisonTable';
import { 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  ExternalLink,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Packages: React.FC = () => {
  const { language } = useLanguage();
  const { activePackage, setActivePackage } = usePackage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'डिजिटल समाधान प्रस्ताव' : 'Strategic Digital Proposal'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === 'hi' 
            ? 'संगठन प्रबंधन पैकेज का चयन करें' 
            : 'Choose Your Organization Management Package'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {language === 'hi'
            ? 'भारतीय मजदूर परिषद के लिए प्रस्तावित 3 डिजिटल समाधान स्तर — अपनी संगठनात्मक क्षमता और विस्तार योजनानुसार उपयुक्त पैकेज चुनें।'
            : 'Three tailored digital tiers for Bhartiya Mazdoor Parishad — choose the scope best matched with your administrative workflow.'}
        </p>

        {/* Interactive Mode Indicator */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl inline-flex items-center gap-2 text-xs text-blue-900 mt-2">
          <span className="font-bold">{language === 'hi' ? 'वर्तमान सक्रिय डेमो:' : 'Active Demo Tier:'}</span>
          <span className="font-semibold bg-white px-2 py-0.5 rounded shadow-2xs border border-blue-200">
            {activePackage === 'pkg1'
              ? (language === 'hi' ? 'पैकेज 1: प्रोफेशनल वेबसाइट' : 'Package 1: Professional Website')
              : activePackage === 'pkg2'
              ? (language === 'hi' ? 'पैकेज 2: वेबसाइट + शिकायत पोर्टल' : 'Package 2: Website + Grievance Portal')
              : (language === 'hi' ? 'पैकेज 3: संपूर्ण राष्ट्रीय ERP' : 'Package 3: National Management ERP')}
          </span>
        </div>
      </div>

      {/* Three Premium Package Cards Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PACKAGES_DATA.map(pkg => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      {/* Clear Upgrade Path Explanation (§5) */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-8 text-white border border-slate-800 shadow-lg">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
            {language === 'hi' ? 'भविष्योन्मुखी उन्नयन मार्ग' : 'Seamless Evolution Path'}
          </span>
          <h3 className="text-2xl font-bold">
            Package 1 → Package 2 → Package 3
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === 'hi'
              ? 'संगठन अपनी शुरुआत "पैकेज 1" से करके अपनी डिजिटल पहचान स्थापित कर सकता है, और आवश्यकतानुसार बिना किसी रुकावट के "पैकेज 2" (शिकायत पोर्टल) अथवा "पैकेज 3" (संपूर्ण राष्ट्रीय ERP) में अपग्रेड कर सकता है। डेटा और वेबसाइट को फिर से बनाने की आवश्यकता नहीं होती।'
              : 'Your organization can begin with Package 1 to establish digital identity and authority, then seamlessly upgrade to Package 2 or Package 3 as intake volume and regional chapters expand.'}
          </p>
        </div>
      </div>

      {/* Comprehensive Feature Comparison Matrix (§5) */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === 'hi' ? 'पैकेज सुविधा तुलना तालिका' : 'Comprehensive Feature Comparison Matrix'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {language === 'hi'
              ? 'प्रत्येक पैकेज में शामिल और अपवर्जित क्षमताओं का विस्तृत तकनीकी परीक्षण'
              : 'Detailed technical specification of what is included and excluded across all 3 tiers'}
          </p>
        </div>

        <PackageComparisonTable />
      </div>

      {/* Client Project Enquiry CTA (§12) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-wider text-amber-700 font-bold block">
              {language === 'hi' ? 'परियोजना परामर्श एवं कार्यान्वयन' : 'Direct Implementation Consultation'}
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              {language === 'hi'
                ? 'अपनी संस्था के लिए उपयुक्त पैकेज पर चर्चा करें'
                : 'Consult with Digital Gulzar on Your Requirements'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'hi'
                ? 'डिजिटल गुलज़ार मार्केटिंग सर्विसेज भारतीय मजदूर परिषद के नेतृत्व को इस प्रणाली के प्रत्येक घटक की प्रत्यक्ष प्रस्तुति देने हेतु तत्पर है। हम संस्था की नीतियों, राज्यों की संख्या और कार्यशैली के अनुरूप पूर्ण कस्टमाइजेशन प्रदान करते हैं।'
                : 'Digital Gulzar Marketing Services specializes in high-trust institutional systems. We provide complete customization to match Bhartiya Mazdoor Parishad’s exact constitutional guidelines and operational scale.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% कस्टमाइजेबल वर्कफ़्लो</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>द्विभाषी (हिंदी + अंग्रेजी) इंटरफ़ेस</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>सुरक्षित भारतीय क्लाउड होस्टिंग</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">
              {language === 'hi' ? 'त्वरित डेमो संपर्क' : 'Immediate Inquiries'}
            </span>
            <div className="text-slate-900 font-bold text-base">
              Digital Gulzar Marketing Services
            </div>
            <a
              href="https://digitalgulzar.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center gap-1"
            >
              <span>https://digitalgulzar.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="pt-2 space-y-2">
              <a
                href="https://wa.me/919876543210?text=Hello%20Digital%20Gulzar,%20I%20would%20like%20to%20discuss%20the%20Bhartiya%20Mazdoor%20Parishad%20Management%20Packages"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'hi' ? 'सीधा व्हाट्सएप पर चर्चा करें' : 'WhatsApp Consultation'}</span>
              </a>

              <Link
                to="/contact"
                className="w-full py-2.5 px-4 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>{language === 'hi' ? 'विस्तृत संपर्क फॉर्म भरें' : 'Fill Proposal Form'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
