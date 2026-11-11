export interface LeadershipMember {
  id: string;
  nameHi: string;
  nameEn: string;
  designationHi: string;
  designationEn: string;
  regionHi: string;
  regionEn: string;
  bioHi: string;
  bioEn: string;
}

export interface AwarenessArticle {
  id: string;
  titleHi: string;
  titleEn: string;
  categoryHi: string;
  categoryEn: string;
  readTime: string;
  date: string;
  summaryHi: string;
  summaryEn: string;
  keyPointsHi: string[];
  keyPointsEn: string[];
}

export interface ActivityEvent {
  id: string;
  titleHi: string;
  titleEn: string;
  date: string;
  locationHi: string;
  locationEn: string;
  summaryHi: string;
  summaryEn: string;
  categoryHi: string;
  categoryEn: string;
  attendees: string;
}

export interface NewsItem {
  id: string;
  titleHi: string;
  titleEn: string;
  date: string;
  type: string;
  summaryHi: string;
  summaryEn: string;
}

export const LEADERSHIP_PROFILES: LeadershipMember[] = [
  {
    id: 'lead-1',
    nameHi: 'डॉ. सत्येंद्र नारायण शर्मा',
    nameEn: 'Dr. Satyendra Narayan Sharma',
    designationHi: 'राष्ट्रीय अध्यक्ष (प्रस्तावित पदधारक - कॉन्सेप्ट डेमो)',
    designationEn: 'National President (Placeholder Profile)',
    regionHi: 'केंद्रीय मुख्यालय, नई दिल्ली',
    regionEn: 'Central HQ, New Delhi',
    bioHi: 'श्रमिक आंदोलनों एवं सामाजिक न्याय के क्षेत्र में 3 दशकों का अनुभव। असंगठित क्षेत्र के कामगारों के कानूनी अधिकारों और सामाजिक सुरक्षा के प्रबल पैरोकार।',
    bioEn: 'Over 3 decades of dedication to labour justice and unorganized worker social security. Conceptual leadership profile.'
  },
  {
    id: 'lead-2',
    nameHi: 'एडवोकेट विजयंत वर्मा',
    nameEn: 'Adv. Vijayant Verma',
    designationHi: 'राष्ट्रीय विधिक सलाहकार एवं प्रमुख, विधिक प्रकोष्ठ',
    designationEn: 'National Legal Advisor & Head of Legal Cell',
    regionHi: 'सर्वोच्च न्यायालय एवं श्रम न्यायाधिकरण बार',
    regionEn: 'Supreme Court & Labour Tribunals Bar',
    bioHi: 'औद्योगिक विवाद अधिनियम, न्यूनतम मजदूरी और ग्रेच्युटी कानूनों के विशेषज्ञ। कामगारों को त्वरित और सुलभ कानूनी मार्गदर्शन उपलब्ध कराने में सक्रिय।',
    bioEn: 'Expert in Industrial Disputes Act, Code on Wages, and workplace grievance representation.'
  },
  {
    id: 'lead-3',
    nameHi: 'श्रीमती अनुराधा जोशी',
    nameEn: 'Smt. Anuradha Joshi',
    designationHi: 'राष्ट्रीय महासचिव (महिला श्रमिक कल्याण)',
    designationEn: 'National General Secretary (Women Worker Welfare)',
    regionHi: 'पश्चिम भारत एवं राष्ट्रीय समन्वय',
    regionEn: 'Western India & National Coordination',
    bioHi: 'महिला श्रमिकों के लिए समान वेतन, सुरक्षित कार्यस्थल और मातृत्व लाभ सुनिश्चित करने हेतु राष्ट्रव्यापी जागरूकता अभियानों का नेतृत्व।',
    bioEn: 'Pioneering campaigns for equal remuneration, workplace dignity, and maternity benefit compliance.'
  },
  {
    id: 'lead-4',
    nameHi: 'संजय अवस्थी',
    nameEn: 'Sanjay Awasthi',
    designationHi: 'संयोजक – उत्तर प्रदेश एवं उत्तरी क्षेत्र',
    designationEn: 'Convener – Uttar Pradesh & Northern Zone',
    regionHi: 'कानपुर एवं लखनऊ मंडल',
    regionEn: 'Kanpur & Lucknow Division',
    bioHi: 'विनिर्माण एवं चमड़ा उद्योग क्षेत्र के संविदा कामगारों के अधिकारों हेतु जमीनी स्तर पर निरंतर सक्रिय।',
    bioEn: 'Active in manufacturing cluster advocacy and contract worker grievance redressal.'
  }
];

