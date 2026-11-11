export type ComplaintStatus =
  | 'Submitted'
  | 'Under Review'
  | 'Additional Information Required'
  | 'Assigned to Team'
  | 'Assistance Under Consideration'
  | 'Resolved'
  | 'Closed';

export type ComplaintCategory =
  | 'Pending Salary'
  | 'Minimum Wages'
  | 'Unfair Termination'
  | 'Workplace Safety'
  | 'Working Hours'
  | 'Harassment'
  | 'PF/ESI-related Grievance'
  | 'Other Labour Issues';

export type PriorityLevel = 'Critical' | 'High' | 'Medium' | 'Standard';

export interface TimelineEvent {
  status: ComplaintStatus;
  date: string;
  note: string;
  by: string;
}

export interface InternalRemark {
  id: string;
  date: string;
  author: string;
  role: string;
  content: string;
}

export interface Complaint {
  id: string; // e.g. BMP-DEMO-2026-0001
  fullName: string;
  mobile: string;
  email?: string;
  state: string;
  district: string;
  cityVillage: string;
  employer: string;
  workplaceAddress?: string;
  category: ComplaintCategory;
  incidentDate: string;
  pendingSalaryAmount?: string;
  description: string;
  evidenceFiles?: string[];
  consentGiven: boolean;
  status: ComplaintStatus;
  priority: PriorityLevel;
  assignedOfficer?: string;
  assignedDepartment?: string;
  submittedAt: string;
  lastUpdatedAt: string;
  timeline: TimelineEvent[];
  internalRemarks: InternalRemark[];
  legalSupportRequested?: boolean;
  legalStatus?: 'None' | 'Notice Drafted' | 'Labour Commissioner Hearing' | 'Conciliation Scheduled';
  financialAssistanceReviewed?: boolean;
  financialAidStatus?: 'None' | 'Under Review' | 'Emergency Aid Recommended' | 'Not Applicable';
}

