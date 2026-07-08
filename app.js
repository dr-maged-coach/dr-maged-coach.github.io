/**
 * Dr. Maged Coaching Website - App Logic (V2 Restructure)
 */

// ============================================================================
// Bilingual Content Dictionary
// ============================================================================
const i18n = {
  en: {
    // Meta
    pageTitle: "Dr. Maged | Science-Based Fat Loss, Muscle Building & Injury Recovery Coaching",
    metaDesc: "Lose fat, build muscle, and recover from injury in 12 weeks with science-based coaching from a physical therapy student specialized in rehab and chronic pain.",
    
    logoAlt: "Dr. Maged",
    navTransformations: "Transformations",
    navMethodology: "Methodology",
    navPrograms: "Programs",
    navFaq: "FAQ",
    headerCta: "Book Assessment",
    
    heroTagline: "Science and Strength",
    heroTitle: "Build a Stronger Body<br>With Science-Based<br>Coaching.",
    heroSub: "Fitness, rehab-aware training, nutrition guidance, and consistent follow-up — built for real people who want real results.",
    heroCta1: "Start Your Transformation",
    heroCta2: "View Transformations",
    heroMotto: "Never Lose A Day.",
    heroPhotoAlt: "Dr. Maged",
    
    coachBadge1: "Physical Therapy · Performance",
    coachBadge2: "Spine Health & Performance",
    coachMiniBadge: "PT · Coach",
    coachLabel: "Coach",
    coachRole: "Physical Therapy · Performance",
    coachBio: "I grew up watching my family struggle with chronic diseases and injuries — and I realized it wasn't just my family, it was a pattern I saw everywhere. That pushed me to study physical therapy and combine my medical background with training, nutrition, and lifestyle science. Today, I help people build real strength and lose fat — without paying for it with pain or injury. My mission is to build a healthy, injury-free community, one client at a time.",
    coachCheck1: "Physical Therapy",
    coachCheck2: "Rehab-Aware Training",
    coachCheck3: "Nutrition Guidance",
    coachCheck4: "Weekly Follow-up",
    
    problemTitle: "The Real Problem",
    problemSub: "Most people don't fail because they are weak — they fail because the plan is random.",
    problemDesc: "Wrong training. No nutrition system. No injury consideration. No follow-up. That's not a plan — that's noise. We replace it with a clear, science-based system built around you.",
    prob1Title: "Random Training",
    prob1Text: "Exercises chosen without structure, no periodization, no progression logic.",
    prob2Title: "No Nutrition System",
    prob2Text: "Eating based on guesses or impossible rules that never stick in real life.",
    prob3Title: "Ignored Injuries",
    prob3Text: "Generic plans that make old injuries worse and create new ones.",
    prob4Title: "Zero Follow-up",
    prob4Text: "Left alone after day one with no adjustments, no accountability, no one checking in.",
    
    methTitle: "Our Methodology",
    methSub: "A 4-step system built on science.",
    methDesc: "Every client starts with a complete picture — then we build from there.",
    meth1Title: "Assessment",
    meth1Text: "Health, posture, injuries, lifestyle, goals — we measure before we prescribe. No guessing, no assumptions.",
    meth2Title: "Smart Training Plan",
    meth2Text: "Progressive, rehab-aware, periodized programming designed specifically for your body and goals.",
    meth3Title: "Nutrition Organization",
    meth3Text: "A practical structure — not a punishing diet. Real food, real adherence, built around your lifestyle.",
    meth4Title: "Continuous Follow-up",
    meth4Text: "Weekly check-ins, adjustments, and accountability so progress never stalls. You're never alone.",
    
    transTitle: "Transformations",
    transSub: "Real people. Real results.",
    transDesc: "Each result is built on assessment, structure, and consistent follow-up.",
    filterAll: "All",
    filterFatLoss: "Fat Loss",
    filterMuscle: "Muscle Gain",
    filterRehab: "Rehab",
    filterPerformance: "Performance",
    
    trans1ImgAlt: "Mo'men transformation",
    trans1Name: "Mo'men",
    trans1Desc: "Taekwondo athlete — performance & muscle gain",
    trans1Detail: "Improved back definition and athletic muscle gain to support taekwondo performance.",
    trans1Outcome: "Outcome: enhanced athletic muscle mass & performance",
    
    trans2ImgAlt: "Abdullah transformation",
    trans2Name: "Abdullah",
    trans2Desc: "Shoulder rehab + fat loss",
    trans2Detail: "8-week outcome: shoulder rehabilitation, fat loss, and stronger posture and shape.",
    trans2Outcome: "8-week result: pain-free shoulder + improved body composition",
    
    trans3ImgAlt: "Amgad transformation",
    trans3Name: "Amgad, 25",
    trans3Desc: "69 kg → 74 kg — clean muscle gain",
    trans3Detail: "3-month outcome: organized nutrition + structured training to gain 5 kg of quality mass.",
    trans3Outcome: "3 months: +5 kg quality muscle mass",
    
    trans4ImgAlt: "Ali transformation",
    trans4Name: "Ali, 42",
    trans4Desc: "85 kg → 79 kg — rehab & fat loss",
    trans4Detail: "3-month outcome: shoulder injury rehab and fat loss — back to daily life and work, pain-free.",
    trans4Outcome: "3 months: -6 kg + pain-free shoulder",
    
    transDisclaimer: "* Results vary by commitment, starting point, and health condition.",
    
    progTitle: "Programs & Services",
    progSub: "Choose your path.",
    progDesc: "Every program is built around your body, your goals, and your real life.",
    prog1Title: "Fitness Society Community",
    prog1Text: "Motivation, Q&A, tracking and accountability inside a private community. Never train alone again.",
    progCta: "Start Your Transformation",
    progCtaRehab: "View Rehab Programs",
    prog2Title: "8-Week Fat Loss & Health Reset",
    prog2Text: "Safe, realistic weight loss with habits, training, and nutrition. Sustainable results, not crash diets.",
    prog3Title: "Rehab-Aware Training",
    prog3Text: "Neck, shoulder, lower back, and sciatica-friendly modifications. Train around pain, not through it.",
    prog4Title: "Muscle Gain Program",
    prog4Text: "Progressive overload, calories, form, and consistency — built for quality growth and long-term strength.",
    
    // Rehab Page Content
    rehabPageTitle: "Dr. Maged | Specialized Rehab Training Programs",
    rehabHeroTag: "Rehabilitation & Performance",
    rehabHeroTitle: "Train Around Pain,<br>Not Through It.",
    rehabHeroSub: "Targeted, science-based rehabilitation programs for shoulder, knee, and lower back issues. We focus on rebuilding strength and function safely.",
    shoulderProgTitle: "Shoulder Pain Program",
    shoulderProgDesc: "Designed for impingement, rotator cuff issues, and general shoulder instability. We rebuild mobility and strength so you can lift and move pain-free.",
    kneeProgTitle: "Knee Pain Program",
    kneeProgDesc: "A structured approach to anterior knee pain, meniscus recovery, and patellar tracking issues. Strengthen the surrounding musculature to protect the joint.",
    backProgTitle: "Low Back Pain Program",
    backProgDesc: "Targeting sciatica, disc issues, and chronic lower back pain. We focus on core stability, spinal mechanics, and progressive load to restore your confidence in movement.",
    
    whyTitle: "Why It Works",
    whySub: "A system built on principles, not hype.",
    whyDesc: "Every decision is backed by science and tailored to your body.",
    whyStatRehab: "Rehab",
    whyStatNutrition: "Nutrition",
    whyStatWeekly: "Weekly",
    whyStatScience: "Science",
    why1Title: "Assessment-Based Plans",
    why1Text: "Every program starts with a full evaluation. No guessing.",
    why2Title: "Injury-Aware Coaching",
    why2Text: "Modifications for every injury and limitation built in from day one.",
    why3Title: "Practical Food Guidance",
    why3Text: "Real food, real adherence — not a punishing diet you can't maintain.",
    why4Title: "Personal Follow-up",
    why4Text: "Check-ins and adjustments every week so progress never stalls.",
    why5Title: "Evidence-Based Programming",
    why5Text: "Built on proven principles, not trends, gimmicks, or hype.",
    
    faqTitle: "FAQ",
    faqSub: "Honest answers.",
    faqDesc: "No vague promises — just clear, direct responses to the most common questions.",
    faq1Q: "Do I need gym experience to start?",
    faq1A: "Not at all. Every program starts with a full assessment, and training is scaled to your current level — whether you've never touched a weight or have years of experience.",
    faq2Q: "What if I have an injury or chronic pain?",
    faq2A: "That's exactly what we specialize in. Your program will include rehab-aware modifications from day one — we work around your pain, not through it.",
    faq3Q: "How is this different from a generic online plan?",
    faq3A: "Generic plans ignore your injuries, your lifestyle, and your actual body. Every plan here is built after a full assessment, with weekly follow-up and real adjustments based on your progress.",
    faq4Q: "What does weekly follow-up include?",
    faq4A: "A dedicated check-in every week where we review your progress, adjust training and nutrition, address any issues, and keep you accountable. You're never left on your own.",
    faq5Q: "Can I join from outside Egypt?",
    faq5A: "Yes. All coaching is done online — training plans, nutrition guidance, and weekly follow-up are all delivered remotely, wherever you are.",
    
    finalTag: "Dr. Maged Fitness Society",
    finalTitle: "Your result starts with<br>one correct step.",
    finalSub: "Stop guessing. Start a system that's built around your body, your goals, and your life.",
    finalCta1: "Start Now",
    finalCta2: "Book Assessment",
    
    footerQuickLinks: "Quick Links",
    footerCopy: "© " + new Date().getFullYear() + " Dr. Maged. All rights reserved."
  },
  ar: {
    pageTitle: "د. ماجد | تدريب علمي لخسارة الدهون وبناء العضلات والتعافي من الإصابات",
    metaDesc: "اخسر دهون واكسب عضل وعالج إصابتك في 12 أسبوع مع تدريب مبني على العلم من متخصص في العلاج الطبيعي وإصابات وآلام التمرين.",
    
    logoAlt: "د. ماجد",
    navTransformations: "النتائج",
    navMethodology: "المنهجية",
    navPrograms: "البرامج",
    navFaq: "الأسئلة الشائعة",
    headerCta: "احجز تقييمك",
    
    heroTagline: "العلم والقوة",
    heroTitle: "ابني جسم أقوى<br>بتدريب مبني<br>على العلم.",
    heroSub: "لياقة، تدريب يراعي الإصابات، توجيه غذائي، ومتابعة مستمرة — مصمم لأشخاص حقيقيين يريدون نتائج حقيقية.",
    heroCta1: "ابدأ رحلة التغيير",
    heroCta2: "شاهد النتائج",
    heroMotto: "لا تضيع يوماً أبداً.",
    heroPhotoAlt: "د. ماجد",
    
    coachBadge1: "علاج طبيعي · أداء",
    coachBadge2: "صحة العمود الفقري والأداء",
    coachMiniBadge: "علاج طبيعي · مدرب",
    coachLabel: "المدرب",
    coachRole: "علاج طبيعي · أداء رياضي",
    coachBio: "كبرت وأنا شايف عيلتي بتواجه أمراض مزمنة وإصابات، وفهمت إن الموضوع مش خاص بعيلتي بس، ده نمط شايفه في كل حد حواليا. ده اللي خلاني أدرس علاج طبيعي، وأدمج خلفيتي الطبية مع التدريب والتغذية وأسلوب الحياة. دلوقتي بساعد الناس تبني عضل حقيقي وتخسر دهون، من غير ما تدفع الفاتورة بألم أو إصابة. هدفي إني أبني مجتمع صحي وخالي من الإصابات، عميل ورا عميل.",
    coachCheck1: "علاج طبيعي",
    coachCheck2: "تدريب يراعي الإصابات",
    coachCheck3: "توجيه غذائي",
    coachCheck4: "متابعة أسبوعية",
    
    problemTitle: "المشكلة الحقيقية",
    problemSub: "معظم الناس لا يفشلون لأنهم ضعفاء — بل يفشلون لأن الخطة عشوائية.",
    problemDesc: "تدريب خاطئ. لا يوجد نظام غذائي. تجاهل الإصابات. لا توجد متابعة. هذه ليست خطة — هذه فوضى. نحن نستبدلها بنظام واضح مبني على العلم مصمم خصيصاً لك.",
    prob1Title: "تدريب عشوائي",
    prob1Text: "تمارين مختارة بدون هيكل، لا تقسيم لمراحل التدريب، ولا منطق للتطور.",
    prob2Title: "لا يوجد نظام غذائي",
    prob2Text: "أكل يعتمد على التخمين أو قواعد مستحيلة لا تستمر في الحياة الواقعية.",
    prob3Title: "تجاهل الإصابات",
    prob3Text: "خطط عامة تجعل الإصابات القديمة أسوأ وتخلق إصابات جديدة.",
    prob4Title: "لا توجد متابعة",
    prob4Text: "تُترك وحدك بعد اليوم الأول بلا تعديلات، لا مساءلة، ولا أحد يتابعك.",
    
    methTitle: "منهجيتنا",
    methSub: "نظام من 4 خطوات مبني على العلم.",
    methDesc: "كل عميل يبدأ بصورة كاملة — ثم نبني من هناك.",
    meth1Title: "التقييم",
    meth1Text: "الصحة، القوام، الإصابات، أسلوب الحياة، الأهداف — نحن نقيس قبل أن نصف. لا تخمين ولا افتراضات.",
    meth2Title: "خطة تدريب ذكية",
    meth2Text: "تدريجي، يراعي الإصابات، وبرمجة مقسمة لمراحل مصممة خصيصاً لجسمك وأهدافك.",
    meth3Title: "تنظيم التغذية",
    meth3Text: "هيكل عملي — وليس حمية قاسية. طعام حقيقي، التزام حقيقي، مصمم ليناسب أسلوب حياتك.",
    meth4Title: "متابعة مستمرة",
    meth4Text: "مراجعات أسبوعية، تعديلات، ومساءلة حتى لا يتوقف التقدم أبداً. لست وحدك.",
    
    transTitle: "النتائج",
    transSub: "عملاء حقيقيون. نتائج حقيقية.",
    transDesc: "كل نتيجة مبنية على تقييم، هيكل، ومتابعة مستمرة.",
    filterAll: "الكل",
    filterFatLoss: "خسارة دهون",
    filterMuscle: "بناء عضلات",
    filterRehab: "تأهيل",
    filterPerformance: "أداء رياضي",
    
    trans1ImgAlt: "نتيجة مؤمن",
    trans1Name: "مؤمن",
    trans1Desc: "لاعب تايكوندو — أداء رياضي وبناء عضلات",
    trans1Detail: "تحسن في تفاصيل الظهر وبناء كتلة عضلية رياضية لدعم الأداء في التايكوندو.",
    trans1Outcome: "النتيجة: زيادة في الكتلة العضلية وتحسن في الأداء الرياضي",
    
    trans2ImgAlt: "نتيجة عبد الله",
    trans2Name: "عبد الله",
    trans2Desc: "تأهيل كتف + خسارة دهون",
    trans2Detail: "النتيجة بعد 8 أسابيع: تأهيل للكتف، خسارة دهون، تحسن في القوام والشكل.",
    trans2Outcome: "النتيجة بعد 8 أسابيع: كتف بدون ألم + تحسن في تكوين الجسم",
    
    trans3ImgAlt: "نتيجة أمجد",
    trans3Name: "أمجد، 25 سنة",
    trans3Desc: "69 كجم → 74 كجم — زيادة عضلية صافية",
    trans3Detail: "النتيجة بعد 3 شهور: تنظيم غذائي + تدريب منظم لزيادة 5 كجم من الكتلة العضلية بجودة عالية.",
    trans3Outcome: "3 شهور: +5 كجم كتلة عضلية بجودة",
    
    trans4ImgAlt: "نتيجة علي",
    trans4Name: "علي، 42 سنة",
    trans4Desc: "85 كجم → 79 كجم — تأهيل وخسارة دهون",
    trans4Detail: "النتيجة بعد 3 شهور: تأهيل إصابة الكتف وخسارة دهون — العودة للحياة اليومية والعمل بدون ألم.",
    trans4Outcome: "3 شهور: -6 كجم + كتف بدون ألم",
    
    transDisclaimer: "* تختلف النتائج باختلاف الالتزام، نقطة البداية، والحالة الصحية.",
    
    progTitle: "البرامج والخدمات",
    progSub: "اختر مسارك.",
    progDesc: "كل برنامج مصمم ليناسب جسمك، أهدافك، وحياتك الواقعية.",
    prog1Title: "مجتمع لياقة د. ماجد",
    prog1Text: "تحفيز، أسئلة وأجوبة، متابعة ومساءلة داخل مجتمع خاص. لن تتدرب وحدك أبداً بعد اليوم.",
    progCta: "ابدأ رحلة التغيير",
    progCtaRehab: "عرض برامج التأهيل",
    prog2Title: "8 أسابيع لخسارة الدهون وإعادة ضبط الصحة",
    prog2Text: "خسارة وزن آمنة وواقعية مع بناء عادات، تدريب، وتغذية. نتائج مستدامة، ليست حميات سريعة.",
    prog3Title: "تدريب يراعي الإصابات",
    prog3Text: "تعديلات تناسب الرقبة، الكتف، أسفل الظهر، وعرق النسا. تدرّب حول الألم، ليس من خلاله.",
    prog4Title: "برنامج بناء العضلات",
    prog4Text: "زيادة تدريجية للأحمال، سعرات، أداء حركي، واستمرارية — مصمم لنمو عالي الجودة وقوة طويلة الأمد.",
    
    // Rehab Page Content
    rehabPageTitle: "د. ماجد | برامج التأهيل المتخصصة",
    rehabHeroTag: "التأهيل والأداء",
    rehabHeroTitle: "تدرّب حول الألم،<br>وليس من خلاله.",
    rehabHeroSub: "برامج تأهيل مخصصة ومبنية على العلم لمشاكل الكتف، الركبة، وأسفل الظهر. نركز على استعادة القوة والوظيفة بأمان.",
    shoulderProgTitle: "برنامج آلام الكتف",
    shoulderProgDesc: "مصمم لحالات الانحشار، مشاكل الكفة المدورة، وعدم استقرار الكتف. نعيد بناء الحركة والقوة لتتمكن من الرفع والتحرك بدون ألم.",
    kneeProgTitle: "برنامج آلام الركبة",
    kneeProgDesc: "نهج منظم لآلام الركبة الأمامية، تعافي الغضروف المفصلي، ومشاكل حركة الرضفة. تقوية العضلات المحيطة لحماية المفصل.",
    backProgTitle: "برنامج آلام أسفل الظهر",
    backProgDesc: "يستهدف عرق النسا، مشاكل الديسك، وآلام أسفل الظهر المزمنة. نركز على استقرار الجذع، ميكانيكا العمود الفقري، والتحميل التدريجي لاستعادة ثقتك في حركتك.",
    
    whyTitle: "لماذا ينجح النظام",
    whySub: "نظام مبني على المبادئ، ليس على الدعاية.",
    whyDesc: "كل قرار مدعوم بالعلم ومصمم خصيصاً لجسمك.",
    whyStatRehab: "تأهيل",
    whyStatNutrition: "تغذية",
    whyStatWeekly: "أسبوعياً",
    whyStatScience: "العلم",
    why1Title: "خطط مبنية على التقييم",
    why1Text: "كل برنامج يبدأ بتقييم كامل. لا يوجد تخمين.",
    why2Title: "تدريب يراعي الإصابات",
    why2Text: "تعديلات لكل إصابة وقيود مدمجة في الخطة من اليوم الأول.",
    why3Title: "توجيه غذائي عملي",
    why3Text: "طعام حقيقي، التزام حقيقي — ليس حمية قاسية لا يمكنك الاستمرار عليها.",
    why4Title: "متابعة شخصية أسبوعية",
    why4Text: "مراجعات وتعديلات كل أسبوع حتى لا يتوقف التقدم أبداً.",
    why5Title: "برامج مبنية على الأدلة",
    why5Text: "مبنية على مبادئ مثبتة، وليست تريندات أو دعاية.",
    
    faqTitle: "الأسئلة الشائعة",
    faqSub: "إجابات صريحة.",
    faqDesc: "لا وعود غامضة — مجرد إجابات واضحة ومباشرة لأكثر الأسئلة شيوعاً.",
    faq1Q: "هل أحتاج لخبرة في الجيم للبدء؟",
    faq1A: "على الإطلاق. كل برنامج يبدأ بتقييم كامل، والتدريب يتم تعديله ليناسب مستواك الحالي — سواء لم تلمس وزناً في حياتك أو لديك سنوات من الخبرة.",
    faq2Q: "ماذا لو كان لدي إصابة أو ألم مزمن؟",
    faq2A: "هذا بالضبط ما نتخصص فيه. برنامجك سيتضمن تعديلات تراعي الإصابة من اليوم الأول — نحن نتدرب حول ألمك، وليس من خلاله.",
    faq3Q: "كيف يختلف هذا عن الخطط الجاهزة عبر الإنترنت؟",
    faq3A: "الخطط الجاهزة تتجاهل إصاباتك، أسلوب حياتك، وجسمك الفعلي. كل خطة هنا تُبنى بعد التقييم الكامل، مع متابعة أسبوعية وتعديلات حقيقية بناءً على تقدمك.",
    faq4Q: "ماذا تتضمن المتابعة الأسبوعية؟",
    faq4A: "مراجعة مخصصة كل أسبوع حيث نراجع تقدمك، ونعدل التدريب والتغذية، ونعالج أي مشاكل، ونبقيك مسؤولاً. لن تُترك وحدك أبداً.",
    faq5Q: "هل يمكنني الانضمام من خارج مصر؟",
    faq5A: "نعم. التدريب يتم بالكامل عبر الإنترنت — خطط التدريب، التوجيه الغذائي، والمتابعة الأسبوعية تُقدم كلها عن بعد، أينما كنت.",
    
    finalTag: "مجتمع لياقة د. ماجد",
    finalTitle: "نتيجتك تبدأ بـ<br>خطوة صحيحة واحدة.",
    finalSub: "توقف عن التخمين. ابدأ بنظام مصمم لجسمك، أهدافك، وحياتك.",
    finalCta1: "ابدأ الآن",
    finalCta2: "احجز التقييم",
    
    footerQuickLinks: "روابط سريعة",
    footerCopy: "© " + new Date().getFullYear() + " د. ماجد. جميع الحقوق محفوظة."
  }
};

