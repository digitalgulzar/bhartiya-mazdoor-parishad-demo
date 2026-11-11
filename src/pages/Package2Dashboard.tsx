import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePackage } from '../context/PackageContext';
import { 
  Complaint, 
  ComplaintStatus, 
  DEMO_TEAM_MEMBERS 
} from '../data/demoComplaints';
import { 
  getStoredComplaints, 
  updateComplaintRecord,
  getStoredAdminAuth,
  setStoredAdminAuth,
  AdminAuth
} from '../utils/storage';
import { 
  Shield, 
  Search, 
  Filter, 
  UserCheck, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  MessageSquare, 
  Send, 
  Lock, 
  LogOut, 
  ArrowRight,
  Eye,
  Layers,
  Sparkles,
  RefreshCw,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ALL_STATUSES: ComplaintStatus[] = [
  'Submitted',
  'Under Review',
  'Additional Information Required',
  'Assigned to Team',
  'Assistance Under Consideration',
  'Resolved',
  'Closed'
];

export const Package2Dashboard: React.FC = () => {
  const { language } = useLanguage();
  const { activePackage, setActivePackage } = usePackage();

  // Authentication State
  const [auth, setAuth] = useState<AdminAuth | null>(getStoredAdminAuth());
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard Data State
  const [complaints, setComplaints] = useState<Complaint[]>(getStoredComplaints());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('ALL');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('ALL');

  // Selected Complaint for Modal Detail / Status Update
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [newStatus, setNewStatus] = useState<ComplaintStatus>('Under Review');
  const [newRemark, setNewRemark] = useState('');
  const [newAssignedOfficer, setNewAssignedOfficer] = useState('');
  const [showNotificationToast, setShowNotificationToast] = useState<string | null>(null);

  useEffect(() => {
    setComplaints(getStoredComplaints());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUser === 'admin' && loginPass === 'demo123') {
      const userAuth: AdminAuth = {
        isAuthenticated: true,
        username: 'admin',
        role: 'p2_admin',
        displayName: 'श्री रविन्द्र सिंह (सह-संयोजक)'
      };
      setStoredAdminAuth(userAuth);
      setAuth(userAuth);
      setLoginError('');
    } else {
      setLoginError(
        language === 'hi'
          ? 'गलत विवरण। कृपया डेमो क्रेडेंशियल्स "admin" और "demo123" का प्रयोग करें।'
          : 'Invalid credentials. Please use demo username "admin" and password "demo123".'
      );
    }
  };

  const handleLogout = () => {
    setStoredAdminAuth(null);
    setAuth(null);
  };

  const openDetailModal = (comp: Complaint) => {
    setSelectedComplaint(comp);
    setNewStatus(comp.status);
    setNewAssignedOfficer(comp.assignedOfficer || DEMO_TEAM_MEMBERS[2].name);
    setNewRemark('');
  };

  const handleSaveChanges = () => {
    if (!selectedComplaint) return;

    const formattedDate = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const updatedTimeline = [...selectedComplaint.timeline];
    if (newStatus !== selectedComplaint.status) {
      updatedTimeline.push({
        status: newStatus,
        date: formattedDate,
        note: `Status updated to "${newStatus}" by ${auth?.displayName || 'Admin'}`,
        by: auth?.displayName || 'Admin'
      });
    }

    const updatedRemarks = [...selectedComplaint.internalRemarks];
    if (newRemark.trim()) {
      updatedRemarks.push({
        id: `rem-${Date.now()}`,
        date: formattedDate,
        author: auth?.displayName || 'रविन्द्र सिंह (एडमिन)',
        role: 'प्रशासनिक समीक्षक',
        content: newRemark.trim()
      });
    }

    const updatedRecord = updateComplaintRecord(selectedComplaint.id, {
      status: newStatus,
      assignedOfficer: newAssignedOfficer,
      timeline: updatedTimeline,
      internalRemarks: updatedRemarks
    });

    if (updatedRecord) {
      setSelectedComplaint(updatedRecord);
      setComplaints(getStoredComplaints());
      setShowNotificationToast(
        language === 'hi' 
          ? `शिकायत ${updatedRecord.id} अद्यतन कर दी गई। सिमुलेटेड ईमेल सूचना प्रेषित!`
          : `Grievance ${updatedRecord.id} updated. Simulated email notice dispatched!`
      );
      setTimeout(() => setShowNotificationToast(null), 4000);
    }
  };

  // Metrics calculation
  const totalCount = complaints.length;
  const pendingCount = complaints.filter(c => c.status === 'Submitted' || c.status === 'Additional Information Required').length;
  const underReviewCount = complaints.filter(c => c.status === 'Under Review' || c.status === 'Assigned to Team' || c.status === 'Assistance Under Consideration').length;
  const resolvedCount = complaints.filter(c => c.status === 'Resolved' || c.status === 'Closed').length;

  // Filter complaints
  const filtered = complaints.filter(c => {
    const matchesSearch = 
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.employer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.district.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatusFilter === 'ALL' || c.status === selectedStatusFilter;
    const matchesCategory = selectedCategoryFilter === 'ALL' || c.category === selectedCategoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // If Package 1 is active, explain and allow activating Package 2
  if (activePackage === 'pkg1') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
            {language === 'hi' ? 'पैकेज 2 एवं पैकेज 3 क्षमता' : 'Package 2 & Package 3 Feature'}
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            {language === 'hi' ? 'शिकायत प्रबंधन एडमिन डैशबोर्ड' : 'Grievance Redressal Admin Dashboard'}
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-3 text-sm leading-relaxed">
            {language === 'hi'
              ? 'पैकेज 1 केवल सार्वजनिक वेबसाइट है। शिकायत एडमिन डैशबोर्ड, स्थिति अद्यतन, आंतरिक टिप्पणियां और टीम आवंटन पैकेज 2 और पैकेज 3 में शामिल हैं।'
              : 'Package 1 is website-only. The admin complaint dashboard, status workflows, team assignment, and internal notes are included in Package 2 and 3.'}
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setActivePackage('pkg2')}
              className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-xs"
            >
              {language === 'hi' ? 'पैकेज 2 पूर्वावलोकन सक्रिय करें' : 'Activate Package 2 Demo'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Login simulation if not authenticated
  if (!auth) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
              BMP
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              {language === 'hi' ? 'शिकायत प्रबंधन एडमिन लॉगिन' : 'Grievance Portal Admin Login'}
            </h2>
            <span className="text-xs text-blue-800 font-semibold block mt-0.5">
              {language === 'hi' ? 'पैकेज 2 सिमुलेटेड एक्सेस' : 'Package 2 Simulated Console'}
            </span>
          </div>

          {/* Clearly labelled demo credentials box required by §9 */}
          <div className="p-3.5 mb-5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950">
            <div className="flex items-center gap-1.5 font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{language === 'hi' ? 'डेमो लॉगिन क्रेडेंशियल्स:' : 'Demo Only Credentials:'}</span>
            </div>
            <div className="font-mono space-y-0.5 text-slate-800">
              <div>Username: <strong className="text-blue-950">admin</strong></div>
              <div>Password: <strong className="text-blue-950">demo123</strong></div>
            </div>
            <span className="text-[10px] text-amber-800 block mt-1.5 italic">
              {language === 'hi'
                ? '*यह केवल डेमो प्रदर्शन के लिए है, वास्तविक संगठन क्रेडेंशियल्स नहीं हैं।'
                : '*These are demo placeholders, not real organization credentials.'}
            </span>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'hi' ? 'उपयोगकर्ता नाम (Username)' : 'Username'}
              </label>
              <input
                type="text"
                value={loginUser}
                onChange={e => setLoginUser(e.target.value)}
                placeholder="admin"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'hi' ? 'पासवर्ड (Password)' : 'Password'}
              </label>
              <input
                type="password"
                value={loginPass}
                onChange={e => setLoginPass(e.target.value)}
                placeholder="demo123"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {loginError && <p className="text-xs text-rose-600">{loginError}</p>}

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-lg transition-colors shadow-xs"
            >
              {language === 'hi' ? 'लॉगिन करें (Demo Login)' : 'Sign In'}
            </button>

            <button
              type="button"
              onClick={() => {
                setLoginUser('admin');
                setLoginPass('demo123');
              }}
              className="w-full py-1.5 text-xs text-slate-500 hover:text-blue-900 transition-colors"
            >
              {language === 'hi' ? 'डेमो क्रेडेंशियल्स स्वतः भरें' : 'Auto-fill Demo Credentials'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      
      {/* Toast Notification Simulation */}
      {showNotificationToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-700 text-xs flex items-center gap-2.5 animate-bounce">
          <Mail className="w-4 h-4 text-amber-400" />
          <span>{showNotificationToast}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              {language === 'hi' ? 'पैकेज 2 एडमिन कंसोल' : 'Package 2 Admin Console'}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {language === 'hi' ? 'श्रमिक शिकायत निवारण पोर्टल' : 'Labour Grievance Redressal'}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {language === 'hi' ? 'शिकायत प्रबंधन डैशबोर्ड' : 'Grievance Management Dashboard'}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            लॉगिन प्रयोक्ता: <strong className="text-slate-800">{auth.displayName}</strong> ({auth.username})
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick link to Package 3 comparison */}
          <Link
            to="/admin/national"
            className="px-3.5 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'hi' ? 'पैकेज 3 (राष्ट्रीय ERP) देखें' : 'View Package 3 Suite'}</span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5 text-slate-500" />
            <span>{language === 'hi' ? 'लॉगआउट' : 'Sign Out'}</span>
          </button>
        </div>
      </div>

      {/* Metric KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">{language === 'hi' ? 'कुल शिकायतें' : 'Total Grievances'}</span>
            <Shield className="w-4 h-4 text-blue-900" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
            {totalCount}
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">समस्त पंजीकृत प्रकरण</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-amber-700 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">{language === 'hi' ? 'लंबित व प्राथमिक' : 'Pending Intake'}</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-mono">
            {pendingCount}
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">कार्यवाही हेतु प्रतीक्षारत</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-blue-700 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">{language === 'hi' ? 'समीक्षा व आवंटन' : 'Under Review'}</span>
            <AlertCircle className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-950 font-mono">
            {underReviewCount}
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">जांच व टीम स्तर पर सक्रिय</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-emerald-700 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">{language === 'hi' ? 'निस्तारित प्रकरण' : 'Resolved Cases'}</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-900 font-mono">
            {resolvedCount}
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block">समझौता / राहत सुनिश्चित</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'आईडी, श्रमिक नाम, कंपनी या जिला द्वारा खोजें...' : 'Search by ID, worker name, company or district...'}
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={selectedStatusFilter}
            onChange={e => setSelectedStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white outline-none w-1/2 sm:w-auto"
          >
            <option value="ALL">{language === 'hi' ? 'सभी स्थितियां (All Status)' : 'All Status'}</option>
            {ALL_STATUSES.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          <select
            value={selectedCategoryFilter}
            onChange={e => setSelectedCategoryFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white outline-none w-1/2 sm:w-auto"
          >
            <option value="ALL">{language === 'hi' ? 'सभी श्रेणियां (All Categories)' : 'All Categories'}</option>
            <option value="Pending Salary">Pending Salary</option>
            <option value="Workplace Safety">Workplace Safety</option>
            <option value="PF/ESI-related Grievance">PF/ESI Grievance</option>
            <option value="Unfair Termination">Unfair Termination</option>
            <option value="Working Hours">Working Hours</option>
          </select>
        </div>
      </div>

      {/* Complaints Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">
            {language === 'hi' ? 'प्राप्त शिकायतें सूची (Live Table)' : 'Grievance List'}
          </h3>
          <span className="text-xs text-slate-500 font-mono">
            {filtered.length} {language === 'hi' ? 'प्रकरण मिले' : 'records found'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <th className="p-3.5">Complaint ID</th>
                <th className="p-3.5">श्रमिक का नाम</th>
                <th className="p-3.5">श्रेणी</th>
                <th className="p-3.5">नियोक्ता / स्थान</th>
                <th className="p-3.5">वर्तमान स्थिति</th>
                <th className="p-3.5">आवंटित अधिकारी</th>
                <th className="p-3.5 text-right">कार्यवाही</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(comp => (
                <tr key={comp.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-mono font-bold text-blue-900 whitespace-nowrap">
                    {comp.id}
                  </td>
                  <td className="p-3.5">
                    <strong className="text-slate-900 block">{comp.fullName}</strong>
                    <span className="text-[11px] text-slate-500 font-mono">{comp.mobile}</span>
                  </td>
                  <td className="p-3.5">
                    <span className="font-medium text-slate-800">{comp.category}</span>
                    {comp.pendingSalaryAmount && (
                      <span className="text-[10px] text-amber-700 block font-mono">
                        दावा: ₹{comp.pendingSalaryAmount}
                      </span>
                    )}
                  </td>
                  <td className="p-3.5">
                    <span className="text-slate-900 font-medium block truncate max-w-[180px]">{comp.employer}</span>
                    <span className="text-[11px] text-slate-500">{comp.district}, {comp.state}</span>
                  </td>
                  <td className="p-3.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                      {comp.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-700">
                    {comp.assignedOfficer || <span className="text-slate-400 italic">अन-आवंटित</span>}
                  </td>
                  <td className="p-3.5 text-right whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => openDetailModal(comp)}
                      className="px-3 py-1.5 rounded-md bg-blue-900 hover:bg-blue-800 text-white font-medium text-xs transition-colors inline-flex items-center gap-1 shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'समीक्षा / अद्यतन' : 'Manage'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Complaint Detail & Management */}
      {selectedComplaint && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  {selectedComplaint.id}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {selectedComplaint.fullName} – {selectedComplaint.category}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedComplaint(null)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs sm:text-sm">
              
              {/* Grievance Summary */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><strong>नियोक्ता:</strong> {selectedComplaint.employer}</div>
                  <div><strong>स्थान:</strong> {selectedComplaint.district}, {selectedComplaint.state}</div>
                  <div><strong>दावा राशि:</strong> ₹{selectedComplaint.pendingSalaryAmount || 'N/A'}</div>
                  <div><strong>घटना तिथि:</strong> {selectedComplaint.incidentDate}</div>
                </div>
                <div className="pt-2 border-t border-slate-200 text-xs text-slate-700">
                  <strong>विवरण:</strong> {selectedComplaint.description}
                </div>
              </div>

              {/* Action Form: Update Status & Assign Officer */}
              <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-blue-800" />
                  <span>प्रशासनिक कार्यवाही एवं स्थिति अद्यतन (Grievance Actions)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      स्थिति अद्यतन करें (Change Redressal Status)
                    </label>
                    <select
                      value={newStatus}
                      onChange={e => setNewStatus(e.target.value as ComplaintStatus)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    >
                      {ALL_STATUSES.map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      अधिकृत कार्यकर्ता / टीम को सौंपें (Assign Officer)
                    </label>
                    <select
                      value={newAssignedOfficer}
                      onChange={e => setNewAssignedOfficer(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                    >
                      {DEMO_TEAM_MEMBERS.map(tm => (
                        <option key={tm.id} value={`${tm.name} (${tm.role})`}>
                          {tm.name} – {tm.role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    आंतरिक समीक्षा टिप्पणी जोड़ें (Add Internal Remark)
                  </label>
                  <textarea
                    rows={2}
                    value={newRemark}
                    onChange={e => setNewRemark(e.target.value)}
                    placeholder="उदा. श्रमायुक्त कार्यालय में त्रिपक्षीय बैठक प्रस्तावित है। साक्ष्यों का परीक्षण पूर्ण हुआ..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>
              </div>

              {/* Internal Remarks Log */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                  <span>संगठनात्मक आंतरिक टिप्पणियां (Internal Remarks Log)</span>
                </h4>
                {selectedComplaint.internalRemarks.length === 0 ? (
                  <p className="text-xs text-slate-400 italic">कोई आंतरिक टिप्पणी दर्ज नहीं है।</p>
                ) : (
                  <div className="space-y-2">
                    {selectedComplaint.internalRemarks.map(rem => (
                      <div key={rem.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                        <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                          <strong>{rem.author} ({rem.role})</strong>
                          <span className="font-mono">{rem.date}</span>
                        </div>
                        <p className="text-slate-800">{rem.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <Link
                to={`/complaints/track?id=${selectedComplaint.id}`}
                target="_blank"
                className="text-xs text-blue-900 hover:underline font-semibold"
              >
                सार्वजनिक ट्रैकर में देखें ↗
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedComplaint(null)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  रद्द करें
                </button>
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="px-5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-xs"
                >
                  परिवर्तन सुरक्षित करें (Save & Update)
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