export const INITIAL_COMPLAINTS: Complaint[] = [
  {
    id: 'BMP-DEMO-2026-0001',
    fullName: 'रमेश कुमार प्रजापति (Ramesh Kumar)',
    mobile: '98765-XXXX1',
    email: 'ramesh.worker.demo@gmail.com',
    state: 'Uttar Pradesh',
    district: 'Kanpur Nagar',
    cityVillage: 'Panki Industrial Area',
    employer: 'श्री कृष्णा पॉलीमर प्रा. लि. (Shree Krishna Polymers)',
    workplaceAddress: 'Plot 42, Sector 3, Panki Site 4, Kanpur',
    category: 'Pending Salary',
    incidentDate: '2026-10-15',
    pendingSalaryAmount: '42,500',
    description: 'पिछले 3 माह से 45 संविदा श्रमिकों का वेतन भुगतान रोका गया है। प्रबंधन से कई बार अनुरोध करने पर भी कोई संतोषजनक उत्तर नहीं दिया गया। परिवार का भरण-पोषण अत्यंत संकट में है।',
    evidenceFiles: ['salary_slip_oct2026_demo.pdf', 'attendance_muster_copy_demo.jpg'],
    consentGiven: true,
    status: 'Assigned to Team',
    priority: 'High',
    assignedOfficer: 'संजय अवस्थी (संयोजक - कानपुर मंडल)',
    assignedDepartment: 'औद्योगिक विवाद निवारण प्रकोष्ठ (Industrial Dispute Cell)',
    submittedAt: '2026-10-20T10:30:00Z',
    lastUpdatedAt: '2026-11-04T14:15:00Z',
    legalSupportRequested: true,
    legalStatus: 'Notice Drafted',
    financialAssistanceReviewed: false,
    timeline: [
      {
        status: 'Submitted',
        date: '2026-10-20 10:30 AM',
        note: 'श्रमिक द्वारा ऑनलाइन पोर्टल पर शिकायत दर्ज की गई।',
        by: 'System (Portal)'
      },
      {
        status: 'Under Review',
        date: '2026-10-22 11:00 AM',
        note: 'कानपुर जिला समन्वय समिति द्वारा प्रारंभिक जांच पूर्ण, वेतन पर्चियों का मिलान किया गया।',
        by: 'रविन्द्र सिंह (जिला सह-सचिव)'
      },
      {
        status: 'Assigned to Team',
        date: '2026-11-04 02:15 PM',
        note: 'प्रबंधन को औपचारिक संगठन पत्र जारी करने हेतु मंडल संयोजक को मामला सौंपा गया।',
        by: 'राज्य कार्यालय लखनऊ'
      }
    ],
    internalRemarks: [
      {
        id: 'rem-1',
        date: '2026-10-22 11:30 AM',
        author: 'रविन्द्र सिंह',
        role: 'जिला सह-सचिव, कानपुर',
        content: 'श्रमिकों के प्रतिनिधिमंडल से टेलीफोन पर वार्ता हुई। कुल 45 कामगार प्रभावित हैं। प्रबंधन को श्रम विभाग के नियमों का स्मरण पत्र तैयार कराया जा रहा है।'
      },
      {
        id: 'rem-2',
        date: '2026-11-04 02:20 PM',
        author: 'संजय अवस्थी',
        role: 'मंडल संयोजक',
        content: 'सहायक श्रमायुक्त (ALC) कानपुर के समक्ष 18 नवंबर को त्रिपक्षीय वार्ता का ज्ञापन प्रस्तुत किया जाएगा।'
      }
    ]
  },
  {
    id: 'BMP-DEMO-2026-0002',
    fullName: 'सुनील तात्याराव शिंदे (Sunil Shinde)',
    mobile: '98220-XXXX2',
    email: 'sunil.shinde.demo@gmail.com',
    state: 'Maharashtra',
    district: 'Pune',
    cityVillage: 'Chakan MIDC',
    employer: 'एपेक्स ऑटो कंपोनेंट्स वर्क्स (Apex Auto Components)',
    workplaceAddress: 'Phase II, Chakan MIDC, Pune',
    category: 'Workplace Safety',
    incidentDate: '2026-10-28',
    pendingSalaryAmount: '0',
    description: 'वेल्डिंग और प्रेस शॉप में उचित सुरक्षा उपकरण (PPE, सेफ्टी बूट्स और फेस शील्ड) प्रदान नहीं किए जा रहे हैं। पिछले हफ्ते 2 श्रमिक मामूली रूप से झुलस गए थे। सुरक्षा निरीक्षण की सख्त आवश्यकता है।',
    evidenceFiles: ['shop_floor_photo_demo.jpg'],
    consentGiven: true,
    status: 'Assistance Under Consideration',
    priority: 'Critical',
    assignedOfficer: 'प्रमोद गायकवाड़ (राज्य सचिव, महाराष्ट्र)',
    assignedDepartment: 'सुरक्षा एवं श्रमिक स्वास्थ्य समिति',
    submittedAt: '2026-10-30T09:15:00Z',
    lastUpdatedAt: '2026-11-08T16:00:00Z',
    legalSupportRequested: false,
    legalStatus: 'None',
    financialAssistanceReviewed: true,
    financialAidStatus: 'Emergency Aid Recommended',
    timeline: [
      {
        status: 'Submitted',
        date: '2026-10-30 09:15 AM',
        note: 'पोर्टल पर कार्यस्थल सुरक्षा उल्लंघन की शिकायत पंजीकृत।',
        by: 'System'
      },
      {
        status: 'Under Review',
        date: '2026-11-01 10:45 AM',
        note: 'चाकन औद्योगिक इकाई के सेफ्टी स्टैंडर्ड्स की समीक्षा की गई।',
        by: 'पुणे जिला समिति'
      },
      {
        status: 'Assigned to Team',
        date: '2026-11-03 01:00 PM',
        note: 'महाराष्ट्र राज्य स्वास्थ्य एवं सुरक्षा प्रकोष्ठ को जांच हेतु प्रेषित।',
        by: 'राज्य एडमिन'
      },
      {
        status: 'Assistance Under Consideration',
        date: '2026-11-08 04:00 PM',
        note: 'फैक्ट्री इंस्पेक्टर को संयुक्त ज्ञापन एवं घायल कामगारों के लिए राहत पर विचार।',
        by: 'प्रमोद गायकवाड़'
      }
    ],
    internalRemarks: [
      {
        id: 'rem-3',
        date: '2026-11-08 04:15 PM',
        author: 'प्रमोद गायकवाड़',
        role: 'राज्य सचिव',
        content: 'स्थानीय सेफ्टी इंस्पेक्टर से बातचीत की गई है। 15 नवंबर को परिसर का औचक निरीक्षण प्रस्तावित है।'
      }
    ]
  },
  {
    id: 'BMP-DEMO-2026-0003',
    fullName: 'अमितोष कुमार झा (Amitosh Jha)',
    mobile: '94312-XXXX3',
    email: 'amitosh.jha.demo@yahoo.com',
    state: 'Bihar',
    district: 'Patna',
    cityVillage: 'Fatwah Industrial Area',
    employer: 'गंगा वेयरहाउसिंग एंड लॉजिस्टिक्स',
    workplaceAddress: 'NH-30, Fatwah, Patna',
    category: 'PF/ESI-related Grievance',
    incidentDate: '2026-09-10',
    pendingSalaryAmount: '18,200',
    description: 'पिछले 14 महीनों से वेतन से ईएसआई और पीएफ की कटौती की जा रही है, परंतु ईपीएफओ पोर्टल पर पासबुक में राशि जमा नहीं हो रही है। यूएएन पर विवरण नहीं मिल रहा है।',
    evidenceFiles: ['salary_deduction_statement.pdf'],
    consentGiven: true,
    status: 'Under Review',
    priority: 'Medium',
    assignedOfficer: 'मुकेश कुमार (पटना जिला संयोजक)',
    assignedDepartment: 'श्रमिक सामाजिक सुरक्षा विंग',
    submittedAt: '2026-11-02T12:00:00Z',
    lastUpdatedAt: '2026-11-05T11:20:00Z',
    legalSupportRequested: false,
    legalStatus: 'None',
    timeline: [
      {
        status: 'Submitted',
        date: '2026-11-02 12:00 PM',
        note: 'ईपीएफ एवं ईएसआई विसंगति का ऑनलाइन पंजीकरण।',
        by: 'System'
      },
      {
        status: 'Under Review',
        date: '2026-11-05 11:20 AM',
        note: 'यूएएन स्लिप एवं कटौती रिकॉर्ड का सत्यापन किया जा रहा है।',
        by: 'मुकेश कुमार'
      }
    ],
    internalRemarks: [
      {
        id: 'rem-4',
        date: '2026-11-05 11:25 AM',
        author: 'मुकेश कुमार',
        role: 'जिला संयोजक',
        content: 'क्षेत्रीय पीएफ आयुक्त कार्यालय को नियोक्ता की ऑडिट रिपोर्ट प्रस्तुत कराने के लिए आवेदन पत्र का प्रारूप बनाया गया।'
      }
    ]
  },
  {
    id: 'BMP-DEMO-2026-0004',
    fullName: 'राजेश दयालभाई सोलंकी (Rajesh Solanki)',
    mobile: '97274-XXXX4',
    state: 'Gujarat',
    district: 'Ahmedabad',
    cityVillage: 'Vatva GIDC',
    employer: 'नवरंग टेक्सटाइल मिल्स',
    category: 'Unfair Termination',
    incidentDate: '2026-10-01',
    pendingSalaryAmount: '24,000',
    description: '12 वर्ष की निरंतर सेवा के उपरांत बिना किसी नोटिस या जांच के सेवामुक्त कर दिया गया। ग्रेच्युटी और अंतिम बकाया का भुगतान नहीं किया जा रहा है।',
    evidenceFiles: ['appointment_letter_copy.pdf'],
    consentGiven: true,
    status: 'Resolved',
    priority: 'High',
    assignedOfficer: 'दीपक पटेल (अहमदाबाद समन्वयक)',
    assignedDepartment: 'विधिक सहायता प्रकोष्ठ (Legal Aid Cell)',
    submittedAt: '2026-10-05T14:00:00Z',
    lastUpdatedAt: '2026-10-29T17:30:00Z',
    legalSupportRequested: true,
    legalStatus: 'Conciliation Scheduled',
    financialAssistanceReviewed: true,
    financialAidStatus: 'Not Applicable',
    timeline: [
      {
        status: 'Submitted',
        date: '2026-10-05 02:00 PM',
        note: 'अवैध सेवामुक्ति का प्रकरण दर्ज किया गया।',
        by: 'System'
      },
      {
        status: 'Assigned to Team',
        date: '2026-10-08 10:00 AM',
        note: 'विधिक समिति को मामला सुपुर्द।',
        by: 'गुजरात राज्य कार्यालय'
      },
      {
        status: 'Resolved',
        date: '2026-10-29 05:30 PM',
        note: 'संगठन की मध्यस्थता में प्रबंधन और कामगार के मध्य समझौता हुआ। बकाया ग्रेच्युटी ₹1,85,000 और पूर्ण वेतन का भुगतान चेक द्वारा सुनिश्चित किया गया।',
        by: 'दीपक पटेल'
      }
    ],
    internalRemarks: [
      {
        id: 'rem-5',
        date: '2026-10-29 05:40 PM',
        author: 'दीपक पटेल',
        role: 'अहमदाबाद समन्वयक',
        content: 'पक्षकारों ने समझौते पर हस्ताक्षर किए। प्रकरण सफलतापूर्वक निस्तारित।'
      }
    ]
  },
  {
    id: 'BMP-DEMO-2026-0005',
    fullName: 'श्रीमती आशा देवी (Asha Devi)',
    mobile: '96541-XXXX5',
    state: 'Delhi NCR',
    district: 'South West Delhi',
    cityVillage: 'Okhla Phase 2',
    employer: 'ग्लोबल गारमेंट एक्सपोर्ट्स',
    category: 'Working Hours',
    incidentDate: '2026-10-18',
    pendingSalaryAmount: '12,000',
    description: 'महिला कामगारों से 12 घंटे लगातार कार्य कराया जाता है, किंतु ओवरटाइम का भुगतान सामान्य दर पर भी नहीं दिया जाता। शाम को परिवहन की कोई व्यवस्था नहीं है।',
    evidenceFiles: [],
    consentGiven: true,
    status: 'Additional Information Required',
    priority: 'Medium',
    assignedOfficer: 'सुश्री वंदना शर्मा (महिला श्रमिक प्रकोष्ठ)',
    assignedDepartment: 'महिला श्रमिक कल्याण विंग',
    submittedAt: '2026-10-25T11:00:00Z',
    lastUpdatedAt: '2026-11-06T15:00:00Z',
    legalSupportRequested: false,
    legalStatus: 'None',
    timeline: [
      {
        status: 'Submitted',
        date: '2026-10-25 11:00 AM',
        note: 'अत्यधिक कार्य घंटे व ओवरटाइम विसंगति की शिकायत।',
        by: 'System'
      },
      {
        status: 'Additional Information Required',
        date: '2026-11-06 03:00 PM',
        note: 'कामकाजी शिफ्ट के समय और उपस्थिति पंचिंग कार्ड की प्रतिलिपि मंगाई गई है।',
        by: 'सुश्री वंदना शर्मा'
      }
    ],
    internalRemarks: [
      {
        id: 'rem-6',
        date: '2026-11-06 03:10 PM',
        author: 'सुश्री वंदना शर्मा',
        role: 'महिला प्रकोष्ठ',
        content: 'श्रमिक से संपर्क कर पंचिंग कार्ड व शिफ्ट रिकॉर्ड मंगाया गया ताकि श्रम निरीक्षक को ठोस आधार पर शिकायत भेजी जा सके।'
      }
    ]
  }
];

