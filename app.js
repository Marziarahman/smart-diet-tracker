/**
 * Smart Diet Tracker - Bangladeshi Foods Application Logic
 * Supports Food Search & Smart Nutrition Estimation (Calories, Protein, Carbs, Fat)
 * Strictly 3 measurement options: Serving (1 piece), Piece (~weight), Gram (g)
 */

(function () {
  'use strict';

  // --- Constants & Storage Keys ---
  const STORAGE_KEY_LOGS = 'dietTracker_logs_v1';
  const STORAGE_KEY_GOAL = 'dietTracker_dailyGoal_v1';
  const STORAGE_KEY_CUSTOM = 'dietTracker_customFoods_v1';
  const STORAGE_KEY_PROFILE = 'dietTracker_userProfile_v1';

  // --- State ---
  let selectedDate = getTodayDateString();
  let activeMeal = 'Breakfast';
  let activeCategory = 'All';
  let searchQuery = '';
  let selectedFood = null;
  let activeUnitObj = null;
  let dailyGoal = 2000;
  let customFoods = [];
  let dailyLogs = {};
  let userProfile = null;
  let calculatedHealthTarget = 1850;

  // --- DOM Elements ---
  const elCurrentDateLabel = document.getElementById('currentDateLabel');
  const elPrevDateBtn = document.getElementById('prevDateBtn');
  const elNextDateBtn = document.getElementById('nextDateBtn');
  const elHiddenDatePicker = document.getElementById('hiddenDatePicker');

  const elActiveMealLabel = document.getElementById('activeMealLabel');
  const elMealSelector = document.getElementById('mealSelector');
  const elFoodSearchInput = document.getElementById('foodSearchInput');
  const elClearSearchBtn = document.getElementById('clearSearchBtn');
  const elCategoryPills = document.getElementById('categoryPills');
  const elFoodOptionsList = document.getElementById('foodOptionsList');

  const elSelectedFoodBox = document.getElementById('selectedFoodBox');
  const elSelectedFoodName = document.getElementById('selectedFoodName');
  const elSelectedFoodServing = document.getElementById('selectedFoodServing');
  const elPortionQtyInput = document.getElementById('portionQtyInput');
  const elUnitSelector = document.getElementById('unitSelector');
  const elQuickPresetChips = document.getElementById('quickPresetChips');
  const elQtyMinusBtn = document.getElementById('qtyMinusBtn');
  const elQtyPlusBtn = document.getElementById('qtyPlusBtn');

  const elLiveCaloriesPreview = document.getElementById('liveCaloriesPreview');
  const elLiveProteinPreview = document.getElementById('liveProteinPreview');
  const elLiveCarbsPreview = document.getElementById('liveCarbsPreview');
  const elLiveFatPreview = document.getElementById('liveFatPreview');

  const elAddFoodBtn = document.getElementById('addFoodBtn');
  const elAddBtnMealText = document.getElementById('addBtnMealText');

  const elToggleCustomFoodBtn = document.getElementById('toggleCustomFoodBtn');
  const elCustomFoodForm = document.getElementById('customFoodForm');
  const elCancelCustomFoodBtn = document.getElementById('cancelCustomFoodBtn');

  const elConsumedCaloriesVal = document.getElementById('consumedCaloriesVal');
  const elDailyGoalVal = document.getElementById('dailyGoalVal');
  const elRemainingCaloriesVal = document.getElementById('remainingCaloriesVal');
  const elRemainingStatLabel = document.getElementById('remainingStatLabel');
  const elRemainingStatBox = document.getElementById('remainingStatBox');

  const elProgressPercentLabel = document.getElementById('progressPercentLabel');
  const elProgressStatusText = document.getElementById('progressStatusText');
  const elProgressBarFill = document.getElementById('progressBarFill');

  const elBreakfastTotalPill = document.getElementById('breakfastTotalPill');
  const elLunchTotalPill = document.getElementById('lunchTotalPill');
  const elDinnerTotalPill = document.getElementById('dinnerTotalPill');
  const elSnackTotalPill = document.getElementById('snackTotalPill');

  const elBreakfastSubtotal = document.getElementById('breakfastSubtotal');
  const elLunchSubtotal = document.getElementById('lunchSubtotal');
  const elDinnerSubtotal = document.getElementById('dinnerSubtotal');
  const elSnackSubtotal = document.getElementById('snackSubtotal');

  const elBreakfastItemsList = document.getElementById('breakfastItemsList');
  const elLunchItemsList = document.getElementById('lunchItemsList');
  const elDinnerItemsList = document.getElementById('dinnerItemsList');
  const elSnackItemsList = document.getElementById('snackItemsList');

  const elOpenGoalModalBtn = document.getElementById('openGoalModalBtn');
  const elGoalModal = document.getElementById('goalModal');
  const elCloseGoalModalBtn = document.getElementById('closeGoalModalBtn');
  const elCancelGoalModalBtn = document.getElementById('cancelGoalModalBtn');
  const elGoalForm = document.getElementById('goalForm');
  const elGoalInput = document.getElementById('goalInput');

  const elClearDayLogBtn = document.getElementById('clearDayLogBtn');
  const elToastContainer = document.getElementById('toastContainer');

  // --- Helper Functions ---
  function getTodayDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function formatDateForDisplay(dateStr) {
    const today = getTodayDateString();
    if (dateStr === today) return 'Today';

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
    if (dateStr === yStr) return 'Yesterday';

    const [y, m, d] = dateStr.split('-').map(Number);
    const dObj = new Date(y, m - 1, d);
    return dObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function showToast(message, icon = '✅') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    elToastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // --- Storage Functions ---
  function loadStorageData() {
    try {
      const savedGoal = localStorage.getItem(STORAGE_KEY_GOAL);
      if (savedGoal) {
        dailyGoal = parseInt(savedGoal, 10) || 2000;
      }

      const savedCustom = localStorage.getItem(STORAGE_KEY_CUSTOM);
      if (savedCustom) {
        customFoods = JSON.parse(savedCustom) || [];
        // Merge custom foods into BANGLADESHI_FOODS
        customFoods.forEach(cf => {
          if (!BANGLADESHI_FOODS.some(f => f.id === cf.id)) {
            BANGLADESHI_FOODS.push(cf);
          }
        });
      }

      const savedLogs = localStorage.getItem(STORAGE_KEY_LOGS);
      if (savedLogs) {
        dailyLogs = JSON.parse(savedLogs) || {};
      }

      const savedProfile = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  function saveUserProfile() {
    try {
      if (userProfile) {
        localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(userProfile));
      }
    } catch (e) {
      console.warn('LocalStorage save profile error:', e);
    }
  }

  function saveLogs() {
    try {
      localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(dailyLogs));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  function saveGoal() {
    try {
      localStorage.setItem(STORAGE_KEY_GOAL, dailyGoal.toString());
    } catch (e) {
      console.warn('LocalStorage save goal error:', e);
    }
  }

  function saveCustomFoods() {
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM, JSON.stringify(customFoods));
    } catch (e) {
      console.warn('LocalStorage save custom foods error:', e);
    }
  }

  // --- Category Pills ---
  function renderCategoryPills() {
    elCategoryPills.innerHTML = '';
    FOOD_CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `cat-pill ${cat === activeCategory ? 'active' : ''}`;
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        activeCategory = cat;
        renderCategoryPills();
        renderFoodOptions();
      });
      elCategoryPills.appendChild(btn);
    });
  }

  // --- Food Options Filtering & Rendering ---
  function getFilteredFoods() {
    const q = searchQuery.trim().toLowerCase();
    return BANGLADESHI_FOODS.filter(food => {
      if (activeCategory !== 'All' && food.category !== activeCategory) {
        return false;
      }
      if (!q) return true;

      const inName = food.name.toLowerCase().includes(q);
      const inBengali = food.bengaliName.toLowerCase().includes(q);
      const inKeywords = food.keywords && food.keywords.some(kw => kw.toLowerCase().includes(q));
      return inName || inBengali || inKeywords;
    });
  }

  function renderFoodOptions() {
    const foods = getFilteredFoods();
    elFoodOptionsList.innerHTML = '';

    if (foods.length === 0) {
      elFoodOptionsList.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No foods matching "<strong>${escapeHtml(searchQuery)}</strong>" found.<br>
          <button type="button" id="quickAddCustomBtn" class="btn-link" style="margin-top: 8px;">
            + Add this as a custom food
          </button>
        </div>
      `;
      const quickAddBtn = document.getElementById('quickAddCustomBtn');
      if (quickAddBtn) {
        quickAddBtn.addEventListener('click', () => {
          elCustomFoodForm.classList.add('show');
          document.getElementById('customFoodName').value = searchQuery;
          document.getElementById('customFoodCalories').focus();
        });
      }
      return;
    }

    foods.forEach(food => {
      const isSelected = selectedFood && selectedFood.id === food.id;
      const item = document.createElement('div');
      item.className = `food-option-item ${isSelected ? 'selected' : ''}`;

      // Primary calorie & macro display helper
      const primaryUnit = (food.units && food.units[0]) || { label: food.servingUnit || 'portion', caloriesPerUnit: food.caloriesPerUnit };
      const displayQty = primaryUnit.defaultQty || 1;
      const displayCal = Math.round(primaryUnit.caloriesPerUnit * displayQty);

      item.innerHTML = `
        <div class="food-item-meta">
          <span class="food-item-icon">${food.icon || '🍽️'}</span>
          <div>
            <div class="food-item-name">${food.name}</div>
            <div class="food-item-bengali">${food.bengaliName}</div>
            ${primaryUnit.protein !== undefined ? `
            <div class="item-macro-line" style="font-size: 0.68rem; margin-top: 2px;">
              <span class="macro-p">P: ${parseFloat((primaryUnit.protein * displayQty).toFixed(1))}g</span> • 
              <span class="macro-c">C: ${parseFloat((primaryUnit.carbs * displayQty).toFixed(1))}g</span> • 
              <span class="macro-f">F: ${parseFloat((primaryUnit.fat * displayQty).toFixed(1))}g</span>
            </div>` : ''}
          </div>
        </div>
        <div class="food-item-cal-tag">
          <span class="cal-number">${displayCal} kcal</span>
          <span class="cal-serving">${food.servingUnit || primaryUnit.label}</span>
        </div>
      `;

      item.addEventListener('click', () => {
        selectFood(food);
      });

      elFoodOptionsList.appendChild(item);
    });
  }

  // --- Select Food & Unit Initialization ---
  function selectFood(food) {
    selectedFood = food;
    elSelectedFoodName.textContent = `${food.name} (${food.bengaliName})`;
    elSelectedFoodServing.textContent = food.servingUnit || (food.units && food.units[0] ? food.units[0].label : '');

    // Populate units dropdown strictly from food-specific units
    elUnitSelector.innerHTML = '';
    const units = food.units && food.units.length > 0
      ? food.units
      : [{ unit: 'serving', label: 'Serving (1 piece)', caloriesPerUnit: food.caloriesPerUnit || 100, protein: 5, carbs: 10, fat: 2, defaultStep: 1, defaultQty: 1 }];

    units.forEach(u => {
      const opt = document.createElement('option');
      opt.value = u.unit;
      opt.textContent = u.label || u.unit;
      elUnitSelector.appendChild(opt);
    });

    // Determine default unit
    const defaultUnitKey = food.defaultUnit || units[0].unit;
    elUnitSelector.value = defaultUnitKey;
    activeUnitObj = units.find(u => u.unit === defaultUnitKey) || units[0];

    // Set default quantity and step
    const initialQty = activeUnitObj.defaultQty !== undefined ? activeUnitObj.defaultQty : (food.defaultQty || 1);
    elPortionQtyInput.value = initialQty;
    elPortionQtyInput.step = activeUnitObj.defaultStep !== undefined ? activeUnitObj.defaultStep : 1;

    renderQuickPresets();
    updateLiveNutritionPreview();
    renderFoodOptions();
  }

  // --- Dynamic Quick Preset Amounts ---
  function renderQuickPresets() {
    elQuickPresetChips.innerHTML = '';
    if (!activeUnitObj) return;

    const unitKey = activeUnitObj.unit;
    let presetValues = [];
    let unitSuffix = '';

    if (unitKey === 'gram' || unitKey === 'g') {
      unitSuffix = 'g';
      if (activeUnitObj.defaultQty <= 50) {
        presetValues = [25, 50, 75, 100, 150];
      } else {
        presetValues = [50, 100, 150, 200, 250, 300];
      }
    } else if (unitKey === 'piece') {
      unitSuffix = 'pc';
      presetValues = [1, 2, 3, 4, 5];
    } else if (unitKey === 'serving') {
      unitSuffix = 'serving';
      presetValues = [1, 2, 3, 4, 5];
    } else {
      unitSuffix = unitKey;
      presetValues = [1, 2, 3, 4, 5];
    }

    const currentVal = parseFloat(elPortionQtyInput.value) || 0;

    presetValues.forEach(val => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `mult-chip ${currentVal === val ? 'active' : ''}`;
      const label = val > 1 && unitSuffix === 'serving' ? `${val} servings` : val > 1 && unitSuffix === 'pc' ? `${val} pcs` : `${val} ${unitSuffix}`;
      btn.textContent = label;
      btn.addEventListener('click', () => {
        elPortionQtyInput.value = val;
        updateActivePresetChip(val);
        updateLiveNutritionPreview();
      });
      elQuickPresetChips.appendChild(btn);
    });
  }

  function updateActivePresetChip(currentQty) {
    const chips = elQuickPresetChips.querySelectorAll('.mult-chip');
    chips.forEach(chip => {
      const textVal = parseFloat(chip.textContent);
      if (textVal === currentQty) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  // --- Live Nutrition & Calorie Calculation ---
  function updateLiveNutritionPreview() {
    if (!selectedFood || !activeUnitObj) return;
    const qty = parseFloat(elPortionQtyInput.value) || 0;
    const rate = activeUnitObj.caloriesPerUnit;
    const approxCal = Math.round(qty * rate);
    const approxProtein = parseFloat((qty * (activeUnitObj.protein || 0)).toFixed(1));
    const approxCarbs = parseFloat((qty * (activeUnitObj.carbs || 0)).toFixed(1));
    const approxFat = parseFloat((qty * (activeUnitObj.fat || 0)).toFixed(1));

    if (elLiveCaloriesPreview) elLiveCaloriesPreview.textContent = approxCal.toLocaleString();
    if (elLiveProteinPreview) elLiveProteinPreview.textContent = approxProtein.toLocaleString();
    if (elLiveCarbsPreview) elLiveCarbsPreview.textContent = approxCarbs.toLocaleString();
    if (elLiveFatPreview) elLiveFatPreview.textContent = approxFat.toLocaleString();
  }

  // --- Meal Selector Tabs ---
  function initMealSelector() {
    const buttons = elMealSelector.querySelectorAll('.meal-tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeMeal = btn.getAttribute('data-meal');
        elActiveMealLabel.textContent = activeMeal;
        elAddBtnMealText.textContent = activeMeal;
      });
    });
  }

  // --- Unit & Quantity Controls ---
  function initQuantityControls() {
    // Unit Change
    elUnitSelector.addEventListener('change', (e) => {
      if (!selectedFood || !selectedFood.units) return;
      const chosenUnit = e.target.value;
      const matched = selectedFood.units.find(u => u.unit === chosenUnit);
      if (matched) {
        activeUnitObj = matched;
        const newQty = matched.defaultQty !== undefined ? matched.defaultQty : 1;
        elPortionQtyInput.value = newQty;
        elPortionQtyInput.step = matched.defaultStep !== undefined ? matched.defaultStep : 1;
        renderQuickPresets();
        updateLiveNutritionPreview();
      }
    });

    // Quantity Stepper Minus
    elQtyMinusBtn.addEventListener('click', () => {
      let val = parseFloat(elPortionQtyInput.value) || 1;
      const step = activeUnitObj && activeUnitObj.defaultStep ? activeUnitObj.defaultStep : 1;

      if (val > step) {
        val = val - step;
      } else if (val > 0.1) {
        val = Math.max(0.1, val / 2);
      }
      elPortionQtyInput.value = parseFloat(val.toFixed(2));
      updateActivePresetChip(val);
      updateLiveNutritionPreview();
    });

    // Quantity Stepper Plus
    elQtyPlusBtn.addEventListener('click', () => {
      let val = parseFloat(elPortionQtyInput.value) || 0;
      const step = activeUnitObj && activeUnitObj.defaultStep ? activeUnitObj.defaultStep : 1;
      val = val + step;
      if (val > 5000) val = 5000;
      elPortionQtyInput.value = parseFloat(val.toFixed(2));
      updateActivePresetChip(val);
      updateLiveNutritionPreview();
    });

    // Direct Quantity Input
    elPortionQtyInput.addEventListener('input', () => {
      const val = parseFloat(elPortionQtyInput.value) || 0;
      updateActivePresetChip(val);
      updateLiveNutritionPreview();
    });
  }

  // --- Add Food Entry ---
  function addCurrentFoodEntry() {
    if (!selectedFood) {
      showToast('Please select a food item first', '⚠️');
      return;
    }

    const qty = parseFloat(elPortionQtyInput.value);
    if (!qty || qty <= 0) {
      showToast('Please enter a valid quantity', '⚠️');
      return;
    }

    const unitKey = activeUnitObj ? activeUnitObj.unit : 'serving';
    const unitLabel = activeUnitObj ? (activeUnitObj.label || activeUnitObj.unit) : 'serving';
    const rate = activeUnitObj ? activeUnitObj.caloriesPerUnit : (selectedFood.caloriesPerUnit || 100);
    const totalCals = Math.round(qty * rate);
    const totalProtein = parseFloat((qty * (activeUnitObj ? activeUnitObj.protein || 0 : 0)).toFixed(1));
    const totalCarbs = parseFloat((qty * (activeUnitObj ? activeUnitObj.carbs || 0 : 0)).toFixed(1));
    const totalFat = parseFloat((qty * (activeUnitObj ? activeUnitObj.fat || 0 : 0)).toFixed(1));

    const entry = {
      id: 'entry_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      meal: activeMeal,
      foodId: selectedFood.id,
      foodName: selectedFood.name,
      bengaliName: selectedFood.bengaliName,
      icon: selectedFood.icon || '🍽️',
      qty: qty,
      unit: unitKey,
      unitLabel: unitLabel,
      caloriesPerUnit: rate,
      totalCalories: totalCals,
      protein: totalProtein,
      carbs: totalCarbs,
      fat: totalFat,
      timestamp: new Date().toISOString()
    };

    if (!dailyLogs[selectedDate]) {
      dailyLogs[selectedDate] = [];
    }

    dailyLogs[selectedDate].push(entry);
    saveLogs();
    renderDayLogs();
    updateDashboardStats();

    showToast(`Added ${entry.foodName} (${qty} ${unitKey}) to ${activeMeal} (+${totalCals} kcal)`);
  }

  // --- Delete Food Entry ---
  function deleteEntry(entryId) {
    if (!dailyLogs[selectedDate]) return;
    const itemIndex = dailyLogs[selectedDate].findIndex(e => e.id === entryId);
    if (itemIndex > -1) {
      const removed = dailyLogs[selectedDate].splice(itemIndex, 1)[0];
      saveLogs();
      renderDayLogs();
      updateDashboardStats();
      showToast(`Removed ${removed.foodName}`, '🗑️');
    }
  }

  // --- Render Daily Logs ---
  function renderDayLogs() {
    const entries = dailyLogs[selectedDate] || [];

    const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
    const lists = {
      Breakfast: elBreakfastItemsList,
      Lunch: elLunchItemsList,
      Dinner: elDinnerItemsList,
      Snack: elSnackItemsList
    };

    const subtotals = {
      Breakfast: 0,
      Lunch: 0,
      Dinner: 0,
      Snack: 0
    };

    const grouped = {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: []
    };

    entries.forEach(item => {
      const m = item.meal || 'Snack';
      if (grouped[m]) {
        grouped[m].push(item);
        subtotals[m] += item.totalCalories || 0;
      }
    });

    // Render each meal list
    meals.forEach(meal => {
      const listEl = lists[meal];
      listEl.innerHTML = '';

      if (grouped[meal].length === 0) {
        listEl.innerHTML = `<li class="meal-empty-state">No ${meal.toLowerCase()} items logged for this day.</li>`;
      } else {
        grouped[meal].forEach(item => {
          const li = document.createElement('li');
          li.className = 'meal-item-row';

          // Format portion display nicely (e.g. "150 g", "2 pcs", "1 serving")
          let unitDisplay = item.unit || (item.servingUnit ? '' : 'serving');
          if (unitDisplay === 'gram' || unitDisplay === 'g') {
            unitDisplay = 'g';
          } else if (unitDisplay === 'piece') {
            unitDisplay = item.qty > 1 ? 'pcs' : 'pc';
          } else if (unitDisplay === 'serving') {
            unitDisplay = item.qty > 1 ? 'servings' : 'serving';
          }

          li.innerHTML = `
            <div class="item-left">
              <span class="item-icon">${item.icon || '🍽️'}</span>
              <div>
                <div class="item-title">${item.foodName} <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: normal;">(${item.bengaliName || ''})</span></div>
                <div class="item-portion-desc"><strong>${item.qty}</strong> ${unitDisplay}</div>
                ${(item.protein !== undefined || item.carbs !== undefined || item.fat !== undefined) ? `
                <div class="item-macro-line">
                  <span class="macro-p">P: ${item.protein || 0}g</span> • 
                  <span class="macro-c">C: ${item.carbs || 0}g</span> • 
                  <span class="macro-f">F: ${item.fat || 0}g</span>
                </div>` : ''}
              </div>
            </div>
            <div class="item-right">
              <span class="item-calories">${(item.totalCalories || 0).toLocaleString()} kcal</span>
              <button type="button" class="btn-delete-item" data-id="${item.id}" title="Remove entry">✕</button>
            </div>
          `;

          const deleteBtn = li.querySelector('.btn-delete-item');
          deleteBtn.addEventListener('click', () => {
            deleteEntry(item.id);
          });

          listEl.appendChild(li);
        });
      }
    });

    // Update Subtotal Badges
    elBreakfastSubtotal.textContent = `${subtotals.Breakfast.toLocaleString()} kcal`;
    elLunchSubtotal.textContent = `${subtotals.Lunch.toLocaleString()} kcal`;
    elDinnerSubtotal.textContent = `${subtotals.Dinner.toLocaleString()} kcal`;
    elSnackSubtotal.textContent = `${subtotals.Snack.toLocaleString()} kcal`;

    // Update Mini Summary Pills
    elBreakfastTotalPill.textContent = `${subtotals.Breakfast.toLocaleString()} kcal`;
    elLunchTotalPill.textContent = `${subtotals.Lunch.toLocaleString()} kcal`;
    elDinnerTotalPill.textContent = `${subtotals.Dinner.toLocaleString()} kcal`;
    elSnackTotalPill.textContent = `${subtotals.Snack.toLocaleString()} kcal`;
  }

  // --- Update Dashboard Stats & Progress Bar ---
  function updateDashboardStats() {
    const entries = dailyLogs[selectedDate] || [];
    const totalConsumed = entries.reduce((sum, item) => sum + (item.totalCalories || 0), 0);
    const remaining = dailyGoal - totalConsumed;

    elConsumedCaloriesVal.textContent = totalConsumed.toLocaleString();
    elDailyGoalVal.textContent = dailyGoal.toLocaleString();

    if (remaining >= 0) {
      elRemainingStatLabel.textContent = 'Remaining';
      elRemainingCaloriesVal.textContent = remaining.toLocaleString();
      elRemainingStatBox.className = 'stat-box';
      elRemainingCaloriesVal.style.color = 'var(--text-main)';
    } else {
      elRemainingStatLabel.textContent = 'Over Goal';
      elRemainingCaloriesVal.textContent = Math.abs(remaining).toLocaleString();
      elRemainingStatBox.className = 'stat-box warning';
    }

    // Progress Bar Calculation
    const percent = Math.round((totalConsumed / dailyGoal) * 100);
    elProgressPercentLabel.textContent = `${percent}% of daily goal (${totalConsumed} / ${dailyGoal} kcal)`;

    const barWidth = Math.min(percent, 100);
    elProgressBarFill.style.width = `${barWidth}%`;

    if (percent > 100) {
      elProgressBarFill.className = 'progress-bar-fill danger';
      elProgressStatusText.textContent = `⚠️ Exceeded goal by ${Math.abs(remaining)} kcal`;
      elProgressStatusText.style.color = 'var(--danger)';
    } else if (percent >= 80) {
      elProgressBarFill.className = 'progress-bar-fill warning';
      elProgressStatusText.textContent = 'Approaching target';
      elProgressStatusText.style.color = 'var(--accent)';
    } else {
      elProgressBarFill.className = 'progress-bar-fill';
      elProgressStatusText.textContent = totalConsumed === 0 ? 'Start logging meals' : 'On track';
      elProgressStatusText.style.color = 'var(--success)';
    }
  }

  // --- Date Navigator ---
  function initDateNavigator() {
    elCurrentDateLabel.textContent = formatDateForDisplay(selectedDate);

    elPrevDateBtn.addEventListener('click', () => {
      shiftDate(-1);
    });

    elNextDateBtn.addEventListener('click', () => {
      shiftDate(1);
    });

    elCurrentDateLabel.addEventListener('click', () => {
      elHiddenDatePicker.value = selectedDate;
      elHiddenDatePicker.showPicker ? elHiddenDatePicker.showPicker() : elHiddenDatePicker.click();
    });

    elHiddenDatePicker.addEventListener('change', (e) => {
      if (e.target.value) {
        selectedDate = e.target.value;
        onDateChange();
      }
    });
  }

  function shiftDate(offsetDays) {
    const [y, m, d] = selectedDate.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    date.setDate(date.getDate() + offsetDays);

    const newYear = date.getFullYear();
    const newMonth = String(date.getMonth() + 1).padStart(2, '0');
    const newDay = String(date.getDate()).padStart(2, '0');

    selectedDate = `${newYear}-${newMonth}-${newDay}`;
    onDateChange();
  }

  function onDateChange() {
    elCurrentDateLabel.textContent = formatDateForDisplay(selectedDate);
    renderDayLogs();
    updateDashboardStats();
  }

  // --- Custom Food Form ---
  function initCustomFoodForm() {
    elToggleCustomFoodBtn.addEventListener('click', () => {
      elCustomFoodForm.classList.toggle('show');
      if (elCustomFoodForm.classList.contains('show')) {
        document.getElementById('customFoodName').focus();
      }
    });

    elCancelCustomFoodBtn.addEventListener('click', () => {
      elCustomFoodForm.classList.remove('show');
    });

    elCustomFoodForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('customFoodName').value.trim();
      const baseQty = parseFloat(document.getElementById('customFoodQty').value) || 100;
      const unit = document.getElementById('customFoodUnit').value;
      const totalCals = parseInt(document.getElementById('customFoodCalories').value, 10);
      const protein = parseFloat(document.getElementById('customFoodProtein').value) || 0;
      const carbs = parseFloat(document.getElementById('customFoodCarbs').value) || 0;
      const fat = parseFloat(document.getElementById('customFoodFat').value) || 0;

      if (!name || isNaN(totalCals) || totalCals <= 0 || baseQty <= 0) {
        showToast('Please fill all fields with valid values', '⚠️');
        return;
      }

      const calPerUnit = totalCals / baseQty;
      const proteinPerUnit = protein / baseQty;
      const carbsPerUnit = carbs / baseQty;
      const fatPerUnit = fat / baseQty;

      const newCustomItem = {
        id: 'custom_' + Date.now(),
        name: name,
        bengaliName: name,
        category: 'Custom',
        icon: '🍲',
        servingUnit: unit === 'gram' ? `${baseQty}g (${totalCals} kcal)` : `${baseQty} ${unit} (${totalCals} kcal)`,
        caloriesPerUnit: totalCals,
        defaultUnit: unit,
        defaultQty: baseQty,
        units: [
          {
            unit: unit,
            label: unit === 'gram' ? 'Gram (g)' : unit === 'piece' ? `Piece (~${baseQty}g)` : 'Serving (standard)',
            caloriesPerUnit: calPerUnit,
            protein: proteinPerUnit,
            carbs: carbsPerUnit,
            fat: fatPerUnit,
            defaultStep: unit === 'gram' ? 50 : 1,
            defaultQty: baseQty
          }
        ],
        keywords: [name.toLowerCase()]
      };

      customFoods.push(newCustomItem);
      BANGLADESHI_FOODS.push(newCustomItem);
      saveCustomFoods();

      elCustomFoodForm.reset();
      elCustomFoodForm.classList.remove('show');

      // Select newly added food
      selectFood(newCustomItem);
      renderFoodOptions();
      showToast(`Created & selected custom food: "${name}"`);
    });
  }

  // --- Goal Editor Modal ---
  function initGoalModal() {
    elOpenGoalModalBtn.addEventListener('click', () => {
      elGoalInput.value = dailyGoal;
      elGoalModal.classList.add('open');
      elGoalInput.focus();
    });

    const closeModal = () => {
      elGoalModal.classList.remove('open');
    };

    elCloseGoalModalBtn.addEventListener('click', closeModal);
    elCancelGoalModalBtn.addEventListener('click', closeModal);

    elGoalModal.addEventListener('click', (e) => {
      if (e.target === elGoalModal) closeModal();
    });

    document.querySelectorAll('.preset-goal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.getAttribute('data-preset'), 10);
        elGoalInput.value = val;
      });
    });

    elGoalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = parseInt(elGoalInput.value, 10);
      if (val >= 500 && val <= 10000) {
        dailyGoal = val;
        saveGoal();
        updateDashboardStats();
        closeModal();
        showToast(`Daily calorie target updated to ${val.toLocaleString()} kcal`);
      } else {
        showToast('Please enter a target between 500 and 10,000 kcal', '⚠️');
      }
    });
  }

  // --- Clear Day Log ---
  function initClearDayLog() {
    elClearDayLogBtn.addEventListener('click', () => {
      const entries = dailyLogs[selectedDate] || [];
      if (entries.length === 0) {
        showToast('No entries to clear for this date', 'ℹ️');
        return;
      }

      if (confirm(`Are you sure you want to clear all logged food items for ${formatDateForDisplay(selectedDate)}?`)) {
        delete dailyLogs[selectedDate];
        saveLogs();
        renderDayLogs();
        updateDashboardStats();
        showToast(`Cleared log for ${formatDateForDisplay(selectedDate)}`, '🗑️');
      }
    });
  }

  // --- Search Handlers ---
  function initSearch() {
    elFoodSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchQuery.trim().length > 0) {
        elClearSearchBtn.style.display = 'block';
      } else {
        elClearSearchBtn.style.display = 'none';
      }
      renderFoodOptions();
    });

    elClearSearchBtn.addEventListener('click', () => {
      elFoodSearchInput.value = '';
      searchQuery = '';
      elClearSearchBtn.style.display = 'none';
      renderFoodOptions();
      elFoodSearchInput.focus();
    });
  }

  // --- Personal Health & Calorie Calculator (Mifflin-St Jeor & BMI) ---
  function initHealthCalculator() {
    const elHealthCalcForm = document.getElementById('healthCalcForm');
    const elCalcAge = document.getElementById('calcAge');
    const elCalcGender = document.getElementById('calcGender');
    const elCalcHeight = document.getElementById('calcHeight');
    const elHeightFtInLabel = document.getElementById('heightFtInLabel');
    const elCalcWeight = document.getElementById('calcWeight');
    const elCalcActivity = document.getElementById('calcActivity');
    const elCalcTargetWeight = document.getElementById('calcTargetWeight');

    const elHealthResultsPanel = document.getElementById('healthResultsPanel');
    const elResBmi = document.getElementById('resBmi');
    const elResBmiCategory = document.getElementById('resBmiCategory');
    const elResBmr = document.getElementById('resBmr');
    const elResTdee = document.getElementById('resTdee');
    const elResTargetCalories = document.getElementById('resTargetCalories');
    const elResDeficitNote = document.getElementById('resDeficitNote');
    const elResTargetWeight = document.getElementById('resTargetWeight');
    const elResWeightDiff = document.getElementById('resWeightDiff');
    const elBtnTargetKcalSpan = document.getElementById('btnTargetKcalSpan');
    const elApplyGoalFromCalcBtn = document.getElementById('applyGoalFromCalcBtn');

    if (!elHealthCalcForm) return;

    function updateHeightHelper() {
      const cm = parseFloat(elCalcHeight.value);
      if (cm && cm > 0) {
        const totalInches = cm / 2.54;
        const ft = Math.floor(totalInches / 12);
        const inches = Math.round(totalInches % 12);
        if (elHeightFtInLabel) elHeightFtInLabel.textContent = `≈ ${ft} ft ${inches} in`;
      }
    }

    elCalcHeight.addEventListener('input', updateHeightHelper);

    function computeHealthMetrics(isInitial = false) {
      const age = parseInt(elCalcAge.value, 10);
      const gender = elCalcGender.value;
      const height = parseFloat(elCalcHeight.value);
      const weight = parseFloat(elCalcWeight.value);
      const activity = parseFloat(elCalcActivity.value);
      const targetWeight = parseFloat(elCalcTargetWeight.value);

      if (isNaN(age) || isNaN(height) || isNaN(weight) || isNaN(targetWeight) || height <= 0 || weight <= 0 || targetWeight <= 0) {
        if (!isInitial) showToast('Please enter valid numeric health details', '⚠️');
        return;
      }

      // 1. BMI Calculation
      const hMeters = height / 100;
      const bmi = parseFloat((weight / (hMeters * hMeters)).toFixed(1));
      let bmiCat = 'Normal weight';
      let bmiClass = 'normal';
      if (bmi < 18.5) {
        bmiCat = 'Underweight (< 18.5)';
        bmiClass = 'underweight';
      } else if (bmi < 25.0) {
        bmiCat = 'Normal weight (18.5 - 24.9)';
        bmiClass = 'normal';
      } else if (bmi < 30.0) {
        bmiCat = 'Overweight (25.0 - 29.9)';
        bmiClass = 'overweight';
      } else {
        bmiCat = 'Obese (≥ 30.0)';
        bmiClass = 'obese';
      }

      // 2. BMR Calculation (Mifflin-St Jeor Formula)
      let bmrVal = 0;
      if (gender === 'male') {
        bmrVal = (10 * weight) + (6.25 * height) - (5 * age) + 5;
      } else {
        bmrVal = (10 * weight) + (6.25 * height) - (5 * age) - 161;
      }
      const bmr = Math.round(bmrVal);

      // 3. Maintenance Calories (TDEE)
      const tdee = Math.round(bmr * activity);

      // 4. Suggested Daily Calorie Target for Weight Loss (Reasonable safe deficit)
      const weightDiff = targetWeight - weight;
      let targetKcal = 2000;
      let deficitNote = 'Maintenance target (0 kcal deficit)';
      let weightDiffLabel = 'At target weight';

      if (weightDiff < -0.1) {
        // Weight loss: moderate safe deficit of ~450 kcal/day
        const minSafeKcal = gender === 'female' ? 1200 : 1500;
        targetKcal = Math.max(minSafeKcal, Math.round(tdee - 450));
        deficitNote = 'Moderate safe deficit (~450 kcal/day for ~0.45 kg/wk loss)';
        weightDiffLabel = `(-${Math.abs(weightDiff).toFixed(1)} kg to reach goal)`;
      } else if (weightDiff > 0.1) {
        // Weight gain
        targetKcal = Math.round(tdee + 350);
        deficitNote = 'Moderate surplus (~350 kcal/day for healthy gain)';
        weightDiffLabel = `(+${Math.abs(weightDiff).toFixed(1)} kg to reach goal)`;
      }

      calculatedHealthTarget = targetKcal;

      // Render Results
      if (elResBmi) elResBmi.textContent = bmi.toFixed(1);
      if (elResBmiCategory) {
        elResBmiCategory.textContent = bmiCat;
        elResBmiCategory.className = `bmi-badge-tag ${bmiClass}`;
      }
      if (elResBmr) elResBmr.textContent = bmr.toLocaleString();
      if (elResTdee) elResTdee.textContent = tdee.toLocaleString();
      if (elResTargetCalories) elResTargetCalories.textContent = targetKcal.toLocaleString();
      if (elResDeficitNote) elResDeficitNote.textContent = deficitNote;
      if (elResTargetWeight) elResTargetWeight.textContent = targetWeight.toLocaleString();
      if (elResWeightDiff) elResWeightDiff.textContent = weightDiffLabel;
      if (elBtnTargetKcalSpan) elBtnTargetKcalSpan.textContent = `${targetKcal.toLocaleString()} kcal`;

      if (elHealthResultsPanel) elHealthResultsPanel.style.display = 'block';

      // Persist state
      userProfile = { age, gender, height, weight, activity, targetWeight, calculatedTarget: targetKcal };
      saveUserProfile();

      if (!isInitial) {
        showToast('Personal health metrics & calorie target calculated!', '⚡');
      }
    }

    elHealthCalcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      computeHealthMetrics(false);
    });

    if (elApplyGoalFromCalcBtn) {
      elApplyGoalFromCalcBtn.addEventListener('click', () => {
        if (calculatedHealthTarget && calculatedHealthTarget >= 500) {
          dailyGoal = calculatedHealthTarget;
          saveGoal();
          updateDashboardStats();
          showToast(`Daily Goal set to ${dailyGoal.toLocaleString()} kcal!`, '🎯');
        }
      });
    }

    // Restore saved profile or compute default
    if (userProfile) {
      elCalcAge.value = userProfile.age !== undefined ? userProfile.age : 28;
      elCalcGender.value = userProfile.gender || 'male';
      elCalcHeight.value = userProfile.height !== undefined ? userProfile.height : 170;
      elCalcWeight.value = userProfile.weight !== undefined ? userProfile.weight : 75;
      elCalcActivity.value = userProfile.activity !== undefined ? userProfile.activity : 1.375;
      elCalcTargetWeight.value = userProfile.targetWeight !== undefined ? userProfile.targetWeight : 68;
      updateHeightHelper();
      computeHealthMetrics(true);
    } else {
      updateHeightHelper();
    }
  }

  // --- App Initialization ---
  function initApp() {
    loadStorageData();
    initDateNavigator();
    initMealSelector();
    initSearch();
    initQuantityControls();
    initCustomFoodForm();
    initGoalModal();
    initClearDayLog();
    initHealthCalculator();

    // Default select first food (Plain White Rice)
    if (BANGLADESHI_FOODS.length > 0) {
      selectFood(BANGLADESHI_FOODS[0]);
    }

    renderCategoryPills();
    renderFoodOptions();
    renderDayLogs();
    updateDashboardStats();

    // Add Food Button Handler
    elAddFoodBtn.addEventListener('click', addCurrentFoodEntry);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
