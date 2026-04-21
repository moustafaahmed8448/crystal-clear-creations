export type ProjectCategory = 'residential' | 'commercial' | 'industrial';

export interface ProjectScope {
  en: string;
  ar: string;
}

export interface Project {
  slug: string;
  title: { en: string; ar: string };
  category: ProjectCategory;
  location: { en: string; ar: string };
  year: string;
  client: { en: string; ar: string };
  area: string;
  cover: string;
  gallery: string[];
  shortDesc: { en: string; ar: string };
  description: { en: string; ar: string };
  scope: { en: string[]; ar: string[] };
  features: { en: string[]; ar: string[] };
}

export const projects: Project[] = [
  {
    slug: 'riyadh-financial-district-tower',
    title: { en: 'Riyadh Financial District Tower', ar: 'برج المركز المالي بالرياض' },
    category: 'commercial',
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
    year: '2023',
    client: { en: 'KAFD Development', ar: 'تطوير كافد' },
    area: '42,000 m²',
    cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1600&q=80',
    ],
    shortDesc: {
      en: 'Full curtain wall glazing system for a 40-story commercial tower.',
      ar: 'نظام تكسية زجاجية كامل لبرج تجاري من 40 طابقًا.',
    },
    description: {
      en: 'A landmark project delivering a complete unitized curtain wall system across 40 floors. Engineered for extreme thermal performance and the high wind loads of central Riyadh, the facade combines low-E double-glazed units with custom aluminum framing in a seamless mirrored finish.',
      ar: 'مشروع بارز يقدم نظام جدار ستائري وحدوي متكامل لـ40 طابقًا. تم تصميم الواجهة لتحمل الأحمال الحرارية القصوى والرياح العالية في وسط الرياض، وتجمع بين وحدات زجاجية مزدوجة منخفضة الانبعاث وإطارات ألمنيوم مخصصة بلمسة عاكسة سلسة.',
    },
    scope: {
      en: ['Design & engineering of unitized curtain wall', 'Manufacturing of 8,400 glass units', 'On-site installation & QA', '5-year maintenance program'],
      ar: ['تصميم وهندسة الجدار الستائري الوحدوي', 'تصنيع 8,400 وحدة زجاجية', 'التركيب الميداني وضمان الجودة', 'برنامج صيانة لمدة 5 سنوات'],
    },
    features: {
      en: ['Low-E double glazing', 'Solar control coating', 'Acoustic insulation 42dB', 'Wind load up to 2.5 kPa'],
      ar: ['زجاج مزدوج منخفض الانبعاث', 'طلاء التحكم الشمسي', 'عزل صوتي 42 ديسيبل', 'تحمل رياح حتى 2.5 كيلوباسكال'],
    },
  },
  {
    slug: 'jeddah-waterfront-residence',
    title: { en: 'Jeddah Waterfront Residence', ar: 'مسكن واجهة جدة البحرية' },
    category: 'residential',
    location: { en: 'Jeddah, Saudi Arabia', ar: 'جدة، المملكة العربية السعودية' },
    year: '2024',
    client: { en: 'Private Client', ar: 'عميل خاص' },
    area: '1,800 m²',
    cover: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
    ],
    shortDesc: {
      en: 'Custom laminated glass balustrades and panoramic Red Sea windows.',
      ar: 'حواجز زجاجية مصفحة مخصصة ونوافذ بانورامية تطل على البحر الأحمر.',
    },
    description: {
      en: 'A luxury seafront villa featuring frameless laminated glass balustrades and floor-to-ceiling panoramic windows. Every panel was custom-cut to embrace uninterrupted views of the Red Sea while providing UV protection and thermal comfort.',
      ar: 'فيلا فاخرة على الواجهة البحرية تتميز بحواجز زجاجية مصفحة بدون إطار ونوافذ بانورامية ممتدة من الأرض إلى السقف. تم قص كل لوح حسب الطلب لاحتضان إطلالات البحر الأحمر مع توفير حماية من الأشعة فوق البنفسجية والراحة الحرارية.',
    },
    scope: {
      en: ['Frameless balustrade design', 'Panoramic window manufacturing', 'Smart privacy glass installation', 'Final commissioning'],
      ar: ['تصميم حواجز بدون إطار', 'تصنيع نوافذ بانورامية', 'تركيب زجاج ذكي للخصوصية', 'التشغيل النهائي'],
    },
    features: {
      en: ['Laminated safety glass', '99% UV blocking', 'Salt-air resistant fittings', 'Switchable privacy panels'],
      ar: ['زجاج أمان مصفح', 'حجب 99% من الأشعة فوق البنفسجية', 'تركيبات مقاومة للهواء المالح', 'ألواح خصوصية قابلة للتبديل'],
    },
  },
  {
    slug: 'kafd-office-complex',
    title: { en: 'KAFD Office Complex', ar: 'مجمع كافد للمكاتب' },
    category: 'commercial',
    location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، المملكة العربية السعودية' },
    year: '2022',
    client: { en: 'KAFD', ar: 'كافد' },
    area: '28,500 m²',
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1600&q=80',
      'https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=1600&q=80',
    ],
    shortDesc: {
      en: 'Energy-efficient double-glazed units for a prestigious office complex.',
      ar: 'وحدات زجاجية مزدوجة موفرة للطاقة لمجمع مكاتب مرموق.',
    },
    description: {
      en: 'High-performance double-glazed units optimized for the harsh Saudi climate. The facade reduces solar heat gain by 62% while maintaining crystal-clear visibility, contributing to LEED Gold certification.',
      ar: 'وحدات زجاجية مزدوجة عالية الأداء مُحسَّنة للمناخ السعودي القاسي. تقلل الواجهة من اكتساب الحرارة الشمسية بنسبة 62% مع الحفاظ على رؤية واضحة، مما يساهم في الحصول على شهادة LEED الذهبية.',
    },
    scope: {
      en: ['Energy modeling & glass selection', 'IGU manufacturing', 'Curtain wall installation', 'Performance testing'],
      ar: ['نمذجة الطاقة واختيار الزجاج', 'تصنيع الوحدات الزجاجية المعزولة', 'تركيب الجدار الستائري', 'اختبار الأداء'],
    },
    features: {
      en: ['LEED Gold certified', 'Solar heat gain coefficient 0.28', 'Argon-filled cavity', 'Self-cleaning coating'],
      ar: ['معتمد LEED الذهبي', 'معامل اكتساب الحرارة الشمسية 0.28', 'تجويف معبأ بالأرجون', 'طلاء ذاتي التنظيف'],
    },
  },
  {
    slug: 'dammam-industrial-plant',
    title: { en: 'Dammam Industrial Plant', ar: 'مصنع الدمام الصناعي' },
    category: 'industrial',
    location: { en: 'Dammam, Saudi Arabia', ar: 'الدمام، المملكة العربية السعودية' },
    year: '2023',
    client: { en: 'Eastern Industries', ar: 'الصناعات الشرقية' },
    area: '15,200 m²',
    cover: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1600&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80',
    ],
    shortDesc: {
      en: 'Fire-rated glass partitions and safety glazing for industrial facilities.',
      ar: 'حواجز زجاجية مقاومة للحريق وتزجيج أمان للمنشآت الصناعية.',
    },
    description: {
      en: 'Comprehensive industrial glazing solution including 120-minute fire-rated partitions, blast-resistant control room windows, and chemical-resistant lab enclosures.',
      ar: 'حل تزجيج صناعي شامل يتضمن حواجز مقاومة للحريق لمدة 120 دقيقة، ونوافذ غرف تحكم مقاومة للانفجار، وحاويات مختبرات مقاومة للمواد الكيميائية.',
    },
    scope: {
      en: ['Fire-rated partition design', 'Blast-resistant glazing', 'Chemical lab enclosures', 'Compliance certification'],
      ar: ['تصميم حواجز مقاومة للحريق', 'تزجيج مقاوم للانفجار', 'حاويات المختبرات الكيميائية', 'شهادة الامتثال'],
    },
    features: {
      en: ['EI120 fire rating', 'Blast pressure 50 kPa', 'Chemical resistance', 'SASO certified'],
      ar: ['تصنيف مقاومة الحريق EI120', 'ضغط الانفجار 50 كيلوباسكال', 'مقاومة كيميائية', 'معتمد من ساسو'],
    },
  },
  {
    slug: 'al-khobar-shopping-mall',
    title: { en: 'Al Khobar Shopping Mall', ar: 'مجمع الخبر التجاري' },
    category: 'commercial',
    location: { en: 'Al Khobar, Saudi Arabia', ar: 'الخبر، المملكة العربية السعودية' },
    year: '2024',
    client: { en: 'Khobar Retail Group', ar: 'مجموعة الخبر للتجزئة' },
    area: '36,000 m²',
    cover: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1600&q=80',
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1600&q=80',
      'https://images.unsplash.com/photo-1567449303078-57ad995bd17a?w=1600&q=80',
      'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=1600&q=80',
    ],
    shortDesc: {
      en: 'Structural glass skylights and decorative glass features.',
      ar: 'كوات سقفية من الزجاج الإنشائي وعناصر زجاجية ديكورية.',
    },
    description: {
      en: 'A signature retail destination featuring a 1,200 m² structural glass skylight, illuminated colored glass walls, and frameless storefront systems engineered for high foot traffic.',
      ar: 'وجهة تسوق مميزة تضم سقفًا زجاجيًا إنشائيًا بمساحة 1,200 متر مربع، وجدرانًا زجاجية ملونة مضاءة، وأنظمة واجهات بدون إطار مصممة لحركة المشاة العالية.',
    },
    scope: {
      en: ['Structural skylight engineering', 'Decorative glass fabrication', 'Storefront installation', 'Lighting integration'],
      ar: ['هندسة السقف الزجاجي الإنشائي', 'تصنيع الزجاج الديكوري', 'تركيب الواجهات', 'دمج الإضاءة'],
    },
    features: {
      en: ['Structural glass beams', 'LED-integrated panels', 'Anti-slip floor glass', 'Impact-resistant'],
      ar: ['كمرات زجاجية إنشائية', 'ألواح مدمجة بإضاءة LED', 'زجاج أرضي مضاد للانزلاق', 'مقاوم للصدمات'],
    },
  },
  {
    slug: 'al-ula-luxury-resort',
    title: { en: 'Al-Ula Luxury Resort', ar: 'منتجع العُلا الفاخر' },
    category: 'residential',
    location: { en: 'Al-Ula, Saudi Arabia', ar: 'العُلا، المملكة العربية السعودية' },
    year: '2024',
    client: { en: 'Royal Commission for Al-Ula', ar: 'الهيئة الملكية للعُلا' },
    area: '8,400 m²',
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
    ],
    shortDesc: {
      en: 'Floor-to-ceiling glass walls blending desert views with luxury interiors.',
      ar: 'جدران زجاجية ممتدة من الأرض إلى السقف تمزج إطلالات الصحراء مع داخل فاخر.',
    },
    description: {
      en: 'An ultra-luxury desert resort with retractable glass walls that open to dramatic sandstone cliff views. Heat-reflective coatings preserve indoor comfort despite intense desert sun.',
      ar: 'منتجع صحراوي فائق الفخامة بجدران زجاجية قابلة للسحب تنفتح على إطلالات منحدرات الحجر الرملي المذهلة. تحافظ الطلاءات العاكسة للحرارة على الراحة الداخلية رغم شمس الصحراء الشديدة.',
    },
    scope: {
      en: ['Retractable wall systems', 'Heat-reflective glass production', 'Custom framing', 'Integration with smart shading'],
      ar: ['أنظمة جدران قابلة للسحب', 'إنتاج زجاج عاكس للحرارة', 'تأطير مخصص', 'تكامل مع التظليل الذكي'],
    },
    features: {
      en: ['Retractable panels up to 6m', 'Triple silver coating', 'Sand-resistant tracks', 'Smart home integration'],
      ar: ['ألواح قابلة للسحب حتى 6 أمتار', 'طلاء ثلاثي بالفضة', 'مسارات مقاومة للرمال', 'تكامل المنزل الذكي'],
    },
  },
  {
    slug: 'jubail-refinery',
    title: { en: 'Jubail Refinery', ar: 'مصفاة الجبيل' },
    category: 'industrial',
    location: { en: 'Jubail, Saudi Arabia', ar: 'الجبيل، المملكة العربية السعودية' },
    year: '2022',
    client: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
    area: '6,800 m²',
    cover: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&q=80',
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1600&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80',
    ],
    shortDesc: {
      en: 'Blast-resistant and chemically treated glass for refinery control rooms.',
      ar: 'زجاج مقاوم للانفجار ومعالج كيميائيًا لغرف تحكم المصفاة.',
    },
    description: {
      en: 'Mission-critical glazing for petrochemical control rooms requiring resistance to blast pressure, hydrocarbon exposure, and extreme temperature swings.',
      ar: 'تزجيج بالغ الأهمية لغرف التحكم البتروكيماوية يتطلب مقاومة لضغط الانفجار والتعرض للهيدروكربونات والتقلبات الحرارية الشديدة.',
    },
    scope: {
      en: ['Blast analysis & engineering', 'Specialty glass production', 'On-site installation', 'Periodic recertification'],
      ar: ['تحليل الانفجار والهندسة', 'إنتاج زجاج متخصص', 'التركيب الميداني', 'إعادة الاعتماد الدوري'],
    },
    features: {
      en: ['Blast pressure 70 kPa', 'Chemical-resistant film', 'Operational range -20°C to 70°C', 'API 752 compliant'],
      ar: ['ضغط الانفجار 70 كيلوباسكال', 'طبقة مقاومة للمواد الكيميائية', 'نطاق التشغيل -20° إلى 70°', 'متوافق مع API 752'],
    },
  },
  {
    slug: 'medina-hotel-complex',
    title: { en: 'Medina Hotel Complex', ar: 'مجمع فنادق المدينة المنورة' },
    category: 'commercial',
    location: { en: 'Medina, Saudi Arabia', ar: 'المدينة المنورة، المملكة العربية السعودية' },
    year: '2023',
    client: { en: 'Madinah Hospitality Group', ar: 'مجموعة المدينة للضيافة' },
    area: '22,000 m²',
    cover: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80',
    ],
    shortDesc: {
      en: 'Decorative printed glass panels and automated glass doors.',
      ar: 'ألواح زجاجية مطبوعة ديكورية وأبواب زجاجية آلية.',
    },
    description: {
      en: 'A multi-tower hotel complex featuring digitally printed Islamic-pattern glass panels, automated revolving glass entrances, and acoustic-grade interior partitions for premium guest comfort.',
      ar: 'مجمع فنادق متعدد الأبراج يتميز بألواح زجاجية مطبوعة رقميًا بأنماط إسلامية، ومداخل زجاجية دوارة آلية، وحواجز داخلية صوتية لراحة استثنائية للنزلاء.',
    },
    scope: {
      en: ['Digital glass printing', 'Automated door systems', 'Acoustic partitions', 'Decorative lighting integration'],
      ar: ['الطباعة الرقمية على الزجاج', 'أنظمة أبواب آلية', 'حواجز صوتية', 'دمج الإضاءة الديكورية'],
    },
    features: {
      en: ['Ceramic ink printing', 'Sensor-activated doors', 'Acoustic rating 45dB', 'Custom Islamic patterns'],
      ar: ['طباعة بحبر سيراميكي', 'أبواب تعمل بالاستشعار', 'تصنيف صوتي 45 ديسيبل', 'أنماط إسلامية مخصصة'],
    },
  },
  {
    slug: 'neom-smart-villa',
    title: { en: 'NEOM Smart Villa', ar: 'فيلا نيوم الذكية' },
    category: 'residential',
    location: { en: 'NEOM, Saudi Arabia', ar: 'نيوم، المملكة العربية السعودية' },
    year: '2024',
    client: { en: 'NEOM', ar: 'نيوم' },
    area: '2,400 m²',
    cover: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80',
    ],
    shortDesc: {
      en: 'Smart switchable glass and solar-integrated glazing systems.',
      ar: 'زجاج ذكي قابل للتبديل وأنظمة تزجيج متكاملة مع الطاقة الشمسية.',
    },
    description: {
      en: 'A futuristic villa showcasing cutting-edge glass technology: PDLC switchable privacy glass, photovoltaic integrated facades generating 18 kW, and AI-controlled tinting that adapts to sun position throughout the day.',
      ar: 'فيلا مستقبلية تعرض أحدث تقنيات الزجاج: زجاج خصوصية قابل للتبديل من نوع PDLC، وواجهات كهروضوئية متكاملة تولد 18 كيلوواط، وتظليل يتم التحكم فيه بالذكاء الاصطناعي ليتكيف مع موضع الشمس طوال اليوم.',
    },
    scope: {
      en: ['Smart glass system design', 'BIPV facade integration', 'AI tinting controller', 'Full smart home integration'],
      ar: ['تصميم نظام الزجاج الذكي', 'تكامل واجهة BIPV', 'متحكم تظليل بالذكاء الاصطناعي', 'تكامل كامل للمنزل الذكي'],
    },
    features: {
      en: ['PDLC switchable glass', '18 kW solar generation', 'AI adaptive tinting', 'Voice control compatible'],
      ar: ['زجاج PDLC قابل للتبديل', '18 كيلوواط من الطاقة الشمسية', 'تظليل تكيفي بالذكاء الاصطناعي', 'متوافق مع التحكم الصوتي'],
    },
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