export const LABOUR_ARTICLES: AwarenessArticle[] = [
  {
    id: 'art-1',
    titleHi: 'मजदूरी संहिता 2019: न्यूनतम वेतन एवं समय पर भुगतान का अधिकार',
    titleEn: 'Code on Wages 2019: Right to Minimum Wages & Timely Payment',
    categoryHi: 'वेतन कानून',
    categoryEn: 'Wage Laws',
    readTime: '4 मिनट',
    date: 'अक्टूबर 2026',
    summaryHi: 'प्रत्येक श्रमिक का संवैधानिक एवं कानूनी अधिकार है कि उसे राज्य द्वारा निर्धारित न्यूनतम मजदूरी मिले और अगले माह की 7 से 10 तारीख के भीतर वेतन का भुगतान सुनिश्चित हो।',
    summaryEn: 'Understanding the statutory floor wage, overtime multiples, and legal safeguards against arbitrary wage delays.',
    keyPointsHi: [
      'न्यूनतम मजदूरी से कम भुगतान कानूनन दंडनीय अपराध है।',
      'ठेकेदार द्वारा वेतन न देने पर मुख्य नियोक्ता (Principal Employer) जिम्मेदार होता है।',
      'वेतन से अनधिकृत कटौती करना कानूनी रूप से अवैध है।',
      'अतिरिक्त कार्य (Overtime) पर सामान्य दर से दोगुना भुगतान देय है।'
    ],
    keyPointsEn: [
      'Paying below statutory minimum wages is a cognizable offence.',
      'Principal employer bears liability if the contractor defaults on wage payment.',
      'Unauthorized deductions from worker salaries are unlawful.',
      'Overtime work mandates twice the normal hourly wage rate.'
    ]
  },
  {
    id: 'art-2',
    titleHi: 'कार्यस्थल पर सुरक्षा एवं स्वास्थ्य नियम: हर श्रमिक की अनमोल जिंदगी',
    titleEn: 'Occupational Safety, Health & Working Conditions',
    categoryHi: 'कार्यस्थल सुरक्षा',
    categoryEn: 'Workplace Safety',
    readTime: '5 मिनट',
    date: 'सितंबर 2026',
    summaryHi: 'जोखिम भरे उद्योगों, निर्माण स्थलों एवं कारखानों में काम करने वाले श्रमिकों के लिए उचित सुरक्षा उपकरण (PPE), प्राथमिक चिकित्सा और साफ पेयजल उपलब्ध कराना नियोक्ता का अनिवार्य कर्तव्य है।',
    summaryEn: 'Guidelines on mandatory PPE, machinery safeguards, and employer liability for on-duty injuries.',
    keyPointsHi: [
      'हेलमेट, सेफ्टी बेल्ट, ग्लव्स व मास्क निःशुल्क प्रदान करना अनिवार्य है।',
      'दुर्घटना की स्थिति में कामगार क्षतिपूर्ति अधिनियम के तहत मुआवजा देय है।',
      'असुरक्षित मशीनरी पर जबरन काम कराने के विरुद्ध शिकायत दर्ज कराई जा सकती है।',
      'महिला कामगारों के लिए कार्यस्थल पर पृथक शौचालय और पेयजल की व्यवस्था आवश्यक है।'
    ],
    keyPointsEn: [
      'Helmets, safety harnesses, gloves, and shields must be provided free of charge.',
      'Statutory compensation is mandatory under Employees Compensation legislation.',
      'Workers have the right to halt work in demonstrably hazardous conditions.',
      'Separate sanitary facilities and potable drinking water are legally binding.'
    ]
  },
  {
    id: 'art-3',
    titleHi: 'कर्मचारी भविष्य निधि (EPF) और ईएसआई (ESI): आपका सामाजिक सुरक्षा कवच',
    titleEn: 'EPF & ESIC Social Security: Your Lifelong Financial & Health Shield',
    categoryHi: 'सामाजिक सुरक्षा',
    categoryEn: 'Social Security',
    readTime: '6 मिनट',
    date: 'अगस्त 2026',
    summaryHi: '10 या 20 से अधिक कामगारों वाले किसी भी प्रतिष्ठान में ईएसआई एवं पीएफ कटौती के उपरांत नियोक्ता द्वारा सरकारी खाते में राशि जमा कराना कानूनी बाध्यता है।',
    summaryEn: 'How to verify your monthly provident fund deposits, check UAN balance, and access ESIC dispensary services.',
    keyPointsHi: [
      'वेतन पर्ची (Salary Slip) पर यूएएन और ईएसआई नंबर अंकित होना अनिवार्य है।',
      'काटी गई पीएफ राशि 15 दिनों के भीतर ईपीएफओ खाते में जमा होनी चाहिए।',
      'ईएसआई के तहत श्रमिक एवं उसके आश्रित परिवार को पूर्ण निःशुल्क चिकित्सा सुविधा मिलती है।',
      'कंपनी बदलने पर पीएफ स्वतः ऑनलाइन स्थानांतरित (Transfer) किया जा सकता है।'
    ],
    keyPointsEn: [
      'Salary slips must clearly display the Universal Account Number (UAN) and ESIC ID.',
      'Deducted contributions must be remitted to the government within statutory timelines.',
      'ESIC provides comprehensive outpatient and hospitalization coverage for dependents.',
      'Seamless digital transfer of accumulated balances across employers.'
    ]
  }
];

