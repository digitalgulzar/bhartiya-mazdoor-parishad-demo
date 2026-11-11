export interface PackageFeature {
  featureNameHi: string;
  featureNameEn: string;
  category: string;
  pkg1: boolean;
  pkg2: boolean;
  pkg3: boolean;
  noteHi?: string;
  noteEn?: string;
}

export interface PackageTier {
  id: 'pkg1' | 'pkg2' | 'pkg3';
  tierNumber: 1 | 2 | 3;
  nameHi: string;
  nameEn: string;
  taglineHi: string;
  taglineEn: string;
  descriptionHi: string;
  descriptionEn: string;
  badgeHi: string;
  badgeEn: string;
  primaryHighlight: string;
  includedFeaturesHi: string[];
  includedFeaturesEn: string[];
  notIncludedHi: string[];
  notIncludedEn: string[];
  idealForHi: string;
  idealForEn: string;
  color: string;
}

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: 'pkg1',
    tierNumber: 1,
    nameHi: 'पैकेज 1 – प्रोफेशनल वेबसाइट',
    nameEn: 'Package 1 – Professional Website',
    taglineHi: 'संगठन की आधिकारिक डिजिटल पहचान और राष्ट्रव्यापी उपस्थिति',
    taglineEn: 'Build Your Organization’s Digital Identity',
    descriptionHi: 'भारतीय मजदूर परिषद के लिए एक भव्य, मोबाइल-अनुकूल और आधुनिक संगठनात्मक वेबसाइट जो कार्यकर्ताओं, जनता और प्रशासनिक अधिकारियों को संगठन के उद्देश्यों और गतिविधियों से परिचित कराती है।',
    descriptionEn: 'A high-impact, responsive, modern institutional website establishing credibility, publishing labour rights awareness, leadership directories, and official circulars.',
    badgeHi: 'डिजिटल उपस्थिति',
    badgeEn: 'Digital Presence',
    primaryHighlight: 'आधिकारिक वेबसाइट + प्रचार + संपर्क केंद्र',
    idealForHi: 'उन संगठनों के लिए जो प्रथम चरण में डिजिटल पहचान, विश्वसनीयता और समाचार प्रकाशन स्थापित करना चाहते हैं।',
    idealForEn: 'Ideal for establishing organizational authenticity, press distribution, and member communication.',
    color: 'border-slate-300 text-slate-800',
    includedFeaturesHi: [
      'प्रोफेशनल रिस्पॉन्सिव वेबसाइट (मोबाइल, टैबलेट, डेस्कटॉप)',
      'आकर्षक मुख्य पृष्ठ (Homepage) एवं बैनर',
      'संगठन परिचय (About Organization)',
      'उद्देश्य एवं विज़न (Mission & Vision)',
      'राष्ट्रीय एवं राज्य नेतृत्व प्रोफाइल (Leadership Profiles)',
      'गतिविधियां एवं कार्यक्रम गैलरी (Activities & Event Gallery)',
      'मजदूर अधिकार जागरूकता लेख (Labour Rights Articles)',
      'समाचार एवं आधिकारिक विज्ञप्ति (News & Announcements)',
      'संपर्क पृष्ठ एवं फॉर्म (Contact Page & Enquiry Form)',
      'सीधा व्हाट्सएप संपर्क बटन (Direct WhatsApp Button)',
      'सोशल मीडिया लिंक एकीकरण',
      'बुनियादी सर्च इंजन अनुकूलन (Basic SEO)',
      'वेबसाइट सामग्री प्रबंधन व्यवस्था (Content Management)'
    ],
    includedFeaturesEn: [
      'Professional Responsive Website (Mobile, Tablet, Desktop)',
      'Modern High-Impact Homepage',
      'About Organization Page',
      'Mission and Vision Section',
      'National and State Leadership Profiles',
      'Activities and Events Photo/Video Gallery',
      'Labour Rights Awareness Articles & Guides',
      'News & Official Announcements',
      'Contact Page & Interactive Form',
      'Direct WhatsApp Contact Button',
      'Social Media Channels Integration',
      'Basic Search Engine Optimization (SEO)',
      'Admin Content Editing Setup'
    ],
    notIncludedHi: [
      'ऑनलाइन श्रमिक शिकायत पंजीकरण नहीं',
      'शिकायत ट्रैकिंग (Complaint Tracking) नहीं',
      'शिकायत प्रबंधन एडमिन डैशबोर्ड नहीं',
      'राज्य या जिला स्तर पर शिकायत आवंटन नहीं',
      'राष्ट्रीय प्रबंधन प्रणाली (National Management ERP) नहीं'
    ],
    notIncludedEn: [
      'No Online Worker Complaint Registration',
      'No Complaint Tracking by ID',
      'No Complaint Management Dashboard',
      'No State/District Complaint Assignment',
      'No National Multi-Level Management System'
    ]
  },
  {
    id: 'pkg2',
    tierNumber: 2,
    nameHi: 'पैकेज 2 – वेबसाइट + शिकायत प्रबंधन पोर्टल',
    nameEn: 'Package 2 – Website + Complaint Portal',
    taglineHi: 'श्रमिक शिकायतों का ऑनलाइन पंजीकरण और व्यवस्थित निस्तारण',
    taglineEn: 'Digitize Worker Complaints and Assistance Management',
    descriptionHi: 'पैकेज 1 की सभी सुविधाओं के साथ-साथ एक पूर्ण ऑनलाइन शिकायत पंजीकरण फॉर्म, स्वतः विशिष्ट आईडी जनरेशन, पारदर्शी ट्रैकिंग और संगठन के पदाधिकारियों के लिए एक सुरक्षित एडमिन डैशबोर्ड।',
    descriptionEn: 'Includes everything in Package 1 plus an end-to-end worker grievance intake portal, automated unique Complaint IDs, live status tracking, and a dedicated officer administration dashboard.',
    badgeHi: 'सर्वाधिक लोकप्रिय',
    badgeEn: 'Most Popular',
    primaryHighlight: 'वेबसाइट + संपूर्ण ऑनलाइन शिकायत निवारण प्रणाली',
    idealForHi: 'उन संगठनों के लिए जो सीधे श्रमिकों से जुड़कर उनकी समस्याओं (वेतन, कार्यस्थल, उत्पीड़न) को व्यवस्थित रूप से दर्ज व ट्रैक करना चाहते हैं।',
    idealForEn: 'Ideal for unions and organizations actively receiving worker grievances, wage dispute cases, and workplace issues.',
    color: 'border-blue-600 ring-2 ring-blue-600/20 text-blue-900',
    includedFeaturesHi: [
      'पैकेज 1 की समस्त सुविधाएं सम्मिलित',
      'ऑनलाइन श्रमिक शिकायत पंजीकरण फॉर्म',
      'श्रमिक व्यक्तिगत विवरण (नाम, फोन, शहर, पता)',
      'नियोक्ता / कंपनी / ठेकेदार की जानकारी',
      'शिकायत की श्रेणी (वेतन, सुरक्षा, अवैध बर्खास्तगी आदि)',
      'विशिष्ट शिकायत आईडी जनरेशन (उदा. BMP-DEMO-2026-0001)',
      'शिकायतकर्ता द्वारा शिकायत स्थिति ट्रैकिंग (Live Tracking)',
      '7-चरणीय शिकायत प्रगति टाइमलाइन (Submitted से Resolved तक)',
      'प्रशासनिक लॉगिन एवं शिकायत डैशबोर्ड (Admin Portal)',
      'खोज, श्रेणी एवं स्थिति अनुसार फ़िल्टरिंग',
      'शिकायत स्थिति अद्यतन (Status Update)',
      'आंतरिक समीक्षा टिप्पणी जोड़ना (Internal Remarks)',
      'अधिकृत कार्यकर्ता / टीम को शिकायत सौंपना',
      'साक्ष्य/दस्तावेज संलग्नक इंटरफ़ेस (डेमो अपलोड)'
    ],
    includedFeaturesEn: [
      'Includes ALL Features of Package 1',
      'Online Worker Complaint Registration Form',
      'Worker Personal Info (Name, Mobile, City, Village)',
      'Employer / Contractor / Company Details',
      'Complaint Categories (Pending Wages, Safety, Termination, etc.)',
      'Automated Unique Complaint ID (e.g. BMP-DEMO-2026-0001)',
      'Public Complaint Tracking by Unique ID',
      '7-Stage Redressal Progress Timeline',
      'Secure Admin Dashboard for Grievance Handling',
      'Search, Category & Status Filter Capabilities',
      'Live Status Updates with Timestamps',
      'Internal Notes & Officer Remarks System',
      'Assignment to Authorized Team Member',
      'Evidence / Document Upload Interface (Demo Mode)'
    ],
    notIncludedHi: [
      'बहु-स्तरीय राष्ट्रीय/राज्य/जिला पदानुक्रम नहीं',
      'कानूनी सहायता एवं वित्तीय अनुदान विस्तृत ट्रैकिंग नहीं',
      'राज्य-वार विस्तृत विश्लेषणात्मक चार्ट्स नहीं',
      'सिस्टम ऑडिट लॉग्स एवं बहु-भूमिका अनुमतियां नहीं'
    ],
    notIncludedEn: [
      'No Multi-Tier Hierarchy (National / State / District Admins)',
      'No Dedicated Legal Support & Financial Aid Tracking',
      'No State-wise Demographic & Performance Analytics',
      'No System Audit Logs or Granular Role Permissions'
    ]
  },
  {
    id: 'pkg3',
    tierNumber: 3,
    nameHi: 'पैकेज 3 – संपूर्ण राष्ट्रीय प्रबंधन प्रणाली (ERP)',
    nameEn: 'Package 3 – Complete National-Level Management System',
    taglineHi: 'राष्ट्रीय, राज्य और जिला स्तर की इकाइयों का एक केंद्रीकृत डिजिटल मंच',
    taglineEn: 'One Centralized Platform for National, State and District Teams',
    descriptionHi: 'भारतीय मजदूर परिषद के विस्तार और पूरे भारत में 100+ जिलों के संचालन के लिए निर्मित संपूर्ण प्रबंधन सॉफ्टवेयर। इसमें राष्ट्रीय अध्यक्ष/एडमिन, राज्य संयोजक, जिला सचिव, कानूनी सलाहकार और जांच टीमों के लिए अलग-अलग अनुमतियां हैं।',
    descriptionEn: 'The flagship enterprise governance suite designed for nationwide scale. Enables National, State, and District hierarchies, multi-tier escalation, legal aid casework, financial assistance review, state analytics, and audit logging.',
    badgeHi: 'संपूर्ण राष्ट्रीय समाधान',
    badgeEn: 'Enterprise National Suite',
    primaryHighlight: 'राष्ट्रीय, राज्य एवं जिला इकाइयों का केंद्रीकृत सॉफ्टवेयर',
    idealForHi: 'बड़े राष्ट्रीय स्तर के संगठनों के लिए जिनकी कई राज्यों और जिलों में शाखाएं हैं और जिन्हें उच्चस्तरीय समन्वय और पारदर्शी नियंत्रण चाहिए।',
    idealForEn: 'For large nationwide labour federations requiring multi-state chapters, district coordinators, legal committees, and complete governance.',
    color: 'border-amber-600 ring-2 ring-amber-600/30 text-amber-950',
    includedFeaturesHi: [
      'पैकेज 1 एवं 2 की समस्त सुविधाएं सम्मिलित',
      'बहु-स्तरीय प्रशासनिक व्यवस्था (National, State, District, Member Roles)',
      'भूमिका-आधारित डैशबोर्ड एक्सेस (Role-Based Access Control)',
      'राज्य-वार एवं जिला-वार शिकायत प्रबंधन व स्वचालित आवंटन',
      'पदाधिकारी एवं कार्यकर्ता प्रबंधन (Team Management)',
      'सदस्यता प्रबंधन पंजी (Member Registration & Directory)',
      'उन्नत शिकायत सत्यापन व प्राथमिकता वर्गीकरण (Urgent, High, Normal)',
      'कानूनी सहायता प्रकरण ट्रैकिंग (Legal Support Tracking)',
      'आर्थिक सहायता विचार ट्रैकिंग (Financial Aid Review Tracking)',
      'अनुवर्ती अनुस्मारक व शिकायत इतिहास (Complete Audit Trail)',
      'शिकायत समाधान व क्लोजर अभिलेख (Closure Certification)',
      'राज्य-वार व जिला-वार विश्लेषणात्मक रिपोर्ट एवं चार्ट्स (Recharts Analytics)',
      'टीम कार्यक्षमता व निस्तारण दर रिपोर्ट (Performance Metrics)',
      'डेटा निर्यात इंटरफ़ेस (Excel/PDF Demo Export)',
      'सिस्टम ऑडिट लॉग्स एवं सुरक्षा निगरानी (System Audit Logs)',
      'सूचना केंद्र (Automated Notification Center)'
    ],
    includedFeaturesEn: [
      'Includes ALL Features of Package 1 & Package 2',
      'Multi-Level Hierarchy (National Admin, State Admin, District Admin)',
      'Role-Based Dashboard Permissions (RBAC)',
      'State-Wise & District-Wise Complaint Workflow',
      'Leadership & Authorized Worker Directory (Team Management)',
      'Member Registration & Verified Membership Directory',
      'Priority Classification (Critical, High, Medium, Standard)',
      'Legal Aid Case Tracking Module',
      'Financial Assistance Consideration Module',
      'Complete Complaint Activity Audit Trail & Timestamps',
      'Escalation Workflow & Official Closure Records',
      'State-Wise & Category-Wise Graphical Analytics (Recharts)',
      'Team Resolution Performance Overview',
      'Report Export Interface (Demo PDF / CSV)',
      'System Audit Logs & Security Activity Records',
      'Central Notification Center'
    ],
    notIncludedHi: [],
    notIncludedEn: []
  }
];

