import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePackage } from '../context/PackageContext';
import { STATES_AND_DISTRICTS, ComplaintCategory, Complaint } from '../data/demoComplaints';
import { generateNextComplaintId } from '../utils/complaintId';
import { addNewComplaint } from '../utils/storage';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Upload, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight,
  Printer,
  Copy,
  Layers
} from 'lucide-react';

const CATEGORIES: ComplaintCategory[] = [
  'Pending Salary',
  'Minimum Wages',
  'Unfair Termination',
  'Workplace Safety',
  'Working Hours',
  'Harassment',
  'PF/ESI-related Grievance',
  'Other Labour Issues'
];

export const ComplaintRegister: React.FC = () => {
  const { language, t } = useLanguage();
  const { hasComplaintPortal, setActivePackage } = usePackage();
  const navigate = useNavigate();

  // Form states
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [selectedState, setSelectedState] = useState('Uttar Pradesh');
  const [selectedDistrict, setSelectedDistrict] = useState(STATES_AND_DISTRICTS['Uttar Pradesh'][0] || '');
  const [cityVillage, setCityVillage] = useState('');
  const [employer, setEmployer] = useState('');
  const [workplaceAddress, setWorkplaceAddress] = useState('');
  const [category, setCategory] = useState<ComplaintCategory>('Pending Salary');
  const [incidentDate, setIncidentDate] = useState('2026-11-01');
  const [pendingSalaryAmount, setPendingSalaryAmount] = useState('');
  const [description, setDescription] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  // Feedback states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedComplaint, setSubmittedComplaint] = useState<Complaint | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const availableDistricts = STATES_AND_DISTRICTS[newState] || [];
    setSelectedDistrict(availableDistricts[0] || '');
  };

  const handleDemoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = language === 'hi' ? 'पूरा नाम दर्ज करना अनिवार्य है।' : 'Full name is required.';
    if (!mobile.trim() || mobile.length < 10) errs.mobile = language === 'hi' ? 'मान्य 10-अंकीय मोबाइल नंबर दर्ज करें।' : 'Enter a valid 10-digit mobile number.';
    if (!cityVillage.trim()) errs.cityVillage = language === 'hi' ? 'शहर या गाँव का नाम दर्ज करें।' : 'City or village name is required.';
    if (!employer.trim()) errs.employer = language === 'hi' ? 'नियोक्ता या कंपनी का नाम दर्ज करें।' : 'Employer/company name is required.';
    if (!description.trim() || description.length < 20) {
      errs.description = language === 'hi' 
        ? 'शिकायत का विवरण कम से कम 20 अक्षरों में स्पष्ट लिखें।' 
        : 'Please describe your grievance in at least 20 characters.';
    }
    if (!consentGiven) {
      errs.consent = language === 'hi' ? 'कृपया नियम व शर्तों की सहमति बॉक्स को टिक करें।' : 'Please check the consent agreement.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    const newId = generateNextComplaintId();
    const nowStr = new Date().toISOString();
    const formattedDate = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newComplaint: Complaint = {
      id: newId,
      fullName,
      mobile,
      email: email.trim() || undefined,
      state: selectedState,
      district: selectedDistrict,
      cityVillage,
      employer,
      workplaceAddress: workplaceAddress.trim() || undefined,
      category,
      incidentDate,
      pendingSalaryAmount: pendingSalaryAmount.trim() || undefined,
      description,
      evidenceFiles: uploadedFiles.length > 0 ? uploadedFiles : ['submitted_application_doc.pdf'],
      consentGiven,
      status: 'Submitted',
      priority: 'Standard',
      assignedDepartment: `${selectedDistrict} श्रमिक सहायता समन्वय केंद्र`,
      submittedAt: nowStr,
      lastUpdatedAt: nowStr,
      legalSupportRequested: false,
      legalStatus: 'None',
      financialAssistanceReviewed: false,
      timeline: [
        {
          status: 'Submitted',
          date: formattedDate,
          note: language === 'hi'
            ? 'शिकायतकर्ता द्वारा ऑनलाइन डेमो पोर्टल पर शिकायत पंजीकृत की गई।'
            : 'Grievance submitted via the online worker intake portal.',
          by: 'Public Intake Portal'
        }
      ],
      internalRemarks: []
    };

    addNewComplaint(newComplaint);
    setSubmittedComplaint(newComplaint);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyId = () => {
    if (submittedComplaint) {
      navigator.clipboard.writeText(submittedComplaint.id);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  // If Package 1 is active, explain that this is a Package 2 & 3 feature
  if (!hasComplaintPortal) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
            <Layers className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            {language === 'hi' ? 'पैकेज 2 एवं 3 की विशेष क्षमता' : 'Package 2 & 3 Exclusive Feature'}
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            {language === 'hi' ? 'ऑनलाइन श्रमिक शिकायत पंजीकरण पोर्टल' : 'Online Worker Grievance Registration'}
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
            {language === 'hi'
              ? 'वर्तमान में आप "पैकेज 1: प्रोफेशनल वेबसाइट" का पूर्वावलोकन देख रहे हैं। पैकेज 1 में केवल सार्वजनिक वेबसाइट शामिल है। ऑनलाइन शिकायत पंजीकरण, ट्रैकिंग और एडमिन प्रबंधन के लिए पैकेज 2 या 3 पर स्विच करें।'
              : 'You are currently previewing Package 1 (Website Only). Online worker complaint registration, live tracking, and admin grievance resolution are included in Package 2 and Package 3.'}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setActivePackage('pkg2')}
              className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-xs transition-all w-full sm:w-auto"
            >
              {language === 'hi' ? 'पैकेज 2 सक्रिय करें (वेबसाइट + शिकायत पोर्टल)' : 'Activate Package 2 (Website + Complaints)'}
            </button>
            <button
              type="button"
              onClick={() => setActivePackage('pkg3')}
              className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-xs transition-all w-full sm:w-auto"
            >
              {language === 'hi' ? 'पैकेज 3 सक्रिय करें (राष्ट्रीय ERP)' : 'Activate Package 3 (National ERP)'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Success view
  if (submittedComplaint) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 sm:p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {t.complaint.successTitle}
            </h2>
            <p className="text-emerald-100 text-sm mt-1">
              {language === 'hi' 
                ? 'आपकी शिकायत सफलतापूर्वक डेमो प्रणाली में दर्ज कर ली गई है।'
                : 'Your grievance has been successfully recorded in the demo system.'}
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Generated ID Box */}
            <div className="p-5 rounded-xl bg-slate-50 border-2 border-dashed border-slate-300 text-center">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                {t.complaint.complaintIdGenerated}
              </span>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="font-mono text-2xl sm:text-3xl font-black text-blue-950 tracking-wider">
                  {submittedComplaint.id}
                </span>
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-900 hover:bg-slate-100 transition-colors"
                  title="Copy ID"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              {isCopied && (
                <span className="text-xs text-emerald-600 font-medium block mt-1">
                  {language === 'hi' ? 'आईडी कॉपी हो गई!' : 'ID copied to clipboard!'}
                </span>
              )}
              <p className="text-xs text-slate-500 mt-2">
                {t.complaint.saveNotice}
              </p>
            </div>

            {/* Complaint Summary Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-4 text-xs sm:text-sm space-y-2.5">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">{t.complaint.fullName}:</span>
                <span className="font-semibold text-slate-900">{submittedComplaint.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">{t.complaint.category}:</span>
                <span className="font-semibold text-blue-900">{submittedComplaint.category}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">{t.complaint.employer}:</span>
                <span className="font-semibold text-slate-900">{submittedComplaint.employer}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">{t.complaint.state} / {t.complaint.district}:</span>
                <span className="font-semibold text-slate-900">{submittedComplaint.state}, {submittedComplaint.district}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">प्रारंभिक स्थिति (Initial Status):</span>
                <span className="font-bold text-amber-700">{submittedComplaint.status}</span>
              </div>
            </div>

            {/* Disclaimer reminder */}
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{t.complaint.disclaimer}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                to={`/complaints/track?id=${submittedComplaint.id}`}
                className="w-full sm:w-1/3 py-3 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-center text-sm transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>{t.complaint.trackNowBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-1/3 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-center text-sm transition-all border border-slate-700 flex items-center justify-center gap-2"
                title="Print Demo Receipt"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>{language === 'hi' ? 'रसीद प्रिंट (Print)' : 'Print Receipt'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmittedComplaint(null);
                  setFullName('');
                  setMobile('');
                  setDescription('');
                  setPendingSalaryAmount('');
                  setEmployer('');
                  setCityVillage('');
                  setUploadedFiles([]);
                  setConsentGiven(false);
                }}
                className="w-full sm:w-1/3 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-center text-sm transition-all border border-slate-200"
              >
                {t.complaint.newComplaintBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded-md mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>{language === 'hi' ? 'अखिल भारतीय कामगार सहायता पोर्टल' : 'All-India Worker Support Intake'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t.complaint.portalTitle}
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          {t.complaint.portalSubtitle}
        </p>

        {/* Mandatory demo disclaimer from section 7 */}
        <div className="mt-4 p-3.5 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-950 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">
              {language === 'hi' ? 'डेमो सूचना:' : 'Demo Notice:'}
            </strong>
            {t.complaint.disclaimer}{' '}
            <span className="text-amber-800">
              {language === 'hi'
                ? 'यह डेमो किसी भी प्रकार की संवेदनशील जानकारी (आधार कार्ड, बैंक खाता विवरण) कभी नहीं मांगता।'
                : 'This demo never requests Aadhaar, bank accounts, or sensitive private credentials.'}
            </span>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        
        {/* Section 1: Personal Details */}
        <div className="p-6 sm:p-8 border-b border-slate-200 space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">1</span>
            <span>{t.complaint.personalDetails}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.fullName} <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder={language === 'hi' ? 'उदा. राकेश कुमार' : 'e.g. Rakesh Kumar'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
              {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.mobileNumber} <span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={e => setMobile(e.target.value)}
                placeholder={language === 'hi' ? '10-अंकीय मोबाइल नंबर' : '10-digit mobile number'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
              {errors.mobile && <p className="text-xs text-rose-600 mt-1">{errors.mobile}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.email}
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={language === 'hi' ? 'worker.example@email.com' : 'worker.example@email.com'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Workplace & Location Details */}
        <div className="p-6 sm:p-8 border-b border-slate-200 space-y-4 bg-slate-50/50">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">2</span>
            <span>{t.complaint.locationDetails}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.state} <span className="text-rose-600">*</span>
              </label>
              <select
                value={selectedState}
                onChange={handleStateChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              >
                {Object.keys(STATES_AND_DISTRICTS).map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.district} <span className="text-rose-600">*</span>
              </label>
              <select
                value={selectedDistrict}
                onChange={e => setSelectedDistrict(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              >
                {(STATES_AND_DISTRICTS[selectedState] || []).map(dt => (
                  <option key={dt} value={dt}>{dt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.cityVillage} <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                value={cityVillage}
                onChange={e => setCityVillage(e.target.value)}
                placeholder={language === 'hi' ? 'उदा. पनकी / चिखली' : 'e.g. Industrial Area / Village'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
              {errors.cityVillage && <p className="text-xs text-rose-600 mt-1">{errors.cityVillage}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.employer} <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                value={employer}
                onChange={e => setEmployer(e.target.value)}
                placeholder={language === 'hi' ? 'कंपनी अथवा ठेकेदार का नाम' : 'Company, Factory, or Contractor Name'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
              {errors.employer && <p className="text-xs text-rose-600 mt-1">{errors.employer}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.workplaceAddress}
              </label>
              <input
                type="text"
                value={workplaceAddress}
                onChange={e => setWorkplaceAddress(e.target.value)}
                placeholder={language === 'hi' ? 'फैक्ट्री / साइट का पता' : 'Factory / Site address'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Grievance Details */}
        <div className="p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">3</span>
            <span>{t.complaint.issueDetails}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.category} <span className="text-rose-600">*</span>
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as ComplaintCategory)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.incidentDate} <span className="text-rose-600">*</span>
              </label>
              <input
                type="date"
                value={incidentDate}
                onChange={e => setIncidentDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.complaint.pendingSalary}
              </label>
              <input
                type="text"
                value={pendingSalaryAmount}
                onChange={e => setPendingSalaryAmount(e.target.value)}
                placeholder={language === 'hi' ? 'उदा. 25,000' : 'e.g. 25,000'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.complaint.description} <span className="text-rose-600">*</span>
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={language === 'hi' 
                ? 'कृपया अपनी समस्या, बकाया माह, कार्यस्थल की स्थिति अथवा प्रबंधन से हुई बातचीत का विवरण लिखें...'
                : 'Please detail your grievance, pending months, working conditions, or interactions with management...'}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none leading-relaxed"
            />
            {errors.description && <p className="text-xs text-rose-600 mt-1">{errors.description}</p>}
          </div>

          {/* Evidence Upload (Demo Interface) */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.complaint.evidenceUpload}
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors">
              <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
              <p className="text-xs text-slate-600">
                {language === 'hi' 
                  ? 'वेतन पर्ची, उपस्थिति कार्ड, नियुक्ति पत्र अथवा कोई अन्य साक्ष्य संलग्न करें (डेमो)'
                  : 'Attach salary slip, attendance card, or appointment letter (Demo files allowed)'}
              </p>
              <input
                type="file"
                multiple
                onChange={handleDemoFileUpload}
                className="mt-2 text-xs text-slate-500 file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              />
              {uploadedFiles.length > 0 && (
                <div className="mt-2 text-xs text-emerald-700 font-medium">
                  {language === 'hi' ? 'संलग्न फ़ाइलें:' : 'Attached demo files:'} {uploadedFiles.join(', ')}
                </div>
              )}
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="pt-4 border-t border-slate-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consentGiven}
                onChange={e => setConsentGiven(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-900 focus:ring-blue-600"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                {t.complaint.consentText}
              </span>
            </label>
            {errors.consent && <p className="text-xs text-rose-600 mt-1">{errors.consent}</p>}
          </div>
        </div>

        {/* Submit Bar */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            {language === 'hi'
              ? 'प्रपत्र जमा करने पर प्रणाली द्वारा एक अनूठी शिकायत संख्या (Complaint ID) जारी की जाएगी।'
              : 'Upon submission, a unique demo Complaint ID will be generated for tracking.'}
          </p>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>{t.complaint.submitBtn}</span>
          </button>
        </div>

      </form>
    </div>
  );
};