export const ACTIVITIES_DATA: ActivityEvent[] = [
  {
    id: 'act-1',
    titleHi: 'राष्ट्रीय श्रमिक संकल्प एवं कल्याण महाधिवेशन 2026',
    titleEn: 'National Worker Welfare & Solidarity Convention 2026',
    date: '28-29 अक्टूबर 2026',
    locationHi: 'गांधी शांति प्रतिष्ठान, नई दिल्ली',
    locationEn: 'Gandhi Peace Foundation Hall, New Delhi',
    summaryHi: '12 राज्यों से आए 450 से अधिक श्रमिक प्रतिनिधियों ने भाग लिया। न्यूनतम वेतन में संशोधन, ई-श्रम पोर्टल पंजीकरण एवं डिजिटल शिकायत तंत्र के विस्तार पर सर्वसम्मति से प्रस्ताव पारित।',
    summaryEn: 'Over 450 worker delegates from 12 states convened to deliberate on wage code implementation and digital grievance tracking.',
    categoryHi: 'राष्ट्रीय सम्मेलन',
    categoryEn: 'National Convention',
    attendees: '450+ प्रतिनिधि'
  },
  {
    id: 'act-2',
    titleHi: 'औद्योगिक संविदा कामगार विधिक जागरूकता शिविर – कानपुर मंडल',
    titleEn: 'Contract Labour Legal Literacy Camp – Kanpur Zone',
    date: '14 अक्टूबर 2026',
    locationHi: 'पनकी औद्योगिक क्षेत्र, कानपुर (उ.प्र.)',
    locationEn: 'Panki Industrial Area, Kanpur (U.P.)',
    summaryHi: 'फैक्ट्री कामगारों को वेतन पर्ची के अधिकार, ईएसआई कार्ड बनवाने और अवैध छंटनी से बचाव के कानूनी उपायों पर वकीलों के दल द्वारा प्रत्यक्ष मार्गदर्शन।',
    summaryEn: 'Free legal counseling for factory workers on salary slip rights, ESIC card verification, and unlawful termination remedies.',
    categoryHi: 'जागरूकता शिविर',
    categoryEn: 'Awareness Camp',
    attendees: '280+ कामगार'
  },
  {
    id: 'act-3',
    titleHi: 'निर्माण श्रमिकों के सुरक्षा उपकरण अनुपालन हेतु श्रम आयुक्त को ज्ञापन',
    titleEn: 'Memorandum on Construction Safety Standards to Labour Commissioner',
    date: '02 अक्टूबर 2026',
    locationHi: 'पुणे एवं पिंपरी-चिंचवाड़ (महाराष्ट्र)',
    locationEn: 'Pune & Pimpri-Chinchwad (Maharashtra)',
    summaryHi: 'बड़ी आवासीय परियोजनाओं में सुरक्षा मानकों की अनदेखी के विरुद्ध संगठन के प्रतिनिधिमंडल ने अपर श्रमायुक्त को विस्तृत साक्ष्य सहित ज्ञापन सौंपा।',
    summaryEn: 'BMP delegation submitted formal memorandum demanding safety inspections across construction projects.',
    categoryHi: 'प्रशासनिक पैरवी',
    categoryEn: 'Administrative Advocacy',
    attendees: 'प्रतिनिधिमंडल'
  }
];

