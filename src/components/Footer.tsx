import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { usePackage } from '../context/PackageContext';
import { 
  ShieldAlert, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  FileText,
  Layers,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { setActivePackage, openComparisonModal } = usePackage();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Footer / Project Presentation Pitch */}
      <div className="bg-slate-900/70 border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              {language === 'hi' ? 'डिजिटल समाधान प्रस्ताव' : 'Digital Proposal & Architecture'}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
              {language === 'hi' 
                ? 'भारतीय मजदूर परिषद के लिए कौन सा पैकेज सर्वोत्तम है?'
                : 'Which Package is Optimal for Bhartiya Mazdoor Parishad?'}
            </h4>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              {language === 'hi'
                ? 'पैकेज 1 (वेबसाइट), पैकेज 2 (शिकायत पोर्टल) या पैकेज 3 (राष्ट्रीय प्रबंधन ERP) का लाइव डेमो अनुभव करें।'
                : 'Experience interactive live capabilities across Package 1 (Website), Package 2 (Grievance Portal), and Package 3 (National Multi-Tier ERP).'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <Layers className="w-4 h-4" />
              <span>{language === 'hi' ? 'पैकेज विवरण देखें' : 'Explore Packages'}</span>
            </Link>
            <button
              type="button"
              onClick={openComparisonModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors"
            >
              <span>{language === 'hi' ? 'पैकेज तुलना तालिका' : 'Compare Packages'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Links Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Organization & Developer Credit */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-sm">
                BMP
              </div>
              <span className="font-bold text-white text-base tracking-tight uppercase">
                Bhartiya Mazdoor Parishad
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'hi'
                ? 'श्रमिकों के अधिकार, सम्मान और कानूनी सुरक्षा हेतु समर्पित एक डिजिटल प्रस्ताव एवं प्रबंधन अवधारणा।'
                : 'A dedicated digital proposal framework for worker welfare, statutory rights awareness, and digitized grievance redressal.'}
            </p>
            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
              <span className="text-slate-500 block mb-1">
                {language === 'hi' ? 'संकल्पना एवं विकासकर्ता:' : 'Concept & Development By:'}
              </span>
              <a
                href="https://digitalgulzar.com"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                Digital Gulzar Marketing Services
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="block text-[11px] text-slate-500 mt-0.5">https://digitalgulzar.com</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="text-sm font-semibold text-white tracking-wide uppercase">
              {language === 'hi' ? 'मुख्य पृष्ठ लिंक' : 'Quick Navigation'}
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'मुख्य पृष्ठ (Home)' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'संगठन परिचय (About Us)' : 'About Organization'}
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'मिशन एवं विज़न (Mission & Vision)' : 'Mission & Vision'}
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'नेतृत्व निर्देशिका (Leadership)' : 'Leadership Profiles'}
                </Link>
              </li>
              <li>
                <Link to="/rights" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'श्रम अधिकार गाइड (Labour Rights)' : 'Labour Rights Awareness'}
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'गतिविधियां एवं सम्मेलन (Activities)' : 'Activities & Events'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Grievance & Packages */}
          <div className="space-y-3">
            <h5 className="text-sm font-semibold text-white tracking-wide uppercase">
              {language === 'hi' ? 'पोर्टल एवं पैकेज' : 'Grievance & Tiers'}
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/complaints/register" className="text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  {language === 'hi' ? 'शिकायत दर्ज करें (Register)' : 'Register Worker Grievance'}
                </Link>
              </li>
              <li>
                <Link to="/complaints/track" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'शिकायत ट्रैक करें (Track Status)' : 'Track Grievance Status'}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActivePackage('pkg1')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  {language === 'hi' ? 'पैकेज 1: प्रोफेशनल वेबसाइट' : 'Package 1: Professional Website'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActivePackage('pkg2')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  {language === 'hi' ? 'पैकेज 2: वेबसाइट + शिकायत पोर्टल' : 'Package 2: Website + Portal'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActivePackage('pkg3')}
                  className="hover:text-amber-400 transition-colors text-left font-medium"
                >
                  {language === 'hi' ? 'पैकेज 3: संपूर्ण राष्ट्रीय ERP' : 'Package 3: National ERP'}
                </button>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'गोपनीयता नीति एवं शर्तें' : 'Privacy Policy & Terms'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div className="space-y-3">
            <h5 className="text-sm font-semibold text-white tracking-wide uppercase">
              {language === 'hi' ? 'संपर्क एवं पूछताछ' : 'Client Inquiries'}
            </h5>
            <p className="text-xs text-slate-400">
              {language === 'hi'
                ? 'इस डेमो को लाइव देखने या अपनी संस्था के लिए अनुकूलित प्रणाली हेतु संपर्क करें:'
                : 'For live consultation on implementing this portal system for your organization:'}
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>contact@digitalgulzar.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+91 98765 XXXXX (Demo Contact)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>New Delhi / Remote Demo Presentation, India</span>
              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/919876543210?text=Hello%20Digital%20Gulzar,%20I%20am%20interested%20in%20the%20Bhartiya%20Mazdoor%20Parishad%20Management%20System%20Demo"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'व्हाट्सएप पर बात करें' : 'WhatsApp Enquiry'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Required Disclaimer Section from Brief (§13) */}
        <div className="mt-12 pt-6 border-t border-slate-800/80">
          <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-slate-200 block">
                {language === 'hi' ? 'महत्वपूर्ण डेमो अस्वीकरण (Concept Demo Disclaimer):' : 'Concept Demonstration Disclaimer:'}
              </span>
              <p className="leading-relaxed text-[11px] sm:text-xs">
                "This website is a concept demo prepared for presentation purposes only. It is not an official website of Bhartiya Mazdoor Parishad. All names, records, statistics, leadership details and complaints shown are sample placeholders. Actual services, decisions and assistance are subject to the organization's verified rules and authorized approval."
              </p>
              <p className="leading-relaxed text-[11px] text-slate-500">
                यह वेबसाइट केवल प्रस्तुति और तकनीकी प्रदर्शन हेतु तैयार की गई एक अवधारणा (Concept Demo) है। यह भारतीय मजदूर परिषद की आधिकारिक वेबसाइट नहीं है। प्रदर्शित सभी नाम, पद, आंकड़े और शिकायतें काल्पनिक डेमो रिकॉर्ड हैं।
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <p>
              © 2026 Bhartiya Mazdoor Parishad (Concept Demo). Developed by{' '}
              <a href="https://digitalgulzar.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
                Digital Gulzar Marketing Services
              </a>.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-slate-400">
                {language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
              </Link>
              <span>·</span>
              <Link to="/privacy" className="hover:text-slate-400">
                {language === 'hi' ? 'नियम व शर्तें' : 'Terms & Conditions'}
              </Link>
              <span>·</span>
              <Link to="/packages" className="text-amber-400 hover:text-amber-300">
                {language === 'hi' ? 'पैकेज तालिका' : 'Packages'}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
