import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { usePackage } from '../context/PackageContext';
import { getComplaintById, getStoredComplaints } from '../utils/storage';
import { Complaint } from '../data/demoComplaints';
import { StatusTimeline } from '../components/StatusTimeline';
import { 
  Search, 
  FileText, 
  AlertCircle, 
  Calendar, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  User, 
  Phone,
  Layers,
  ArrowRight
} from 'lucide-react';

export const ComplaintTrack: React.FC = () => {
  const { language, t } = useLanguage();
  const { hasComplaintPortal, setActivePackage } = usePackage();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchId, setSearchId] = useState(searchParams.get('id') || '');
  const [complaint, setComplaint] = useState<Complaint | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // Available sample IDs for easy one-click testing
  const allStored = getStoredComplaints();
  const sampleIds = allStored.slice(0, 4).map(c => c.id);

  const doSearch = (idToSearch: string) => {
    const trimmed = idToSearch.trim();
    if (!trimmed) return;
    setHasSearched(true);
    const found = getComplaintById(trimmed);
    if (found) {
      setComplaint(found);
      setNotFound(false);
      setSearchParams({ id: found.id });
    } else {
      setComplaint(null);
      setNotFound(true);
    }
  };

  useEffect(() => {
    const initialId = searchParams.get('id');
    if (initialId) {
      setSearchId(initialId);
      doSearch(initialId);
    }
  }, [searchParams]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    doSearch(searchId);
  };

  if (!hasComplaintPortal) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
            <Layers className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            {language === 'hi' ? 'पैकेज 2 एवं 3 की विशेषता' : 'Package 2 & 3 Exclusive'}
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            {t.complaint.trackTitle}
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
            {language === 'hi'
              ? 'शिकायत ट्रैकिंग प्रणाली पैकेज 2 और पैकेज 3 में उपलब्ध है। वर्तमान में आप पैकेज 1 का डेमो देख रहे हैं।'
              : 'Grievance tracking by Complaint ID is available in Package 2 and Package 3. Please activate Package 2 or 3 to test.'}
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setActivePackage('pkg2')}
              className="px-5 py-2.5 rounded-xl bg-blue-700 text-white font-bold text-sm"
            >
              {language === 'hi' ? 'पैकेज 2 पर जाएं' : 'Activate Package 2'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {t.complaint.trackTitle}
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          {t.complaint.trackSubtitle}
        </p>

        {/* Quick Sample IDs */}
        <div className="mt-4 flex items-center justify-center gap-1.5 flex-wrap text-xs">
          <span className="text-slate-500 font-medium">
            {language === 'hi' ? 'त्वरित डेमो आईडी:' : 'Sample Demo IDs:'}
          </span>
          {sampleIds.map(sId => (
            <button
              key={sId}
              type="button"
              onClick={() => {
                setSearchId(sId);
                doSearch(sId);
              }}
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-mono text-[11px] border border-slate-200 transition-colors"
            >
              {sId}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input Box */}
      <div className="max-w-xl mx-auto mb-10">
        <form onSubmit={handleFormSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchId}
              onChange={e => setSearchId(e.target.value)}
              placeholder={t.complaint.enterIdPlaceholder}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none uppercase font-mono shadow-xs"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl transition-all shadow-xs shrink-0"
          >
            {t.complaint.trackButton}
          </button>
        </form>
      </div>

      {/* Result Not Found */}
      {notFound && (
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center max-w-md mx-auto animate-fadeIn">
          <AlertCircle className="w-8 h-8 text-rose-600 mx-auto mb-2" />
          <h3 className="text-base font-bold text-rose-950">
            Complaint ID not found. Please check the ID.
          </h3>
          <p className="text-xs text-rose-700 mt-1">
            {language === 'hi'
              ? 'दर्ज की गई शिकायत संख्या डेमो डेटाबेस में नहीं मिली। कृपया आईडी पुनः जांचें या ऊपर दिए गए सैंपल आईडी पर क्लिक करें।'
              : 'The entered Complaint ID does not exist in local demo records. Please verify the ID or select a sample ID above.'}
          </p>
        </div>
      )}

      {/* Found Complaint Card */}
      {complaint && (
        <div className="space-y-6 animate-fadeIn">
          {/* Top Summary Header */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-mono">
                    {complaint.id}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {language === 'hi' ? 'डेमो रिकॉर्ड' : 'Demo Record'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {complaint.category}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {complaint.employer} · {complaint.district}, {complaint.state}
                </p>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs text-slate-500 block">
                  {language === 'hi' ? 'वर्तमान स्थिति' : 'Current Status'}
                </span>
                <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  {complaint.status}
                </span>
              </div>
            </div>

            {/* Key Grid Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/60">
                <span className="text-slate-500 block mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  {t.complaint.fullName}
                </span>
                <strong className="text-slate-900 text-sm">{complaint.fullName}</strong>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">{complaint.mobile}</div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/60">
                <span className="text-slate-500 block mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {language === 'hi' ? 'पंजीकरण तिथि' : 'Submission Date'}
                </span>
                <strong className="text-slate-900 text-sm">
                  {new Date(complaint.submittedAt).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </strong>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                  विवाद तिथि: {complaint.incidentDate}
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/60">
                <span className="text-slate-500 block mb-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  {language === 'hi' ? 'आवंटित इकाई/अधिकारी' : 'Assigned Unit / Officer'}
                </span>
                <strong className="text-slate-900 text-sm">
                  {complaint.assignedOfficer || complaint.assignedDepartment || 'केंद्रीय समीक्षा प्रकोष्ठ'}
                </strong>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/60">
                <span className="text-slate-500 block mb-1 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  {language === 'hi' ? 'बकाया दावा राशि' : 'Claimed Salary'}
                </span>
                <strong className="text-slate-900 text-sm font-mono">
                  {complaint.pendingSalaryAmount ? `₹ ${complaint.pendingSalaryAmount}` : 'लागू नहीं (N/A)'}
                </strong>
              </div>
            </div>

            {/* Grievance Statement */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1">
                {language === 'hi' ? 'शिकायत का सारांश:' : 'Grievance Description:'}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-3.5 rounded-lg border border-slate-200/60">
                {complaint.description}
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <StatusTimeline
              currentStatus={complaint.status}
              timelineEvents={complaint.timeline}
            />
          </div>

          {/* Procedural notice */}
          <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {language === 'hi'
                ? 'यह पोर्टल केवल सूचनात्मक प्रगति प्रदर्शित करता है। किसी भी कानूनी कार्यवाही अथवा सहायता का निर्णय संगठन के अधिकृत नियमों के अनुसार विधिक समिति द्वारा लिया जाता है।'
                : 'This tracking status is for informational review. Organizational guidance or legal representation remains subject to verified procedures.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
