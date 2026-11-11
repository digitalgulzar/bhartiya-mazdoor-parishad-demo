import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePackage } from '../context/PackageContext';
import { 
  Complaint, 
  ComplaintStatus, 
  DEMO_TEAM_MEMBERS, 
  DEMO_MEMBERS_REGISTRY,
  DEMO_AUDIT_LOGS,
  STATES_AND_DISTRICTS
} from '../data/demoComplaints';
import { getStoredComplaints, updateComplaintRecord, resetDemoDataToDefault } from '../utils/storage';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  FileText, 
  Map, 
  Building2, 
  Users, 
  UserPlus, 
  UserCheck, 
  Scale, 
  BadgePercent, 
  BarChart3, 
  Bell, 
  History, 
  Key, 
  Settings, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  TrendingUp,
  MapPin,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  FileCheck,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

type SidebarTab = 
  | 'overview'
  | 'complaints'
  | 'states'
  | 'districts'
  | 'teams'
  | 'members'
  | 'assignment'
  | 'legal'
  | 'financial'
  | 'reports'
  | 'notifications'
  | 'audit'
  | 'roles'
  | 'settings';

export const Package3Dashboard: React.FC = () => {
  const { language } = useLanguage();
  const { activePackage, setActivePackage } = usePackage();

  const [activeTab, setActiveTab] = useState<SidebarTab>('overview');
  const [complaints, setComplaints] = useState<Complaint[]>(getStoredComplaints());
  const [selectedRole, setSelectedRole] = useState<'National Admin' | 'State Admin (UP)' | 'District Admin (Kanpur)' | 'Legal Counsel'>('National Admin');
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState('ALL');

  useEffect(() => {
    setComplaints(getStoredComplaints());
  }, []);

  const handleExportDemo = (reportType: string) => {
    setExportNotice(
      language === 'hi' 
        ? `"${reportType}" की डेमो रिपोर्ट तैयार की जा रही है... (Excel/PDF Simulation Downloaded)` 
        : `Generating demo export for "${reportType}"... (Simulated File Downloaded)`
    );
    setTimeout(() => setExportNotice(null), 4000);
  };

  // Metrics
  const totalComplaints = complaints.length;
  const pendingCount = complaints.filter(c => c.status === 'Submitted' || c.status === 'Additional Information Required').length;
  const underReviewCount = complaints.filter(c => c.status === 'Under Review' || c.status === 'Assigned to Team' || c.status === 'Assistance Under Consideration').length;
  const resolvedCount = complaints.filter(c => c.status === 'Resolved' || c.status === 'Closed').length;

  // Recharts Data
  const stateChartData = [
    { name: 'U.P.', count: 42, resolved: 31 },
    { name: 'Maharashtra', count: 38, resolved: 29 },
    { name: 'Bihar', count: 26, resolved: 18 },
    { name: 'Gujarat', count: 24, resolved: 19 },
    { name: 'Delhi NCR', count: 21, resolved: 15 },
    { name: 'M.P.', count: 18, resolved: 12 },
    { name: 'Rajasthan', count: 15, resolved: 11 },
  ];

  const categoryChartData = [
    { name: 'Pending Salary', value: 45, color: '#2563eb' },
    { name: 'Workplace Safety', value: 25, color: '#dc2626' },
    { name: 'PF & ESI Dispute', value: 20, color: '#d97706' },
    { name: 'Unfair Termination', value: 18, color: '#7c3aed' },
    { name: 'Working Hours', value: 12, color: '#059669' },
  ];

  const monthlyTrendData = [
    { month: 'Jun', submitted: 18, resolved: 12 },
    { month: 'Jul', submitted: 24, resolved: 19 },
    { month: 'Aug', submitted: 31, resolved: 25 },
    { month: 'Sep', submitted: 28, resolved: 22 },
    { month: 'Oct', submitted: 42, resolved: 34 },
    { month: 'Nov', submitted: 48, resolved: 37 },
  ];

  const navMenuItems = [
    { id: 'overview', labelHi: '1. मुख्य अवलोकन (Overview)', labelEn: '1. Overview', icon: LayoutDashboard },
    { id: 'complaints', labelHi: '2. राष्ट्रीय शिकायत पंजी (Complaints)', labelEn: '2. National Complaints', icon: FileText },
    { id: 'states', labelHi: '3. राज्य इकाई प्रबंधन (States)', labelEn: '3. State Management', icon: Map },
    { id: 'districts', labelHi: '4. जिला इकाई प्रबंधन (Districts)', labelEn: '4. District Management', icon: Building2 },
    { id: 'teams', labelHi: '5. टीम एवं पदाधिकारी (Team)', labelEn: '5. Team Management', icon: Users },
    { id: 'members', labelHi: '6. सदस्यता पंजीयन (Members)', labelEn: '6. Members Directory', icon: UserPlus },
    { id: 'assignment', labelHi: '7. शिकायत आवंटन (Assignment)', labelEn: '7. Complaint Assignment', icon: UserCheck },
    { id: 'legal', labelHi: '8. विधिक सहायता ट्रैकिंग (Legal)', labelEn: '8. Legal Support Tracking', icon: Scale },
    { id: 'financial', labelHi: '9. आर्थिक सहायता विचार (Financial)', labelEn: '9. Financial Assistance', icon: BadgePercent },
    { id: 'reports', labelHi: '10. रिपोर्ट एवं एनालिटिक्स (Reports)', labelEn: '10. Reports & Analytics', icon: BarChart3 },
    { id: 'notifications', labelHi: '11. सूचना केंद्र (Notifications)', labelEn: '11. Notifications', icon: Bell },
    { id: 'audit', labelHi: '12. सिस्टम ऑडिट लॉग्स (Audit)', labelEn: '12. Audit Logs', icon: History },
    { id: 'roles', labelHi: '13. उपयोगकर्ता भूमिकाएं (Roles)', labelEn: '13. User Roles', icon: Key },
    { id: 'settings', labelHi: '14. सिस्टम सेटिंग्स (Settings)', labelEn: '14. Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800">
      
      {/* Toast Notification Simulation */}
      {exportNotice && (
        <div className="fixed top-24 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 text-xs flex items-center gap-2.5 animate-bounce">
          <FileCheck className="w-4 h-4 text-emerald-400" />
          <span>{exportNotice}</span>
        </div>
      )}

      {/* Top Banner Notice inside Package 3 Console */}
      <div className="bg-slate-900 text-white border-b border-slate-800 px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="bg-amber-600 text-white px-2 py-0.5 rounded font-bold text-[10px] uppercase tracking-wider">
              Package 3 Flagship
            </span>
            <span className="font-semibold text-slate-200">
              {language === 'hi' 
                ? 'भारतीय मजदूर परिषद – राष्ट्रीय प्रबंधन प्रणाली (Central HQ Console)'
                : 'Bhartiya Mazdoor Parishad – Complete National Management ERP'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-slate-400">सिमुलेटेड रोल:</span>
              <select
                value={selectedRole}
                onChange={e => setSelectedRole(e.target.value as any)}
                className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-amber-300 font-medium outline-none"
              >
                <option value="National Admin">National Admin (अखिल भारतीय प्रमुख)</option>
                <option value="State Admin (UP)">State Admin (संयोजक - उ.प्र.)</option>
                <option value="District Admin (Kanpur)">District Admin (सचिव - कानपुर)</option>
                <option value="Legal Counsel">Legal Counsel (विधिक सलाहकार)</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => handleExportDemo('Comprehensive National Monthly Audit')}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 inline-flex items-center gap-1 text-[11px]"
            >
              <Download className="w-3 h-3 text-amber-400" />
              <span>{language === 'hi' ? 'डेटा निर्यात' : 'Export'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const refreshed = resetDemoDataToDefault();
                setComplaints(refreshed);
                setExportNotice(
                  language === 'hi' ? 'राष्ट्रीय डेमो डेटाबेस रीसेट हुआ!' : 'National demo database reset to default!'
                );
                setTimeout(() => setExportNotice(null), 3000);
              }}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 inline-flex items-center gap-1 text-[11px]"
              title="Reset sample records to default"
            >
              <span>{language === 'hi' ? 'रीसेट' : 'Reset'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        
        {/* Scoped Role Simulation Indicator */}
        {selectedRole !== 'National Admin' && (
          <div className="mb-5 p-3.5 bg-amber-50 border border-amber-300 rounded-xl flex items-center justify-between text-xs text-amber-950 shadow-2xs animate-fadeIn">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                <strong>{selectedRole}</strong> {language === 'hi' ? 'दृष्टिकोण सक्रिय:' : 'Scoped View Active:'}{' '}
                {selectedRole === 'State Admin (UP)'
                  ? (language === 'hi' ? 'उत्तर प्रदेश राज्यीय शाखा, संबद्ध 8 मंडल एवं 42 मामलों की अधिकृत निगरानी।' : 'Scoped to Uttar Pradesh chapter, 8 divisions, and 42 cases.')
                  : selectedRole === 'District Admin (Kanpur)'
                  ? (language === 'hi' ? 'कानपुर नगर औद्योगिक विवाद निवारण एवं क्षेत्रीय सुनवाई।' : 'Scoped to Kanpur Nagar industrial dispute redressal.')
                  : (language === 'hi' ? 'विधिक प्रकोष्ठ – श्रमायुक्त नोटिस, श्रम न्यायालय एवं मध्यस्थता समझौते।' : 'Scoped to Legal Cell — conciliations, notices, and tribunal representations.')
                }
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedRole('National Admin')}
              className="text-amber-800 hover:text-amber-950 underline font-semibold text-[11px] shrink-0 ml-2"
            >
              {language === 'hi' ? 'राष्ट्रीय दृश्य पर लौटें (Reset to All-India)' : 'Reset to National'}
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sidebar Menu (3 Columns) */}
          <aside className="lg:col-span-3 space-y-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {language === 'hi' ? 'राष्ट्रीय मॉड्यूल' : 'ERP Modules (14)'}
                </span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                  Live Demo
                </span>
              </div>

              <nav className="mt-3 space-y-1">
                {navMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id as SidebarTab)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-900 text-white shadow-xs'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                        <span className="truncate">{language === 'hi' ? item.labelHi : item.labelEn}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Context Card */}
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-slate-200 p-4 rounded-2xl border border-blue-900 text-xs shadow-xs">
              <span className="text-amber-400 font-bold block mb-1">
                {language === 'hi' ? 'पैकेज 3 क्षमताएं' : 'Package 3 Advantage'}
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                यह प्रणाली 100+ जिलों, राज्य समितियों, विधिक सेल, और सहायता बजट के वास्तविक समय समन्वय हेतु तैयार की गई है।
              </p>
              <Link
                to="/packages"
                className="mt-3 text-[11px] text-amber-300 font-semibold inline-flex items-center gap-1 hover:underline"
              >
                <span>पैकेज तुलना देखें</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* Main Content Area (9 Columns) */}
          <main className="lg:col-span-9 space-y-6">

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn">
                
                {/* 6 Metric KPI Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-slate-500 font-medium block">सक्रिय राज्य</span>
                    <strong className="text-xl font-extrabold text-blue-900 font-mono">18</strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">राज्यीय शाखाएं</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-slate-500 font-medium block">सक्रिय जिले</span>
                    <strong className="text-xl font-extrabold text-blue-900 font-mono">142</strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">जिला समन्वय केंद्र</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-slate-500 font-medium block">पंजीकृत सदस्य</span>
                    <strong className="text-xl font-extrabold text-blue-900 font-mono">14,850</strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">सत्यापित कामगार</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-slate-500 font-medium block">कुल शिकायतें</span>
                    <strong className="text-xl font-extrabold text-slate-900 font-mono">{totalComplaints}</strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">अखिल भारतीय</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-amber-700 font-medium block">लंबित प्रकरण</span>
                    <strong className="text-xl font-extrabold text-amber-800 font-mono">{pendingCount}</strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">समीक्षाधीन</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[11px] text-emerald-700 font-medium block">निस्तारित</span>
                    <strong className="text-xl font-extrabold text-emerald-800 font-mono">{resolvedCount}</strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">समाधानित</span>
                  </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Chart 1: State-Wise Bar Chart */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {language === 'hi' ? 'राज्य-वार शिकायत संख्या (State-wise Volume)' : 'State-wise Complaint Volume'}
                        </h4>
                        <span className="text-[11px] text-slate-500">कुल प्राप्त बनाम निस्तारित प्रकरण</span>
                      </div>
                      <span className="text-xs text-blue-900 font-semibold font-mono">Top 7 States</span>
                    </div>

                    <div className="h-64 w-full min-w-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={stateChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                          <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                          <YAxis tick={{ fontSize: 11 }} />
                          <Tooltip />
                          <Bar dataKey="count" name="प्राप्त शिकायतें" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="resolved" name="निस्तारित" fill="#059669" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Chart 2: Category Distribution Pie Chart */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {language === 'hi' ? 'शिकायत श्रेणी वितरण (Categories)' : 'Complaint Categories'}
                        </h4>
                        <span className="text-[11px] text-slate-500">समस्या प्रकार अनुसार प्रतिशत</span>
                      </div>
                    </div>

                    <div className="h-64 w-full min-w-0 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={categoryChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            paddingAngle={4}
                            dataKey="value"
                          >
                            {categoryChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend wrapperStyle={{ fontSize: '11px' }} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                </div>

                {/* Monthly Trend Area / Line Chart */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {language === 'hi' ? 'मासिक शिकायत एवं निस्तारण रुझान (Monthly Trend)' : 'Monthly Complaint & Resolution Trend'}
                      </h4>
                      <span className="text-[11px] text-slate-500">पिछले 6 माह का तुलनात्मक ग्राफ</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleExportDemo('Monthly Trend CSV')}
                      className="text-xs text-blue-900 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>CSV डाउनलोड</span>
                    </button>
                  </div>

                  <div className="h-60 w-full min-w-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                        <YAxis tick={{ fontSize: 11 }} />
                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        <Line type="monotone" dataKey="submitted" name="नई शिकायतें" stroke="#1e3a8a" strokeWidth={2.5} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="resolved" name="निस्तारित प्रकरण" stroke="#059669" strokeWidth={2.5} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recent Complaints Summary Table */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-slate-900">
                      {language === 'hi' ? 'हालिया पंजीकृत राष्ट्रीय प्रकरण (Live Queue)' : 'Recent National Complaints'}
                    </h4>
                    <button
                      type="button"
                      onClick={() => setActiveTab('complaints')}
                      className="text-xs text-blue-900 font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>सभी देखें ({complaints.length})</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-100 text-slate-500 font-semibold">
                          <th className="py-2.5">ID</th>
                          <th className="py-2.5">श्रमिक</th>
                          <th className="py-2.5">राज्य/जिला</th>
                          <th className="py-2.5">श्रेणी</th>
                          <th className="py-2.5">स्थिति</th>
                          <th className="py-2.5">प्रभार</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {complaints.slice(0, 4).map(c => (
                          <tr key={c.id} className="hover:bg-slate-50">
                            <td className="py-3 font-mono font-bold text-blue-900">{c.id}</td>
                            <td className="py-3 font-semibold text-slate-900">{c.fullName}</td>
                            <td className="py-3 text-slate-600">{c.district}, {c.state}</td>
                            <td className="py-3 text-slate-800">{c.category}</td>
                            <td className="py-3">
                              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                                {c.status}
                              </span>
                            </td>
                            <td className="py-3 text-slate-600">{c.assignedOfficer || 'केंद्रीय सेल'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: NATIONAL COMPLAINTS */}
            {activeTab === 'complaints' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      राष्ट्रीय शिकायत पंजीयन एवं ट्रैकिंग (National Complaints Queue)
                    </h3>
                    <p className="text-xs text-slate-500">
                      सभी 18 राज्यों और जिलों से प्राप्त केंद्रीकृत शिकायत रिकॉर्ड
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleExportDemo('National Complaints Master Register')}
                    className="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>पूर्ण सूची निर्यात (Excel Demo)</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                        <th className="p-3">Complaint ID</th>
                        <th className="p-3">श्रमिक विवरण</th>
                        <th className="p-3">नियोक्ता व स्थान</th>
                        <th className="p-3">श्रेणी / दावा</th>
                        <th className="p-3">प्राथमिकता</th>
                        <th className="p-3">वर्तमान स्थिति</th>
                        <th className="p-3">आवंटित अधिकारी</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {complaints.map(c => (
                        <tr key={c.id} className="hover:bg-slate-50">
                          <td className="p-3 font-mono font-bold text-blue-900">{c.id}</td>
                          <td className="p-3">
                            <strong className="text-slate-900 block">{c.fullName}</strong>
                            <span className="text-[11px] font-mono text-slate-500">{c.mobile}</span>
                          </td>
                          <td className="p-3">
                            <span className="font-medium text-slate-900 block">{c.employer}</span>
                            <span className="text-slate-500">{c.district}, {c.state}</span>
                          </td>
                          <td className="p-3">
                            <span className="font-semibold text-slate-800 block">{c.category}</span>
                            {c.pendingSalaryAmount && <span className="text-[10px] text-amber-800 font-mono">₹{c.pendingSalaryAmount}</span>}
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              c.priority === 'Critical' ? 'bg-rose-100 text-rose-800' :
                              c.priority === 'High' ? 'bg-amber-100 text-amber-900' :
                              'bg-slate-100 text-slate-700'
                            }`}>
                              {c.priority}
                            </span>
                          </td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-900 border border-blue-200">
                              {c.status}
                            </span>
                          </td>
                          <td className="p-3 text-slate-700">
                            {c.assignedOfficer || 'समीक्षाधीन'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: STATE MANAGEMENT */}
            {activeTab === 'states' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      राज्य इकाई प्रबंधन (State Chapters Directory)
                    </h3>
                    <p className="text-xs text-slate-500">
                      राज्य स्तरीय समन्वयक, सक्रिय जिला शाखाएं एवं संपर्क कार्यालय
                    </p>
                  </div>
                  <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
                    18 राज्य शाखाएं अधिकृत
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.keys(STATES_AND_DISTRICTS).map((st, i) => (
                    <div key={st} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-sm font-bold text-slate-900">{st}</strong>
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          सक्रिय (Active Chapter)
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 space-y-1">
                        <div>संबद्ध जिले: <strong>{STATES_AND_DISTRICTS[st].length} मंडल एवं जिले</strong></div>
                        <div>प्रमुख केंद्र: {STATES_AND_DISTRICTS[st].slice(0, 3).join(', ')}...</div>
                        <div className="pt-2 text-[11px] text-blue-900 font-medium flex items-center justify-between">
                          <span>राज्य संयोजक: {i === 0 ? 'संजय अवस्थी' : i === 1 ? 'प्रमोद गायकवाड़' : 'विभागीय संयोजक'}</span>
                          <span className="text-slate-400">ID: ST-0{i + 1}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: DISTRICT MANAGEMENT */}
            {activeTab === 'districts' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100">
                  जिला इकाई प्रबंधन (District Level Administration)
                </h3>
                <p className="text-xs text-slate-600">
                  प्रत्येक जिले में शिकायत आवंटन, सुनवाई और त्रिपक्षीय वार्ताओं का विकेंद्रीकृत नियंत्रण।
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                        <th className="p-3">जिला (District)</th>
                        <th className="p-3">राज्य (State)</th>
                        <th className="p-3">जिला सचिव / संयोजक</th>
                        <th className="p-3">लंबित मामले</th>
                        <th className="p-3">निस्तारण दर</th>
                        <th className="p-3">हेल्पलाइन</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Kanpur Nagar</td>
                        <td className="p-3">Uttar Pradesh</td>
                        <td className="p-3">रविन्द्र सिंह (सह-संयोजक)</td>
                        <td className="p-3 font-mono font-bold text-amber-700">6 केस</td>
                        <td className="p-3 font-semibold text-emerald-700">89%</td>
                        <td className="p-3 font-mono text-slate-600">0512-231XXXX</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Pune MIDC</td>
                        <td className="p-3">Maharashtra</td>
                        <td className="p-3">प्रमोद गायकवाड़ (राज्य सचिव)</td>
                        <td className="p-3 font-mono font-bold text-amber-700">8 केस</td>
                        <td className="p-3 font-semibold text-emerald-700">92%</td>
                        <td className="p-3 font-mono text-slate-600">020-256XXXX</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Patna Industrial</td>
                        <td className="p-3">Bihar</td>
                        <td className="p-3">मुकेश कुमार (जिला संयोजक)</td>
                        <td className="p-3 font-mono font-bold text-amber-700">4 केस</td>
                        <td className="p-3 font-semibold text-emerald-700">84%</td>
                        <td className="p-3 font-mono text-slate-600">0612-220XXXX</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">Ahmedabad GIDC</td>
                        <td className="p-3">Gujarat</td>
                        <td className="p-3">दीपक पटेल (औद्योगिक प्रभारी)</td>
                        <td className="p-3 font-mono font-bold text-amber-700">5 केस</td>
                        <td className="p-3 font-semibold text-emerald-700">94%</td>
                        <td className="p-3 font-mono text-slate-600">079-265XXXX</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 5: TEAM MANAGEMENT */}
            {activeTab === 'teams' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      पदाधिकारी एवं कार्यकर्ता प्रबंधन (Team Directory)
                    </h3>
                    <p className="text-xs text-slate-500">
                      राष्ट्रीय, राज्य एवं जिला स्तर के अधिकृत प्रतिनिधि
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleExportDemo('Team Directory')}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold"
                  >
                    + नया पदाधिकारी जोड़ें (Demo)
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DEMO_TEAM_MEMBERS.map(tm => (
                    <div key={tm.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-900 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0">
                        {tm.name.substring(0, 2)}
                      </div>
                      <div className="flex-1 text-xs">
                        <strong className="text-sm font-bold text-slate-900 block">{tm.name}</strong>
                        <span className="text-blue-900 font-semibold block">{tm.role}</span>
                        <div className="text-slate-500 mt-1 flex items-center justify-between">
                          <span>कार्यक्षेत्र: {tm.state}</span>
                          <span className="font-mono">{tm.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 6: MEMBERS REGISTRY */}
            {activeTab === 'members' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      सदस्यता पंजीयन एवं निर्देशिका (Membership Registry)
                    </h3>
                    <p className="text-xs text-slate-500">
                      अखिल भारतीय पंजीकृत एवं सत्यापित श्रमिक कामगार सूची
                    </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                    14,850 पंजीकृत सदस्य
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                        <th className="p-3">Member ID</th>
                        <th className="p-3">सदस्य का नाम</th>
                        <th className="p-3">संबद्ध औद्योगिक इकाई</th>
                        <th className="p-3">कार्य क्षेत्र (Sector)</th>
                        <th className="p-3">पंजीकरण तिथि</th>
                        <th className="p-3">सक्रियता स्थिति</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {DEMO_MEMBERS_REGISTRY.map(m => (
                        <tr key={m.id} className="hover:bg-slate-50">
                          <td className="p-3 font-mono font-bold text-blue-900">{m.id}</td>
                          <td className="p-3 font-semibold text-slate-900">{m.name}</td>
                          <td className="p-3 text-slate-700">{m.unit}</td>
                          <td className="p-3 text-slate-600">{m.category}</td>
                          <td className="p-3 font-mono text-slate-500">{m.joined}</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                              {m.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 7: COMPLAINT ASSIGNMENT */}
            {activeTab === 'assignment' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100">
                  शिकायत आवंटन एवं जांच प्रकोष्ठ (Assignment & Escalation Workflow)
                </h3>
                <p className="text-xs text-slate-600">
                  नवीन शिकायतों को प्राथमिकता वर्गीकरण (Critical / High / Medium) अनुसार संबंधित मंडल संयोजक को तुरंत सुपुर्द किया जाता है।
                </p>

                <div className="space-y-3">
                  {complaints.map(comp => (
                    <div key={comp.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-bold text-blue-900">{comp.id}</span>
                          <span className="font-semibold text-slate-900">{comp.fullName}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-600">{comp.category}</span>
                        </div>
                        <div className="text-slate-500">
                          नियोक्ता: <strong>{comp.employer}</strong> ({comp.district}, {comp.state})
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-slate-600">प्रभार: <strong className="text-slate-900">{comp.assignedOfficer || 'अन-आवंटित'}</strong></span>
                        <button
                          type="button"
                          onClick={() => handleExportDemo(`Reassign notice for ${comp.id}`)}
                          className="px-3 py-1.5 rounded bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors"
                        >
                          पुनः आवंटन
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 8: LEGAL SUPPORT TRACKING */}
            {activeTab === 'legal' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      विधिक सहायता एवं मध्यस्थता ट्रैकिंग (Legal Support Tracking)
                    </h3>
                    <p className="text-xs text-slate-500">
                      श्रम न्यायालय, श्रमायुक्त (ALC/DLC) एवं विधिक नोटिस स्थिति
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    विधिक प्रकोष्ठ - सर्वोच्च न्यायालय व न्यायाधिकरण सलाहकार
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wide block mb-1">
                      केस संदर्भ: BMP-DEMO-2026-0001
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">45 संविदा श्रमिकों का वेतन भुगतान विवाद</strong>
                    <div className="mt-2 text-slate-600 space-y-1">
                      <div>फोरम: सहायक श्रमायुक्त (ALC) कानपुर</div>
                      <div>स्थिति: <strong>औपचारिक विधिक नोटिस जारी (Notice Drafted)</strong></div>
                      <div>अगली सुनवाई / वार्ता: 18 नवंबर 2026</div>
                      <div>अधिवक्ता: एड. विजयंत वर्मा (विधिक सलाहकार)</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wide block mb-1">
                      केस संदर्भ: BMP-DEMO-2026-0004
                    </span>
                    <strong className="text-sm font-bold text-slate-900 block">अवैध सेवामुक्ति एवं ग्रेच्युटी समझौता</strong>
                    <div className="mt-2 text-slate-600 space-y-1">
                      <div>फोरम: श्रम समझौता अधिकारी, अहमदाबाद</div>
                      <div>स्थिति: <strong>समझौता पूर्ण – ₹1,85,000 चेक प्राप्त (Resolved)</strong></div>
                      <div>निस्तारण तिथि: 29 अक्टूबर 2026</div>
                      <div>प्रतिनिधि: दीपक पटेल (समन्वयक)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 9: FINANCIAL ASSISTANCE TRACKING */}
            {activeTab === 'financial' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      आर्थिक सहायता विचार ट्रैकिंग (Financial Aid Review Module)
                    </h3>
                    <p className="text-xs text-slate-500">
                      कार्यस्थल दुर्घटना, आकस्मिक चिकित्सा एवं आपात राहत प्रस्तावों का आंतरिक मूल्यांकन
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    अनुदान निधि समीक्षा सेल
                  </span>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>नीतिगत नियम:</strong> आर्थिक सहायता संगठन के कल्याण कोष के नियमों और राष्ट्रीय कार्यकारी समिति के अनुमोदन के अधीन होती है। यह स्वतः देय अधिकार नहीं है अपितु अत्यधिक संकटग्रस्त सदस्यों के लिए एक मानवीय राहत पहल है।
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                        <th className="p-3">केस आईडी</th>
                        <th className="p-3">प्रभावित श्रमिक</th>
                        <th className="p-3">प्रस्तावित सहायता कारण</th>
                        <th className="p-3">अनुशंसा स्तर</th>
                        <th className="p-3">कार्यवाही</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-blue-900">BMP-DEMO-2026-0002</td>
                        <td className="p-3 font-semibold text-slate-900">सुनील शिंदे (चाकन MIDC)</td>
                        <td className="p-3 text-slate-700">कार्यस्थल वेल्डिंग दुर्घटना उपचार सहायता</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900">
                            Emergency Aid Recommended
                          </span>
                        </td>
                        <td className="p-3">
                          <button
                            type="button"
                            onClick={() => handleExportDemo('Approval voucher for Case BMP-DEMO-2026-0002')}
                            className="px-2.5 py-1 rounded bg-slate-900 text-white font-medium hover:bg-slate-800"
                          >
                            स्वीकृति फॉर्म
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 10: REPORTS & ANALYTICS */}
            {activeTab === 'reports' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      विस्तृत रिपोर्ट एवं विश्लेषणात्मक डैशबोर्ड (Executive Reporting)
                    </h3>
                    <p className="text-xs text-slate-500">
                      राज्य-वार, जिला-वार, श्रेणी-वार एवं टीम प्रदर्शन रिपोर्ट
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleExportDemo('Comprehensive National Annual Report 2026')}
                    className="px-3.5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>वार्षिक रिपोर्ट डाउनलोड (PDF Demo)</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-semibold text-slate-700 block mb-1">राज्य-वार संकलन रिपोर्ट</span>
                    <p className="text-slate-500 text-[11px] mb-3">18 राज्यों में कुल लंबित और निस्तारित प्रकरणों का आंकड़ा।</p>
                    <button
                      type="button"
                      onClick={() => handleExportDemo('State Wise Summary')}
                      className="text-blue-900 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>डाउनलोड CSV</span>
                      <Download className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-semibold text-slate-700 block mb-1">उद्योग श्रेणी रिपोर्ट</span>
                    <p className="text-slate-500 text-[11px] mb-3">ऑटोमोबाइल, विनिर्माण, परिधान और निर्माण क्षेत्र का तुलनात्मक विश्लेषण।</p>
                    <button
                      type="button"
                      onClick={() => handleExportDemo('Sector Wise Analytics')}
                      className="text-blue-900 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>डाउनलोड CSV</span>
                      <Download className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="font-semibold text-slate-700 block mb-1">टीम निस्तारण दक्षता रिपोर्ट</span>
                    <p className="text-slate-500 text-[11px] mb-3">मंडल समन्वयकों द्वारा मामले के निस्तारण में लगने वाला औसत समय।</p>
                    <button
                      type="button"
                      onClick={() => handleExportDemo('Team Performance Metrics')}
                      className="text-blue-900 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>डाउनलोड CSV</span>
                      <Download className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 11: NOTIFICATIONS */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100">
                  अखिल भारतीय सूचना केंद्र (Centralized Notification Feed)
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 flex items-start gap-3">
                    <Bell className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">नई शिकायत पंजीकृत: BMP-DEMO-2026-0005</strong>
                      <span className="text-slate-600 block">ओखला परिधान कामगार शिफ्ट घंटे और ओवरटाइम विसंगति।</span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1 block">2 घंटे पूर्व · सिस्टम अलर्ट</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">सफलतापूर्वक निस्तारित: BMP-DEMO-2026-0004</strong>
                      <span className="text-slate-600 block">अहमदाबाद विधिक मध्यस्थता द्वारा ₹1,85,000 चेक हस्तांतरित।</span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1 block">1 दिन पूर्व · विधिक प्रकोष्ठ</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/50 flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">औचक सुरक्षा निरीक्षण रिमाइंडर: चाकन MIDC</strong>
                      <span className="text-slate-600 block">फैक्ट्री इंस्पेक्टर के साथ संयुक्त निरीक्षण 15 नवंबर को निर्धारित।</span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1 block">2 दिन पूर्व · महाराष्ट्र राज्य कार्यालय</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 12: AUDIT LOGS */}
            {activeTab === 'audit' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      सिस्टम ऑडिट एवं सुरक्षा अभिलेख (System Audit Trail)
                    </h3>
                    <p className="text-xs text-slate-500">
                      सभी प्रशासनिक परिवर्तनों, स्थिति अद्यतनों एवं दस्तावेज़ अपलोड के अपरिवर्तनीय लॉग
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleExportDemo('Full System Security Audit Trail')}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold"
                  >
                    लॉग निर्यात (CSV)
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                        <th className="p-3">टाइमस्टैम्प (Timestamp)</th>
                        <th className="p-3">उपयोगकर्ता (User)</th>
                        <th className="p-3">क्रिया (Action)</th>
                        <th className="p-3">विवरण (Audit Details)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                      {DEMO_AUDIT_LOGS.map(log => (
                        <tr key={log.id} className="hover:bg-slate-50">
                          <td className="p-3 text-slate-500">{log.timestamp}</td>
                          <td className="p-3 text-blue-900 font-bold">{log.user}</td>
                          <td className="p-3 font-semibold text-slate-700">{log.action}</td>
                          <td className="p-3 text-slate-600 font-sans">{log.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 13: ROLES */}
            {activeTab === 'roles' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100">
                  भूमिका-आधारित अभिगम नियंत्रण (Role-Based Access Control - RBAC)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <strong className="text-sm font-bold text-slate-900 block mb-1">National Admin</strong>
                    <p className="text-slate-600 text-[11px] mb-2">संपूर्ण भारत के 18 राज्यों, बजट, सदस्यता एवं विधिक मामलों का सर्वोच्च नियंत्रण।</p>
                    <span className="text-[10px] bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-bold">पूर्ण प्रशासनिक अधिकार</span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <strong className="text-sm font-bold text-slate-900 block mb-1">State Admin (राज्य संयोजक)</strong>
                    <p className="text-slate-600 text-[11px] mb-2">अपने राज्य के अंतर्गत आने वाले सभी जिलों में शिकायतों की निगरानी एवं आवंटन।</p>
                    <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">राज्य स्तरीय अधिकार</span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <strong className="text-sm font-bold text-slate-900 block mb-1">District Admin (जिला सचिव)</strong>
                    <p className="text-slate-600 text-[11px] mb-2">जिले के औद्योगिक क्षेत्रों में शिकायतों की प्राथमिक जांच, साक्ष्य संकलन व रिपोर्ट।</p>
                    <span className="text-[10px] bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-bold">जिला स्तरीय अधिकार</span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <strong className="text-sm font-bold text-slate-900 block mb-1">Authorized Team Member</strong>
                    <p className="text-slate-600 text-[11px] mb-2">सौंपी गई विशिष्ट शिकायत पर स्थिति अद्यतन एवं आंतरिक टिप्पणी जोड़ने की अनुमति।</p>
                    <span className="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-bold">कार्यभार सीमित</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 14: SETTINGS */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 animate-fadeIn">
                <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100">
                  सिस्टम विन्यास एवं सेटिंग्स (Enterprise Configuration)
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div>
                      <strong className="block text-slate-900">स्वतः शिकायत आईडी उपसर्ग (Prefix)</strong>
                      <span className="text-slate-500">वर्तमान प्रारूप: BMP-DEMO-2026-XXXX</span>
                    </div>
                    <span className="px-3 py-1 bg-white border border-slate-300 rounded font-mono font-bold">BMP</span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div>
                      <strong className="block text-slate-900">स्वचालित ईमेल व एसएमएस अधिसूचना (Notification Relay)</strong>
                      <span className="text-slate-500">शिकायतकर्ता एवं जिला संयोजक को तुरंत सूचना प्रेषण</span>
                    </div>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded">सक्रिय (Enabled)</span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div>
                      <strong className="block text-slate-900">क्लाउड बैकअप एवं ऑडिट रिटेंशन</strong>
                      <span className="text-slate-500">अपरिवर्तनीय डिजिटल अभिलेख अवधि</span>
                    </div>
                    <span className="font-semibold text-slate-700">7 वर्ष (Statutory Compliance)</span>
                  </div>
                </div>
              </div>
            )}

          </main>

        </div>
      </div>

    </div>
  );
};
