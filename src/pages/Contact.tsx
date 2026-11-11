import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePackage, PackageType } from '../context/PackageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  ExternalLink, 
  CheckCircle2, 
  Send,
  Layers,
  Sparkles,
  ShieldCheck,
  Building2
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { activePackage, setActivePackage } = usePackage();

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('Bhartiya Mazdoor Parishad');
  const [selectedTier, setSelectedTier] = useState<PackageType>(activePackage);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert(language === 'hi' ? 'कृपया अपना नाम और मोबाइल नंबर दर्ज करें।' : 'Please enter your name and phone number.');
      return;
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
          {language === 'hi' ? 'संपर्क एवं परामर्श' : 'Contact & Consultation'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === 'hi'
            ? 'डिजिटल गुलज़ार मार्केटिंग सर्विसेज से संपर्क करें'
            : 'Get in Touch with Digital Gulzar Marketing Services'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {language === 'hi'
            ? 'भारतीय मजदूर परिषद के लिए प्रस्तावित तीनों पैकेजों की लाइव प्रस्तुति, तकनीकी विनिर्देश अथवा कार्यान्वयन हेतु संपर्क करें।'
            : 'Schedule a tailored presentation of the three management packages or discuss organizational deployment.'}
        </p>
      </div>

      {/* Main Grid: Contact Info + Enquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Developer Contact Info & WhatsApp CTA (§12) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 shadow-lg space-y-5">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
                प्रस्तुतकर्ता एजेंसी (Developed By)
              </span>
              <h3 className="text-xl font-bold">
                Digital Gulzar Marketing Services
              </h3>
              <a
                href="https://digitalgulzar.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 mt-1"
              >
                <span>https://digitalgulzar.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              हम प्रतिष्ठित गैर-सरकारी संगठनों, मजदूर यूनियनों और संस्थाओं के लिए उच्च-स्तरीय वेब पोर्टल्स, शिकायत प्रबंधन प्रणालियां (Grievance Redressal ERP), और राष्ट्रव्यापी डिजिटल समाधान विकसित करते हैं।
            </p>

            <div className="pt-2 border-t border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">आधिकारिक ईमेल</span>
                  <span className="font-medium text-slate-200">contact@digitalgulzar.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">परामर्श हेल्पलाइन (डेमो)</span>
                  <span className="font-mono text-slate-200">+91 98765 XXXXX (Demo Contact)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">मुख्यालय / कार्यक्षेत्र</span>
                  <span className="text-slate-200">New Delhi / All-India Remote Presentation, India</span>
                </div>
              </div>
            </div>

            {/* Configurable WhatsApp CTA Button (§12) */}
            <div className="pt-3">
              <a
                href="https://wa.me/919876543210?text=Hello%20Digital%20Gulzar,%20I%20am%20interested%20in%20the%20Bhartiya%20Mazdoor%20Parishad%20Portal%20System"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'hi' ? 'सीधा व्हाट्सएप पर चर्चा करें (WhatsApp Demo)' : 'Chat on WhatsApp'}</span>
              </a>
              <span className="block text-[10px] text-center text-slate-400 mt-1.5 italic">
                *व्हाट्सएप परामर्श लिंक (कॉन्फ़िगरेबल डेमो नंबर)
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Project Enquiry Section (§12) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            
            {/* Project Enquiry Section Headline (§12) */}
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                {language === 'hi' ? 'प्रस्ताव जांच एवं परामर्श फॉर्म' : 'Project Consultation'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {language === 'hi'
                  ? 'अपनी संस्था के लिए उपयुक्त पैकेज चुनें (Which package is suitable?)'
                  : 'Which package is suitable for your organization?'}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                नीचे दिए गए तीनों विकल्पों में से अपने संगठन की वर्तमान प्राथमिकता चुनें:
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-950">
                  {language === 'hi' ? 'पूछताछ विवरण सफलतापूर्वक दर्ज!' : 'Consultation Request Received!'}
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  {language === 'hi'
                    ? `धन्यवाद ${name} जी! डिजिटल गुलज़ार मार्केटिंग सर्विसेज की तकनीकी टीम आपके चुने गए "${selectedTier.toUpperCase()}" पैकेज के संबंध में शीघ्र संपर्क करेगी।`
                    : `Thank you, ${name}! Digital Gulzar Marketing Services will reach out regarding your inquiry for ${selectedTier.toUpperCase()}.`}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800"
                >
                  {language === 'hi' ? 'नया फॉर्म भरें' : 'Submit Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 3 Package Option Selector (§12) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    रुचि का पैकेज (Select Desired Package):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedTier('pkg1')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedTier === 'pkg1'
                          ? 'border-blue-700 bg-blue-50/70 ring-2 ring-blue-700/20'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <strong className="block text-xs font-bold text-slate-900">पैकेज 1</strong>
                      <span className="text-[11px] text-slate-500 block">प्रोफेशनल वेबसाइट</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedTier('pkg2')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedTier === 'pkg2'
                          ? 'border-blue-700 bg-blue-50/70 ring-2 ring-blue-700/20'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <strong className="block text-xs font-bold text-blue-900">पैकेज 2</strong>
                      <span className="text-[11px] text-slate-500 block">वेबसाइट + शिकायत पोर्टल</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedTier('pkg3')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedTier === 'pkg3'
                          ? 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-600/30'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <strong className="block text-xs font-bold text-amber-900">पैकेज 3</strong>
                      <span className="text-[11px] text-amber-700 block font-semibold">राष्ट्रीय प्रबंधन ERP</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      आपका नाम (Full Name) <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="उदा. गुलज़ार अहमद"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      मोबाइल नंबर (Phone) <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="10-अंकीय मोबाइल नंबर"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      ईमेल पता (Email)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="client@organization.org"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      संस्था का नाम (Organization)
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={e => setOrganization(e.target.value)}
                      placeholder="भारतीय मजदूर परिषद"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    संदेश अथवा विशिष्ट आवश्यकताएं (Message)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="कृपया बताएं कि आप किस तिथि पर लाइव डेमो देखना चाहते हैं अथवा आपकी क्या विशेष आवश्यकताएं हैं..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 outline-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>प्रस्ताव जांच हेतु अनुरोध भेजें (Send Proposal Inquiry)</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
