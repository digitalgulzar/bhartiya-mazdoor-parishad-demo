import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePackage } from '../context/PackageContext';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Scale, 
  HeartHandshake, 
  HelpCircle, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Building2,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { LEADERSHIP_PROFILES, LABOUR_ARTICLES, ACTIVITIES_DATA, NEWS_UPDATES } from '../data/organizationContent';

export const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const { hasComplaintPortal, setActivePackage } = usePackage();

  const heroImagePath = '/src/assets/images/bmp_hero_workers_1794406322943.jpg';
  const rightsImagePath = '/src/assets/images/bmp_rights_awareness_1794406322822.jpg';
  const activityImagePath = '/src/assets/images/bmp_activity_convention_1794406322865.jpg';
  const supportImagePath = '/src/assets/images/bmp_worker_support_1794406322960.jpg';

  const services = [
    {
      titleHi: 'श्रमिक शिकायत पंजीकरण (Grievance Registration)',
      titleEn: 'Labour Complaint Registration',
      descHi: 'ऑनलाइन अथवा जिला केंद्रों पर वेतन विसंगति, कार्यस्थल विवाद और सेवामुक्ति की शिकायतें दर्ज करने की पारदर्शी व्यवस्था।',
      descEn: 'A streamlined channel for workers to record wage delays, illegal termination, and safety violations.',
      icon: FileText
    },
    {
      titleHi: 'श्रम अधिकार एवं विधिक साक्षरता (Rights Awareness)',
      titleEn: 'Labour Rights & Statutory Literacy',
      descHi: 'कामगारों को मजदूरी संहिता 2019, काम के घंटे, न्यूनतम वेतन और कामगार क्षतिपूर्ति अधिनियम से अवगत कराना।',
      descEn: 'Educating industrial and contract workforce on statutory floor wages, overtime multipliers, and safety standards.',
      icon: BookOpen
    },
    {
      titleHi: 'वेतन एवं बकाया देयक निवारण (Wage Grievances)',
      titleEn: 'Salary & Wage-Related Grievances',
      descHi: 'संविदा अथवा स्थायी कामगारों के रोके गए वेतन, बोनस अथवा पीएफ कटौती विसंगतियों पर नियमानुसार परामर्श।',
      descEn: 'Addressing delayed wages, unauthorized deductions, and non-remittance of provident fund dues.',
      icon: Scale
    },
    {
      titleHi: 'कार्यस्थल सुरक्षा एवं स्वास्थ्य (Workplace Safety)',
      titleEn: 'Workplace Safety & Conditions',
      descHi: 'फैक्ट्रियों व निर्माण स्थलों में सुरक्षा उपकरण (PPE), प्राथमिक चिकित्सा एवं स्वास्थ्य मानकों की पैरवी।',
      descEn: 'Advocating for mandatory personal protective equipment, clean sanitation, and machinery safeguards.',
      icon: ShieldCheck
    },
    {
      titleHi: 'रोजगार एवं सेवा विवाद (Employment Disputes)',
      titleEn: 'Employment-Related Grievances',
      descHi: 'अनुचित बर्खास्तगी, मनमाने स्थानांतरण अथवा श्रम कानूनों के उल्लंघन पर तथ्यात्मक समीक्षा।',
      descEn: 'Reviewing unlawful retrenchment, arbitrary demotion, and unfair labour practices.',
      icon: Building2
    },
    {
      titleHi: 'विधिक मार्गदर्शन पर विचार (Legal Support Consideration)',
      titleEn: 'Guidance & Legal Support Review',
      descHi: 'प्रकरण की गंभीरता अनुसार सक्षम विधिक प्रकोष्ठ द्वारा श्रमायुक्त या न्यायाधिकरण में सहायता पर विचार।',
      descEn: 'Evaluation of complex industrial disputes for legal guidance in accordance with verified procedures.',
      icon: HeartHandshake,
      disclaimer: true
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      titleHi: 'श्रमिक शिकायत दर्ज करता है',
      titleEn: 'Worker Submits Grievance',
      descHi: 'कामगार पोर्टल पर अपना विवरण, कार्यस्थल और समस्या साक्ष्यों सहित दर्ज कर विशिष्ट आईडी प्राप्त करता है।',
      descEn: 'The worker fills the digital intake form, uploads available proofs, and receives a unique ID.'
    },
    {
      step: '02',
      titleHi: 'संगठन द्वारा प्राथमिक समीक्षा',
      titleEn: 'Organization Reviews Grievance',
      descHi: 'जिला अथवा केंद्रीय समीक्षा टीम द्वारा प्रस्तुत तथ्यों एवं दस्तावेजों की प्राथमिक जांच की जाती है।',
      descEn: 'Authorized coordinators evaluate the intake details against relevant statutory provisions.'
    },
    {
      step: '03',
      titleHi: 'अधिकृत टीम को जांच सुपुर्द',
      titleEn: 'Authorized Team Examines Matter',
      descHi: 'संबंधित मंडल या राज्य संयोजक को नियोक्ता से तथ्यात्मक संपर्क एवं मध्यस्थता हेतु प्रकरण सौंपा जाता है।',
      descEn: 'The matter is routed to the designated district secretary or industrial liaison officer.'
    },
    {
      step: '04',
      titleHi: 'अतिरिक्त जानकारी की मांग (यदि आवश्यक)',
      titleEn: 'Additional Info May Be Requested',
      descHi: 'यदि वेतन पर्ची, हाजिरी कार्ड या अनुबंध पत्र अस्पष्ट हों, तो श्रमिक को सूचित किया जाता है।',
      descEn: 'In case of missing attendance slips or contract copies, the worker receives an informational request.'
    },
    {
      step: '05',
      titleHi: 'संगठन उचित कार्यवाही तय करता है',
      titleEn: 'Appropriate Action Determined',
      descHi: 'प्रबंधन से वार्ता, श्रम विभाग को ज्ञापन अथवा विधिक मध्यस्थता का संतुलित निर्णय लिया जाता है।',
      descEn: 'A balanced course—bilateral dialogue, conciliation request, or administrative memorandum—is chosen.'
    },
    {
      step: '06',
      titleHi: 'श्रमिक को प्रगति अपडेट प्राप्त होता है',
      titleEn: 'Worker Receives Live Update',
      descHi: 'श्रमिक अपनी कंप्लेंट आईडी द्वारा पोर्टल पर समय-समय पर अद्यतन स्थिति और परिणाम देख सकता है।',
      descEn: 'Real-time timeline entries notify the worker regarding meetings, resolutions, or closure notes.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* SECTION B: HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                <span>{t.hero.badge}</span>
              </div>

              {/* Strict Hindi headline from §6.B */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                {language === 'hi'
                  ? 'मजदूरों के अधिकार, सम्मान और न्याय के लिए एक मजबूत पहल'
                  : 'A Resolute Initiative for Workers’ Rights, Dignity & Justice'}
              </h1>

              {/* Strict Subheadline from §6.B */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {language === 'hi'
                  ? 'मजदूरों की समस्याओं को सुनने, समझने और संगठन के निर्धारित नियमों के अनुसार सहायता प्रक्रिया को आगे बढ़ाने का एक डिजिटल माध्यम।'
                  : 'A digital platform to hear, understand, and advance worker grievances in accordance with organizational guidelines and verified procedures.'}
              </p>

              {/* Hero CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {hasComplaintPortal ? (
                  <Link
                    to="/complaints/register"
                    className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{t.hero.ctaRegister}</span>
                  </Link>
                ) : (
                  <Link
                    to="/packages"
                    className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span>{language === 'hi' ? 'पैकेज 2/3 में शिकायत पोर्टल देखें' : 'View Complaint Portal in P2/P3'}</span>
                  </Link>
                )}

                <Link
                  to="/about"
                  className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all text-center border border-slate-200"
                >
                  {t.hero.ctaAbout}
                </Link>

                <Link
                  to="/packages"
                  className="px-5 py-3.5 rounded-xl text-blue-900 hover:bg-blue-50 font-bold text-sm transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>{t.hero.ctaPackages}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <strong className="block text-xl font-extrabold text-blue-950 font-mono">18+</strong>
                  <span className="text-slate-500">{t.hero.statesCovered}</span>
                </div>
                <div>
                  <strong className="block text-xl font-extrabold text-blue-950 font-mono">14,800+</strong>
                  <span className="text-slate-500">{language === 'hi' ? 'संबद्ध कामगार' : 'Registered Workers'}</span>
                </div>
                <div>
                  <strong className="block text-xl font-extrabold text-emerald-700 font-mono">100%</strong>
                  <span className="text-slate-500">{language === 'hi' ? 'पारदर्शी ट्रैकिंग' : 'Digital Tracking'}</span>
                </div>
              </div>

            </div>

            {/* Right Visual Image (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-16/10 lg:aspect-4/3 group">
                <img
                  src={heroImagePath}
                  alt="Indian workforce solidarity, industrial and construction workers"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Styled CSS fallback per §3.E
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-slate-900', 'flex', 'items-center', 'justify-center', 'text-white', 'p-6');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-5">
                  <div className="text-white space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                      {language === 'hi' ? 'श्रम की गरिमा एवं संवैधानिक अधिकार' : 'Worker Dignity & Constitutional Rights'}
                    </span>
                    <p className="text-xs text-slate-200 font-medium">
                      {language === 'hi' 
                        ? 'असंगठित व संविदा कामगारों के कल्याण हेतु समर्पित डिजिटल पहल।'
                        : 'Dedicated digital architecture for unorganized & contract workforce advocacy.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THREE PACKAGES INTERACTIVE TEASER (§11 & §4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl border border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'विशेष तकनीकी प्रदर्शन' : 'Interactive Package Demo'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {language === 'hi'
                  ? 'भारतीय मजदूर परिषद के लिए 3 प्रबंधन स्तर'
                  : 'Three Management Tiers for Bhartiya Mazdoor Parishad'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'यह डेमो डिजिटल गुलज़ार मार्केटिंग सर्विसेज द्वारा विकसित किया गया है ताकि संगठन अपनी आवश्यकतानुसार सही पैकेज का चयन कर सके।'
                  : 'Experience live functional differences between Package 1 (Website), Package 2 (Grievance Portal), and Package 3 (National Multi-Tier ERP).'}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <Link
                to="/packages"
                className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>{language === 'hi' ? 'पैकेज 1, 2, 3 तुलना देखें' : 'Compare Packages 1, 2 & 3'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C & D: ABOUT ORGANIZATION + MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
                {language === 'hi' ? 'संगठन का परिचय एवं मूल्य' : 'About Organization'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {language === 'hi' ? 'भारतीय मजदूर परिषद: एक सशक्त जन-आवाज' : 'Bhartiya Mazdoor Parishad: A Collective Voice'}
              </h2>
            </div>

            {/* Clearly marked placeholder notice from §6.C */}
            <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900">
              <span className="font-semibold block mb-0.5">
                {language === 'hi' ? 'डेमो सूचना (Placeholder Content):' : 'Demo Placeholder Notice:'}
              </span>
              {language === 'hi'
                ? 'यह सामग्री प्रस्ताव के तकनीकी प्रदर्शन हेतु प्रारूप स्वरूप है। वास्तविक संगठनात्मक इतिहास, कार्यक्षेत्र और विवरण संगठन के अधिकृत अनुमोदन के उपरांत अद्यतन किए जाएंगे।'
                : 'This text is conceptual placeholder content for the presentation demo. Official institutional information is subject to authorized approval.'}
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {language === 'hi'
                ? 'भारतीय मजदूर परिषद भारत के औद्योगिक, निर्माण, कृषि एवं असंगठित क्षेत्र के कामगारों के संवैधानिक अधिकारों, गरिमा और कल्याण के संरक्षण हेतु निरंतर प्रयासरत संगठन है। हमारा उद्देश्य प्रत्येक श्रमिक को उसके श्रम का सम्मान, उचित पारिश्रमिक और कानूनी सुरक्षा दिलाना है।'
                : 'Bhartiya Mazdoor Parishad stands for the constitutional rights, occupational dignity, and socio-economic welfare of India’s unorganized and industrial workers. We advance collective representation with transparency and legal awareness.'}
            </p>

            {/* Mission & Vision Pillars (§6.D) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <strong className="text-xs font-bold text-slate-900 block mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-900" />
                  <span>श्रमिक सम्मान (Worker Dignity)</span>
                </strong>
                <p className="text-[11px] text-slate-600">प्रत्येक श्रमिक के आत्मसम्मान और कार्यस्थल समानता की सुरक्षा।</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <strong className="text-xs font-bold text-slate-900 block mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-900" />
                  <span>श्रम जागरूकता (Labour Awareness)</span>
                </strong>
                <p className="text-[11px] text-slate-600">न्यूनतम वेतन, कार्य घंटे और वैधानिक अधिकारों की विधिक शिक्षा।</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <strong className="text-xs font-bold text-slate-900 block mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-900" />
                  <span>संगठनात्मक सहयोग (Support)</span>
                </strong>
                <p className="text-[11px] text-slate-600">मुसीबत के समय श्रमिकों को संगठनात्मक व नैतिक सहारा।</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                <strong className="text-xs font-bold text-slate-900 block mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-900" />
                  <span>सामूहिक प्रतिनिधित्व (Representation)</span>
                </strong>
                <p className="text-[11px] text-slate-600">श्रम आयुक्त, न्यायाधिकरण एवं शासन के समक्ष संगठित पैरवी।</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/mission"
                className="text-xs text-blue-900 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>{language === 'hi' ? 'हमारा विस्तृत विज़न पढ़ें' : 'Read Our Full Vision'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-4/3">
              <img
                src={supportImagePath}
                alt="Labour counselor discussing worker grievances with respect"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION E: OUR SERVICES */}
      <section className="bg-slate-50/70 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
              {language === 'hi' ? 'संगठनात्मक कार्यक्षेत्र' : 'Core Focus Areas'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'hi' ? 'श्रमिकों के हित में हमारी मुख्य सेवाएं' : 'Our Services & Support Channels'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'hi'
                ? 'नियमों के अंतर्गत श्रमिकों की समस्याओं के निवारण हेतु व्यवस्थित डिजिटल एवं संगठनात्मक प्रयास।'
                : 'Structured support mechanisms for wage grievances, statutory awareness, and worker safety.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {language === 'hi' ? srv.titleHi : srv.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === 'hi' ? srv.descHi : srv.descEn}
                    </p>
                  </div>

                  {srv.disclaimer && (
                    <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-amber-800 font-medium">
                      *संगठन किसी कानूनी या आर्थिक सहायता की स्वतः गारंटी नहीं देता। निर्णय अधिकृत नियमों के अनुसार विधिक समिति के विवेकाधीन है।
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION F: HOW IT WORKS (6 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
            {language === 'hi' ? 'पारदर्शी निवारण चक्र' : 'Redressal Workflow'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === 'hi' ? 'शिकायत समाधान की कार्यप्रणाली (How It Works)' : 'How Grievance Redressal Operates'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'hi'
              ? 'शिकायत पंजीकरण से लेकर समाधान तक 6 पारदर्शी चरण'
              : 'Six clear procedural stages from initial intake to resolution'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((wf, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-blue-900/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-amber-600">
                  {wf.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-900"></span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {language === 'hi' ? wf.titleHi : wf.titleEn}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi' ? wf.descHi : wf.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION G: LATEST ACTIVITIES & CONVENTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
              {language === 'hi' ? 'जमीनी गतिविधियां' : 'On-Ground Initiatives'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'hi' ? 'संगठन के हालिया कार्यक्रम व सम्मेलन' : 'Our Recent Activities & Conventions'}
            </h2>
          </div>
          <Link
            to="/activities"
            className="text-xs font-bold text-blue-900 hover:underline flex items-center gap-1"
          >
            <span>{language === 'hi' ? 'सभी गतिविधियां देखें' : 'View All Activities'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-4/3">
              <img
                src={activityImagePath}
                alt="Worker convention and delegates"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {ACTIVITIES_DATA.map((act) => (
              <div key={act.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                  <span className="font-semibold text-blue-900">{act.categoryHi}</span>
                  <span className="font-mono">{act.date}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {language === 'hi' ? act.titleHi : act.titleEn}
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  {language === 'hi' ? act.summaryHi : act.summaryEn}
                </p>
                <div className="mt-2 text-[11px] text-slate-500 flex items-center gap-2">
                  <span>स्थान: {act.locationHi}</span>
                  <span>·</span>
                  <span>उपस्थिति: {act.attendees}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: LABOUR AWARENESS ARTICLES */}
      <section className="bg-slate-50/70 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                {language === 'hi' ? 'विधिक जागरूकता एवं अधिकार' : 'Statutory Literacy'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {language === 'hi' ? 'मजदूर अधिकार एवं कानूनी मार्गदर्शिका' : 'Labour Rights Awareness Articles'}
              </h2>
            </div>
            <Link
              to="/rights"
              className="text-xs font-bold text-blue-900 hover:underline flex items-center gap-1"
            >
              <span>{language === 'hi' ? 'सम्पूर्ण अधिकार गाइड देखें' : 'Explore Rights Handbook'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LABOUR_ARTICLES.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-900">{language === 'hi' ? art.categoryHi : art.categoryEn}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {language === 'hi' ? art.titleHi : art.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === 'hi' ? art.summaryHi : art.summaryEn}
                  </p>
                  
                  {/* Key bullet takeaways */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 block mb-1.5">मुख्य बिंदु:</span>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {(language === 'hi' ? art.keyPointsHi : art.keyPointsEn).slice(0, 2).map((kp, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    to="/rights"
                    className="text-xs font-bold text-blue-900 hover:underline flex items-center gap-1"
                  >
                    <span>विस्तार से पढ़ें</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION I: CALL TO ACTION (§6.I) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950 rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
            {language === 'hi' ? 'संगठनात्मक सहायता' : 'Reach The Organization'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {language === 'hi' ? 'अपनी समस्या संगठन तक पहुंचाएं' : 'Submit Your Grievance to the Organization'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {language === 'hi'
              ? 'यदि आप या आपका कोई साथी वेतन, कार्यस्थल सुरक्षा अथवा सेवा विवाद से जूझ रहे हैं, तो तुरंत ऑनलाइन शिकायत पंजीकरण के माध्यम से अपनी बात रखें।'
              : 'If you or your co-workers face unpaid wages, hazardous safety conditions, or unfair termination, register your grievance for organizational review.'}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {hasComplaintPortal ? (
              <Link
                to="/complaints/register"
                className="px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{language === 'hi' ? 'शिकायत दर्ज करें (Register Now)' : 'Register Grievance Now'}</span>
              </Link>
            ) : (
              <Link
                to="/packages"
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>{language === 'hi' ? 'पैकेज 2 एवं 3 में शिकायत पोर्टल देखें' : 'View Portal in Package 2 & 3'}</span>
              </Link>
            )}

            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              {language === 'hi' ? 'संगठन से संपर्क करें' : 'Contact Organization'}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