// ============================================================================
// State & Elements
// ============================================================================
let currentLang = localStorage.getItem('lang') || 'en';

const langToggleBtn = document.getElementById('langToggle');
const langEnSpan = document.querySelector('.lang-en');
const langArSpan = document.querySelector('.lang-ar');
const htmlEl = document.documentElement;

// ============================================================================
// Language Toggling Logic
// ============================================================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  htmlEl.lang = lang;
  htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  if (lang === 'ar') {
    langArSpan.classList.add('active');
    langEnSpan.classList.remove('active');
  } else {
    langEnSpan.classList.add('active');
    langArSpan.classList.remove('active');
  }
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key]; // innerHTML allows <br> tags in headings
    }
  });
  
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (i18n[lang][key]) el.alt = i18n[lang][key];
  });

  document.querySelectorAll('[data-i18n-meta]').forEach(el => {
    const key = el.getAttribute('data-i18n-meta');
    if (i18n[lang][key]) {
      if (el.tagName.toLowerCase() === 'title') {
        el.textContent = i18n[lang][key];
      } else if (el.tagName.toLowerCase() === 'meta' && el.getAttribute('name') === 'description') {
        el.setAttribute('content', i18n[lang][key]);
      }
    }
  });
}

langToggleBtn.addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
});


// ============================================================================
// UI Interactions (Header, Mobile Nav, Smooth Scroll)
// ============================================================================
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');

function handleScroll() {
  if (window.scrollY > 40) header.classList.add('header--scrolled');
  else header.classList.remove('header--scrolled');
}
window.addEventListener('scroll', handleScroll, { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('is-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('is-open')) {
      hamburger.classList.remove('active');
      mainNav.classList.remove('is-open');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  });
});


// ============================================================================
// Transformations Filtering
// ============================================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const transCards = document.querySelectorAll('.trans-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    // Filter cards
    transCards.forEach(card => {
      const tags = card.getAttribute('data-tags');
      if (filterValue === 'all' || tags.includes(filterValue)) {
        card.classList.remove('hidden');
        // Tiny timeout to restart animation
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.classList.add('hidden');
        }, 300); // Wait for fade out
      }
    });
  });
});


// ============================================================================
// Scroll Reveal Animation
// ============================================================================
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}


// ============================================================================
// Initialization
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initScrollReveal();
  handleScroll();
});
