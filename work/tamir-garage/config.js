/**
 * קובץ הקונפיגורציה היחיד שצריך לערוך כדי להתאים את התבנית לעסק חדש.
 * שנה כאן שם עסק, טקסטים, צבעים ותמונות - וזהו, האתר מתעדכן אוטומטית בכל העמודים.
 */
window.SITE_CONFIG = {
  business: {
    name: "מוסך תמיר",
    specialty: "מוסך מורשה לאבחון ותיקון רכב",
    phone: "0522345678",
    phoneDisplay: "052-234-5678",
    whatsapp: "972522345678",
    email: "info@tamir-garage.co.il",
    address: "רחוב היוצרים 12, ראשון לציון",
    mapQuery: "רחוב היוצרים 12, ראשון לציון"
  },

  brand: {
    colorPrimary: "#17323a", // פלדה כהה - כותרות וקטעים כהים
    colorAccent: "#c98a3e",  // נחושת - CTA ואמון בלבד
    colorDark: "#122a30",    // פלדה כהה יותר - רקעי קטעים כהים משניים
    colorLight: "#f5f2ea",   // נייר חם - רקעי קטעים בהירים
    colorSteel: "#6d7d7f",   // אפור-טיל - טקסט משני, מסגרות (נגיעות בלבד, לא לטקסט קטן על בהיר)
    logoText: "מוסך תמיר",
    builtBy: "דוגמת עבודה · עסק בדיוני · נבנה על ידי אורי אסא, בניית אתרים לעסקים"
  },

  hero: {
    title: "דיוק מקצועי, בלי הפתעות בחשבון",
    subtitle: "אבחון ממוחשב, חלקים מקוריים ואחריות בכתב על כל עבודה - מהצמיג ועד תיבת ההילוכים.",
    // תמונת סטוק זמנית (Pexels, מאומתת) - להחליף בתמונה אמיתית של המוסך
    image: "https://images.pexels.com/photos/8478233/pexels-photo-8478233.jpeg?auto=compress&cs=tinysrgb&w=1400",
    ctaPrimaryText: "קביעת תור עכשיו",
    ctaSecondaryText: "כל השירותים"
  },

  trust: {
    yearsFounded: "2006",
    guarantee: "אחריות בכתב על כל תיקון",
    certification: "מוסמכים על ידי משרד התחבורה",
    rating: "4.9",
    ratingCount: "210+ ביקורות בגוגל"
  },

  // רצועת "מה מייחד אותנו" בעמוד אודות
  highlights: [
    { title: "אבחון לפני הצעת מחיר", text: "לא מתחילים לעבוד לפני שהתקלה מאובחנת במדויק ואתם מאשרים את המחיר." },
    { title: "חלקים מקוריים בלבד", text: "בלי תחליפים זולים - כל חלק מוחלף הוא חלק מקורי או תואם-יצרן מאושר." },
    { title: "עדכון בזמן אמת", text: "SMS בכל שלב - קבלת הרכב, אבחון, ואישור לפני שממשיכים." },
    { title: "רכב חלופי בתיאום", text: "לתיקונים שלוקחים יותר מיום - רכב חלופי בתיאום מראש, בלי תוספת." }
  ],

  services: [
    { icon: "diagnose", title: "אבחון ממוחשב", description: "איתור תקלה מדויק עם ציוד אבחון עדכני, לפני כל הצעת מחיר." },
    { icon: "brakes", title: "מערכת בלמים", description: "בדיקה, תיקון והחלפה עם חלקים מקוריים - דיסקים, רפידות ונוזל בלמים." },
    { icon: "oil", title: "טיפול תקופתי", description: "שמן, מסננים ובדיקה כללית לפי הוראות היצרן - שומר על אחריות היבואן." },
    { icon: "tire", title: "צמיגים ואיזון", description: "החלפה, איזון פלגים ובדיקת לחץ אוויר - עם מעקב אחר בלאי." },
    { icon: "ac", title: "מיזוג אוויר", description: "בדיקת גז, ניקוי מערכת וטיפול בריחות לא נעימים במזגן הרכב." },
    { icon: "battery", title: "מצבר וחשמל רכב", description: "בדיקת מצבר, מתנע ודינמו, ואבחון תקלות חשמל שמדליקות נורית במחשב." },
    { icon: "transmission", title: "תיבת הילוכים", description: "בדיקה והחלפת שמן תיבה, אבחון רעשים וקפיצות הילוכים." },
    { icon: "inspect", title: "בדיקה לפני טסט", description: "בדיקה מקיפה והכנה לטסט השנתי, כולל תיקון הליקויים הנדרשים." }
  ],

  process: [
    { title: "מסירת הרכב", description: "קובעים תור, מגיעים או משאירים את הרכב - כולל רכב חלופי בתיאום מראש." },
    { title: "אבחון והצעת מחיר", description: "בדיקה מקיפה וממוחשבת, ואישור המחיר איתכם לפני שמתחילים בעבודה." },
    { title: "הרכב מוכן", description: "עדכון SMS כשהעבודה הושלמה, עם פירוט מה נעשה ואחריות בכתב." }
  ],

  about: {
    intro: "מוסך תמיר פועל בראשון לציון מאז 2006. התחלנו כמוסך משפחתי קטן, ועד היום כל רכב שנכנס מקבל את אותה גישה - לא מתחילים לעבוד לפני שהתקלה ברורה, ולא גובים על משהו שלא הוסבר מראש.",
    philosophy: "לקוח שמבין מה תוקן ולמה, הוא לקוח שחוזר.",
    // תמונת סטוק זמנית (Pexels, מאומתת) - להחליף בתמונה אמיתית של המוסך
    image: "https://images.pexels.com/photos/6106506/pexels-photo-6106506.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },

  gallery: [
    { image: "https://images.pexels.com/photos/13065692/pexels-photo-13065692.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "עבודה על מנוע" },
    { image: "https://images.pexels.com/photos/8985714/pexels-photo-8985714.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "תיקון תת-מכסה מנוע" },
    { image: "https://images.pexels.com/photos/4315575/pexels-photo-4315575.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "אבחון מערכת חשמל" },
    { image: "https://images.pexels.com/photos/13065689/pexels-photo-13065689.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "טיפול מדויק בפרטים" },
    { image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "החלפת צמיגים" },
    { image: "https://images.pexels.com/photos/33073853/pexels-photo-33073853.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "כלי עבודה מקצועיים" }
  ],

  testimonials: [
    { name: "דני לוי", text: "שירות מהיר ואמין, תמיד מסבירים מה עשו ולמה. ממליץ בחום.", rating: 5 },
    { name: "מיכל אברהם", text: "הצוות מקצועי ואדיב, המחירים הוגנים והרכב תמיד יוצא כמו חדש.", rating: 5 },
    { name: "יוסי מזרחי", text: "מוסך רציני שלא מנסה למכור דברים מיותרים. עובד רק איתם כמה שנים.", rating: 4 }
  ],

  hours: [
    { day: "ראשון - חמישי", hours: "08:00–18:00" },
    { day: "שישי", hours: "08:00–13:00" },
    { day: "שבת", hours: "סגור" }
  ],

  contact: {
    formTitle: "השאירו פרטים ונחזור אליכם",
    formSubtitle: "מלאו את הפרטים ונציג שלנו יחזור אליכם בהקדם לתיאום תור.",
    successMessage: "תודה! קיבלנו את הפנייה ונחזור אליכם בהקדם."
  }
};
