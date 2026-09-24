/**
 * הקובץ היחיד שצריך לערוך כדי להתאים את הדמו לעסק אחר.
 * שולט על כל חמשת העמודים בו-זמנית.
 */
window.SITE_CONFIG = {
  business: {
    name: "טחנה",
    specialty: "בורגר בר",
    tagline: "נטחן כאן. נצלה עכשיו.",
    phone: "0544745966",
    phoneDisplay: "054-474-5966",
    email: "tahana@example.com",
    address: "רחוב הבשר 12, כפר סבא",
    mapQuery: "רחוב הבשר 12, כפר סבא",
    founded: "2019",
    hours: [
      { days: "ראשון - חמישי", time: "12:00 - 23:00" },
      { days: "שישי", time: "12:00 - 15:00" },
      { days: "מוצ״ש", time: "19:00 - 24:00" }
    ]
  },

  brand: {
    colorChar: "#141110",  // פחם - רקע דומיננטי
    colorFire: "#d4551f",  // גחלים - פאנלים ומבטאים גדולים (לא טקסט קטן על כהה)
    colorEmber: "#f08b3c", // גחלים בהיר - טקסט מבטא על רקע כהה (עובר ניגודיות)
    colorInk: "#f4efe6",   // טקסט בהיר
    colorBone: "#e8dcc8",  // טקסט משני
    logoText: "טחנה",
    builtBy: "דוגמת עבודה · עסק בדיוני · נבנה על ידי אורי אסא, בניית אתרים לעסקים"
  },

  // פאנלים של עמוד הבית - כל אחד הוא מסך מלא
  home: {
    openTitle: "נטחן כאן.\nנצלה עכשיו.",
    openText: "אנגוס מיושן 21 יום, נטחן מאחורי הזכוכית שלוש פעמים ביום.",
    openImage: "https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&w=1600",
    signatureLabel: "מנת החתימה",
    signatureTitle: "הטחנה הכפולה",
    signatureText: "שתי חתיכות 90 גרם, צ׳דר מיושן, בצל מקורמל ולחמנייה מאפה בית. בלי תוספות שלא צריך.",
    closeTitle: "רחוב\nהבשר 12",
    closeImage: "https://images.pexels.com/photos/5863513/pexels-photo-5863513.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },

  menu: [
    { name: "הטחנה", desc: "אנגוס, צ׳דר מיושן, איולי שום", price: "68 ₪" },
    { name: "פלפלייה", desc: "צ׳יפוטלה, חלפיניו כבוש, גאודה", price: "72 ₪" },
    { name: "יער", desc: "ריבת פירות יער, בצל מקורמל, ברי", price: "74 ₪" },
    { name: "עגל נא", desc: "טרטר, חלמון, טוסט חמאה", price: "66 ₪" },
    { name: "פטריות ויין", desc: "פורטובלו, יין אדום מצומצם, גרוייר", price: "76 ₪" },
    { name: "צמחוני שורשים", desc: "קציצת סלק ועדשים, טחינה גולמית", price: "62 ₪" }
  ],

  sides: [
    { name: "צ׳יפס בשומן אווז", desc: "מטוגן פעמיים", price: "26 ₪" },
    { name: "טבעות בצל", desc: "בלילת בירה", price: "24 ₪" },
    { name: "סלט חסה קר", desc: "ויניגרט חרדל", price: "28 ₪" }
  ],

  // עמוד "הבשר" - הסיפור, כרשימת מפרט אמיתית
  meat: {
    title: "הבשר",
    lede: "לא קונים המבורגר טחון. קונים נתח, ותוחנים אותו כאן.",
    image: "https://images.pexels.com/photos/13279395/pexels-photo-13279395.jpeg?auto=compress&cs=tinysrgb&w=1600",
    specs: [
      { k: "מקור", v: "משק בגליל העליון, אנגוס מקומי" },
      { k: "יישון", v: "21 יום, יישון יבש" },
      { k: "תערובת", v: "80/20 שריר-שומן" },
      { k: "טחינה", v: "שלוש פעמים ביום, מאחורי חלון הזכוכית" },
      { k: "צלייה", v: "פלנצ׳ה 260°, צריבה משני הצדדים" },
      { k: "לחמנייה", v: "נאפית אצלנו כל בוקר" }
    ],
    closing: "מי שרוצה לראות - מוזמן לעמוד מול הזכוכית. זה החלק הכי טוב."
  },

  gallery: [
    { image: "https://images.pexels.com/photos/19247562/pexels-photo-19247562.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "הטחנה הכפולה" },
    { image: "https://images.pexels.com/photos/19247582/pexels-photo-19247582.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "בייקון וצ׳דר" },
    { image: "https://images.pexels.com/photos/13573666/pexels-photo-13573666.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "רוקט וגבינה מותכת" },
    { image: "https://images.pexels.com/photos/5488033/pexels-photo-5488033.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "מוגש על קרש" },
    { image: "https://images.pexels.com/photos/9511004/pexels-photo-9511004.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "הבר" },
    { image: "https://images.pexels.com/photos/5863513/pexels-photo-5863513.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "החלל בערב" }
  ],

  visit: {
    title: "ביקור",
    lede: "40 מקומות, מבנה לשימור, בלי מוזיקה רועשת מדי.",
    image: "https://images.pexels.com/photos/9511004/pexels-photo-9511004.jpeg?auto=compress&cs=tinysrgb&w=1600",
    formTitle: "הזמנת שולחן",
    formSubtitle: "לקבוצות מ-6 סועדים - השאירו פרטים ונחזור אליכם.",
    successMessage: "קיבלנו. נחזור אליכם לאישור ההזמנה."
  }
};
