/**
 * קובץ הקונפיגורציה היחיד שצריך לערוך כדי להתאים את התבנית לעסק חדש.
 * שנה כאן שם עסק, טקסטים, צבעים ותמונות - וזהו, האתר מתעדכן אוטומטית בכל חמשת העמודים.
 */
window.SITE_CONFIG = {
  business: {
    name: "ד״ר נועה כרמל",
    specialty: "רפואת שיניים פרטית",
    phone: "0397654321",
    phoneDisplay: "03-976-5432",
    whatsapp: "972501122334",
    email: "info@carmel-dental.co.il",
    address: "רחוב סוקולוב 45, רמת השרון",
    mapQuery: "רחוב סוקולוב 45, רמת השרון",
    hours: [
      { days: "ראשון - חמישי", time: "09:00 - 19:00" },
      { days: "שישי", time: "09:00 - 13:00" },
      { days: "שבת", time: "סגור" }
    ]
  },

  brand: {
    colorBg: "#faf8f4",       // נייר בהיר וניטרלי - רקעי קטעים בהירים
    colorInk: "#212b2f",      // טקסט ראשי
    colorAccent: "#b7c9c2",   // מנטה שקטה - נגיעות/רקעי-תג בלבד, לא טקסט
    colorAccent2: "#3f6a96",  // כחול-אבק - הצבע האינטראקטיבי היחיד (כפתורים/קישורים/כותרות משנה)
    colorCard: "#ffffff",     // רקעי כרטיסים
    logoText: "ד״ר נועה כרמל",
    builtBy: "דוגמת עבודה · עסק בדיוני · נבנה על ידי אורי אסא, בניית אתרים לעסקים"
  },

  hero: {
    eyebrow: "רפואת שיניים פרטית · רמת השרון",
    title: "חיוך שמרגישים בו בנוח, מהרגע שנכנסים",
    subtitle: "מרפאה משפחתית עם יחס אישי וטיפול עדין - גם למי שמתוח מרופאי שיניים.",
    // תמונת סטוק זמנית (Pexels, מאומתת) - להחליף בתמונה אמיתית של המרפאה
    image: "https://images.pexels.com/photos/35438269/pexels-photo-35438269.jpeg?auto=compress&cs=tinysrgb&w=1400",
    ctaPrimaryText: "קביעת תור",
    ctaSecondaryText: "לכל הטיפולים"
  },

  // מה מייחד אותנו - רצועת תוכן אמיתי מתחת להירו, לא נתונים בדויים
  highlights: [
    { title: "מרפאה משפחתית ותיקה", text: "ברמת השרון, עם אותו צוות קבוע שמכיר אתכם ואת ההיסטוריה הרפואית שלכם." },
    { title: "הרדמה מותאמת אישית", text: "טיפול בקצב שלכם, כולל אפשרויות הרגעה למטופלים חוששים." },
    { title: "ציוד דיגיטלי עדכני", text: "צילום וסריקה תלת-ממדית לתכנון טיפול מדויק מראש." },
    { title: "זמינות למקרי חירום", text: "כאב פתאומי או שן שנשברה - נשתדל לראות אתכם באותו היום." }
  ],

  services: [
    { icon: "tooth", title: "בדיקה וניקוי שנתי", summary: "בדיקה מקיפה, ניקוי אבנית והדרכת טיפוח מותאמת אישית.", duration: "45 דק׳", price: "" },
    { icon: "shield", title: "סתימות תואמות צבע", summary: "טיפול בעששת בחומרים אסתטיים שאינם ניכרים בחיוך.", duration: "30-60 דק׳", price: "" },
    { icon: "sparkle", title: "הלבנת שיניים מקצועית", summary: "הלבנה בקליניקה או בבית, בליווי ומעקב צמוד לתוצאה בטוחה.", duration: "60 דק׳", price: "" },
    { icon: "smile", title: "עיצוב חיוך וציפויי חרסינה", summary: "שחזור צורה, גודל וצבע השיניים לחיוך טבעי ומדויק.", duration: "", price: "" },
    { icon: "implant", title: "השתלות שיניים", summary: "תכנון תלת-ממדי מראש והשתלה מדויקת, עם ליווי עד לשיקום המלא.", duration: "", price: "" },
    { icon: "root", title: "טיפולי שורש", summary: "שימור השן הטבעית שלכם במקום עקירה, בטכניקה מזערית-פולשנית.", duration: "", price: "" }
  ],

  about: {
    intro: "המרפאה נפתחה מתוך רצון פשוט - שטיפול שיניים לא יהיה חוויה מלחיצה. כל מטופל מקבל זמן, הסבר מלא לפני כל שלב, ותוכנית טיפול שמתאימה לו ולא רק לשן.",
    philosophy: "מקשיבים קודם, מטפלים אחר כך",
    // תמונת סטוק זמנית (Pexels, מאומתת) - להחליף בתמונה אמיתית של המרפאה
    image: "https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },

  // צוות המרפאה - אופציונלי; אם המערך ריק, הסעיף לא יוצג
  team: [
    { name: "ד״ר נועה כרמל", role: "רופאת שיניים ראשית ובעלים", bio: "בוגרת הפקולטה לרפואת שיניים באוניברסיטת תל אביב, עם התמחות באסתטיקה דנטלית ובטיפול במטופלים חוששים." },
    { name: "ד״ר איתן שגיא", role: "אורתודנט משתף פעולה", bio: "מתמחה ביישור שיניים למבוגרים ולילדים, כולל פתרונות שקופים." }
  ],

  gallery: [
    { image: "https://images.pexels.com/photos/6812453/pexels-photo-6812453.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "ציוד טיפולים דיגיטלי" },
    { image: "https://images.pexels.com/photos/6812479/pexels-photo-6812479.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "חדר טיפולים 1" },
    { image: "https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "עמדת עבודה מודרנית" },
    { image: "https://images.pexels.com/photos/3845553/pexels-photo-3845553.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "טיפול נעים ורגוע" },
    { image: "https://images.pexels.com/photos/3946829/pexels-photo-3946829.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "חדר טיפולים 2" },
    { image: "https://images.pexels.com/photos/5355867/pexels-photo-5355867.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "הצוות שלנו" }
  ],

  testimonials: [
    { name: "מאיה אשכנזי", text: "הפעם הראשונה שיצאתי מרופאת שיניים בלי לחץ. הסבירו לי כל שלב לפני שעשו אותו.", rating: 5 },
    { name: "רון פרידמן", text: "עברתי אצלם השתלה מורכבת - התכנון המדויק והליווי היו ברמה אחרת לגמרי.", rating: 5 },
    { name: "דנה גורן", text: "הילד שלי מפחד מרופאים, ופה הוא דווקא נרגע. יחס סבלני ומקצועי.", rating: 5 }
  ],

  contact: {
    formTitle: "קביעת תור",
    formSubtitle: "השאירו פרטים ונחזור אליכם לתיאום מועד מתאים",
    successMessage: "תודה! נחזור אליכם בהקדם לתיאום התור."
  }
};