export const STATES_AND_DISTRICTS: Record<string, string[]> = {
  'Uttar Pradesh': ['Kanpur Nagar', 'Lucknow', 'Varanasi', 'Agra', 'Meerut', 'Noida / GB Nagar', 'Prayagraj', 'Gorakhpur'],
  'Maharashtra': ['Pune', 'Mumbai City', 'Mumbai Suburban', 'Thane', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur'],
  'Bihar': ['Patna', 'Muzaffarpur', 'Gaya', 'Bhagalpur', 'Purnia', 'Darbhanga', 'Begusarai'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Morbi', 'Gandhinagar'],
  'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Dewas'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Bhiwadi', 'Udaipur', 'Alwar', 'Bhilwara'],
  'Delhi NCR': ['Central Delhi', 'South West Delhi', 'North Delhi', 'Okhla / South', 'Shahdara'],
  'Haryana': ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Hisar', 'Sonipat'],
  'West Bengal': ['Kolkata', 'Howrah', 'Hooghly', 'North 24 Parganas', 'Asansol', 'Siliguri']
};

export const DEMO_TEAM_MEMBERS = [
  { id: 'tm-1', name: 'डॉ. सत्येंद्र नारायण (Dr. S. Narayan)', role: 'राष्ट्रीय अध्यक्ष (National President - Placeholder)', state: 'National', phone: '011-2338XXXX' },
  { id: 'tm-2', name: 'एडवोकेट विजयंत वर्मा (Adv. V. Verma)', role: 'राष्ट्रीय विधिक सलाहकार (National Legal Advisor)', state: 'National', phone: '011-2339XXXX' },
  { id: 'tm-3', name: 'संजय अवस्थी (Sanjay Awasthi)', role: 'मंडल संयोजक (Divisional Convener)', state: 'Uttar Pradesh', phone: '94150-XXXX1' },
  { id: 'tm-4', name: 'प्रमोद गायकवाड़ (Pramod Gaikwad)', role: 'राज्य सचिव (State Secretary)', state: 'Maharashtra', phone: '98221-XXXX2' },
  { id: 'tm-5', name: 'मुकेश कुमार (Mukesh Kumar)', role: 'जिला संयोजक (District Convener)', state: 'Bihar', phone: '94311-XXXX3' },
  { id: 'tm-6', name: 'सुश्री वंदना शर्मा (Vandana Sharma)', role: 'प्रभारी - महिला प्रकोष्ठ (Women Wing Convener)', state: 'Delhi NCR', phone: '98110-XXXX4' },
  { id: 'tm-7', name: 'दीपक पटेल (Deepak Patel)', role: 'औद्योगिक संपर्क अधिकारी (Industrial Liaison)', state: 'Gujarat', phone: '98250-XXXX5' }
];

export const DEMO_MEMBERS_REGISTRY = [
  { id: 'MEM-2026-101', name: 'बृजेश कुमार यादव', unit: 'कानपुर औद्योगिक इकाई', joined: '15 Jan 2024', status: 'Active', category: 'विनिर्माण (Manufacturing)' },
  { id: 'MEM-2026-102', name: 'गणेश तुकाराम जाधव', unit: 'पुणे चाकन ऑटो यूनियन', joined: '10 Mar 2024', status: 'Active', category: 'ऑटोमोबाइल (Automobile)' },
  { id: 'MEM-2026-103', name: 'शंभू शरण महतो', unit: 'पटना निर्माण कामगार मंच', joined: '02 May 2024', status: 'Active', category: 'निर्माण (Construction)' },
  { id: 'MEM-2026-104', name: 'किरणबेन वाघेला', unit: 'अहमदाबाद वस्त्र उद्योग प्रकोष्ठ', joined: '18 Jul 2024', status: 'Active', category: 'वस्त्र (Textiles)' },
  { id: 'MEM-2026-105', name: 'हरपाल सिंह संधू', unit: 'फरीदाबाद वेल्डिंग एवं फैब्रिकेशन', joined: '09 Oct 2024', status: 'Active', category: 'इंजीनियरिंग (Engineering)' },
  { id: 'MEM-2026-106', name: 'मोहम्मद आरिफ कुरैशी', unit: 'ओखला गारमेंट्स वर्कर्स कमेटी', joined: '12 Jan 2025', status: 'Active', category: 'परिधान (Garments)' },
];

export const DEMO_AUDIT_LOGS = [
  { id: 'log-1', timestamp: '2026-11-10 14:32:10', user: 'national.admin', action: 'STATUS_UPDATE', detail: 'Updated BMP-DEMO-2026-0002 to "Assistance Under Consideration"' },
  { id: 'log-2', timestamp: '2026-11-09 11:20:45', user: 'state.admin.up', action: 'OFFICER_ASSIGN', detail: 'Assigned BMP-DEMO-2026-0001 to संजय अवस्थी (कानपुर मंडल)' },
  { id: 'log-3', timestamp: '2026-11-08 09:15:20', user: 'portal.intake', action: 'NEW_REGISTRATION', detail: 'New complaint BMP-DEMO-2026-0005 created via public portal' },
  { id: 'log-4', timestamp: '2026-11-06 16:40:00', user: 'legal.counsel', action: 'LEGAL_DOC_ATTACHED', detail: 'Conciliation draft attached to BMP-DEMO-2026-0004' },
  { id: 'log-5', timestamp: '2026-11-05 10:05:12', user: 'national.admin', action: 'MEMBER_VERIFIED', detail: 'Verified membership for MEM-2026-106 (मोहम्मद आरिफ)' }
];
