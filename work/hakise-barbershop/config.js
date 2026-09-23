/**
 * קובץ הקונפיגורציה היחיד של האתר.
 * שינוי כאן מתעדכן בכל ששת העמודים בבת אחת.
 * כיוון עיצובי: "הכיסאות" · לבן אריחים, פחם, בורדו ופליז.
 *
 * דוגמת עבודה - "הכיסא" הוא עסק בדיוני.
 */
window.SITE_CONFIG = {
  business: {
    name: "הכיסא",
    latin: "HAKISE · BARBERSHOP · EST. 1998",
    specialty: "מספרה קלאסית",
    phone: "0390000000",
    phoneDisplay: "03-900-0000",
    whatsapp: "972500000000",
    email: "hello@hakise-barber.co.il",
    address: "הרצל 12, נס ציונה",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=%D7%94%D7%A8%D7%A6%D7%9C+12+%D7%A0%D7%A1+%D7%A6%D7%99%D7%95%D7%A0%D7%94",
    parking: "חניה כחולה-לבנה לאורך הרחוב, וחניון עירוני במרחק דקה הליכה ברחוב ויצמן.",
    builtBy: "דוגמת עבודה · עסק בדיוני · נבנה על ידי אורי אסא, בניית אתרים לעסקים"
  },

  // מערכת התורים החיצונית של העסק.
  // באתר אמיתי: הקישור למערכת שהמספרה כבר עובדת איתה (Tor4You, Easy Appointments, Calendly וכו').
  // כשהשדה ריק - האתר מציג הודעת הדגמה במקום לעבור לקישור.
  booking: {
    url: "",
    systemName: "מערכת התורים של המספרה"
  },

  brand: {
    colorBg:      "#f4f4f2", // לבן אריחים - רקע ראשי
    colorCard:    "#ffffff", // כרטיסים
    colorInk:     "#1a1a1a", // פחם - טקסט, רקעי שלט, כפתור ראשי
    colorMuted:   "#55524d", // טקסט משני (7.13:1 על אריחים)
    colorAccent:  "#6b1e2b", // בורדו - הצבע האינטראקטיבי (10.6:1 על אריחים)
    colorBrass:   "#a8834a", // פליז - קווים ונגיעות בלבד, לא לטקסט על בהיר
    colorBrassLt: "#d9bf8f"  // פליז בהיר - טקסט על פחם בלבד (10.4:1)
  },

  // הספרים. id משמש גם בקישור "לקבוע אצל" (book.html?barber=id).
  // התמונות הן תמונות סטוק זמניות מ-Pexels - להחליף בתמונות אמיתיות של הצוות.
  barbers: [
    {
      id: "yossi",
      name: "יוסי",
      role: "הבעלים",
      years: "28 שנה על הכיסא",
      craft: "קלאסי ומספריים",
      bio: "פתח את הכיסא ב־1998 עם כיסא אחד ומראה אחת. עדיין עושה את רוב התספורות במספריים, ועדיין זוכר איך כל לקוח קבוע אוהב את הצד.",
      next: "היום 12:00",
      image: "https://images.pexels.com/photos/1319462/pexels-photo-1319462.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "avi",
      name: "אבי",
      role: "ספר",
      years: "11 שנה",
      craft: "פייד ועיצוב זקן",
      bio: "המומחה של המספרה לפייד חלק ולקווי זקן חדים. עובד לאט במכוון - תספורת אצל אבי לוקחת את הזמן שהיא צריכה.",
      next: "מחר 10:30",
      image: "https://images.pexels.com/photos/7697489/pexels-photo-7697489.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "daniel",
      name: "דניאל",
      role: "ספר",
      years: "6 שנים",
      craft: "ילדים וגילוח בתער",
      bio: "הסבלנות של המספרה. ילדים יושבים אצלו בשקט, ומבוגרים חוזרים בשביל גילוח התער עם המגבת החמה.",
      next: "היום 17:45",
      image: "https://images.pexels.com/photos/1836983/pexels-photo-1836983.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ],

  // המחירון. featured = מופיע בשלט המקוצר בדף הבית.
  services: [
    { id: "cut",     name: "תספורת",                   minutes: 30, price: 80,  featured: true,  note: "כולל חפיפה וסידור" },
    { id: "cutbeard",name: "תספורת + זקן",             minutes: 45, price: 110, featured: true,  note: "תספורת מלאה ועיצוב קווי זקן" },
    { id: "fade",    name: "פייד",                     minutes: 40, price: 90,  featured: false, note: "מעבר חלק במכונה, גימור במספריים" },
    { id: "shave",   name: "גילוח בתער ומגבת חמה",     minutes: 25, price: 60,  featured: true,  note: "מגבת חמה, קצף, תער ותחליב לאחר גילוח" },
    { id: "beard",   name: "עיצוב זקן",                minutes: 20, price: 50,  featured: false, note: "קיצוץ, קווים ושמן זקן" },
    { id: "kids",    name: "ילדים עד 12",               minutes: 20, price: 60,  featured: true,  note: "בכיסא הקטן, עם סבלנות" },
    { id: "father",  name: "אבא ובן",                  minutes: 50, price: 130, featured: false, note: "שתי תספורות ברצף, אחת אחרי השנייה" }
  ],

  // day: 0 = ראשון ... 6 = שבת. open/close ריקים = סגור.
  hours: [
    { label: "ראשון–חמישי", days: [0, 1, 2, 3, 4], open: "09:00", close: "20:00" },
    { label: "שישי",        days: [5],             open: "08:00", close: "14:00" },
    { label: "שבת",         days: [6],             open: "",      close: "" }
  ],

  // תמונות סטוק זמניות מ-Pexels - להחליף בתמונות אמיתיות של המספרה.
  shots: {
    hero:  "https://images.pexels.com/photos/5282408/pexels-photo-5282408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    shop:  "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600",
    razor: "https://images.pexels.com/photos/9456810/pexels-photo-9456810.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },

  gallery: [
    { src: "https://images.pexels.com/photos/5282408/pexels-photo-5282408.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "ספר מסדר קו תספורת בשחור-לבן" },
    { src: "https://images.pexels.com/photos/4625615/pexels-photo-4625615.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "עיצוב זקן בכיסא" },
    { src: "https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "תספורת ללקוח עם זקן" },
    { src: "https://images.pexels.com/photos/6007400/pexels-photo-6007400.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "גילוח עם מגבת חמה" },
    { src: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "שני כיסאות עובדים במקביל" },
    { src: "https://images.pexels.com/photos/9456810/pexels-photo-9456810.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "תער עם ידית עץ" },
    { src: "https://images.pexels.com/photos/1836983/pexels-photo-1836983.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "ספר עובד במכונה" },
    { src: "https://images.pexels.com/photos/7697489/pexels-photo-7697489.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "ספר עם תער ומכונת תספורת" }
  ]
};