export const COMPARISON_MATRIX: PackageFeature[] = [
  {
    featureNameHi: 'प्रोफेशनल रिस्पॉन्सिव वेबसाइट',
    featureNameEn: 'Professional Responsive Website',
    category: 'सार्वजनिक वेबसाइट (Public Website)',
    pkg1: true,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'संगठन परिचय, मिशन एवं विज़न',
    featureNameEn: 'About Us, Mission & Vision',
    category: 'सार्वजनिक वेबसाइट (Public Website)',
    pkg1: true,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'राष्ट्रीय एवं राज्य नेतृत्व प्रोफाइल',
    featureNameEn: 'Leadership Directory & Profiles',
    category: 'सार्वजनिक वेबसाइट (Public Website)',
    pkg1: true,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'मजदूर अधिकार जागरूकता सामग्री',
    featureNameEn: 'Labour Rights Awareness Guides',
    category: 'सार्वजनिक वेबसाइट (Public Website)',
    pkg1: true,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'कार्यक्रम गैलरी एवं समाचार बुलेटिन',
    featureNameEn: 'Activity Gallery & News Updates',
    category: 'सार्वजनिक वेबसाइट (Public Website)',
    pkg1: true,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'संपर्क फॉर्म एवं व्हाट्सएप बटन',
    featureNameEn: 'Contact Form & Direct WhatsApp',
    category: 'सार्वजनिक वेबसाइट (Public Website)',
    pkg1: true,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'ऑनलाइन श्रमिक शिकायत पंजीकरण फॉर्म',
    featureNameEn: 'Online Worker Complaint Form',
    category: 'शिकायत प्रबंधन (Complaint Management)',
    pkg1: false,
    pkg2: true,
    pkg3: true,
    noteHi: 'पैकेज 1 में उपलब्ध नहीं',
    noteEn: 'Not included in Pkg 1'
  },
  {
    featureNameHi: 'विशिष्ट शिकायत आईडी (Unique Complaint ID)',
    featureNameEn: 'Unique Complaint ID Generation',
    category: 'शिकायत प्रबंधन (Complaint Management)',
    pkg1: false,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'सार्वजनिक शिकायत स्थिति ट्रैकिंग (Live Tracker)',
    featureNameEn: 'Public Status Tracking Portal',
    category: 'शिकायत प्रबंधन (Complaint Management)',
    pkg1: false,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: '7-चरणीय निवारण प्रगति टाइमलाइन',
    featureNameEn: '7-Stage Progress Timeline',
    category: 'शिकायत प्रबंधन (Complaint Management)',
    pkg1: false,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'साक्ष्य/दस्तावेज संलग्नक इंटरफ़ेस',
    featureNameEn: 'Evidence/Document Upload UI',
    category: 'शिकायत प्रबंधन (Complaint Management)',
    pkg1: false,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'प्रशासनिक डैशबोर्ड (Admin Dashboard)',
    featureNameEn: 'Admin Management Dashboard',
    category: 'प्रशासनिक संचालन (Administration)',
    pkg1: false,
    pkg2: true,
    pkg3: true,
    noteHi: 'पैकेज 2 में मानक, पैकेज 3 में बहु-स्तरीय',
    noteEn: 'Standard in P2, Advanced in P3'
  },
  {
    featureNameHi: 'शिकायत स्थिति अद्यतन एवं आंतरिक टिप्पणियां',
    featureNameEn: 'Status Updates & Internal Remarks',
    category: 'प्रशासनिक संचालन (Administration)',
    pkg1: false,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'अधिकारी को शिकायत सौंपना (Team Assignment)',
    featureNameEn: 'Team Member Case Assignment',
    category: 'प्रशासनिक संचालन (Administration)',
    pkg1: false,
    pkg2: true,
    pkg3: true,
  },
  {
    featureNameHi: 'राज्य एवं जिला स्तर पर पृथक प्रबंधन',
    featureNameEn: 'State & District Wise Isolation',
    category: 'राष्ट्रीय स्तर की विशेषताएं (National Suite)',
    pkg1: false,
    pkg2: false,
    pkg3: true,
    noteHi: 'केवल पैकेज 3 में उपलब्ध',
    noteEn: 'Exclusive to Package 3'
  },
  {
    featureNameHi: 'बहु-भूमिका पहुंच (National/State/District Admins)',
    featureNameEn: 'Multi-Role Hierarchy (RBAC)',
    category: 'राष्ट्रीय स्तर की विशेषताएं (National Suite)',
    pkg1: false,
    pkg2: false,
    pkg3: true,
    noteHi: 'केवल पैकेज 3 में उपलब्ध',
    noteEn: 'Exclusive to Package 3'
  },
  {
    featureNameHi: 'केंद्रीकृत राष्ट्रीय डैशबोर्ड (Central HQ Console)',
    featureNameEn: 'Centralized National Dashboard',
    category: 'राष्ट्रीय स्तर की विशेषताएं (National Suite)',
    pkg1: false,
    pkg2: false,
    pkg3: true,
  },
  {
    featureNameHi: 'कानूनी सहायता प्रकरण ट्रैकिंग (Legal Support)',
    featureNameEn: 'Legal Aid Case Tracking',
    category: 'विशिष्ट सहायता वर्कफ़्लो (Specialized Workflow)',
    pkg1: false,
    pkg2: false,
    pkg3: true,
  },
  {
    featureNameHi: 'आर्थिक सहायता विचार ट्रैकिंग (Financial Aid)',
    featureNameEn: 'Financial Aid Review Tracking',
    category: 'विशिष्ट सहायता वर्कफ़्लो (Specialized Workflow)',
    pkg1: false,
    pkg2: false,
    pkg3: true,
  },
  {
    featureNameHi: 'राज्य-वार ग्राफिकल एनालिटिक्स एवं चार्ट्स',
    featureNameEn: 'State-Wise Graphical Analytics',
    category: 'रिपोर्ट्स एवं विश्लेषण (Analytics)',
    pkg1: false,
    pkg2: false,
    pkg3: true,
  },
  {
    featureNameHi: 'सदस्यता पंजीयन एवं निर्देशिका (Membership Directory)',
    featureNameEn: 'Membership Management & Directory',
    category: 'संगठन संसाधन (Governance)',
    pkg1: false,
    pkg2: false,
    pkg3: true,
  },
  {
    featureNameHi: 'सिस्टम ऑडिट लॉग्स (Security Audit Logs)',
    featureNameEn: 'Complete Audit Trail Logs',
    category: 'सुरक्षा एवं अनुपालन (Compliance)',
    pkg1: false,
    pkg2: false,
    pkg3: true,
  }
];
