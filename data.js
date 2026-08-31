/**
 * Bangladeshi Foods Calorie & Macronutrient Database
 * Strictly 3 measurement options per food:
 * - Serving (1 piece / standard serving)
 * - Piece (~weight)
 * - Gram (g)
 *
 * Each unit stores approximate Calories (kcal), Protein (g), Carbs (g), and Fat (g).
 * Note: Values are standard nutritional approximations based on common Bangladeshi home recipes.
 */

const BANGLADESHI_FOODS = [
  // --- Staples & Breads (ভাত ও রুটি) ---
  {
    id: "rice-white",
    name: "Plain White Rice",
    bengaliName: "সাদা ভাত",
    category: "Staples & Breads",
    icon: "🍚",
    servingUnit: "150g (195 kcal)",
    caloriesPerUnit: 195,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.3, protein: 0.027, carbs: 0.28, fat: 0.003, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["rice", "bhaat", "bhat", "sada", "chal", "ভাত", "সাদা ভাত"]
  },
  {
    id: "rice-brown",
    name: "Brown Rice / Lal Bhaat",
    bengaliName: "লাল চালের ভাত",
    category: "Staples & Breads",
    icon: "🌾",
    servingUnit: "150g (215 kcal)",
    caloriesPerUnit: 215,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.433, protein: 0.03, carbs: 0.30, fat: 0.01, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["brown rice", "lal bhaat", "lal chal", "চাল", "লাল ভাত"]
  },
  {
    id: "khichuri-plain",
    name: "Plain / Bhuna Khichuri",
    bengaliName: "খিচুড়ি (ভুনা/পাতলা)",
    category: "Staples & Breads",
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
    id: "atta-roti",
    name: "Atta Roti / Chapati",
    bengaliName: "আটার রুটি / চপাতি",
    category: "Staples & Breads",
    icon: "🫓",
    servingUnit: "1 piece (~40g) (100 kcal)",
    caloriesPerUnit: 100,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 100, protein: 3.5, carbs: 21.0, fat: 0.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~40g)", caloriesPerUnit: 100, protein: 3.5, carbs: 21.0, fat: 0.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.5, protein: 0.088, carbs: 0.525, fat: 0.013, defaultStep: 20, defaultQty: 40 }
    ],
    keywords: ["roti", "ruti", "chapati", "atta ruti", "রুটি", "আটা"]
  },
  {
    id: "plain-paratha",
    name: "Plain Paratha",
    bengaliName: "সাধারণ পরোটা",
    category: "Staples & Breads",
    icon: "🫓",
    servingUnit: "1 piece (~60g) (240 kcal)",
    caloriesPerUnit: 240,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 240, protein: 4.5, carbs: 28.0, fat: 12.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~60g)", caloriesPerUnit: 240, protein: 4.5, carbs: 28.0, fat: 12.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 4.0, protein: 0.075, carbs: 0.467, fat: 0.20, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["paratha", "porota", "parota", "পরোটা", "তেল পরোটা"]
  },
  {
    id: "aloo-paratha",
    name: "Aloo Paratha",
    bengaliName: "আলু পরোটা",
    category: "Staples & Breads",
    icon: "🫓",
    servingUnit: "1 piece (~80g) (290 kcal)",
    caloriesPerUnit: 290,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 290, protein: 5.5, carbs: 38.0, fat: 13.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~80g)", caloriesPerUnit: 290, protein: 5.5, carbs: 38.0, fat: 13.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.625, protein: 0.069, carbs: 0.475, fat: 0.163, defaultStep: 40, defaultQty: 80 }
    ],
    keywords: ["aloo paratha", "alu porota", "আলু পরোটা"]
  },
  {
    id: "moghlai-paratha",
    name: "Moghlai Paratha",
    bengaliName: "মোগলাই পরোটা",
    category: "Staples & Breads",
    icon: "🍳",
    servingUnit: "1 piece (~100g) (340 kcal)",
    caloriesPerUnit: 340,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 340, protein: 11.0, carbs: 32.0, fat: 18.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 340, protein: 11.0, carbs: 32.0, fat: 18.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.4, protein: 0.11, carbs: 0.32, fat: 0.18, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["moghlai", "mughlai", "moghlay porota", "মোগলাই"]
  },
  {
    id: "naan-roti",
    name: "Naan Roti / Tandoori Roti",
    bengaliName: "নান রুটি / তন্দুরি রুটি",
    category: "Staples & Breads",
    icon: "🫓",
    servingUnit: "1 piece (~90g) (260 kcal)",
    caloriesPerUnit: 260,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 260, protein: 7.5, carbs: 46.0, fat: 4.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~90g)", caloriesPerUnit: 260, protein: 7.5, carbs: 46.0, fat: 4.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.888, protein: 0.083, carbs: 0.511, fat: 0.05, defaultStep: 45, defaultQty: 90 }
    ],
    keywords: ["naan", "nan", "tandoori ruti", "নান রুটি", "তন্দুরি"]
  },
  {
    id: "luchi-puri",
    name: "Luchi / Dal Puri",
    bengaliName: "লুচি / ডাল পুরী",
    category: "Staples & Breads",
    icon: "🥟",
    servingUnit: "1 piece (~35g) (130 kcal)",
    caloriesPerUnit: 130,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 130, protein: 2.5, carbs: 14.0, fat: 7.2, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~35g)", caloriesPerUnit: 130, protein: 2.5, carbs: 14.0, fat: 7.2, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.714, protein: 0.071, carbs: 0.40, fat: 0.206, defaultStep: 35, defaultQty: 35 }
    ],
    keywords: ["luchi", "puri", "dal puri", "লুচি", "পুরী"]
  },

  // --- Fish, Meat & Eggs (মাছ, মাংস ও ডিম) ---
  {
    id: "boiled-egg",
    name: "Boiled Egg",
    bengaliName: "সিদ্ধ ডিম",
    category: "Fish, Meat & Eggs",
    icon: "🥚",
    servingUnit: "1 egg (~50g) (70 kcal)",
    caloriesPerUnit: 70,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 70, protein: 6.3, carbs: 0.6, fat: 4.8, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.4, protein: 0.126, carbs: 0.012, fat: 0.096, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["egg", "boiled egg", "dim", "shiddho dim", "ডিম", "সিদ্ধ ডিম"]
  },
  {
    id: "fried-egg",
    name: "Fried Egg / Poached",
    bengaliName: "ডিম পোচ / ভাজা",
    category: "Fish, Meat & Eggs",
    icon: "🍳",
    servingUnit: "1 egg (115 kcal)",
    caloriesPerUnit: 115,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 115, protein: 6.3, carbs: 0.6, fat: 9.8, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.3, protein: 0.126, carbs: 0.012, fat: 0.196, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["fried egg", "dim bhaja", "dim poch", "ডিম ভাজা", "পোচ"]
  },
  {
    id: "dim-omelette",
    name: "Deshi Egg Omelette (Onion & Chili)",
    bengaliName: "ডিম অমলেট (পেঁয়াজ-মরিচ)",
    category: "Fish, Meat & Eggs",
    icon: "🍳",
    servingUnit: "1 omelette (~65g) (135 kcal)",
    caloriesPerUnit: 135,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 135, protein: 7.5, carbs: 2.5, fat: 10.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.077, protein: 0.115, carbs: 0.038, fat: 0.162, defaultStep: 30, defaultQty: 65 }
    ],
    keywords: ["omelette", "omlet", "dim bhaji", "পেঁয়াজ ডিম", "অমলেট"]
  },
  {
    id: "dim-bhuna",
    name: "Dim Bhuna (Egg Curry)",
    bengaliName: "ডিম ভুনা",
    category: "Fish, Meat & Eggs",
    icon: "🍛",
    servingUnit: "1 egg with gravy (~90g) (160 kcal)",
    caloriesPerUnit: 160,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 160, protein: 8.0, carbs: 4.0, fat: 12.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.777, protein: 0.089, carbs: 0.044, fat: 0.133, defaultStep: 45, defaultQty: 90 }
    ],
    keywords: ["dim bhuna", "egg curry", "dim ranna", "ডিম ভুনা", "ডিম ঝোল"]
  },
  {
    id: "rui-fish-curry",
    name: "Rui / Katla Fish Curry",
    bengaliName: "রুই / কাতলা মাছের ঝোল",
    category: "Fish, Meat & Eggs",
    icon: "🐟",
    servingUnit: "1 piece with gravy (~100g) (170 kcal)",
    caloriesPerUnit: 170,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 170, protein: 18.0, carbs: 3.5, fat: 9.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.7, protein: 0.18, carbs: 0.035, fat: 0.095, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["rui", "katla", "fish", "mach", "macher jhol", "মাছ", "রুই মাছ"]
  },
  {
    id: "ilish-fish-curry",
    name: "Shorshe Ilish / Ilish Curry",
    bengaliName: "সরিষা ইলিশ / ইলিশ মাছ",
    category: "Fish, Meat & Eggs",
    icon: "🐟",
    servingUnit: "1 piece (~100g) (260 kcal)",
    caloriesPerUnit: 260,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 260, protein: 17.0, carbs: 3.0, fat: 20.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.6, protein: 0.17, carbs: 0.03, fat: 0.20, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["ilish", "hilsa", "shorshe ilish", "hilsha", "ইলিশ", "সরিষা ইলিশ"]
  },
  {
    id: "chicken-curry",
    name: "Chicken Curry (Deshi/Broiler)",
    bengaliName: "মুরগির মাংসের ঝোল",
    category: "Fish, Meat & Eggs",
    icon: "🍗",
    servingUnit: "1 piece (~120g) (210 kcal)",
    caloriesPerUnit: 210,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "piece", label: "Piece (~120g)", caloriesPerUnit: 210, protein: 22.0, carbs: 4.0, fat: 11.5, defaultStep: 1, defaultQty: 1 },
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 210, protein: 22.0, carbs: 4.0, fat: 11.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.75, protein: 0.183, carbs: 0.033, fat: 0.096, defaultStep: 50, defaultQty: 120 }
    ],
    keywords: ["chicken", "murgi", "murgir mangsho", "murgir jhol", "মুরগি", "মাংস"]
  },
  {
    id: "beef-bhuna",
    name: "Beef Bhuna / Curry",
    bengaliName: "গরুর মাংস ভুনা",
    category: "Fish, Meat & Eggs",
    icon: "🥩",
    servingUnit: "1 serving (~120g) (320 kcal)",
    caloriesPerUnit: 320,
    defaultUnit: "gram",
    defaultQty: 120,
    units: [
      { unit: "piece", label: "Piece (~30g)", caloriesPerUnit: 80, protein: 6.5, carbs: 1.0, fat: 5.5, defaultStep: 1, defaultQty: 3 },
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 320, protein: 26.0, carbs: 4.0, fat: 22.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.666, protein: 0.217, carbs: 0.033, fat: 0.183, defaultStep: 50, defaultQty: 120 }
    ],
    keywords: ["beef", "gorur mangsho", "beef bhuna", "গরু", "মাংস", "বিফ"]
  },
  {
    id: "mutton-curry",
    name: "Mutton / Khasir Mangsho Curry",
    bengaliName: "খাসির মাংসের ঝোল",
    category: "Fish, Meat & Eggs",
    icon: "🍖",
    servingUnit: "1 piece (~100g) (290 kcal)",
    caloriesPerUnit: 290,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 290, protein: 21.0, carbs: 3.5, fat: 21.0, defaultStep: 1, defaultQty: 1 },
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 290, protein: 21.0, carbs: 3.5, fat: 21.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.9, protein: 0.21, carbs: 0.035, fat: 0.21, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["mutton", "khasi", "khasir mangsho", "goat", "খাসি", "মাংস"]
  },
  {
    id: "chingri-curry",
    name: "Chingri Malai Curry / Bhuna",
    bengaliName: "চিংড়ি মালাইকারি / ভুনা",
    category: "Fish, Meat & Eggs",
    icon: "🦐",
    servingUnit: "1 serving (~100g) (230 kcal)",
    caloriesPerUnit: 230,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 230, protein: 16.0, carbs: 5.0, fat: 16.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~35g)", caloriesPerUnit: 77, protein: 5.3, carbs: 1.7, fat: 5.3, defaultStep: 1, defaultQty: 3 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.3, protein: 0.16, carbs: 0.05, fat: 0.16, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["chingri", "prawn", "shrimp", "malai curry", "চিংড়ি", "মালাইকারি"]
  },

  // --- Dal, Bhorta & Veggies (ডাল, ভর্তা ও সবজি) ---
  {
    id: "masoor-dal-thin",
    name: "Plain Masoor Dal (Thin)",
    bengaliName: "মসুর ডাল (পাতলা ঝোল)",
    category: "Dal, Bhorta & Veggies",
    icon: "🥣",
    servingUnit: "200g (130 kcal)",
    caloriesPerUnit: 130,
    defaultUnit: "gram",
    defaultQty: 200,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 130, protein: 7.5, carbs: 19.0, fat: 2.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.65, protein: 0.0375, carbs: 0.095, fat: 0.0125, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["dal", "daal", "masoor", "mosur dal", "lentil", "ডাল", "মসুর ডাল"]
  },
  {
    id: "dal-bhuna-thick",
    name: "Thick Dal Bhuna (Moong/Chana)",
    bengaliName: "ঘন ডাল ভুনা (মুগ/বুটের ডাল)",
    category: "Dal, Bhorta & Veggies",
    icon: "🥣",
    servingUnit: "180g (210 kcal)",
    caloriesPerUnit: 210,
    defaultUnit: "gram",
    defaultQty: 180,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 210, protein: 12.0, carbs: 28.0, fat: 5.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.166, protein: 0.067, carbs: 0.156, fat: 0.031, defaultStep: 50, defaultQty: 180 }
    ],
    keywords: ["bhuna dal", "moong dal", "chana dal", "ঘন ডাল", "মুগ ডাল"]
  },
  {
    id: "aloo-bhorta",
    name: "Aloo Bhorta (Mustard Oil & Chili)",
    bengaliName: "আলু ভর্তা",
    category: "Dal, Bhorta & Veggies",
    icon: "🥔",
    servingUnit: "50g (95 kcal)",
    caloriesPerUnit: 95,
    defaultUnit: "gram",
    defaultQty: 50,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 95, protein: 1.5, carbs: 15.0, fat: 3.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.9, protein: 0.03, carbs: 0.30, fat: 0.07, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["aloo", "alu", "bhorta", "vorta", "alu vorta", "আলু ভর্তা", "ভর্তা"]
  },
  {
    id: "begun-bhorta",
    name: "Begun Bhorta",
    bengaliName: "বেগুন ভর্তা",
    category: "Dal, Bhorta & Veggies",
    icon: "🍆",
    servingUnit: "50g (65 kcal)",
    caloriesPerUnit: 65,
    defaultUnit: "gram",
    defaultQty: 50,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 65, protein: 1.0, carbs: 6.5, fat: 4.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.3, protein: 0.02, carbs: 0.13, fat: 0.08, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["begun", "brinjal", "eggplant bhorta", "বেগুন ভর্তা"]
  },
  {
    id: "dim-bhorta",
    name: "Dim Bhorta (Egg Mash)",
    bengaliName: "ডিম ভর্তা",
    category: "Dal, Bhorta & Veggies",
    icon: "🥚",
    servingUnit: "1 serving (~60g) (120 kcal)",
    caloriesPerUnit: 120,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 120, protein: 7.5, carbs: 2.0, fat: 9.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.0, protein: 0.125, carbs: 0.033, fat: 0.15, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["dim bhorta", "egg mash", "ডিম ভর্তা"]
  },
  {
    id: "chingri-bhorta",
    name: "Chingri Bhorta",
    bengaliName: "চিংড়ি ভর্তা",
    category: "Dal, Bhorta & Veggies",
    icon: "🦐",
    servingUnit: "45g (90 kcal)",
    caloriesPerUnit: 90,
    defaultUnit: "gram",
    defaultQty: 45,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 90, protein: 9.0, carbs: 1.5, fat: 5.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.0, protein: 0.20, carbs: 0.033, fat: 0.122, defaultStep: 20, defaultQty: 45 }
    ],
    keywords: ["chingri bhorta", "shrimp paste", "চিংড়ি ভর্তা"]
  },
  {
    id: "begun-bhaja",
    name: "Begun Bhaja (Fried Eggplant)",
    bengaliName: "বেগুন ভাজা",
    category: "Dal, Bhorta & Veggies",
    icon: "🍆",
    servingUnit: "1 piece (~60g) (110 kcal)",
    caloriesPerUnit: 110,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 110, protein: 1.2, carbs: 8.0, fat: 8.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~60g)", caloriesPerUnit: 110, protein: 1.2, carbs: 8.0, fat: 8.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.833, protein: 0.02, carbs: 0.133, fat: 0.142, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["begun bhaja", "fried eggplant", "বেগুন ভাজা"]
  },
  {
    id: "mixed-vegetables",
    name: "Mixed Vegetable Labra / Shobji",
    bengaliName: "মিক্সড সবজি ভাজি / লাবড়া",
    category: "Dal, Bhorta & Veggies",
    icon: "🥗",
    servingUnit: "150g (120 kcal)",
    caloriesPerUnit: 120,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 120, protein: 3.0, carbs: 16.0, fat: 5.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.8, protein: 0.02, carbs: 0.107, fat: 0.033, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["vegetables", "shobji", "sobji", "labra", "সবজি", "ভাজি"]
  },
  {
    id: "shaak-bhaji",
    name: "Shaak Bhaji (Laal/Palong/Kangkong)",
    bengaliName: "শাক ভাজি (লাল/পালং/কলমি শাক)",
    category: "Dal, Bhorta & Veggies",
    icon: "🥬",
    servingUnit: "120g (85 kcal)",
    caloriesPerUnit: 85,
    defaultUnit: "gram",
    defaultQty: 120,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 85, protein: 3.5, carbs: 7.0, fat: 4.8, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.708, protein: 0.029, carbs: 0.058, fat: 0.04, defaultStep: 40, defaultQty: 120 }
    ],
    keywords: ["shaak", "sak", "laal shak", "palong", "শাক", "লাল শাক"]
  },
  {
    id: "potol-korola-bhaji",
    name: "Potol / Korola Bhaji",
    bengaliName: "পটল / করোলা ভাজি",
    category: "Dal, Bhorta & Veggies",
    icon: "🥒",
    servingUnit: "120g (115 kcal)",
    caloriesPerUnit: 115,
    defaultUnit: "gram",
    defaultQty: 120,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 115, protein: 2.5, carbs: 11.0, fat: 7.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.958, protein: 0.021, carbs: 0.092, fat: 0.058, defaultStep: 40, defaultQty: 120 }
    ],
    keywords: ["potol", "korola", "tita", "bitter gourd", "পটল", "করোলা ভাজি"]
  },

  // --- Snacks & Street Food (নাস্তা ও স্ট্রিট ফুড) ---
  {
    id: "singara",
    name: "Singara (Shingara)",
    bengaliName: "সিঙ্গারা",
    category: "Snacks & Street Food",
    icon: "🥟",
    servingUnit: "1 piece (~60g) (170 kcal)",
    caloriesPerUnit: 170,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 170, protein: 3.0, carbs: 22.0, fat: 8.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~60g)", caloriesPerUnit: 170, protein: 3.0, carbs: 22.0, fat: 8.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.833, protein: 0.05, carbs: 0.367, fat: 0.133, defaultStep: 30, defaultQty: 60 }
    ],
    keywords: ["singara", "shingara", "samosa", "সিঙ্গারা"]
  },
  {
    id: "samucha",
    name: "Samucha / Somosa (Chicken/Beef)",
    bengaliName: "সমুচা (চিকেন/বিফ)",
    category: "Snacks & Street Food",
    icon: "🥟",
    servingUnit: "1 piece (~40g) (140 kcal)",
    caloriesPerUnit: 140,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 140, protein: 5.0, carbs: 14.0, fat: 7.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~40g)", caloriesPerUnit: 140, protein: 5.0, carbs: 14.0, fat: 7.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.5, protein: 0.125, carbs: 0.35, fat: 0.175, defaultStep: 20, defaultQty: 40 }
    ],
    keywords: ["samucha", "somosa", "somusa", "সমুচা"]
  },
  {
    id: "piaju",
    name: "Piaju (Onion Fritter)",
    bengaliName: "পিয়াজু",
    category: "Snacks & Street Food",
    icon: "🧆",
    servingUnit: "2 pieces (~40g) (130 kcal)",
    caloriesPerUnit: 65,
    defaultUnit: "piece",
    defaultQty: 2,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 65, protein: 2.5, carbs: 6.5, fat: 3.3, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~20g)", caloriesPerUnit: 65, protein: 2.5, carbs: 6.5, fat: 3.3, defaultStep: 1, defaultQty: 2 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.25, protein: 0.125, carbs: 0.325, fat: 0.165, defaultStep: 20, defaultQty: 40 }
    ],
    keywords: ["piaju", "peyaju", "pakora", "পিয়াজু", "পিয়াজু"]
  },
  {
    id: "beguni",
    name: "Beguni (Eggplant Fritter)",
    bengaliName: "বেগুনি",
    category: "Snacks & Street Food",
    icon: "🍆",
    servingUnit: "1 piece (~40g) (110 kcal)",
    caloriesPerUnit: 110,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 110, protein: 2.0, carbs: 12.0, fat: 6.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~40g)", caloriesPerUnit: 110, protein: 2.0, carbs: 12.0, fat: 6.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.75, protein: 0.05, carbs: 0.30, fat: 0.15, defaultStep: 20, defaultQty: 40 }
    ],
    keywords: ["beguni", "eggplant fry", "বেগুনি"]
  },
  {
    id: "fuchka-tok",
    name: "Fuchka with Tetul Tok",
    bengaliName: "ফুচকা (তেঁতুলের টক সহ)",
    category: "Snacks & Street Food",
    icon: "🍘",
    servingUnit: "5 pieces (220 kcal)",
    caloriesPerUnit: 44,
    defaultUnit: "piece",
    defaultQty: 5,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 220, protein: 4.0, carbs: 37.5, fat: 6.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~15g)", caloriesPerUnit: 44, protein: 0.8, carbs: 7.5, fat: 1.2, defaultStep: 1, defaultQty: 5 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.933, protein: 0.053, carbs: 0.50, fat: 0.08, defaultStep: 25, defaultQty: 75 }
    ],
    keywords: ["fuchka", "phuchka", "panipuri", "ফুচকা", "তেঁতুল টক"]
  },
  {
    id: "chotpoti",
    name: "Chotpoti (with Egg & Masala)",
    bengaliName: "চটপটি (ডিম সহ)",
    category: "Snacks & Street Food",
    icon: "🍲",
    servingUnit: "200g (280 kcal)",
    caloriesPerUnit: 280,
    defaultUnit: "gram",
    defaultQty: 200,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 280, protein: 12.0, carbs: 44.0, fat: 6.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.4, protein: 0.06, carbs: 0.22, fat: 0.03, defaultStep: 50, defaultQty: 200 }
    ],
    keywords: ["chotpoti", "chatpati", "chana", "চটপটি"]
  },
  {
    id: "chanachur",
    name: "Chanachur Mix",
    bengaliName: "চানাচুর",
    category: "Snacks & Street Food",
    icon: "🥜",
    servingUnit: "30g (160 kcal)",
    caloriesPerUnit: 160,
    defaultUnit: "gram",
    defaultQty: 30,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 160, protein: 4.5, carbs: 16.0, fat: 9.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 5.333, protein: 0.15, carbs: 0.533, fat: 0.30, defaultStep: 15, defaultQty: 30 }
    ],
    keywords: ["chanachur", "bombay sweets", "mix", "চানাচুর"]
  },
  {
    id: "toast-biscuit",
    name: "Toast Biscuit",
    bengaliName: "টোস্ট বিস্কুট",
    category: "Snacks & Street Food",
    icon: "🍞",
    servingUnit: "2 pieces (~30g) (120 kcal)",
    caloriesPerUnit: 60,
    defaultUnit: "piece",
    defaultQty: 2,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 60, protein: 1.2, carbs: 10.5, fat: 1.5, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~15g)", caloriesPerUnit: 60, protein: 1.2, carbs: 10.5, fat: 1.5, defaultStep: 1, defaultQty: 2 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 4.0, protein: 0.08, carbs: 0.70, fat: 0.10, defaultStep: 15, defaultQty: 30 }
    ],
    keywords: ["toast", "biscuit", "toast biscuit", "টোস্ট", "বিস্কুট"]
  },
  {
    id: "marie-biscuit",
    name: "Marie / Milk Biscuit",
    bengaliName: "মেরি / মিল্ক বিস্কুট",
    category: "Snacks & Street Food",
    icon: "🍪",
    servingUnit: "3 pieces (~25g) (110 kcal)",
    caloriesPerUnit: 37,
    defaultUnit: "piece",
    defaultQty: 3,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 36.67, protein: 0.7, carbs: 6.5, fat: 0.9, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~8.3g)", caloriesPerUnit: 36.67, protein: 0.7, carbs: 6.5, fat: 0.9, defaultStep: 1, defaultQty: 3 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 4.4, protein: 0.084, carbs: 0.78, fat: 0.108, defaultStep: 10, defaultQty: 25 }
    ],
    keywords: ["marie", "milk biscuit", "cookies", "মেরি বিস্কুট"]
  },

  // --- Drinks & Sweets (পানীয় ও মিষ্টি) ---
  {
    id: "dudh-cha",
    name: "Dudh Cha (Milk Tea with Sugar)",
    bengaliName: "দুধ চা (চিনি সহ)",
    category: "Drinks & Sweets",
    icon: "☕",
    servingUnit: "1 cup (~150g) (95 kcal)",
    caloriesPerUnit: 95,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 95, protein: 2.8, carbs: 14.0, fat: 3.1, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.633, protein: 0.0187, carbs: 0.0933, fat: 0.0207, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["tea", "cha", "dudh cha", "milk tea", "চা", "দুধ চা"]
  },
  {
    id: "rurh-cha",
    name: "Rong Cha (Black Tea with Sugar)",
    bengaliName: "রং চা / লাল চা (চিনি সহ)",
    category: "Drinks & Sweets",
    icon: "🫖",
    servingUnit: "1 cup (~150g) (35 kcal)",
    caloriesPerUnit: 35,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 35, protein: 0.2, carbs: 8.5, fat: 0.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.233, protein: 0.0013, carbs: 0.0567, fat: 0.0, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["black tea", "rong cha", "lal cha", "রং চা", "লাল চা"]
  },
  {
    id: "green-tea",
    name: "Green Tea (No Sugar)",
    bengaliName: "গ্রিন টি (চিনি ছাড়া)",
    category: "Drinks & Sweets",
    icon: "🍵",
    servingUnit: "1 cup (~150g) (2 kcal)",
    caloriesPerUnit: 2,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 2, protein: 0.1, carbs: 0.4, fat: 0.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.013, protein: 0.0007, carbs: 0.0027, fat: 0.0, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["green tea", "sugar free tea", "গ্রিন টি"]
  },
  {
    id: "mishti-doi",
    name: "Mishti Doi (Sweet Yogurt)",
    bengaliName: "মিষ্টি দই",
    category: "Drinks & Sweets",
    icon: "🥣",
    servingUnit: "100g (180 kcal)",
    caloriesPerUnit: 180,
    defaultUnit: "gram",
    defaultQty: 100,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 180, protein: 4.5, carbs: 26.0, fat: 6.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 1.8, protein: 0.045, carbs: 0.26, fat: 0.065, defaultStep: 25, defaultQty: 100 }
    ],
    keywords: ["doi", "curd", "mishti doi", "sweet yogurt", "মিষ্টি দই", "দই"]
  },
  {
    id: "tok-doi",
    name: "Tok Doi (Plain Yogurt)",
    bengaliName: "টক দই",
    category: "Drinks & Sweets",
    icon: "🥣",
    servingUnit: "150g (90 kcal)",
    caloriesPerUnit: 90,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 90, protein: 5.5, carbs: 7.0, fat: 4.5, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.6, protein: 0.0367, carbs: 0.0467, fat: 0.03, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["tok doi", "sour curd", "plain yogurt", "টক দই"]
  },
  {
    id: "rosogolla",
    name: "Rosogolla (Roshogolla)",
    bengaliName: "রসগোল্লা",
    category: "Drinks & Sweets",
    icon: "🍬",
    servingUnit: "1 piece (~50g) (140 kcal)",
    caloriesPerUnit: 140,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 140, protein: 2.5, carbs: 28.0, fat: 2.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~50g)", caloriesPerUnit: 140, protein: 2.5, carbs: 28.0, fat: 2.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.8, protein: 0.05, carbs: 0.56, fat: 0.04, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["rosogolla", "roshogolla", "rasgulla", "sweet", "রসগোল্লা", "মিষ্টি"]
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun / Pantua / Kalojam",
    bengaliName: "গোলাপ জাম / পান্তুয়া / কালোজাম",
    category: "Drinks & Sweets",
    icon: "🍩",
    servingUnit: "1 piece (~50g) (180 kcal)",
    caloriesPerUnit: 180,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 180, protein: 3.0, carbs: 27.0, fat: 7.0, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~50g)", caloriesPerUnit: 180, protein: 3.0, carbs: 27.0, fat: 7.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 3.6, protein: 0.06, carbs: 0.54, fat: 0.14, defaultStep: 25, defaultQty: 50 }
    ],
    keywords: ["gulab jamun", "pantua", "kalojam", "কালোজাম", "গোলাপ জাম"]
  },
  {
    id: "suji-halwa",
    name: "Suji Halwa / Shemai",
    bengaliName: "সুজির হালুয়া / সেমাই",
    category: "Drinks & Sweets",
    icon: "🍮",
    servingUnit: "100g (220 kcal)",
    caloriesPerUnit: 220,
    defaultUnit: "gram",
    defaultQty: 100,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 220, protein: 3.5, carbs: 34.0, fat: 8.0, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 2.2, protein: 0.035, carbs: 0.34, fat: 0.08, defaultStep: 25, defaultQty: 100 }
    ],
    keywords: ["halwa", "halua", "suji", "shemai", "হালুয়া", "সেমাই"]
  },

  // --- Fruits (ফলমূল) ---
  {
    id: "banana",
    name: "Banana (Sagor / Champa)",
    bengaliName: "পাকা কলা (সাগর/চাঁপা)",
    category: "Fruits",
    icon: "🍌",
    servingUnit: "1 banana (~100g) (90 kcal)",
    caloriesPerUnit: 90,
    defaultUnit: "serving",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 90, protein: 1.1, carbs: 23.0, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.9, protein: 0.011, carbs: 0.23, fat: 0.003, defaultStep: 50, defaultQty: 100 }
    ],
    keywords: ["banana", "kola", "sagor kola", "কলা", "পাকা কলা"]
  },
  {
    id: "mango",
    name: "Ripe Mango / Paka Aam",
    bengaliName: "পাকা আম",
    category: "Fruits",
    icon: "🥭",
    servingUnit: "150g (100 kcal)",
    caloriesPerUnit: 100,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 100, protein: 1.2, carbs: 25.0, fat: 0.6, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~200g)", caloriesPerUnit: 133, protein: 1.6, carbs: 33.3, fat: 0.8, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.667, protein: 0.008, carbs: 0.167, fat: 0.004, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["mango", "aam", "aamrupali", "fazli", "আম", "পাকা আম"]
  },
  {
    id: "apple",
    name: "Apple",
    bengaliName: "আপেল",
    category: "Fruits",
    icon: "🍎",
    servingUnit: "1 fruit (~150g) (80 kcal)",
    caloriesPerUnit: 80,
    defaultUnit: "piece",
    defaultQty: 1,
    units: [
      { unit: "serving", label: "Serving (1 piece)", caloriesPerUnit: 80, protein: 0.4, carbs: 21.0, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~150g)", caloriesPerUnit: 80, protein: 0.4, carbs: 21.0, fat: 0.3, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.533, protein: 0.0027, carbs: 0.14, fat: 0.002, defaultStep: 50, defaultQty: 150 }
    ],
    keywords: ["apple", "apel", "আপেল"]
  },
  {
    id: "papaya",
    name: "Ripe Papaya / Pepe",
    bengaliName: "পাকা পেঁপে",
    category: "Fruits",
    icon: "🍈",
    servingUnit: "150g (60 kcal)",
    caloriesPerUnit: 60,
    defaultUnit: "gram",
    defaultQty: 150,
    units: [
      { unit: "serving", label: "Serving (standard)", caloriesPerUnit: 60, protein: 0.7, carbs: 15.0, fat: 0.4, defaultStep: 1, defaultQty: 1 },
      { unit: "piece", label: "Piece (~100g)", caloriesPerUnit: 40, protein: 0.47, carbs: 10.0, fat: 0.27, defaultStep: 1, defaultQty: 1 },
      { unit: "gram", label: "Gram (g)", caloriesPerUnit: 0.4, protein: 0.0047, carbs: 0.10, fat: 0.0027, defaultStep: 50, defaultQty: 150 }
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
  }
];

// Helper to get food by ID
function getFoodById(id) {
  return BANGLADESHI_FOODS.find(f => f.id === id);
}

// Categories list
const FOOD_CATEGORIES = [
  "All",
  "Staples & Breads",
  "Fish, Meat & Eggs",
  "Dal, Bhorta & Veggies",
  "Snacks & Street Food",
  "Drinks & Sweets",
  "Fruits"
];
