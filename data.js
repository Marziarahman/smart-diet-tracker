/**
 * Smart Diet Tracker - Comprehensive Bangladeshi & International Food Database
 * Strictly 3 measurement options:
 * - Serving (1 piece / standard)
 * - Piece (~weight)
 * - Gram (g)
 *
 * Each unit provides approximate Calories (kcal), Protein (g), Carbs (g), and Fat (g).
 */

const BANGLADESHI_FOODS = [
  {
    id: "rice-white",
    name: "Plain White Rice",
    bengaliName: "সাদা ভাত",
    category: "Bangladeshi Foods",
    icon: "🍚",
    servingUnit: "150g (195 kcal)",
    caloriesPerUnit: 195,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.3, protein: 0.027, carbs: 0.28, fat: 0.003, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["rice", "bhaat", "bhat", "sada", "chal", "ভাত", "সাদা ভাত", "white rice"]
  },
  {
    id: "rice-brown",
    name: "Brown Rice / Lal Bhaat",
    bengaliName: "লাল চালের ভাত",
    category: "Bangladeshi Foods",
    icon: "🌾",
    servingUnit: "150g (215 kcal)",
    caloriesPerUnit: 215,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.433, protein: 0.03, carbs: 0.3, fat: 0.01, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["brown rice", "lal bhaat", "lal chal", "চাল", "লাল ভাত"]
  },
  {
    id: "khichuri-plain",
    name: "Plain / Bhuna Khichuri",
    bengaliName: "খিচুড়ি (ভুনা/পাতলা)",
    category: "Bangladeshi Foods",
    icon: "🍲",
    servingUnit: "200g (270 kcal)",
    caloriesPerUnit: 270,
    defaultUnit: "gram",
    defaultQty: 200,
    units: [
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.35, protein: 0.042, carbs: 0.22, fat: 0.035, defaultStep: 50, defaultQty: 200 },
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 270, protein: 8.4, carbs: 44.0, fat: 7.0, defaultStep: 1, defaultQty: 1 }
    ],
    keywords: ["khichuri", "khichdi", "bhuna khichuri", "খিচুড়ি", "ডাল চাল"]
  },
  {
    id: "beef-tehari",
    name: "Beef Tehari (গরুর তেহারি)",
    bengaliName: "গরুর তেহারি",
    category: "Bangladeshi Foods",
    icon: "🍛",
    servingUnit: "1 plate (~300g) (520 kcal)",
    caloriesPerUnit: 520,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 plate)", caloriesPerUnit: 520, protein: 22.0, carbs: 58.0, fat: 22.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.733, protein: 0.073, carbs: 0.193, fat: 0.073, defaultStep: 50, defaultQty: 300 }
    ],
    keywords: ["tehari", "tahari", "beef tehari", "gorur tehari", "তেহারি"]
  },
  {
    id: "kacchi-biryani",
    name: "Mutton Kacchi Biryani",
    bengaliName: "কাচ্চি বিরিয়ানি",
    category: "Bangladeshi Foods",
    icon: "🍛",
    servingUnit: "1 plate (~350g) (680 kcal)",
    caloriesPerUnit: 680,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 plate)", caloriesPerUnit: 680, protein: 28.0, carbs: 70.0, fat: 32.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.943, protein: 0.08, carbs: 0.2, fat: 0.091, defaultStep: 50, defaultQty: 350 }
    ],
    keywords: ["kacchi", "biryani", "mutton biryani", "biriani", "কাচ্চি বিরিয়ানি"]
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    bengaliName: "চিকেন বিরিয়ানি",
    category: "Bangladeshi Foods",
    icon: "🍗",
    servingUnit: "1 plate (~320g) (560 kcal)",
    caloriesPerUnit: 560,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 plate)", caloriesPerUnit: 560, protein: 26.0, carbs: 64.0, fat: 22.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.75, protein: 0.081, carbs: 0.2, fat: 0.069, defaultStep: 50, defaultQty: 320 }
    ],
    keywords: ["chicken biryani", "biriyani", "biryani", "চিকেন বিরিয়ানি"]
  },
  {
    id: "pulao-plain",
    name: "Morog Pulao / Plain Pulao",
    bengaliName: "পোলাও",
    category: "Bangladeshi Foods",
    icon: "🍚",
    servingUnit: "1 plate (~200g) (340 kcal)",
    caloriesPerUnit: 340,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 plate)", caloriesPerUnit: 340, protein: 6.0, carbs: 52.0, fat: 12.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.7, protein: 0.03, carbs: 0.26, fat: 0.06, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["pulao", "polao", "pilaf", "পোলাও"]
  },
  {
    id: "atta-roti",
    name: "Atta Roti / Chapati",
    bengaliName: "আটার রুটি / চপাতি",
    category: "Bangladeshi Foods",
    icon: "🫓",
    servingUnit: "1 piece (~40g) (100 kcal)",
    caloriesPerUnit: 100,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 100, protein: 3.4, carbs: 20.0, fat: 0.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~40g)", caloriesPerUnit: 100, protein: 3.4, carbs: 20.0, fat: 0.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.5, protein: 0.085, carbs: 0.5, fat: 0.0125, defaultStep: 20, defaultQty: 40 }
    ],
    keywords: ["roti", "ruti", "chapati", "atta", "রুটি", "আটার রুটি"]
  },
  {
    id: "plain-paratha",
    name: "Plain Paratha (Oil / Ghee)",
    bengaliName: "তেল পরোটা",
    category: "Bangladeshi Foods",
    icon: "🥞",
    servingUnit: "1 piece (~65g) (230 kcal)",
    caloriesPerUnit: 230,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 230, protein: 4.5, carbs: 28.0, fat: 11.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~65g)", caloriesPerUnit: 230, protein: 4.5, carbs: 28.0, fat: 11.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.538, protein: 0.069, carbs: 0.43, fat: 0.177, defaultStep: 30, defaultQty: 65 }
    ],
    keywords: ["paratha", "porota", "parota", "পরোটা", "তেলের পরোটা"]
  },
  {
    id: "aloo-paratha",
    name: "Aloo Paratha",
    bengaliName: "আলু পরোটা",
    category: "Bangladeshi Foods",
    icon: "🥟",
    servingUnit: "1 piece (~100g) (290 kcal)",
    caloriesPerUnit: 290,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 290, protein: 5.8, carbs: 42.0, fat: 11.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 290, protein: 5.8, carbs: 42.0, fat: 11.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.9, protein: 0.058, carbs: 0.42, fat: 0.11, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["aloo paratha", "alu porota", "আলু পরোটা"]
  },
  {
    id: "moghlai-paratha",
    name: "Moghlai Paratha",
    bengaliName: "মোগলাই পরোটা",
    category: "Bangladeshi Foods",
    icon: "🥪",
    servingUnit: "1 piece (~150g) (420 kcal)",
    caloriesPerUnit: 420,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 420, protein: 14.0, carbs: 46.0, fat: 20.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~150g)", caloriesPerUnit: 420, protein: 14.0, carbs: 46.0, fat: 20.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.8, protein: 0.093, carbs: 0.307, fat: 0.133, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["moghlai", "mughlai", "mughlai paratha", "মোগলাই"]
  },
  {
    id: "naan-roti",
    name: "Tandoori Naan / Butter Naan",
    bengaliName: "নান রুটি",
    category: "Bangladeshi Foods",
    icon: "🥖",
    servingUnit: "1 piece (~90g) (260 kcal)",
    caloriesPerUnit: 260,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 260, protein: 7.0, carbs: 45.0, fat: 6.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~90g)", caloriesPerUnit: 260, protein: 7.0, carbs: 45.0, fat: 6.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.889, protein: 0.078, carbs: 0.5, fat: 0.067, defaultStep: 45, defaultQty: 90 }
    ],
    keywords: ["naan", "nan", "tandoori naan", "নান"]
  },
  {
    id: "luchi-puri",
    name: "Luchi / Plain Puri",
    bengaliName: "লুচি / পুরি",
    category: "Bangladeshi Foods",
    icon: "🥟",
    servingUnit: "1 piece (~35g) (130 kcal)",
    caloriesPerUnit: 130,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 130, protein: 2.1, carbs: 14.5, fat: 7.2, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~35g)", caloriesPerUnit: 130, protein: 2.1, carbs: 14.5, fat: 7.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.714, protein: 0.06, carbs: 0.414, fat: 0.206, defaultStep: 20, defaultQty: 35 }
    ],
    keywords: ["luchi", "puri", "poori", "লুচি", "পুরি"]
  },
  {
    id: "rui-fish-curry",
    name: "Rui Fish Curry (ঝোল)",
    bengaliName: "রুই মাছের ঝোল",
    category: "Bangladeshi Foods",
    icon: "🐟",
    servingUnit: "1 piece + gravy (~120g) (180 kcal)",
    caloriesPerUnit: 180,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece + gravy)", caloriesPerUnit: 180, protein: 18.0, carbs: 3.0, fat: 10.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g fish)", caloriesPerUnit: 160, protein: 17.5, carbs: 1.5, fat: 9.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.5, protein: 0.15, carbs: 0.025, fat: 0.0875, defaultStep: 50, defaultQty: 120 }
    ],
    keywords: ["rui", "fish", "curry", "rohu", "mach", "রুই মাছ", "মাছের ঝোল"]
  },
  {
    id: "katla-fish-curry",
    name: "Katla Fish Curry",
    bengaliName: "কাতলা মাছের ঝোল",
    category: "Bangladeshi Foods",
    icon: "🐟",
    servingUnit: "1 piece + gravy (~120g) (185 kcal)",
    caloriesPerUnit: 185,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece + gravy)", caloriesPerUnit: 185, protein: 18.5, carbs: 3.0, fat: 11.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g fish)", caloriesPerUnit: 165, protein: 18.0, carbs: 1.5, fat: 10.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.54, protein: 0.154, carbs: 0.025, fat: 0.092, defaultStep: 50, defaultQty: 120 }
    ],
    keywords: ["katla", "catla", "katol", "mach", "কাতলা মাছ"]
  },
  {
    id: "ilish-fish-curry",
    name: "Ilish Bhapa / Shorshe Ilish",
    bengaliName: "সর্ষে ইলিশ / ইলিশ পাতুড়ি",
    category: "Bangladeshi Foods",
    icon: "🐟",
    servingUnit: "1 piece (~110g) (260 kcal)",
    caloriesPerUnit: 260,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece with gravy)", caloriesPerUnit: 260, protein: 19.0, carbs: 3.5, fat: 19.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 240, protein: 18.5, carbs: 2.0, fat: 18.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.36, protein: 0.173, carbs: 0.032, fat: 0.173, defaultStep: 50, defaultQty: 110 }
    ],
    keywords: ["ilish", "hilsa", "shorshe ilish", "hilsa fish", "ইলিশ", "সর্ষে ইলিশ"]
  },
  {
    id: "pangas-fish-curry",
    name: "Pangas Fish Curry",
    bengaliName: "পাঙ্গাশ মাছের তরকারি",
    category: "Bangladeshi Foods",
    icon: "🐟",
    servingUnit: "1 piece (~120g) (220 kcal)",
    caloriesPerUnit: 220,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 220, protein: 16.0, carbs: 2.0, fat: 16.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~120g)", caloriesPerUnit: 220, protein: 16.0, carbs: 2.0, fat: 16.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.833, protein: 0.133, carbs: 0.017, fat: 0.138, defaultStep: 50, defaultQty: 120 }
    ],
    keywords: ["pangas", "pangash", "basa", "পাঙ্গাশ মাছ"]
  },
  {
    id: "tilapia-fish-curry",
    name: "Tilapia Fish Curry / Bhaji",
    bengaliName: "তেলাপিয়া মাছের ভুনা",
    category: "Bangladeshi Foods",
    icon: "🐟",
    servingUnit: "1 piece (~100g) (170 kcal)",
    caloriesPerUnit: 170,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 170, protein: 19.0, carbs: 2.5, fat: 9.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 170, protein: 19.0, carbs: 2.5, fat: 9.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.7, protein: 0.19, carbs: 0.025, fat: 0.09, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["tilapia", "telapia", "তেলাপিয়া", "মাছ"]
  },
  {
    id: "koi-fish-curry",
    name: "Koi Macher Jhol / Bhuna",
    bengaliName: "কৈ মাছ ভুনা",
    category: "Bangladeshi Foods",
    icon: "🐟",
    servingUnit: "1 whole fish (~90g) (160 kcal)",
    caloriesPerUnit: 160,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 160, protein: 17.0, carbs: 2.0, fat: 9.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~90g)", caloriesPerUnit: 160, protein: 17.0, carbs: 2.0, fat: 9.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.778, protein: 0.189, carbs: 0.022, fat: 0.106, defaultStep: 45, defaultQty: 90 }
    ],
    keywords: ["koi", "koi mach", "climbing perch", "কৈ মাছ"]
  },
  {
    id: "chingri-curry",
    name: "Chingri Malai Curry / Prawn Bhuna",
    bengaliName: "চিংড়ি মালাইকারি / ভুনা",
    category: "Bangladeshi Foods",
    icon: "🦐",
    servingUnit: "1 serving (3-4 prawns, ~120g) (230 kcal)",
    caloriesPerUnit: 230,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (3-4 prawns)", caloriesPerUnit: 230, protein: 18.0, carbs: 6.5, fat: 14.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 large prawn)", caloriesPerUnit: 65, protein: 5.5, carbs: 1.8, fat: 4.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.917, protein: 0.15, carbs: 0.054, fat: 0.121, defaultStep: 40, defaultQty: 120 }
    ],
    keywords: ["chingri", "prawn", "shrimp", "malai curry", "চিংড়ি", "চিংড়ি ভুনা"]
  },
  {
    id: "chicken-curry",
    name: "Chicken Curry (দেশি/ব্রয়লার ঝোল)",
    bengaliName: "মুরগির মাংসের ঝোল",
    category: "Bangladeshi Foods",
    icon: "🍗",
    servingUnit: "1 piece + gravy (~130g) (210 kcal)",
    caloriesPerUnit: 210,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece + gravy)", caloriesPerUnit: 210, protein: 21.0, carbs: 4.0, fat: 12.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g chicken)", caloriesPerUnit: 180, protein: 20.0, carbs: 2.0, fat: 10.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.615, protein: 0.162, carbs: 0.031, fat: 0.092, defaultStep: 50, defaultQty: 130 }
    ],
    keywords: ["chicken", "murgi", "curry", "jhol", "মুরগি", "মুরগির মাংস"]
  },
  {
    id: "chicken-roast",
    name: "Biye Bari Chicken Roast",
    bengaliName: "বিয়ে বাড়ির চিকেন রোস্ট",
    category: "Bangladeshi Foods",
    icon: "🍗",
    servingUnit: "1 piece leg/breast (~150g) (310 kcal)",
    caloriesPerUnit: 310,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 310, protein: 26.0, carbs: 8.0, fat: 19.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~150g)", caloriesPerUnit: 310, protein: 26.0, carbs: 8.0, fat: 19.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.067, protein: 0.173, carbs: 0.053, fat: 0.127, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["roast", "chicken roast", "morog roast", "রোস্ট", "চিকেন রোস্ট"]
  },
  {
    id: "beef-bhuna",
    name: "Beef Bhuna / Kalia",
    bengaliName: "গরুর মাংস ভুনা",
    category: "Bangladeshi Foods",
    icon: "🥩",
    servingUnit: "1 serving (3-4 small pieces, ~120g) (280 kcal)",
    caloriesPerUnit: 280,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~120g)", caloriesPerUnit: 280, protein: 24.0, carbs: 4.0, fat: 18.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 medium chunk ~35g)", caloriesPerUnit: 85, protein: 7.5, carbs: 1.0, fat: 5.8, defaultStep: 1, defaultQty: 3 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.333, protein: 0.2, carbs: 0.033, fat: 0.154, defaultStep: 50, defaultQty: 120 }
    ],
    keywords: ["beef", "bhuna", "gorur mangsho", "meat", "গরু", "গরুর মাংস"]
  },
  {
    id: "mutton-curry",
    name: "Mutton / Khashi Curry",
    bengaliName: "খাসির মাংসের ঝোল",
    category: "Bangladeshi Foods",
    icon: "🍖",
    servingUnit: "1 serving (~130g) (310 kcal)",
    caloriesPerUnit: 310,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~130g)", caloriesPerUnit: 310, protein: 22.0, carbs: 4.5, fat: 22.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 medium piece ~40g)", caloriesPerUnit: 95, protein: 7.0, carbs: 1.2, fat: 7.0, defaultStep: 1, defaultQty: 3 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.385, protein: 0.169, carbs: 0.035, fat: 0.173, defaultStep: 50, defaultQty: 130 }
    ],
    keywords: ["mutton", "khasi", "khashi", "lamb", "goat", "খাসি", "খাসির মাংস"]
  },
  {
    id: "haleem",
    name: "Bangladeshi Shahi Haleem",
    bengaliName: "শাহী হালিম",
    category: "Bangladeshi Foods",
    icon: "🍲",
    servingUnit: "1 bowl (~250g) (360 kcal)",
    caloriesPerUnit: 360,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 bowl)", caloriesPerUnit: 360, protein: 24.0, carbs: 38.0, fat: 12.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.44, protein: 0.096, carbs: 0.152, fat: 0.05, defaultStep: 50, defaultQty: 250 }
    ],
    keywords: ["haleem", "halim", "shahi haleem", "হালিম", "ডাল হালিম"]
  },
  {
    id: "masoor-dal-thin",
    name: "Masoor Dal (পাতলা ডাল)",
    bengaliName: "পাতলা মসুর ডাল",
    category: "Bangladeshi Foods",
    icon: "🥣",
    servingUnit: "1 bowl (~150ml/g) (95 kcal)",
    caloriesPerUnit: 95,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 bowl / 150g)", caloriesPerUnit: 95, protein: 5.5, carbs: 14.0, fat: 2.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.633, protein: 0.037, carbs: 0.093, fat: 0.013, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["dal", "daal", "patla dal", "masoor", "মসুর ডাল", "পাতলা ডাল"]
  },
  {
    id: "dal-bhuna-thick",
    name: "Bhuna Dal / Chholar Dal (ভুনা ডাল)",
    bengaliName: "ভুনা মসুর / ছোলার ডাল",
    category: "Bangladeshi Foods",
    icon: "🍲",
    servingUnit: "1 serving (~120g) (165 kcal)",
    caloriesPerUnit: 165,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 165, protein: 8.5, carbs: 22.0, fat: 5.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.375, protein: 0.071, carbs: 0.183, fat: 0.042, defaultStep: 50, defaultQty: 120 }
    ],
    keywords: ["bhuna dal", "chholar dal", "thick dal", "ভুনা ডাল"]
  },
  {
    id: "aloo-bhorta",
    name: "Aloo Bhorta (সরিষার তেল দিয়ে)",
    bengaliName: "আলু ভর্তা",
    category: "Bangladeshi Foods",
    icon: "🥔",
    servingUnit: "1 serving (~60g) (110 kcal)",
    caloriesPerUnit: 110,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~60g)", caloriesPerUnit: 110, protein: 1.8, carbs: 18.0, fat: 3.8, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 small ball ~50g)", caloriesPerUnit: 90, protein: 1.5, carbs: 15.0, fat: 3.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.833, protein: 0.03, carbs: 0.3, fat: 0.063, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["aloo bhorta", "alu bhorta", "mashed potato", "আলু ভর্তা"]
  },
  {
    id: "begun-bhorta",
    name: "Begun Bhorta (পোড়া বেগুন ভর্তা)",
    bengaliName: "বেগুন ভর্তা",
    category: "Bangladeshi Foods",
    icon: "🍆",
    servingUnit: "1 serving (~70g) (85 kcal)",
    caloriesPerUnit: 85,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~70g)", caloriesPerUnit: 85, protein: 1.5, carbs: 8.0, fat: 5.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.214, protein: 0.021, carbs: 0.114, fat: 0.079, defaultStep: 35, defaultQty: 70 }
    ],
    keywords: ["begun bhorta", "eggplant mash", "বেগুন ভর্তা"]
  },
  {
    id: "dim-bhorta",
    name: "Dim Bhorta",
    bengaliName: "ডিম ভর্তা",
    category: "Bangladeshi Foods",
    icon: "🥚",
    servingUnit: "1 serving (1 egg mash ~60g) (115 kcal)",
    caloriesPerUnit: 115,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 egg)", caloriesPerUnit: 115, protein: 6.8, carbs: 2.0, fat: 8.8, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 portion)", caloriesPerUnit: 115, protein: 6.8, carbs: 2.0, fat: 8.8, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.917, protein: 0.113, carbs: 0.033, fat: 0.147, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["dim bhorta", "egg mash", "ডিম ভর্তা"]
  },
  {
    id: "dal-bhorta",
    name: "Dal Bhorta",
    bengaliName: "ডাল ভর্তা",
    category: "Bangladeshi Foods",
    icon: "🥣",
    servingUnit: "1 serving (~60g) (105 kcal)",
    caloriesPerUnit: 105,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~60g)", caloriesPerUnit: 105, protein: 6.0, carbs: 14.0, fat: 3.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.75, protein: 0.1, carbs: 0.233, fat: 0.05, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["dal bhorta", "daal bhorta", "lentil mash", "ডাল ভর্তা"]
  },
  {
    id: "chingri-bhorta",
    name: "Chingri Shutki / Chingri Bhorta",
    bengaliName: "চিংড়ি / শুঁটকি ভর্তা",
    category: "Bangladeshi Foods",
    icon: "🦐",
    servingUnit: "1 serving (~50g) (125 kcal)",
    caloriesPerUnit: 125,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~50g)", caloriesPerUnit: 125, protein: 12.0, carbs: 3.0, fat: 7.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.5, protein: 0.24, carbs: 0.06, fat: 0.14, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["chingri bhorta", "shutki bhorta", "shutki", "শুঁটকি ভর্তা"]
  },
  {
    id: "begun-bhaja",
    name: "Begun Bhaja (গোল বেগুন ভাজা)",
    bengaliName: "বেগুন ভাজা",
    category: "Bangladeshi Foods",
    icon: "🍆",
    servingUnit: "1 slice (~60g) (90 kcal)",
    caloriesPerUnit: 90,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 slice)", caloriesPerUnit: 90, protein: 1.2, carbs: 7.0, fat: 6.8, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~60g)", caloriesPerUnit: 90, protein: 1.2, carbs: 7.0, fat: 6.8, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.5, protein: 0.02, carbs: 0.117, fat: 0.113, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["begun bhaja", "fried eggplant", "বেগুন ভাজা"]
  },
  {
    id: "mixed-vegetables",
    name: "Labra / Mixed Vegetable Curry",
    bengaliName: "লাবড়া / পাঁচমিশালি সবজি",
    category: "Bangladeshi Foods",
    icon: "🥗",
    servingUnit: "1 serving (~150g) (110 kcal)",
    caloriesPerUnit: 110,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 bowl / 150g)", caloriesPerUnit: 110, protein: 3.0, carbs: 14.0, fat: 5.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.733, protein: 0.02, carbs: 0.093, fat: 0.033, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["sobji", "sabji", "vegetables", "labra", "সবজি", "পাঁচমিশালি সবজি"]
  },
  {
    id: "shaak-bhaji",
    name: "Lal Shaak / Palong Shaak Bhaji",
    bengaliName: "শাক ভাজি (লাল/পালং)",
    category: "Bangladeshi Foods",
    icon: "🥬",
    servingUnit: "1 serving (~80g) (75 kcal)",
    caloriesPerUnit: 75,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~80g)", caloriesPerUnit: 75, protein: 2.5, carbs: 4.5, fat: 5.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.938, protein: 0.031, carbs: 0.056, fat: 0.069, defaultStep: 40, defaultQty: 80 }
    ],
    keywords: ["shaak", "shak", "lal shak", "palong shak", "spinach", "শাক ভাজি"]
  },
  {
    id: "potol-korola-bhaji",
    name: "Korola Bhaji / Potol Bhaji",
    bengaliName: "করলা ভাজি / পটল ভাজি",
    category: "Bangladeshi Foods",
    icon: "🥒",
    servingUnit: "1 serving (~80g) (85 kcal)",
    caloriesPerUnit: 85,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~80g)", caloriesPerUnit: 85, protein: 1.8, carbs: 6.5, fat: 6.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.063, protein: 0.023, carbs: 0.081, fat: 0.075, defaultStep: 40, defaultQty: 80 }
    ],
    keywords: ["korola", "karala", "potol", "bitter gourd", "করলা ভাজি"]
  },
  {
    id: "boiled-egg",
    name: "Boiled Egg (সেদ্ধ ডিম)",
    bengaliName: "সেদ্ধ ডিম",
    category: "Breakfast Foods",
    icon: "🥚",
    servingUnit: "1 large egg (~50g) (70 kcal)",
    caloriesPerUnit: 70,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 egg)", caloriesPerUnit: 70, protein: 6.3, carbs: 0.4, fat: 4.8, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~50g)", caloriesPerUnit: 70, protein: 6.3, carbs: 0.4, fat: 4.8, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.4, protein: 0.126, carbs: 0.008, fat: 0.096, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["egg", "boiled egg", "dim", "seddho dim", "ডিম", "সেদ্ধ ডিম"]
  },
  {
    id: "fried-egg",
    name: "Fried Egg / Dim Poach",
    bengaliName: "ডিম পোচ",
    category: "Breakfast Foods",
    icon: "🍳",
    servingUnit: "1 fried egg (95 kcal)",
    caloriesPerUnit: 95,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 95, protein: 6.3, carbs: 0.4, fat: 7.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 egg)", caloriesPerUnit: 95, protein: 6.3, carbs: 0.4, fat: 7.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.9, protein: 0.126, carbs: 0.008, fat: 0.15, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["fried egg", "poach", "dim poach", "ডিম পোচ", "ডিম ভাজা"]
  },
  {
    id: "dim-omelette",
    name: "Egg Omelette (পিঁয়াজ-মরিচ দিয়ে)",
    bengaliName: "ডিম অমলেট",
    category: "Breakfast Foods",
    icon: "🍳",
    servingUnit: "1 omelette (1 egg + oil) (120 kcal)",
    caloriesPerUnit: 120,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 egg)", caloriesPerUnit: 120, protein: 6.5, carbs: 1.2, fat: 10.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 egg)", caloriesPerUnit: 120, protein: 6.5, carbs: 1.2, fat: 10.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.0, protein: 0.108, carbs: 0.02, fat: 0.167, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["omelette", "omlet", "dim bhaja", "ডিম অমলেট"]
  },
  {
    id: "dim-bhuna",
    name: "Egg Bhuna / Korma",
    bengaliName: "ডিম ভুনা / কোরমা",
    category: "Breakfast Foods",
    icon: "🥚",
    servingUnit: "1 egg with gravy (140 kcal)",
    caloriesPerUnit: 140,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 egg)", caloriesPerUnit: 140, protein: 7.0, carbs: 3.5, fat: 11.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 egg)", caloriesPerUnit: 140, protein: 7.0, carbs: 3.5, fat: 11.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.75, protein: 0.088, carbs: 0.044, fat: 0.138, defaultStep: 40, defaultQty: 80 }
    ],
    keywords: ["dim bhuna", "egg curry", "egg korma", "ডিম ভুনা", "ডিম কারি"]
  },
  {
    id: "oatmeal-plain",
    name: "Oatmeal / Rolled Oats (Cooked)",
    bengaliName: "ওটস",
    category: "Breakfast Foods",
    icon: "🥣",
    servingUnit: "1 bowl (~200g) (150 kcal)",
    caloriesPerUnit: 150,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 bowl)", caloriesPerUnit: 150, protein: 5.0, carbs: 27.0, fat: 2.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.75, protein: 0.025, carbs: 0.135, fat: 0.0125, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["oats", "oatmeal", "porridge", "rolled oats", "ওটস"]
  },
  {
    id: "cornflakes-milk",
    name: "Cornflakes Cereal",
    bengaliName: "কর্নফ্লেক্স সিরিয়াল",
    category: "Breakfast Foods",
    icon: "🥣",
    servingUnit: "1 bowl (~50g) (185 kcal)",
    caloriesPerUnit: 185,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 bowl / 50g)", caloriesPerUnit: 185, protein: 3.5, carbs: 42.0, fat: 0.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.7, protein: 0.07, carbs: 0.84, fat: 0.01, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["cornflakes", "cereal", "breakfast cereal", "সিরিয়াল", "কর্নফ্লেক্স"]
  },
  {
    id: "pancake",
    name: "Classic Pancake",
    bengaliName: "প্যানকেক",
    category: "Breakfast Foods",
    icon: "🥞",
    servingUnit: "1 pancake (~75g) (175 kcal)",
    caloriesPerUnit: 175,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 pancake)", caloriesPerUnit: 175, protein: 4.5, carbs: 24.0, fat: 7.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~75g)", caloriesPerUnit: 175, protein: 4.5, carbs: 24.0, fat: 7.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.333, protein: 0.06, carbs: 0.32, fat: 0.093, defaultStep: 25, defaultQty: 75 }
    ],
    keywords: ["pancake", "hotcake", "প্যানকেক", "কেক"]
  },
  {
    id: "toast-bread",
    name: "White Bread Toast",
    bengaliName: "টোস্ট ব্রেড",
    category: "Breakfast Foods",
    icon: "🍞",
    servingUnit: "1 slice (~30g) (80 kcal)",
    caloriesPerUnit: 80,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 slice)", caloriesPerUnit: 80, protein: 2.7, carbs: 14.5, fat: 1.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~30g)", caloriesPerUnit: 80, protein: 2.7, carbs: 14.5, fat: 1.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.667, protein: 0.09, carbs: 0.483, fat: 0.033, defaultStep: 30, defaultQty: 30 }
    ],
    keywords: ["bread", "toast", "white bread", "pauruti", "পাউরুটি"]
  },
  {
    id: "whole-wheat-bread",
    name: "Whole Wheat Brown Bread",
    bengaliName: "ব্রাউন ব্রেড / আটার পাউরুটি",
    category: "Breakfast Foods",
    icon: "🍞",
    servingUnit: "1 slice (~35g) (75 kcal)",
    caloriesPerUnit: 75,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 slice)", caloriesPerUnit: 75, protein: 3.6, carbs: 13.0, fat: 1.1, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~35g)", caloriesPerUnit: 75, protein: 3.6, carbs: 13.0, fat: 1.1, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.143, protein: 0.103, carbs: 0.371, fat: 0.031, defaultStep: 35, defaultQty: 35 }
    ],
    keywords: ["brown bread", "whole wheat bread", "whole grain", "ব্রাউন ব্রেড"]
  },
  {
    id: "french-toast",
    name: "French Toast (Egg Toast)",
    bengaliName: "ডিম টোস্ট / ফ্রেঞ্চ টোস্ট",
    category: "Breakfast Foods",
    icon: "🍞",
    servingUnit: "1 slice (~65g) (155 kcal)",
    caloriesPerUnit: 155,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 slice)", caloriesPerUnit: 155, protein: 5.5, carbs: 16.5, fat: 7.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~65g)", caloriesPerUnit: 155, protein: 5.5, carbs: 16.5, fat: 7.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.385, protein: 0.085, carbs: 0.254, fat: 0.115, defaultStep: 35, defaultQty: 65 }
    ],
    keywords: ["french toast", "egg toast", "dim toast", "ডিম টোস্ট"]
  },
  {
    id: "quinoa-cooked",
    name: "Quinoa (Cooked)",
    bengaliName: "কিনোয়া",
    category: "Rice, Grains & Pasta",
    icon: "🥣",
    servingUnit: "1 serving (~185g) (222 kcal)",
    caloriesPerUnit: 222,
    defaultUnit: "gram",
    defaultQty: 185,
    units: [
      { unit: "serving", label: "Serving (~185g)", caloriesPerUnit: 222, protein: 8.1, carbs: 39.4, fat: 3.6, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.2, protein: 0.044, carbs: 0.213, fat: 0.019, defaultStep: 50, defaultQty: 185 }
    ],
    keywords: ["quinoa", "grain", "কিনোয়া", "কুইনোয়া"]
  },
  {
    id: "pasta-cooked",
    name: "Penne / Fusilli Pasta (Cooked)",
    bengaliName: "পাস্তা",
    category: "Rice, Grains & Pasta",
    icon: "🍝",
    servingUnit: "1 serving (~150g) (220 kcal)",
    caloriesPerUnit: 220,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 plate / 150g)", caloriesPerUnit: 220, protein: 8.0, carbs: 43.0, fat: 1.3, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.467, protein: 0.053, carbs: 0.287, fat: 0.009, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["pasta", "penne", "macaroni", "fusilli", "পাস্তা"]
  },
  {
    id: "spaghetti-cooked",
    name: "Spaghetti (Cooked)",
    bengaliName: "স্প্যাগেটি",
    category: "Rice, Grains & Pasta",
    icon: "🍝",
    servingUnit: "1 serving (~140g) (210 kcal)",
    caloriesPerUnit: 210,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 portion)", caloriesPerUnit: 210, protein: 7.5, carbs: 41.0, fat: 1.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.5, protein: 0.054, carbs: 0.293, fat: 0.009, defaultStep: 50, defaultQty: 140 }
    ],
    keywords: ["spaghetti", "noodles", "pasta", "স্প্যাগেটি"]
  },
  {
    id: "egg-noodles",
    name: "Egg Noodles / Chow Mein",
    bengaliName: "নুডলস / চাউমিন",
    category: "Rice, Grains & Pasta",
    icon: "🍜",
    servingUnit: "1 bowl (~180g) (250 kcal)",
    caloriesPerUnit: 250,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 bowl)", caloriesPerUnit: 250, protein: 7.0, carbs: 42.0, fat: 6.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.389, protein: 0.039, carbs: 0.233, fat: 0.036, defaultStep: 50, defaultQty: 180 }
    ],
    keywords: ["noodles", "chow mein", "maggie", "chowmein", "নুডলস", "চাউমিন"]
  },
  {
    id: "couscous-cooked",
    name: "Couscous (Cooked)",
    bengaliName: "কাসকাস",
    category: "Rice, Grains & Pasta",
    icon: "🥣",
    servingUnit: "1 serving (~150g) (175 kcal)",
    caloriesPerUnit: 175,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 175, protein: 6.0, carbs: 36.0, fat: 0.4, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.167, protein: 0.04, carbs: 0.24, fat: 0.003, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["couscous", "semolina", "grain", "কাসকাস"]
  },
  {
    id: "barley-cooked",
    name: "Pearl Barley (Cooked)",
    bengaliName: "বার্লি / যব",
    category: "Rice, Grains & Pasta",
    icon: "🌾",
    servingUnit: "1 serving (~150g) (185 kcal)",
    caloriesPerUnit: 185,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 185, protein: 3.5, carbs: 40.0, fat: 0.7, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.233, protein: 0.023, carbs: 0.267, fat: 0.005, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["barley", "yob", "jowar", "বার্লি", "যব"]
  },
  {
    id: "fried-rice",
    name: "Chinese Fried Rice",
    bengaliName: "ফ্রাইড রাইস",
    category: "Rice, Grains & Pasta",
    icon: "🍚",
    servingUnit: "1 plate (~250g) (380 kcal)",
    caloriesPerUnit: 380,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 plate)", caloriesPerUnit: 380, protein: 9.0, carbs: 55.0, fat: 14.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.52, protein: 0.036, carbs: 0.22, fat: 0.056, defaultStep: 50, defaultQty: 250 }
    ],
    keywords: ["fried rice", "chinese fried rice", "ফ্রাইড রাইস"]
  },
  {
    id: "chicken-breast-grilled",
    name: "Grilled Chicken Breast (Skinless)",
    bengaliName: "গ্রিল্ড চিকেন ব্রেস্ট",
    category: "Meat & Seafood",
    icon: "🍗",
    servingUnit: "1 piece (~120g) (195 kcal)",
    caloriesPerUnit: 195,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 breast ~120g)", caloriesPerUnit: 195, protein: 37.0, carbs: 0.0, fat: 4.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~120g)", caloriesPerUnit: 195, protein: 37.0, carbs: 0.0, fat: 4.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.625, protein: 0.308, carbs: 0.0, fat: 0.038, defaultStep: 50, defaultQty: 120 }
    ],
    keywords: ["chicken breast", "grilled chicken", "skinless chicken", "চিকেন ব্রেস্ট", "গ্রিল চিকেন"]
  },
  {
    id: "salmon-fillet",
    name: "Salmon Fillet (Baked/Grilled)",
    bengaliName: "স্যামন মাছ",
    category: "Meat & Seafood",
    icon: "🐟",
    servingUnit: "1 fillet (~150g) (310 kcal)",
    caloriesPerUnit: 310,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 fillet)", caloriesPerUnit: 310, protein: 34.0, carbs: 0.0, fat: 19.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~150g)", caloriesPerUnit: 310, protein: 34.0, carbs: 0.0, fat: 19.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.067, protein: 0.227, carbs: 0.0, fat: 0.127, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["salmon", "salmon fish", "fillet", "স্যামন", "স্যামন মাছ"]
  },
  {
    id: "tuna-canned",
    name: "Canned Tuna (In Water / Drained)",
    bengaliName: "টুনা মাছ",
    category: "Meat & Seafood",
    icon: "🐟",
    servingUnit: "1 can (~100g drained) (116 kcal)",
    caloriesPerUnit: 116,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 can / 100g)", caloriesPerUnit: 116, protein: 26.0, carbs: 0.0, fat: 1.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 can portion)", caloriesPerUnit: 116, protein: 26.0, carbs: 0.0, fat: 1.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.16, protein: 0.26, carbs: 0.0, fat: 0.01, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["tuna", "canned tuna", "tuna fish", "টুনা মাছ"]
  },
  {
    id: "beef-steak",
    name: "Beef Steak (Grilled Sirloin)",
    bengaliName: "বিফ স্টেক",
    category: "Meat & Seafood",
    icon: "🥩",
    servingUnit: "1 steak piece (~180g) (360 kcal)",
    caloriesPerUnit: 360,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 steak)", caloriesPerUnit: 360, protein: 46.0, carbs: 0.0, fat: 19.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~180g)", caloriesPerUnit: 360, protein: 46.0, carbs: 0.0, fat: 19.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.0, protein: 0.256, carbs: 0.0, fat: 0.106, defaultStep: 50, defaultQty: 180 }
    ],
    keywords: ["beef steak", "steak", "sirloin", "বিফ স্টেক", "স্টেক"]
  },
  {
    id: "turkey-breast",
    name: "Turkey Breast (Roasted/Sliced)",
    bengaliName: "টার্কি রোস্ট",
    category: "Meat & Seafood",
    icon: "🦃",
    servingUnit: "1 serving (~100g) (135 kcal)",
    caloriesPerUnit: 135,
    defaultUnit: "gram",
    defaultQty: 100,
    units: [
      { unit: "serving", label: "Serving (~100g)", caloriesPerUnit: 135, protein: 30.0, carbs: 0.0, fat: 1.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 slice ~30g)", caloriesPerUnit: 41, protein: 9.0, carbs: 0.0, fat: 0.5, defaultStep: 1, defaultQty: 3 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.35, protein: 0.3, carbs: 0.0, fat: 0.015, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["turkey", "turkey breast", "roast turkey", "টার্কি"]
  },
  {
    id: "shrimp-boiled-grilled",
    name: "Shrimp / Prawn (Steamed/Grilled)",
    bengaliName: "সেদ্ধ চিংড়ি",
    category: "Meat & Seafood",
    icon: "🦐",
    servingUnit: "1 serving (6-8 pieces ~100g) (100 kcal)",
    caloriesPerUnit: 100,
    defaultUnit: "gram",
    defaultQty: 100,
    units: [
      { unit: "serving", label: "Serving (~100g)", caloriesPerUnit: 100, protein: 24.0, carbs: 0.2, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 medium ~15g)", caloriesPerUnit: 15, protein: 3.6, carbs: 0.0, fat: 0.1, defaultStep: 1, defaultQty: 6 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.0, protein: 0.24, carbs: 0.002, fat: 0.003, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["shrimp", "prawn", "grilled shrimp", "চিংড়ি", "সেদ্ধ চিংড়ি"]
  },
  {
    id: "broccoli-steamed",
    name: "Broccoli (Steamed/Boiled)",
    bengaliName: "ব্রকলি",
    category: "Vegetables",
    icon: "🥦",
    servingUnit: "1 cup florets (~100g) (35 kcal)",
    caloriesPerUnit: 35,
    defaultUnit: "gram",
    defaultQty: 100,
    units: [
      { unit: "serving", label: "Serving (1 cup ~100g)", caloriesPerUnit: 35, protein: 2.8, carbs: 7.0, fat: 0.4, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.35, protein: 0.028, carbs: 0.07, fat: 0.004, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["broccoli", "green vegetable", "ব্রকলি"]
  },
  {
    id: "spinach-raw-cooked",
    name: "Fresh Spinach (Palong Shaak)",
    bengaliName: "পালং শাক",
    category: "Vegetables",
    icon: "🥬",
    servingUnit: "1 cup raw (~30g) / cooked (25 kcal)",
    caloriesPerUnit: 25,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 bowl / 100g)", caloriesPerUnit: 25, protein: 2.9, carbs: 3.6, fat: 0.4, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.25, protein: 0.029, carbs: 0.036, fat: 0.004, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["spinach", "palong shak", "পালং শাক", "সবজি"]
  },
  {
    id: "carrot-raw",
    name: "Carrot (Fresh / Gajor)",
    bengaliName: "গাজর",
    category: "Vegetables",
    icon: "🥕",
    servingUnit: "1 medium carrot (~60g) (25 kcal)",
    caloriesPerUnit: 25,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 medium)", caloriesPerUnit: 25, protein: 0.6, carbs: 6.0, fat: 0.1, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~60g)", caloriesPerUnit: 25, protein: 0.6, carbs: 6.0, fat: 0.1, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.417, protein: 0.01, carbs: 0.1, fat: 0.002, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["carrot", "gajor", "গাজর"]
  },
  {
    id: "cucumber-shosha",
    name: "Cucumber (Shosha)",
    bengaliName: "শসা",
    category: "Vegetables",
    icon: "🥒",
    servingUnit: "1 medium cucumber (~100g) (15 kcal)",
    caloriesPerUnit: 15,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cucumber)", caloriesPerUnit: 15, protein: 0.7, carbs: 3.6, fat: 0.1, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 15, protein: 0.7, carbs: 3.6, fat: 0.1, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.15, protein: 0.007, carbs: 0.036, fat: 0.001, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["cucumber", "shosha", "salad", "শসা"]
  },
  {
    id: "bell-pepper-capsicum",
    name: "Bell Pepper / Capsicum",
    bengaliName: "ক্যাপসিকাম",
    category: "Vegetables",
    icon: "🫑",
    servingUnit: "1 medium pepper (~120g) (30 kcal)",
    caloriesPerUnit: 30,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 30, protein: 1.2, carbs: 7.0, fat: 0.2, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~120g)", caloriesPerUnit: 30, protein: 1.2, carbs: 7.0, fat: 0.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.25, protein: 0.01, carbs: 0.058, fat: 0.002, defaultStep: 40, defaultQty: 120 }
    ],
    keywords: ["capsicum", "bell pepper", "shimla mirch", "ক্যাপসিকাম"]
  },
  {
    id: "tomato-fresh",
    name: "Fresh Tomato",
    bengaliName: "টমেটো",
    category: "Vegetables",
    icon: "🍅",
    servingUnit: "1 medium tomato (~100g) (18 kcal)",
    caloriesPerUnit: 18,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 18, protein: 0.9, carbs: 3.9, fat: 0.2, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 18, protein: 0.9, carbs: 3.9, fat: 0.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.18, protein: 0.009, carbs: 0.039, fat: 0.002, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["tomato", "tamatar", "টমেটো"]
  },
  {
    id: "cauliflower-cooked",
    name: "Cauliflower / Phul kopi",
    bengaliName: "ফুলকপি",
    category: "Vegetables",
    icon: "🥦",
    servingUnit: "1 cup florets (~100g) (25 kcal)",
    caloriesPerUnit: 25,
    defaultUnit: "gram",
    defaultQty: 100,
    units: [
      { unit: "serving", label: "Serving (1 cup ~100g)", caloriesPerUnit: 25, protein: 2.0, carbs: 5.0, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.25, protein: 0.02, carbs: 0.05, fat: 0.003, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["cauliflower", "fulkopi", "phul kopi", "ফুলকপি"]
  },
  {
    id: "cabbage-badhakopi",
    name: "Cabbage / Badhakopi",
    bengaliName: "বাঁধাকপি",
    category: "Vegetables",
    icon: "🥬",
    servingUnit: "1 cup chopped (~90g) (22 kcal)",
    caloriesPerUnit: 22,
    defaultUnit: "gram",
    defaultQty: 90,
    units: [
      { unit: "serving", label: "Serving (1 cup)", caloriesPerUnit: 22, protein: 1.1, carbs: 5.2, fat: 0.1, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.244, protein: 0.012, carbs: 0.058, fat: 0.001, defaultStep: 45, defaultQty: 90 }
    ],
    keywords: ["cabbage", "badhakopi", "বাঁধাকপি"]
  },
  {
    id: "banana",
    name: "Banana / Shobri Kola",
    bengaliName: "কলা (সবরি/সাগর)",
    category: "Fruits",
    icon: "🍌",
    servingUnit: "1 medium banana (~118g) (105 kcal)",
    caloriesPerUnit: 105,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 banana)", caloriesPerUnit: 105, protein: 1.3, carbs: 27.0, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~118g)", caloriesPerUnit: 105, protein: 1.3, carbs: 27.0, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.89, protein: 0.011, carbs: 0.228, fat: 0.003, defaultStep: 40, defaultQty: 120 }
    ],
    keywords: ["banana", "kola", "shobri", "sagorkola", "ফল", "কলা"]
  },
  {
    id: "mango",
    name: "Ripe Mango (পাকা আম)",
    bengaliName: "পাকা আম (হিমসাগর/ল্যাংড়া)",
    category: "Fruits",
    icon: "🥭",
    servingUnit: "1 medium mango (~150g) (125 kcal)",
    caloriesPerUnit: 125,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup slices ~150g)", caloriesPerUnit: 125, protein: 1.2, carbs: 32.0, fat: 0.6, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~150g)", caloriesPerUnit: 125, protein: 1.2, carbs: 32.0, fat: 0.6, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.833, protein: 0.008, carbs: 0.213, fat: 0.004, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["mango", "aam", "himsagar", "আম", "পাকা আম"]
  },
  {
    id: "apple",
    name: "Apple (আপেল)",
    bengaliName: "আপেল",
    category: "Fruits",
    icon: "🍎",
    servingUnit: "1 medium apple (~180g) (95 kcal)",
    caloriesPerUnit: 95,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 apple)", caloriesPerUnit: 95, protein: 0.5, carbs: 25.0, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~180g)", caloriesPerUnit: 95, protein: 0.5, carbs: 25.0, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.528, protein: 0.0028, carbs: 0.139, fat: 0.0017, defaultStep: 50, defaultQty: 180 }
    ],
    keywords: ["apple", "apel", "আপেল"]
  },
  {
    id: "papaya",
    name: "Ripe Papaya / Pepe",
    bengaliName: "পাকা পেঁপে",
    category: "Fruits",
    icon: "🍈",
    servingUnit: "1 bowl slices (~150g) (60 kcal)",
    caloriesPerUnit: 60,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "serving", label: "Serving (1 bowl / 150g)", caloriesPerUnit: 60, protein: 0.7, carbs: 15.0, fat: 0.4, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 40, protein: 0.47, carbs: 10.0, fat: 0.27, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.4, protein: 0.0047, carbs: 0.1, fat: 0.0027, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["papaya", "pepe", "পেঁপে", "পাকা পেঁপে"]
  },
  {
    id: "guava",
    name: "Guava / Peyara",
    bengaliName: "পেয়ারা",
    category: "Fruits",
    icon: "🍐",
    servingUnit: "1 fruit (~120g) (65 kcal)",
    caloriesPerUnit: 65,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 65, protein: 3.0, carbs: 17.0, fat: 1.1, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~120g)", caloriesPerUnit: 65, protein: 3.0, carbs: 17.0, fat: 1.1, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.542, protein: 0.025, carbs: 0.142, fat: 0.0092, defaultStep: 40, defaultQty: 120 }
    ],
    keywords: ["guava", "peyara", "pyara", "পেয়ারা"]
  },
  {
    id: "orange-fresh",
    name: "Orange / Komola",
    bengaliName: "কমলা",
    category: "Fruits",
    icon: "🍊",
    servingUnit: "1 medium orange (~130g) (62 kcal)",
    caloriesPerUnit: 62,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 orange)", caloriesPerUnit: 62, protein: 1.2, carbs: 15.4, fat: 0.2, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~130g)", caloriesPerUnit: 62, protein: 1.2, carbs: 15.4, fat: 0.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.477, protein: 0.009, carbs: 0.118, fat: 0.0015, defaultStep: 40, defaultQty: 130 }
    ],
    keywords: ["orange", "komola", "malta", "কমলা", "মাল্টা"]
  },
  {
    id: "strawberries-fresh",
    name: "Strawberries",
    bengaliName: "স্ট্রবেরি",
    category: "Fruits",
    icon: "🍓",
    servingUnit: "1 cup whole (~140g) (45 kcal)",
    caloriesPerUnit: 45,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup ~140g)", caloriesPerUnit: 45, protein: 1.0, carbs: 11.0, fat: 0.4, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 large berry ~18g)", caloriesPerUnit: 6, protein: 0.1, carbs: 1.4, fat: 0.05, defaultStep: 1, defaultQty: 5 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.321, protein: 0.007, carbs: 0.079, fat: 0.003, defaultStep: 50, defaultQty: 140 }
    ],
    keywords: ["strawberry", "strawberries", "berries", "স্ট্রবেরি"]
  },
  {
    id: "blueberries-fresh",
    name: "Blueberries",
    bengaliName: "ব্লুবেরি",
    category: "Fruits",
    icon: "🫐",
    servingUnit: "1 cup (~150g) (84 kcal)",
    caloriesPerUnit: 84,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "serving", label: "Serving (1 cup ~150g)", caloriesPerUnit: 84, protein: 1.1, carbs: 21.0, fat: 0.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.56, protein: 0.007, carbs: 0.14, fat: 0.003, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["blueberry", "blueberries", "berries", "ব্লুবেরি"]
  },
  {
    id: "watermelon-tormuj",
    name: "Watermelon / Tormuj",
    bengaliName: "তরমুজ",
    category: "Fruits",
    icon: "🍉",
    servingUnit: "1 wedge/slice (~280g) (85 kcal)",
    caloriesPerUnit: 85,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 bowl / 200g)", caloriesPerUnit: 60, protein: 1.2, carbs: 15.0, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 wedge ~280g)", caloriesPerUnit: 85, protein: 1.7, carbs: 21.0, fat: 0.4, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.3, protein: 0.006, carbs: 0.075, fat: 0.0015, defaultStep: 100, defaultQty: 200 }
    ],
    keywords: ["watermelon", "tormuj", "melon", "তরমুজ"]
  },
  {
    id: "cow-milk-whole",
    name: "Whole Cow's Milk",
    bengaliName: "গরুর খাঁটি দুধ",
    category: "Dairy & Alternatives",
    icon: "🥛",
    servingUnit: "1 glass/cup (~240g) (150 kcal)",
    caloriesPerUnit: 150,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 glass / 240g)", caloriesPerUnit: 150, protein: 8.0, carbs: 12.0, fat: 8.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.625, protein: 0.033, carbs: 0.05, fat: 0.033, defaultStep: 50, defaultQty: 240 }
    ],
    keywords: ["milk", "dudh", "whole milk", "দুধ", "গরুর দুধ"]
  },
  {
    id: "cow-milk-skimmed",
    name: "Skimmed / Low-Fat Milk",
    bengaliName: "ননীমুক্ত / কম চর্বিযুক্ত দুধ",
    category: "Dairy & Alternatives",
    icon: "🥛",
    servingUnit: "1 glass (~240g) (90 kcal)",
    caloriesPerUnit: 90,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 glass / 240g)", caloriesPerUnit: 90, protein: 8.2, carbs: 12.5, fat: 0.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.375, protein: 0.034, carbs: 0.052, fat: 0.002, defaultStep: 50, defaultQty: 240 }
    ],
    keywords: ["skimmed milk", "low fat milk", "দুধ"]
  },
  {
    id: "greek-yogurt-plain",
    name: "Greek Yogurt (Plain / Low-Fat)",
    bengaliName: "গ্রিক দই",
    category: "Dairy & Alternatives",
    icon: "🥣",
    servingUnit: "1 container/cup (~170g) (100 kcal)",
    caloriesPerUnit: 100,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup ~170g)", caloriesPerUnit: 100, protein: 17.0, carbs: 6.0, fat: 0.7, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.588, protein: 0.1, carbs: 0.035, fat: 0.004, defaultStep: 50, defaultQty: 170 }
    ],
    keywords: ["greek yogurt", "yogurt", "curd", "দই", "গ্রিক দই"]
  },
  {
    id: "tok-doi",
    name: "Tok Doi / Plain Curd (টক দই)",
    bengaliName: "টক দই",
    category: "Dairy & Alternatives",
    icon: "🥣",
    servingUnit: "1 cup (~100g) (60 kcal)",
    caloriesPerUnit: 60,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup ~100g)", caloriesPerUnit: 60, protein: 3.5, carbs: 4.7, fat: 3.3, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.6, protein: 0.035, carbs: 0.047, fat: 0.033, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["tok doi", "sour curd", "curd", "plain yogurt", "দই", "টক দই"]
  },
  {
    id: "cheddar-cheese",
    name: "Cheddar Cheese",
    bengaliName: "চেডার চিজ / পনির",
    category: "Dairy & Alternatives",
    icon: "🧀",
    servingUnit: "1 slice (~28g) (113 kcal)",
    caloriesPerUnit: 113,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 slice)", caloriesPerUnit: 113, protein: 7.0, carbs: 0.4, fat: 9.3, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~28g)", caloriesPerUnit: 113, protein: 7.0, carbs: 0.4, fat: 9.3, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 4.036, protein: 0.25, carbs: 0.014, fat: 0.332, defaultStep: 15, defaultQty: 28 }
    ],
    keywords: ["cheese", "cheddar", "slice cheese", "চিজ", "পনির"]
  },
  {
    id: "paneer-cottage-cheese",
    name: "Paneer / Cottage Cheese",
    bengaliName: "ছানা / পনির",
    category: "Dairy & Alternatives",
    icon: "🧀",
    servingUnit: "1 serving (~100g) (265 kcal)",
    caloriesPerUnit: 265,
    defaultUnit: "gram",
    defaultQty: 100,
    units: [
      { unit: "serving", label: "Serving (~100g)", caloriesPerUnit: 265, protein: 18.0, carbs: 3.4, fat: 20.8, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 cube ~25g)", caloriesPerUnit: 66, protein: 4.5, carbs: 0.8, fat: 5.2, defaultStep: 1, defaultQty: 4 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.65, protein: 0.18, carbs: 0.034, fat: 0.208, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["paneer", "cottage cheese", "chhana", "পনির", "ছানা"]
  },
  {
    id: "almond-milk",
    name: "Almond Milk (Unsweetened)",
    bengaliName: "আমন্ড মিল্ক / বাদামের দুধ",
    category: "Dairy & Alternatives",
    icon: "🥛",
    servingUnit: "1 glass (~240g) (30 kcal)",
    caloriesPerUnit: 30,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 glass / 240g)", caloriesPerUnit: 30, protein: 1.0, carbs: 1.0, fat: 2.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.125, protein: 0.004, carbs: 0.004, fat: 0.01, defaultStep: 50, defaultQty: 240 }
    ],
    keywords: ["almond milk", "plant milk", "বাদামের দুধ"]
  },
  {
    id: "soy-milk",
    name: "Soy Milk (Plain)",
    bengaliName: "সয়া মিল্ক",
    category: "Dairy & Alternatives",
    icon: "🥛",
    servingUnit: "1 glass (~240g) (100 kcal)",
    caloriesPerUnit: 100,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 glass / 240g)", caloriesPerUnit: 100, protein: 7.0, carbs: 4.0, fat: 4.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.417, protein: 0.029, carbs: 0.017, fat: 0.017, defaultStep: 50, defaultQty: 240 }
    ],
    keywords: ["soy milk", "soya milk", "সয়া দুধ", "সয়া মিল্ক"]
  },
  {
    id: "almonds-raw",
    name: "Almonds / Kathbadam",
    bengaliName: "কাঠবাদাম",
    category: "Nuts & Seeds",
    icon: "🥜",
    servingUnit: "1 handful (~28g / ~23 nuts) (164 kcal)",
    caloriesPerUnit: 164,
    defaultUnit: "gram",
    defaultQty: 28,
    units: [
      { unit: "serving", label: "Serving (1 handful ~28g)", caloriesPerUnit: 164, protein: 6.0, carbs: 6.0, fat: 14.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 almond ~1.2g)", caloriesPerUnit: 7, protein: 0.26, carbs: 0.26, fat: 0.6, defaultStep: 5, defaultQty: 10 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 5.857, protein: 0.214, carbs: 0.214, fat: 0.5, defaultStep: 10, defaultQty: 28 }
    ],
    keywords: ["almond", "badam", "kathbadam", "বাদাম", "কাঠবাদাম"]
  },
  {
    id: "walnuts",
    name: "Walnuts / Akhrot",
    bengaliName: "আখরোট",
    category: "Nuts & Seeds",
    icon: "🌰",
    servingUnit: "1 handful (~28g / ~7 halves) (185 kcal)",
    caloriesPerUnit: 185,
    defaultUnit: "gram",
    defaultQty: 28,
    units: [
      { unit: "serving", label: "Serving (1 handful ~28g)", caloriesPerUnit: 185, protein: 4.3, carbs: 3.9, fat: 18.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 walnut half ~4g)", caloriesPerUnit: 26, protein: 0.6, carbs: 0.5, fat: 2.6, defaultStep: 2, defaultQty: 6 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 6.607, protein: 0.154, carbs: 0.139, fat: 0.661, defaultStep: 10, defaultQty: 28 }
    ],
    keywords: ["walnut", "akhrot", "আখরোট"]
  },
  {
    id: "peanuts-roasted",
    name: "Roasted Peanuts / Chinabadam",
    bengaliName: "চিনাবাদাম",
    category: "Nuts & Seeds",
    icon: "🥜",
    servingUnit: "1 handful (~28g) (160 kcal)",
    caloriesPerUnit: 160,
    defaultUnit: "gram",
    defaultQty: 28,
    units: [
      { unit: "serving", label: "Serving (1 handful ~28g)", caloriesPerUnit: 160, protein: 7.3, carbs: 4.6, fat: 14.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 5.714, protein: 0.261, carbs: 0.164, fat: 0.5, defaultStep: 10, defaultQty: 28 }
    ],
    keywords: ["peanut", "chinabadam", "roasted peanut", "চিনাবাদাম"]
  },
  {
    id: "cashews-kajubadam",
    name: "Cashews / Kajubadam",
    bengaliName: "কাজুবাদাম",
    category: "Nuts & Seeds",
    icon: "🥜",
    servingUnit: "1 handful (~28g / ~18 nuts) (157 kcal)",
    caloriesPerUnit: 157,
    defaultUnit: "gram",
    defaultQty: 28,
    units: [
      { unit: "serving", label: "Serving (1 handful ~28g)", caloriesPerUnit: 157, protein: 5.2, carbs: 8.6, fat: 12.4, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 cashew ~1.5g)", caloriesPerUnit: 9, protein: 0.3, carbs: 0.5, fat: 0.7, defaultStep: 5, defaultQty: 10 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 5.607, protein: 0.186, carbs: 0.307, fat: 0.443, defaultStep: 10, defaultQty: 28 }
    ],
    keywords: ["cashew", "kajubadam", "kaju", "কাজুবাদাম"]
  },
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    bengaliName: "চিয়া সিড",
    category: "Nuts & Seeds",
    icon: "🌱",
    servingUnit: "1 standard portion (~15g) (73 kcal)",
    caloriesPerUnit: 73,
    defaultUnit: "gram",
    defaultQty: 15,
    units: [
      { unit: "serving", label: "Serving (standard portion ~15g)", caloriesPerUnit: 73, protein: 2.5, carbs: 6.3, fat: 4.6, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 4.867, protein: 0.167, carbs: 0.42, fat: 0.307, defaultStep: 5, defaultQty: 15 }
    ],
    keywords: ["chia seeds", "chia", "seeds", "চিয়া সিড", "চিয়া"]
  },
  {
    id: "peanut-butter",
    name: "Peanut Butter (Smooth)",
    bengaliName: "পিনাট বাটার",
    category: "Nuts & Seeds",
    icon: "🥜",
    servingUnit: "1 portion (~32g) (190 kcal)",
    caloriesPerUnit: 190,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (standard portion ~32g)", caloriesPerUnit: 190, protein: 8.0, carbs: 7.0, fat: 16.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 5.938, protein: 0.25, carbs: 0.219, fat: 0.5, defaultStep: 10, defaultQty: 32 }
    ],
    keywords: ["peanut butter", "spread", "পিনাট বাটার"]
  },
  {
    id: "beef-burger",
    name: "Beef Burger (Standard)",
    bengaliName: "বিফ বার্গার",
    category: "Fast Food",
    icon: "🍔",
    servingUnit: "1 burger (~200g) (480 kcal)",
    caloriesPerUnit: 480,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 burger)", caloriesPerUnit: 480, protein: 24.0, carbs: 42.0, fat: 24.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~200g)", caloriesPerUnit: 480, protein: 24.0, carbs: 42.0, fat: 24.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.4, protein: 0.12, carbs: 0.21, fat: 0.12, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["burger", "beef burger", "cheeseburger", "বার্গার"]
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger / Crispy Patty",
    bengaliName: "চিকেন বার্গার",
    category: "Fast Food",
    icon: "🍔",
    servingUnit: "1 burger (~180g) (430 kcal)",
    caloriesPerUnit: 430,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 burger)", caloriesPerUnit: 430, protein: 21.0, carbs: 40.0, fat: 20.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~180g)", caloriesPerUnit: 430, protein: 21.0, carbs: 40.0, fat: 20.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.389, protein: 0.117, carbs: 0.222, fat: 0.111, defaultStep: 50, defaultQty: 180 }
    ],
    keywords: ["chicken burger", "burger", "চিকেন বার্গার"]
  },
  {
    id: "pizza-slice",
    name: "Pizza Slice (Medium Pepperoni / Chicken)",
    bengaliName: "পিজ্জা স্লাইস",
    category: "Fast Food",
    icon: "🍕",
    servingUnit: "1 slice (~110g) (285 kcal)",
    caloriesPerUnit: 285,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 slice)", caloriesPerUnit: 285, protein: 12.0, carbs: 30.0, fat: 13.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~110g)", caloriesPerUnit: 285, protein: 12.0, carbs: 30.0, fat: 13.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.591, protein: 0.109, carbs: 0.273, fat: 0.118, defaultStep: 50, defaultQty: 110 }
    ],
    keywords: ["pizza", "slice", "pepperoni", "cheese pizza", "পিজ্জা"]
  },
  {
    id: "french-fries",
    name: "French Fries (Deep Fried)",
    bengaliName: "ফ্রেঞ্চ ফ্রাই",
    category: "Fast Food",
    icon: "🍟",
    servingUnit: "1 medium pack (~115g) (365 kcal)",
    caloriesPerUnit: 365,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 pack ~115g)", caloriesPerUnit: 365, protein: 4.0, carbs: 48.0, fat: 17.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.174, protein: 0.035, carbs: 0.417, fat: 0.148, defaultStep: 40, defaultQty: 115 }
    ],
    keywords: ["french fries", "fries", "potato chips", "ফ্রেঞ্চ ফ্রাই"]
  },
  {
    id: "crispy-fried-chicken",
    name: "Crispy Fried Chicken (KFC style)",
    bengaliName: "ক্রিস্পি ফ্রাইড চিকেন",
    category: "Fast Food",
    icon: "🍗",
    servingUnit: "1 piece (~120g) (320 kcal)",
    caloriesPerUnit: 320,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 320, protein: 22.0, carbs: 12.0, fat: 20.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~120g)", caloriesPerUnit: 320, protein: 22.0, carbs: 12.0, fat: 20.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.667, protein: 0.183, carbs: 0.1, fat: 0.167, defaultStep: 40, defaultQty: 120 }
    ],
    keywords: ["fried chicken", "crispy chicken", "kfc", "ফ্রাইড চিকেন"]
  },
  {
    id: "subway-sandwich",
    name: "Subway Club Sandwich (6-inch)",
    bengaliName: "সাব স্যান্ডউইচ",
    category: "Fast Food",
    icon: "🥪",
    servingUnit: "1 sub (6 inch ~230g) (390 kcal)",
    caloriesPerUnit: 390,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 whole sandwich)", caloriesPerUnit: 390, protein: 24.0, carbs: 46.0, fat: 11.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~230g)", caloriesPerUnit: 390, protein: 24.0, carbs: 46.0, fat: 11.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.696, protein: 0.104, carbs: 0.2, fat: 0.048, defaultStep: 50, defaultQty: 230 }
    ],
    keywords: ["subway", "sandwich", "sub", "club sandwich", "স্যান্ডউইচ"]
  },
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma / Roll",
    bengaliName: "চিকেন শর্মা / রোল",
    category: "Fast Food",
    icon: "🌯",
    servingUnit: "1 roll (~200g) (420 kcal)",
    caloriesPerUnit: 420,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 roll)", caloriesPerUnit: 420, protein: 23.0, carbs: 38.0, fat: 18.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~200g)", caloriesPerUnit: 420, protein: 23.0, carbs: 38.0, fat: 18.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.1, protein: 0.115, carbs: 0.19, fat: 0.09, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["shawarma", "sharma", "chicken roll", "roll", "শর্মা", "চিকেন শর্মা"]
  },
  {
    id: "singara",
    name: "Singara (আলু সিঙ্গাড়া)",
    bengaliName: "সিঙ্গাড়া",
    category: "Snacks & Desserts",
    icon: "🥟",
    servingUnit: "1 piece (~60g) (150 kcal)",
    caloriesPerUnit: 150,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 150, protein: 2.8, carbs: 21.0, fat: 6.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~60g)", caloriesPerUnit: 150, protein: 2.8, carbs: 21.0, fat: 6.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.5, protein: 0.047, carbs: 0.35, fat: 0.108, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["singara", "samosa", "shingara", "সিঙ্গাড়া"]
  },
  {
    id: "samucha",
    name: "Samucha (ডাল / কিমা সমুচা)",
    bengaliName: "সমুচা",
    category: "Snacks & Desserts",
    icon: "🥟",
    servingUnit: "1 piece (~40g) (120 kcal)",
    caloriesPerUnit: 120,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 120, protein: 3.2, carbs: 14.0, fat: 5.8, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~40g)", caloriesPerUnit: 120, protein: 3.2, carbs: 14.0, fat: 5.8, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.0, protein: 0.08, carbs: 0.35, fat: 0.145, defaultStep: 20, defaultQty: 40 }
    ],
    keywords: ["samucha", "samosa", "সমুচা"]
  },
  {
    id: "piaju",
    name: "Piaju / Dal Bora (পিঁয়াজু)",
    bengaliName: "পিঁয়াজু",
    category: "Snacks & Desserts",
    icon: "🧆",
    servingUnit: "1 piece (~25g) (75 kcal)",
    caloriesPerUnit: 75,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 75, protein: 2.0, carbs: 7.5, fat: 4.2, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~25g)", caloriesPerUnit: 75, protein: 2.0, carbs: 7.5, fat: 4.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.0, protein: 0.08, carbs: 0.3, fat: 0.168, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["piaju", "peaju", "dal bora", "pakora", "পিঁয়াজু"]
  },
  {
    id: "beguni",
    name: "Beguni (বেগুনি)",
    bengaliName: "বেগুনি",
    category: "Snacks & Desserts",
    icon: "🍆",
    servingUnit: "1 piece (~45g) (110 kcal)",
    caloriesPerUnit: 110,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 110, protein: 2.0, carbs: 12.0, fat: 6.2, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~45g)", caloriesPerUnit: 110, protein: 2.0, carbs: 12.0, fat: 6.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.444, protein: 0.044, carbs: 0.267, fat: 0.138, defaultStep: 25, defaultQty: 45 }
    ],
    keywords: ["beguni", "eggplant fritter", "বেগুনি"]
  },
  {
    id: "fuchka-tok",
    name: "Fuchka with Tok (ফুচকা)",
    bengaliName: "ফুচকা",
    category: "Snacks & Desserts",
    icon: "🥟",
    servingUnit: "1 plate (6 pieces) (220 kcal)",
    caloriesPerUnit: 220,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 plate / 6 pcs)", caloriesPerUnit: 220, protein: 4.5, carbs: 38.0, fat: 5.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 fuchka)", caloriesPerUnit: 37, protein: 0.75, carbs: 6.3, fat: 0.9, defaultStep: 1, defaultQty: 6 }
    ],
    keywords: ["fuchka", "phuchka", "golgappa", "pani puri", "ফুচকা"]
  },
  {
    id: "chotpoti",
    name: "Chotpoti with Dim & Tok (চটপটি)",
    bengaliName: "চটপটি",
    category: "Snacks & Desserts",
    icon: "🍲",
    servingUnit: "1 bowl (~200g) (260 kcal)",
    caloriesPerUnit: 260,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 bowl / 200g)", caloriesPerUnit: 260, protein: 11.0, carbs: 44.0, fat: 4.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.3, protein: 0.055, carbs: 0.22, fat: 0.0225, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["chotpoti", "chatpati", "chana", "চটপটি"]
  },
  {
    id: "chanachur",
    name: "Spicy Chanachur / Bombay Mix",
    bengaliName: "চানাচুর",
    category: "Snacks & Desserts",
    icon: "🍿",
    servingUnit: "1 serving (~30g) (165 kcal)",
    caloriesPerUnit: 165,
    defaultUnit: "gram",
    defaultQty: 30,
    units: [
      { unit: "serving", label: "Serving (~30g)", caloriesPerUnit: 165, protein: 3.8, carbs: 16.5, fat: 9.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 5.5, protein: 0.127, carbs: 0.55, fat: 0.317, defaultStep: 15, defaultQty: 30 }
    ],
    keywords: ["chanachur", "churmur", "bombay mix", "চানাচুর"]
  },
  {
    id: "toast-biscuit",
    name: "Toast Biscuit / Rusk",
    bengaliName: "টোস্ট বিস্কুট",
    category: "Snacks & Desserts",
    icon: "🍪",
    servingUnit: "1 piece (~18g) (75 kcal)",
    caloriesPerUnit: 75,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 75, protein: 1.6, carbs: 13.5, fat: 1.7, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~18g)", caloriesPerUnit: 75, protein: 1.6, carbs: 13.5, fat: 1.7, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 4.167, protein: 0.089, carbs: 0.75, fat: 0.094, defaultStep: 15, defaultQty: 18 }
    ],
    keywords: ["toast biscuit", "rusk", "biscuit", "টোস্ট", "বিস্কুট"]
  },
  {
    id: "marie-biscuit",
    name: "Marie Biscuit / Tea Biscuit",
    bengaliName: "মেরি বিস্কুট",
    category: "Snacks & Desserts",
    icon: "🍪",
    servingUnit: "1 piece (~6g) (25 kcal)",
    caloriesPerUnit: 25,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 25, protein: 0.45, carbs: 4.8, fat: 0.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~6g)", caloriesPerUnit: 25, protein: 0.45, carbs: 4.8, fat: 0.5, defaultStep: 1, defaultQty: 2 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 4.167, protein: 0.075, carbs: 0.8, fat: 0.083, defaultStep: 10, defaultQty: 20 }
    ],
    keywords: ["marie biscuit", "biscuit", "tea biscuit", "মেরি বিস্কুট"]
  },
  {
    id: "mishti-doi",
    name: "Bogra Mishti Doi (মিষ্টি দই)",
    bengaliName: "মিষ্টি দই",
    category: "Snacks & Desserts",
    icon: "🍮",
    servingUnit: "1 cup (~100g) (140 kcal)",
    caloriesPerUnit: 140,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup ~100g)", caloriesPerUnit: 140, protein: 3.8, carbs: 24.0, fat: 3.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.4, protein: 0.038, carbs: 0.24, fat: 0.035, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["mishti doi", "sweet yogurt", "sweet curd", "দই", "মিষ্টি দই"]
  },
  {
    id: "rosogolla",
    name: "Rosogolla (রসগোল্লা)",
    bengaliName: "রসগোল্লা",
    category: "Snacks & Desserts",
    icon: "⚪",
    servingUnit: "1 piece (~50g) (130 kcal)",
    caloriesPerUnit: 130,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 130, protein: 2.5, carbs: 27.0, fat: 1.2, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~50g)", caloriesPerUnit: 130, protein: 2.5, carbs: 27.0, fat: 1.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.6, protein: 0.05, carbs: 0.54, fat: 0.024, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["rosogolla", "rasgulla", "mishti", "sweet", "রসগোল্লা"]
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun / Pantua (গোলাপ জাম)",
    bengaliName: "গোলাপ জামুন / পানতোয়া",
    category: "Snacks & Desserts",
    icon: "🟤",
    servingUnit: "1 piece (~45g) (150 kcal)",
    caloriesPerUnit: 150,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 150, protein: 2.4, carbs: 24.0, fat: 5.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~45g)", caloriesPerUnit: 150, protein: 2.4, carbs: 24.0, fat: 5.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.333, protein: 0.053, carbs: 0.533, fat: 0.122, defaultStep: 25, defaultQty: 45 }
    ],
    keywords: ["gulab jamun", "pantua", "kalo jam", "গোলাপ জাম", "মিষ্টি"]
  },
  {
    id: "suji-halwa",
    name: "Suji Halwa / Semolina Sweet",
    bengaliName: "সুজির হালুয়া",
    category: "Snacks & Desserts",
    icon: "🍮",
    servingUnit: "1 serving (~80g) (210 kcal)",
    caloriesPerUnit: 210,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~80g)", caloriesPerUnit: 210, protein: 3.2, carbs: 33.0, fat: 7.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.625, protein: 0.04, carbs: 0.413, fat: 0.094, defaultStep: 40, defaultQty: 80 }
    ],
    keywords: ["halwa", "suji halwa", "halua", "হালুয়া", "সুজির হালুয়া"]
  },
  {
    id: "dark-chocolate",
    name: "Dark Chocolate (70-85% Cocoa)",
    bengaliName: "ডার্ক চকলেট",
    category: "Snacks & Desserts",
    icon: "🍫",
    servingUnit: "1 piece / square (~20g) (120 kcal)",
    caloriesPerUnit: 120,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (~20g / 2 squares)", caloriesPerUnit: 120, protein: 1.6, carbs: 9.0, fat: 8.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 square ~10g)", caloriesPerUnit: 60, protein: 0.8, carbs: 4.5, fat: 4.2, defaultStep: 1, defaultQty: 2 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 6.0, protein: 0.08, carbs: 0.45, fat: 0.425, defaultStep: 10, defaultQty: 20 }
    ],
    keywords: ["dark chocolate", "chocolate", "cocoa", "ডার্ক চকলেট", "চকলেট"]
  },
  {
    id: "ice-cream-vanilla",
    name: "Vanilla Ice Cream",
    bengaliName: "ভ্যানিলা আইসক্রিম",
    category: "Snacks & Desserts",
    icon: "🍨",
    servingUnit: "1 scoop (~70g) (145 kcal)",
    caloriesPerUnit: 145,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup ~100g)", caloriesPerUnit: 207, protein: 3.5, carbs: 24.0, fat: 11.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 scoop ~70g)", caloriesPerUnit: 145, protein: 2.5, carbs: 17.0, fat: 7.7, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.07, protein: 0.035, carbs: 0.24, fat: 0.11, defaultStep: 35, defaultQty: 70 }
    ],
    keywords: ["ice cream", "vanilla ice cream", "kulfi", "আইসক্রিম"]
  },
  {
    id: "dudh-cha",
    name: "Dudh Cha / Milk Tea (চিনি সহ)",
    bengaliName: "দুধ চা",
    category: "Drinks",
    icon: "☕",
    servingUnit: "1 cup (~120ml/g) (85 kcal)",
    caloriesPerUnit: 85,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup)", caloriesPerUnit: 85, protein: 2.2, carbs: 12.0, fat: 3.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.708, protein: 0.018, carbs: 0.1, fat: 0.025, defaultStep: 30, defaultQty: 120 }
    ],
    keywords: ["cha", "tea", "dudh cha", "milk tea", "চা", "দুধ চা"]
  },
  {
    id: "rurh-cha",
    name: "Rong Cha / Black Tea (রং চা)",
    bengaliName: "রং চা / লাল চা",
    category: "Drinks",
    icon: "🍵",
    servingUnit: "1 cup (~120ml/g with 1 tsp sugar) (20 kcal)",
    caloriesPerUnit: 20,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup)", caloriesPerUnit: 20, protein: 0.1, carbs: 5.0, fat: 0.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.167, protein: 0.001, carbs: 0.042, fat: 0.0, defaultStep: 30, defaultQty: 120 }
    ],
    keywords: ["rong cha", "lal cha", "black tea", "চা", "লাল চা"]
  },
  {
    id: "green-tea",
    name: "Green Tea (Unsweetened)",
    bengaliName: "গ্রিন টি",
    category: "Drinks",
    icon: "🍵",
    servingUnit: "1 cup (~150ml/g) (2 kcal)",
    caloriesPerUnit: 2,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup)", caloriesPerUnit: 2, protein: 0.2, carbs: 0.3, fat: 0.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.013, protein: 0.0013, carbs: 0.002, fat: 0.0, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["green tea", "tea", "herbal", "গ্রিন টি"]
  },
  {
    id: "black-coffee",
    name: "Black Coffee (Unsweetened / Americano)",
    bengaliName: "ব্ল্যাক কফি",
    category: "Drinks",
    icon: "☕",
    servingUnit: "1 cup (~200g) (3 kcal)",
    caloriesPerUnit: 3,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup)", caloriesPerUnit: 3, protein: 0.3, carbs: 0.2, fat: 0.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.015, protein: 0.0015, carbs: 0.001, fat: 0.0, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["black coffee", "coffee", "americano", "espresso", "ব্ল্যাক কফি", "কফি"]
  },
  {
    id: "cappuccino-coffee",
    name: "Cappuccino / Latte (With Milk)",
    bengaliName: "ক্যাপুচিনো / লাতে কফি",
    category: "Drinks",
    icon: "☕",
    servingUnit: "1 cup (~200g) (110 kcal)",
    caloriesPerUnit: 110,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 cup)", caloriesPerUnit: 110, protein: 6.0, carbs: 9.0, fat: 5.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.55, protein: 0.03, carbs: 0.045, fat: 0.0275, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["cappuccino", "latte", "coffee with milk", "ক্যাপুচিনো", "কফি"]
  },
  {
    id: "coconut-water-daab",
    name: "Fresh Green Coconut Water (ডাবের পানি)",
    bengaliName: "ডাবের পানি",
    category: "Drinks",
    icon: "🥥",
    servingUnit: "1 green coconut (~250g water) (48 kcal)",
    caloriesPerUnit: 48,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 coconut / 250g)", caloriesPerUnit: 48, protein: 1.7, carbs: 9.0, fat: 0.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.192, protein: 0.0068, carbs: 0.036, fat: 0.002, defaultStep: 50, defaultQty: 250 }
    ],
    keywords: ["coconut water", "daab", "daber pani", "ডাব", "ডাবের পানি"]
  },
  {
    id: "fresh-orange-juice",
    name: "Fresh Orange Juice",
    bengaliName: "কমলার তাজা জুস",
    category: "Drinks",
    icon: "🧃",
    servingUnit: "1 glass (~200g) (90 kcal)",
    caloriesPerUnit: 90,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 glass / 200g)", caloriesPerUnit: 90, protein: 1.4, carbs: 21.0, fat: 0.4, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.45, protein: 0.007, carbs: 0.105, fat: 0.002, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["orange juice", "juice", "fresh juice", "জুস", "কমলার জুস"]
  },
  {
    id: "cola-soda",
    name: "Cola / Carbonated Soft Drink",
    bengaliName: "কোলা / কোমল পানীয়",
    category: "Drinks",
    icon: "🥤",
    servingUnit: "1 can (~250g / 250ml) (105 kcal)",
    caloriesPerUnit: 105,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 can ~250g)", caloriesPerUnit: 105, protein: 0.0, carbs: 26.5, fat: 0.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (1 can)", caloriesPerUnit: 105, protein: 0.0, carbs: 26.5, fat: 0.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.42, protein: 0.0, carbs: 0.106, fat: 0.0, defaultStep: 50, defaultQty: 250 }
    ],
    keywords: ["coke", "coca cola", "pepsi", "soda", "soft drink", "কোলা", "কোক"]
  },
  {
    id: "borhani",
    name: "Spicy Borhani (বোরহানি)",
    bengaliName: "বোরহানি",
    category: "Drinks",
    icon: "🥛",
    servingUnit: "1 glass (~200g) (130 kcal)",
    caloriesPerUnit: 130,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 glass / 200g)", caloriesPerUnit: 130, protein: 5.0, carbs: 12.0, fat: 6.8, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.65, protein: 0.025, carbs: 0.06, fat: 0.034, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["borhani", "burhani", "borhani drink", "বোরহানি"]
  },
  {
    id: "mango-lassi",
    name: "Mango Lassi",
    bengaliName: "ম্যাংগো লাচ্ছি",
    category: "Drinks",
    icon: "🥭",
    servingUnit: "1 glass (~220g) (190 kcal)",
    caloriesPerUnit: 190,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 glass / 220g)", caloriesPerUnit: 190, protein: 5.5, carbs: 32.0, fat: 4.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.864, protein: 0.025, carbs: 0.145, fat: 0.02, defaultStep: 50, defaultQty: 220 }
    ],
    keywords: ["mango lassi", "lassi", "doi drink", "লাচ্ছি", "ম্যাংগো লাচ্ছি"]
  }
];

// Helper to get food by ID
function getFoodById(id) {
  return BANGLADESHI_FOODS.find(f => f.id === id);
}

// Categories list
const FOOD_CATEGORIES = [
  "All",
  "Bangladeshi Foods",
  "Breakfast Foods",
  "Rice, Grains & Pasta",
  "Meat & Seafood",
  "Vegetables",
  "Fruits",
  "Dairy & Alternatives",
  "Nuts & Seeds",
  "Fast Food",
  "Snacks & Desserts",
  "Drinks"
];
