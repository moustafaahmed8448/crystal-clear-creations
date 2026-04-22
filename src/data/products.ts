export interface Product {
  slug: string;
  title: { en: string; ar: string };
  shortDesc: { en: string; ar: string };
  description: { en: string; ar: string };
  cover: string;
  gallery: string[];
  specs: string[];
  features: { en: string[]; ar: string[] };
  applications: { en: string[]; ar: string[] };
}

export const products: Product[] = [
  {
    slug: 'tempered-glass',
    title: { en: 'Tempered Glass', ar: 'الزجاج المقسى' },
    shortDesc: {
      en: 'Heat-strengthened safety glass, 4–5× stronger than regular glass.',
      ar: 'زجاج أمان معالج حراريًا، أقوى 4 إلى 5 مرات من الزجاج العادي.',
    },
    description: {
      en: 'Our tempered glass is produced through a controlled thermal process that creates compressive surface stresses, dramatically increasing strength and impact resistance. When broken, it shatters into small granular pieces, eliminating the risk of sharp injurious shards. Ideal for facades, balustrades, doors, partitions, and shower enclosures across residential, commercial, and industrial applications.',
      ar: 'يتم إنتاج الزجاج المقسى لدينا من خلال عملية حرارية مضبوطة تُنشئ إجهادات سطحية ضاغطة، مما يزيد بشكل كبير من القوة ومقاومة الصدمات. عند الكسر، يتفتت إلى قطع حبيبية صغيرة، مما يلغي خطر الشظايا الحادة. مثالي للواجهات والحواجز والأبواب والقواطع وكبائن الاستحمام في التطبيقات السكنية والتجارية والصناعية.',
    },
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80',
    ],
    specs: ['Thickness: 4–19mm', 'Max size: 3000×6000mm', 'Safety certified'],
    features: {
      en: ['4–5× stronger than annealed glass', 'Safe break pattern', 'High thermal resistance', 'SASO & EN 12150 compliant'],
      ar: ['أقوى من الزجاج المُلدَّن بـ4 إلى 5 مرات', 'نمط كسر آمن', 'مقاومة حرارية عالية', 'متوافق مع ساسو وEN 12150'],
    },
    applications: {
      en: ['Curtain walls & facades', 'Glass doors & partitions', 'Shower enclosures', 'Balustrades & railings'],
      ar: ['الجدران الستائرية والواجهات', 'الأبواب والقواطع الزجاجية', 'كبائن الاستحمام', 'الحواجز والدرابزين'],
    },
  },
  {
    slug: 'laminated-glass',
    title: { en: 'Laminated Glass', ar: 'الزجاج المصفح' },
    shortDesc: {
      en: 'Multi-layer security glass with PVB or SGP interlayer.',
      ar: 'زجاج أمان متعدد الطبقات مع طبقة PVB أو SGP بينية.',
    },
    description: {
      en: 'Laminated glass bonds two or more glass panes together with a tough polymer interlayer (PVB or SGP). On impact the interlayer holds fragments in place, providing exceptional safety, security, sound insulation, and UV protection. Available with hurricane-rated, bullet-resistant, and acoustic configurations for the most demanding projects.',
      ar: 'يربط الزجاج المصفح بين لوحين أو أكثر من الزجاج بطبقة بوليمرية متينة (PVB أو SGP). عند الصدم، تحافظ الطبقة البينية على بقاء الشظايا في مكانها، مما يوفر سلامة وأمانًا وعزلًا صوتيًا وحماية من الأشعة فوق البنفسجية بشكل استثنائي. متوفر بتكوينات مقاومة للأعاصير والرصاص والضوضاء.',
    },
    cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
    ],
    specs: ['Thickness: 6–40mm', 'PVB / SGP interlayer', 'Hurricane rated'],
    features: {
      en: ['Holds together when broken', 'Up to 99% UV blocking', 'Sound reduction up to 42 dB', 'Custom interlayer colors'],
      ar: ['يبقى متماسكًا عند الكسر', 'حجب يصل إلى 99% من الأشعة فوق البنفسجية', 'تقليل الصوت حتى 42 ديسيبل', 'ألوان طبقة بينية مخصصة'],
    },
    applications: {
      en: ['Skylights & overhead glazing', 'Storefronts & banks', 'Balustrades & floors', 'Schools & hospitals'],
      ar: ['الكوات السقفية والتزجيج العلوي', 'الواجهات التجارية والبنوك', 'الحواجز والأرضيات', 'المدارس والمستشفيات'],
    },
  },
  {
    slug: 'insulated-glass',
    title: { en: 'Insulated Glass', ar: 'الزجاج العازل' },
    shortDesc: {
      en: 'Double and triple glazed units for thermal and acoustic insulation.',
      ar: 'وحدات زجاجية مزدوجة وثلاثية للعزل الحراري والصوتي.',
    },
    description: {
      en: 'Insulated Glass Units (IGUs) consist of two or three glass panes separated by sealed cavities filled with argon or krypton gas. Combined with our low-emissivity coatings, they dramatically reduce heat transfer and energy consumption — essential for the GCC climate. They also provide excellent acoustic isolation for urban environments.',
      ar: 'تتكون وحدات الزجاج العازل (IGU) من لوحين أو ثلاثة ألواح زجاجية مفصولة بتجاويف محكمة الإغلاق ومعبأة بغاز الأرجون أو الكريبتون. مع طلاءاتنا منخفضة الانبعاثية، تقلل بشكل كبير من انتقال الحرارة واستهلاك الطاقة — أمر ضروري لمناخ دول الخليج. كما توفر عزلًا صوتيًا ممتازًا للبيئات الحضرية.',
    },
    cover: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=80',
      'https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=1200&q=80',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&q=80',
    ],
    specs: ['Double / triple glazed', 'Argon filled', 'Low-E coating'],
    features: {
      en: ['U-value as low as 1.0 W/m²K', 'Reduces cooling load by up to 40%', 'Condensation resistance', 'Warm-edge spacers'],
      ar: ['قيمة U منخفضة تصل إلى 1.0 وات/م²ك', 'يقلل حمل التبريد حتى 40%', 'مقاومة التكاثف', 'فواصل ذات حافة دافئة'],
    },
    applications: {
      en: ['Office towers & high-rises', 'Villas & residential', 'Hotels & hospitality', 'Airports & transit'],
      ar: ['أبراج المكاتب والمباني العالية', 'الفلل والسكن', 'الفنادق والضيافة', 'المطارات والنقل'],
    },
  },
  {
    slug: 'decorative-glass',
    title: { en: 'Decorative Glass', ar: 'الزجاج الزخرفي' },
    shortDesc: {
      en: 'Digitally printed, frosted, and colored glass for architecture and interiors.',
      ar: 'زجاج مطبوع رقميًا، مصنفر، وملون للعمارة والديكورات الداخلية.',
    },
    description: {
      en: 'Transform any space with our decorative glass range. Using high-resolution digital ceramic printing, acid etching, sandblasting, and back-painting techniques, we create custom patterns, branding, and artistic finishes that are durable, fade-resistant, and maintenance-free.',
      ar: 'حوّل أي مساحة باستخدام مجموعتنا من الزجاج الزخرفي. باستخدام الطباعة السيراميكية الرقمية عالية الدقة، والنقش بالحمض، والسفع الرملي، وتقنيات الطلاء الخلفي، نقوم بإنشاء أنماط وعلامات تجارية ولمسات فنية مخصصة متينة ومقاومة للبهتان وخالية من الصيانة.',
    },
    cover: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
    ],
    specs: ['Ceramic printing', 'Acid etching', 'Color options'],
    features: {
      en: ['Unlimited custom patterns', 'UV & scratch resistant', 'Back-painted RAL colors', 'Heat-fused durability'],
      ar: ['أنماط مخصصة لا حصر لها', 'مقاوم للأشعة فوق البنفسجية والخدش', 'ألوان RAL مطلية من الخلف', 'متانة مدمجة بالحرارة'],
    },
    applications: {
      en: ['Feature walls & lobbies', 'Retail branding', 'Spandrel panels', 'Privacy partitions'],
      ar: ['الجدران المميزة والاستقبال', 'التجزئة والعلامات التجارية', 'ألواح السباندريل', 'قواطع الخصوصية'],
    },
  },
  {
    slug: 'fire-rated-glass',
    title: { en: 'Fire-Rated Glass', ar: 'زجاج مقاوم للحريق' },
    shortDesc: {
      en: 'Specialized glass that maintains integrity during fire exposure.',
      ar: 'زجاج متخصص يحافظ على سلامته أثناء التعرض للحريق.',
    },
    description: {
      en: 'Our fire-rated glazing systems are engineered and certified to contain flames, smoke, and radiant heat for 30 to 120 minutes (E, EW, and EI classifications). They protect critical evacuation routes, stairwells, and compartmentation walls while preserving sightlines and natural light — fully compliant with the Saudi Building Code.',
      ar: 'تم تصميم أنظمة التزجيج المقاوم للحريق لدينا واعتمادها لاحتواء اللهب والدخان والحرارة المشعة لمدة 30 إلى 120 دقيقة (تصنيفات E وEW وEI). تحمي مسارات الإخلاء الحيوية والسلالم وجدران التقسيم مع الحفاظ على خطوط الرؤية والإضاءة الطبيعية — متوافقة تمامًا مع كود البناء السعودي.',
    },
    cover: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80',
    ],
    specs: ['30–120 min rating', 'EI classification', 'Certified'],
    features: {
      en: ['Blocks flames, smoke & heat', 'Integrity + insulation grades', 'Impact safety classified', 'EN 1364 / UL tested'],
      ar: ['يحجب اللهب والدخان والحرارة', 'درجات السلامة والعزل', 'مصنف لمقاومة الصدمات', 'مختبر EN 1364 / UL'],
    },
    applications: {
      en: ['Stairwells & escape routes', 'Hospitals & schools', 'Industrial control rooms', 'Mall compartmentation'],
      ar: ['السلالم ومسارات الهروب', 'المستشفيات والمدارس', 'غرف التحكم الصناعية', 'تقسيم مراكز التسوق'],
    },
  },
  {
    slug: 'smart-glass',
    title: { en: 'Smart Glass', ar: 'الزجاج الذكي' },
    shortDesc: {
      en: 'Switchable privacy glass with electrochromic or PDLC technology.',
      ar: 'زجاج خصوصية قابل للتبديل بتقنية الكهروكروميك أو PDLC.',
    },
    description: {
      en: 'At the press of a button — or via your building automation system — switch from transparent to opaque in milliseconds. Our smart glass uses PDLC and electrochromic films for on-demand privacy, glare control, and dynamic shading, eliminating the need for blinds and drapes while reducing HVAC loads.',
      ar: 'بضغطة زر — أو من خلال نظام أتمتة المبنى — يمكنك التبديل من الشفاف إلى المعتم في أجزاء من الثانية. يستخدم زجاجنا الذكي أغشية PDLC والكهروكروميك للخصوصية عند الطلب والتحكم في الوهج والتظليل الديناميكي، مما يلغي الحاجة إلى الستائر مع تقليل أحمال التكييف.',
    },
    cover: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    specs: ['Switchable opacity', 'IoT enabled', 'Energy efficient'],
    features: {
      en: ['Instant switching < 1 second', 'BMS / IoT integration', 'Up to 30% HVAC savings', '50,000+ switching cycles'],
      ar: ['تبديل فوري في أقل من ثانية', 'تكامل مع BMS / IoT', 'توفير حتى 30% في التكييف', 'أكثر من 50,000 دورة تبديل'],
    },
    applications: {
      en: ['Executive offices & boardrooms', 'Hospitals & clinics', 'Luxury residences', 'Hotel suites'],
      ar: ['المكاتب التنفيذية وقاعات الاجتماعات', 'المستشفيات والعيادات', 'المساكن الفاخرة', 'أجنحة الفنادق'],
    },
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
