/**
 * ליבה - סטודיו פילאטיס
 * קובץ הקונפיגורציה היחיד שצריך לערוך כדי להתאים את האתר לעסק חדש.
 * שנה כאן שם עסק, פרטי קשר, צבעים, תמונות, שיעורים, מערכת שעות ומחירים -
 * וזהו, האתר מתעדכן אוטומטית בכל שישה העמודים.
 */
window.SITE_CONFIG = {

  business: {
    name: "ליבה",
    fullName: "ליבה · סטודיו פילאטיס",
    specialty: "סטודיו פילאטיס",
    latin: "Liba Pilates Studio",
    phone: "035564120",
    phoneDisplay: "03-556-4120",
    whatsapp: "972528804120",
    email: "studio@liba-pilates.co.il",
    address: "שלמה המלך 12, תל אביב",
    addressNote: "קומה 2, מעל הפרחים · חניה בשטראוס",
    mapQuery: "שלמה המלך 12, תל אביב",
    hours: [
      { days: "ראשון – חמישי", time: "06:30 – 20:00" },
      { days: "שישי",          time: "07:00 – 12:30" },
      { days: "שבת",           time: "סגור" }
    ]
  },

  brand: {
    // כיוון "חצי מסך קבוע" - עצם, פחם-שזיף ושזיף
    colorBone:    "#f8f6f4", // רקע ראשי
    colorInk:     "#1d1a21", // טקסט ראשי
    colorMuted:   "#5f5a66", // טקסט משני (6.2:1 על עצם)
    colorChar:    "#23202a", // פחם-שזיף - פאנל התמונה ורצועות כהות
    colorPlum:    "#6f4a64", // שזיף - הצבע האינטראקטיבי היחיד (6.86:1 על עצם)
    colorPlumLt:  "#c9a3bd", // שזיף בהיר - טקסט מבטא על כהה בלבד (7.21:1)
    colorSurface: "#f0ecef", // משטח משני
    colorLine:    "#e4dfe4",
    builtBy: "דוגמת עבודה · עסק בדיוני · נבנה על ידי אורי אסא, בניית אתרים לעסקים"
  },

  // הפאנל הקבוע: לכל סקשן תמונה, כיתוב ותווית.
  // כל התמונות מאותו צילום סטודיו אחד, כדי שהחלל ייראה עקבי לאורך האתר.
  images: {
    reformerClass:  "https://images.pexels.com/photos/25599836/pexels-photo-25599836.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reformerDetail: "https://images.pexels.com/photos/25599830/pexels-photo-25599830.jpeg?auto=compress&cs=tinysrgb&w=1400",
    studioEmpty:    "https://images.pexels.com/photos/25599824/pexels-photo-25599824.jpeg?auto=compress&cs=tinysrgb&w=1400",
    tower:          "https://images.pexels.com/photos/25596672/pexels-photo-25596672.jpeg?auto=compress&cs=tinysrgb&w=1400",
    duo:            "https://images.pexels.com/photos/25599833/pexels-photo-25599833.jpeg?auto=compress&cs=tinysrgb&w=1400",
    machine:        "https://images.pexels.com/photos/25596681/pexels-photo-25596681.jpeg?auto=compress&cs=tinysrgb&w=1400",
    lying:          "https://images.pexels.com/photos/25599822/pexels-photo-25599822.jpeg?auto=compress&cs=tinysrgb&w=1400",
    mat:            "https://images.pexels.com/photos/25599827/pexels-photo-25599827.jpeg?auto=compress&cs=tinysrgb&w=1400",
    teacher3:       "https://images.pexels.com/photos/25596678/pexels-photo-25596678.jpeg?auto=compress&cs=tinysrgb&w=1400"
  },

  hero: {
    kicker: "סטודיו פילאטיס · תל אביב",
    title: "הגוף לומד לאט. אנחנו לא ממהרים אותו.",
    lede: "סטודיו קטן עם שישה ריפורמרים, עד שמונה מתאמנים בשיעור, ומורה שמכירה את הגב שלך בשם.",
    ctaText: "שיעור ניסיון · 60 ₪"
  },

  classes: [
    {
      title: "ריפורמר בקבוצה קטנה",
      duration: "55 דק׳",
      capacity: "עד 8 מתאמנים",
      summary: "השיעור המרכזי של הסטודיו. עבודה על מכשיר עם קפיצים, שמאפשרת לעבוד חזק בלי להעמיס על המפרקים.",
      forWho: "מתאים למי שכבר מכיר את הבסיס, וגם למי שמתחיל - הקפיצים מתכווננים לכל אחד."
    },
    {
      title: "מזרן ואביזרים",
      duration: "50 דק׳",
      capacity: "עד 10 מתאמנים",
      summary: "פילאטיס קלאסי על מזרן, עם טבעות, כדורים ורצועות. בלי מכשירים - עם הרבה עבודת ליבה.",
      forWho: "מתאים למי שרוצה שיעור שאפשר לקחת אחר כך גם הביתה."
    },
    {
      title: "שיקום וכאבי גב",
      duration: "50 דק׳",
      capacity: "עד 4 מתאמנים",
      summary: "קבוצה זעירה לאחר פציעה, ניתוח או כאב כרוני. כל תרגיל נבחר לפי מה שהגוף מרשה באותו שבוע.",
      forWho: "בתיאום מראש ולאחר שיחת היכרות. אנחנו עובדים מול הפיזיותרפיסט שלך אם יש כזה."
    },
    {
      title: "היריון ואחרי לידה",
      duration: "45 דק׳",
      capacity: "עד 6 מתאמנות",
      summary: "עבודה על יציבה, רצפת אגן ונשימה, עם התאמות לכל טרימסטר וחזרה הדרגתית אחרי לידה.",
      forWho: "אפשר להצטרף בכל שלב, גם אם לא עשית פילאטיס קודם."
    }
  ],

  scheduleWeek: "שבוע 2–6 בספטמבר",
  scheduleDays: ["ראשון", "שני", "שלישי", "רביעי", "חמישי"],
  schedule: [
    { hour: "06:30", slots: [
      { name: "ריפורמר", teacher: "ענת", state: "open" },
      null,
      { name: "ריפורמר", teacher: "ענת", state: "open" },
      null,
      { name: "ריפורמר", teacher: "ענת", state: "open" }
    ]},
    { hour: "08:00", slots: [
      { name: "מזרן", teacher: "דנה", state: "full" },
      { name: "ריפורמר", teacher: "יעל", state: "open" },
      { name: "מזרן", teacher: "דנה", state: "full" },
      { name: "ריפורמר", teacher: "יעל", state: "open" },
      { name: "היריון", teacher: "דנה", state: "open" }
    ]},
    { hour: "09:30", slots: [
      { name: "שיקום", teacher: "ענת", state: "open" },
      null,
      { name: "שיקום", teacher: "ענת", state: "open" },
      null,
      { name: "מזרן", teacher: "דנה", state: "open" }
    ]},
    { hour: "17:30", slots: [
      { name: "מזרן", teacher: "דנה", state: "open" },
      { name: "ריפורמר", teacher: "ענת", state: "open" },
      { name: "מזרן", teacher: "דנה", state: "open" },
      { name: "ריפורמר", teacher: "ענת", state: "full" },
      null
    ]},
    { hour: "19:00", slots: [
      { name: "ריפורמר", teacher: "יעל", state: "open" },
      { name: "היריון", teacher: "דנה", state: "open" },
      { name: "ריפורמר", teacher: "יעל", state: "open" },
      { name: "מזרן", teacher: "יעל", state: "open" },
      null
    ]}
  ],

  prices: [
    { title: "שיעור ניסיון", note: "שיעור ראשון, כולל שיחת היכרות", value: "60 ₪" },
    { title: "שיעור בודד", note: "ריפורמר או מזרן", value: "110 ₪" },
    { title: "כרטיסייה · 10 שיעורים", note: "בתוקף לשלושה חודשים", value: "950 ₪" },
    { title: "מנוי חודשי · פעמיים בשבוע", note: "שיעור קבוע בשעה קבועה", value: "620 ₪" },
    { title: "מנוי חודשי · שלוש פעמים בשבוע", note: "שיעור קבוע בשעה קבועה", value: "840 ₪" },
    { title: "שיעור פרטי", note: "אחד על אחד, 55 דקות", value: "260 ₪" }
  ],

  team: [
    {
      name: "ענת בר-לב",
      role: "מייסדת הסטודיו · ריפורמר ושיקום",
      bio: "פתחה את ליבה ב-2016 אחרי שתים-עשרה שנים כמורה בסטודיו אחר. מלמדת בעיקר ריפורמר ואת קבוצות השיקום.",
      photo: "reformerDetail"
    },
    {
      name: "יעל נוימן",
      role: "ריפורמר",
      bio: "הגיעה לפילאטיס מרקע של מחול. מלמדת את שיעורי הבוקר המוקדמים ואת הערב.",
      photo: "duo"
    },
    {
      name: "דנה שרעבי",
      role: "מזרן · היריון ואחרי לידה",
      bio: "מלמדת מזרן ואביזרים, ואת כל קבוצות ההיריון והחזרה אחרי לידה.",
      photo: "teacher3"
    }
  ],

  faq: [
    { q: "אף פעם לא עשיתי פילאטיס. אפשר להתחיל?",
      a: "כן, וזה רוב האנשים שמגיעים אלינו. השיעור הראשון מתחיל בשיחה קצרה על פציעות והרגלים, והמורה מתאימה את הקפיצים ואת התרגילים אליך בתוך השיעור." },
    { q: "מה צריך להביא?",
      a: "גרביים עם גומיות למניעת החלקה (אפשר לקנות בסטודיו), בקבוק מים ובגדים שנוח לזוז בהם. כל השאר יש כאן." },
    { q: "יש לי כאבי גב. זה בסדר?",
      a: "ברוב המקרים כן, ולעיתים קרובות זו בדיוק הסיבה שאנשים מגיעים. נבקש לדעת מה האבחנה ומה אמר הרופא, ונשבץ אותך לקבוצת השיקום הקטנה ולא לשיעור רגיל." },
    { q: "איך מבטלים שיעור?",
      a: "בהודעה עד 12 שעות לפני השיעור, והשיעור חוזר לכרטיסייה. ביטול מאוחר יותר נחשב כשיעור שנוצל." },
    { q: "יש חניה?",
      a: "יש חניון בשטראוס במרחק דקה, ובשעות הבוקר בדרך כלל מתפנה מקום ברחוב." }
  ]
};