export const NEWS_UPDATES: NewsItem[] = [
  {
    id: 'news-1',
    titleHi: 'श्रमिक शिकायत निवारण हेतु नए डिजिटल पोर्टल का पूर्वावलोकन जारी',
    titleEn: 'Preview Released for Advanced Labour Complaint Digital System',
    date: '08 नवंबर 2026',
    type: 'प्रेस विज्ञप्ति (Press Note)',
    summaryHi: 'भारतीय मजदूर परिषद ने कार्यकर्ताओं और श्रमिकों की सहूलियत के लिए एक पारदर्शी शिकायत ट्रैकिंग और प्रबंधन प्रणाली का मॉडल तैयार किया है।',
    summaryEn: 'BMP announces conceptual framework for digitized grievance tracking across national, state, and district committees.'
  },
  {
    id: 'news-2',
    titleHi: 'दिवाली बोनस एवं लंबित देयकों के भुगतान हेतु फैक्ट्रियों में जांच अभियान',
    titleEn: 'Inspection Advisory on Timely Festival Bonus and Arrears Disbursement',
    date: '25 अक्टूबर 2026',
    type: 'आधिकारिक सूचना (Circular)',
    summaryHi: 'सभी जिला समन्वयकों को निर्देश दिया गया है कि वे औद्योगिक क्षेत्रों में बोनस भुगतान अधिनियम का अनुपालन सुनिश्चित कराएं।',
    summaryEn: 'State conveners advised to monitor compliance with Payment of Bonus legislation across industrial corridors.'
  },
  {
    id: 'news-3',
    titleHi: 'असंगठित क्षेत्र के कामगारों के लिए ई-श्रम एवं सामाजिक सुरक्षा हेल्पडेस्क',
    titleEn: 'Social Security Registration & Helpdesk Drive Launched',
    date: '12 अक्टूबर 2026',
    type: 'अभियान अपडेट (Campaign Update)',
    summaryHi: 'घरेलू कामगारों, रेहड़ी-पटरी वालों एवं ऑटो चालकों के लिए विभिन्न जिलों में निःशुल्क सहायता केंद्र स्थापित किए जा रहे हैं।',
    summaryEn: 'Special support desks opened across district hubs to facilitate unorganized worker welfare enrollment.'
  }
];
