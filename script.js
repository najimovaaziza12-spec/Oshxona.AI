// 3 LIK TARJIMALAR BAZASI (UZ, RU, EN)
const TRANSLATIONS = {
    uz: {
        subLogoText: "Aqlli ro'zg'or va AI retseptlar",
        guide: "Qo'llanma",
        fridgeTitle: "🧊 Muzlatgichim",
        clear: "Tozalash",
        fridgeDesc: "Uyingizda bor mahsulotlarni belgilang:",
        lensBtn: "Oshxona Lens: Rasmga olish",
        catAll: "Barchasi",
        catVeg: "Sabzavotlar",
        catMeat: "Go'sht va Tuxum",
        catMilk: "Sut",
        catGrain: "Don",
        recipesTitle: "🍲 Tayyorlash mumkin bo'lgan taomlar",
        onlyReady: "✅ Faqat tayyorlari",
        mealAll: "Barcha vaqtlar",
        mealBreak: "Nonushta",
        mealLunch: "Tushlik",
        mealDinner: "Kechki ovqat",
        calText: "🔥 Bugungi kaloriya:",
        reset: "Nollash",
        shoppingTitle: "🛒 Bozorlik ro'yxati",
        shoppingDesc: "Yetishmayotgan mahsulotlar:",
        copyList: "📤 Ro'yxatni nusxalash",
        clearDone: "Sotib olinganlarni o'chirish",
        navFridge: "Muzlatgich",
        navRecipes: "Retseptlar",
        navShop: "Bozorlik",
        cabinet: "Shaxsiy Kabinet",
        welcomeTitle: "Xush kelibsiz!",
        welcomeDesc: "Ismingizni kiriting:",
        save: "Saqlash",
        guideBadge: "Qo'llanma",
        guideTitleText: "Oshxona.AI haqida",
        gPurposeTitle: "🎯 Maqsad:",
        gPurposeDesc: "Uydagi mahsulotlardan oson va tez ovqat pishirish.",
        creatorDesc: "Zamonaviy aqlli oshxona yordamchisi."
    },
    ru: {
        subLogoText: "Умный дом и AI рецепты",
        guide: "Гид",
        fridgeTitle: "🧊 Мой холодильник",
        clear: "Очистить",
        fridgeDesc: "Отметьте продукты, которые есть дома:",
        lensBtn: "Осхона Lens: Сканировать",
        catAll: "Все",
        catVeg: "Овощи",
        catMeat: "Мясо и Яйца",
        catMilk: "Молочные",
        catGrain: "Зерновые",
        recipesTitle: "🍲 Доступные рецепты",
        onlyReady: "✅ Только готовые",
        mealAll: "Все время",
        mealBreak: "Завтрак",
        mealLunch: "Обед",
        mealDinner: "Ужин",
        calText: "🔥 Калории:",
        reset: "Сброс",
        shoppingTitle: "🛒 Список покупок",
        shoppingDesc: "Недостающие продукты:",
        copyList: "📤 Копировать список",
        clearDone: "Удалить купленные",
        navFridge: "Холодильник",
        navRecipes: "Рецепты",
        navShop: "Покупки",
        cabinet: "Личный кабинет",
        welcomeTitle: "Добро пожаловать!",
        welcomeDesc: "Введите ваше имя:",
        save: "Сохранить",
        guideBadge: "Руководство",
        guideTitleText: "О проекте Oshxona.AI",
        gPurposeTitle: "🎯 Цель:",
        gPurposeDesc: "Легкое приготовление блюд из имеющихся продуктов.",
        creatorDesc: "Современный умный кулинарный помощник."
    },
    en: {
        subLogoText: "Smart Kitchen & AI Recipes",
        guide: "Guide",
        fridgeTitle: "🧊 My Fridge",
        clear: "Clear",
        fridgeDesc: "Select ingredients you have at home:",
        lensBtn: "Oshxona Lens: Scan photo",
        catAll: "All",
        catVeg: "Vegetables",
        catMeat: "Meat & Eggs",
        catMilk: "Dairy",
        catGrain: "Grains",
        recipesTitle: "🍲 Available Recipes",
        onlyReady: "✅ Ready to cook",
        mealAll: "All times",
        mealBreak: "Breakfast",
        mealLunch: "Lunch",
        mealDinner: "Dinner",
        calText: "🔥 Calories:",
        reset: "Reset",
        shoppingTitle: "🛒 Shopping List",
        shoppingDesc: "Missing ingredients:",
        copyList: "📤 Copy list",
        clearDone: "Clear purchased",
        navFridge: "Fridge",
        navRecipes: "Recipes",
        navShop: "Shopping",
        cabinet: "Personal Cabinet",
        welcomeTitle: "Welcome!",
        welcomeDesc: "Enter your name:",
        save: "Save",
        guideBadge: "Guide",
        guideTitleText: "About Oshxona.AI",
        gPurposeTitle: "🎯 Purpose:",
        gPurposeDesc: "Easy and quick cooking with what you have.",
        creatorDesc: "Modern smart kitchen assistant."
    }
};

const INGREDIENTS_DB = [
    { id: 'tuxum', name: 'Tuxum', emoji: '🥚', cat: 'gosht' },
    { id: 'kartoshka', name: 'Kartoshka', emoji: '🥔', cat: 'sabzavot' },
    { id: 'piyoz', name: 'Piyoz', emoji: '🧅', cat: 'sabzavot' },
    { id: 'pomidor', name: 'Pomidor', emoji: '🍅', cat: 'sabzavot' },
    { id: 'bodring', name: 'Bodring', emoji: '🥒', cat: 'sabzavot' },
    { id: 'sabzi', name: 'Sabzi', emoji: '🥕', cat: 'sabzavot' },
    { id: 'sarimsoq', name: 'Sarimsoq', emoji: '🧄', cat: 'sabzavot' },
    { id: 'tovuq', name: "Tovuq go'shti", emoji: '🍗', cat: 'gosht' },
    { id: 'mol_goshti', name: "Mol go'shti", emoji: '🥩', cat: 'gosht' },
    { id: 'qiyma', name: 'Qiyma', emoji: '🍖', cat: 'gosht' },
    { id: 'sut', name: 'Sut', emoji: '🥛', cat: 'sut' },
    { id: 'pishloq', name: 'Pishloq', emoji: '🧀', cat: 'sut' },
    { id: 'sariyog', name: "Sariyog'", emoji: '🧈', cat: 'sut' },
    { id: 'qatiq', name: 'Qatiq', emoji: '🥣', cat: 'sut' },
    { id: 'guruch', name: 'Guruch', emoji: '🍚', cat: 'don' },
    { id: 'makaron', name: 'Makaron', emoji: '🍝', cat: 'don' },
    { id: 'un', name: 'Un', emoji: '🌾', cat: 'don' },
    { id: 'non', name: 'Non / Lavash', emoji: '🫓', cat: 'don' },
    { id: 'kokat', name: "Ko'katlar", emoji: '🌿', cat: 'sabzavot' },
    { id: 'bulgor', name: "Bulg'or qalampiri", emoji: '🫑', cat: 'sabzavot' }
];

// RETSEPTLAR (Faqat Sho'rva va Mantida YouTube video bor, qolganlarida video yo'q — faqat super aniq matn!)
const RECIPES_DB = [
    {
        id: 1,
        title: "Klassik Pomidorli va Tuxumli Quymoq",
        emoji: "🍳",
        time: "12 daqiqa",
        calories: 280,
        meal: "Nonushta",
        youtubeId: null, // Video olib tashlandi
        ingredients: ['tuxum', 'pomidor', 'piyoz'],
        steps: [
            "<strong>1-qadam (Kesish texnikasi):</strong> 1 dona o'rtacha piyozni po'stidan tozalab, mayda (0.5 sm o'lchamdagi) kubik shaklida to'g'rab oling. 2 dona pishgan pomidorni yuvib, ularni ham bir xil kubik shaklida kesib tayyorlang.",
            "<strong>2-qadam (Tovani qizdirish):</strong> Chuqurroq tovani o'rtacha olovga qo'ying, ichiga 2 osh qoshiq o'simlik yog'i soling va yog' qizishi uchun 1 daqiqa kuting.",
            "<strong>3-qadam (Sabzavotlarni qovurish):</strong> Qizigan yog'ga avval piyozni soling va tilla rangga kirguncha 3 daqiqa davomida yog'och qoshiqda aralashtirib qovuring. So'ngra to'g'ralgan pomidorlarni qo'shing, tuz va murch sepib, suvi biroz bug'languncha 4 daqiqa dimlang.",
            "<strong>4-qadam (Tuxumni quyish):</strong> Alohida kosaga 3 ta tuxumni chaqib, sanchqi yordamida oqi va sarig'i bir xil massa bo'lguncha 30 soniya ko'pirtiring va sabzavotlar ustidan bir tekisda quying.",
            "<strong>5-qadam (Dimlash va pishirish):</strong> Tova qopqog'ini yopib, olovni eng past darajaga tushiring va tuxum to'liq qotguncha 4 daqiqa pishiring.",
            "<strong>🎉 Yakun:</strong> Tabriklaymiz! Mazali va issiq quymoq tayyor. Likopchaga suzib dasturxonga torting. Yoqimli ishtaha!"
        ]
    },
    {
        id: 2,
        title: "Qarsildoq Kartoshka va Piyoz Qovurmasi",
        emoji: "🍟",
        time: "25 daqiqa",
        calories: 410,
        meal: "Kechki ovqat",
        youtubeId: null,
        ingredients: ['kartoshka', 'piyoz'],
        steps: [
            "<strong>1-qadam (To'g'rash va quritish):</strong> 4 ta kartoshkani archib, qalinligi 0.8 sm bo'lgan somoncha shaklida to'g'rang. Sovuq suvda yuvib, toza sochiqda yaxshilab quritib oling.",
            "<strong>2-qadam (Piyozni tayyorlash):</strong> 1 ta katta piyozni yupqa yarim halqa shaklida to'g'rab qo'ying.",
            "<strong>3-qadam (Qovurish):</strong> Keng tovaga 4 osh qoshiq yog' quyib qizdiring. Quritilgan kartoshkani soling va dastlabki 6 daqiqa davomida aralashtirmang.",
            "<strong>4-qadam (Piyoz qo'shish):</strong> Piyozni hamda ta'bga ko'ra tuz solib, yana 10 daqiqa davomida qizartirib qovuring.",
            "<strong>🎉 Yakun:</strong> Tabriklaymiz! Qarsildoq kartoshka qovurmasi tayyor. Yoqimli ishtaha!"
        ]
    },
    {
        id: 5,
        title: "Haqiqiy O'zbekcha Qaynatma Sho'rva",
        emoji: "🍲",
        time: "55 daqiqa",
        calories: 460,
        meal: "Tushlik",
        youtubeId: "1d2z_1aJ9wU", // Faqat shörvada video qoldirildi
        ingredients: ['mol_goshti', 'kartoshka', 'sabzi', 'piyoz', 'pomidor'],
        steps: [
            "<strong>1-qadam (Yirik kesish):</strong> 400g mol go'shtini bo'laklarga bo'ling. Kartoshkani butunligicha, sabzini yirik parrak, piyozni halqa qilib to'g'rang.",
            "<strong>2-qadam (Qaynatish):</strong> Qozonga 2 litr suv solib go'shtni qaynating, ko'pigini ehtiyotkorlik bilan olib tashlang.",
            "<strong>3-qadam (Dimlash):</strong> Piyoz, sabzi va pomidorni solib 30 daqiqa past olovda qaynating.",
            "<strong>4-qadam (Pishirish):</strong> Kartoshka va ziravorlarni solib, yumshaguncha yana 20 daqiqa qaynating.",
            "<strong>🎉 Yakun:</strong> Tabriklaymiz! Issiq qaynatma sho'rva tayyor. Yoqimli ishtaha!"
        ]
    },
    {
        id: 6,
        title: "Qasqonda Pishgan Milliy Manti",
        emoji: "🥟",
        time: "60 daqiqa",
        calories: 580,
        meal: "Kechki ovqat",
        youtubeId: "7w6L2f1x9Q0", // Mantida ham video qoldirildi
        ingredients: ['un', 'qiyma', 'piyoz', 'tuxum'],
        steps: [
            "<strong>1-qadam (Xamir):</strong> 500g un, 1 ta tuxum, tuz va suv bilan qattiqroq xamir qoring. 20 daqiqa tinch qo'ying.",
            "<strong>2-qadam (Qiyma):</strong> Qiymaga mayda to'g'ralgan piyoz, tuz va zira solib aralashtiring.",
            "<strong>3-qadam (Tugish):</strong> Xamirni yoyib kvadratlarga kesing va qiyma solib mantilarni tuging.",
            "<strong>4-qadam (Bug'da pishirish):</strong> Qasqonda 40 daqiqa davomida bug'da pishirib oling.",
            "<strong>🎉 Yakun:</strong> Tabriklaymiz! Suvli va mazali mantilar tayyor. Yoqimli ishtaha!"
        ]
    }
];

// STATE
let currentLang = localStorage.getItem('oshxona_lang') || 'uz';
let currentTheme = localStorage.getItem('oshxona_theme') || 'light';
let currentUser = localStorage.getItem('oshxona_user') || null;
let selectedIngredients = new Set(JSON.parse(localStorage.getItem('oshxona_ingredients')) || ['tuxum', 'pomidor', 'piyoz', 'kartoshka']);
let favoriteRecipes = new Set(JSON.parse(localStorage.getItem('oshxona_favorites')) || []);
let dailyCalories = parseInt(localStorage.getItem('oshxona_calories')) || 0;
let activeCategory = 'all';
let onlyReadyMode = false;
let onlyFavoritesMode = false;
let shoppingItems = JSON.parse(localStorage.getItem('oshxona_shopping')) || [
    { text: 'Non', done: false },
    { text: "Sariyog'", done: false }
];

// DOM
const ingredientsGrid = document.getElementById('ingredientsGrid');
const recipesGrid = document.getElementById('recipesGrid');
const selectedCountEl = document.getElementById('selectedCount');
const recipeStatusText = document.getElementById('recipeStatusText');
const ingredientSearch = document.getElementById('ingredientSearch');
const mealFilter = document.getElementById('mealFilter');
const shoppingListEl = document.getElementById('shoppingList');
const shoppingCountEl = document.getElementById('shoppingCount');
const headerGreetingText = document.getElementById('headerGreetingText');
const favCountEl = document.getElementById('favCount');
const dailyCaloriesTotalEl = document.getElementById('dailyCaloriesTotal');

// TEMA VA TILNI O'RNATISH
function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('oshxona_theme', theme);
    document.getElementById('themeIcon').textContent = theme === 'dark' ? '☀️' : '🌙';
}

document.getElementById('themeToggleBtn').onclick = () => {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
};

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('oshxona_lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang][key]) {
            el.textContent = TRANSLATIONS[lang][key];
        }
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.onclick = () => applyLanguage(btn.dataset.lang);
});

// PROFIL
function updateGreetingUI() {
    if (!currentUser) {
        headerGreetingText.textContent = currentLang === 'ru' ? "Привет, Гость!" : currentLang === 'en' ? "Hello, Guest!" : "Salom, Mehmon!";
        document.getElementById('authModal').classList.add('active');
    } else {
        const formattedName = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
        headerGreetingText.textContent = `${currentLang === 'ru' ? 'Привет' : currentLang === 'en' ? 'Hello' : 'Salom'}, ${formattedName}!`;
    }
}

document.getElementById('saveAuthBtn').onclick = () => {
    const nameInput = document.getElementById('authNameInput').value.trim();
    if (!nameInput) return;
    currentUser = nameInput;
    localStorage.setItem('oshxona_user', currentUser);
    document.getElementById('authModal').classList.remove('active');
    updateGreetingUI();
};

document.getElementById('userProfileBtn').onclick = () => {
    document.getElementById('authNameInput').value = currentUser || '';
    document.getElementById('authModal').classList.add('active');
};

document.getElementById('closeAuthModal').onclick = () => {
    if (currentUser) document.getElementById('authModal').classList.remove('active');
};

// LENS
document.getElementById('triggerLensBtn').onclick = () => document.getElementById('lensFileInput').click();
document.getElementById('lensFileInput').onchange = () => {
    const statusEl = document.getElementById('lensStatus');
    statusEl.textContent = "🔍 AI tahlil qilmoqda...";
    setTimeout(() => {
        ['tuxum', 'pomidor', 'piyoz', 'kartoshka'].forEach(id => selectedIngredients.add(id));
        statusEl.textContent = "✅ 4 ta mahsulot aniqlandi!";
        renderIngredients();
        renderRecipes();
    }, 1000);
};

// RENDER INGREDIENTS
function renderIngredients() {
    const query = ingredientSearch.value.toLowerCase().trim();
    ingredientsGrid.innerHTML = '';
    const filtered = INGREDIENTS_DB.filter(item => {
        const matchCat = activeCategory === 'all' || item.cat === activeCategory;
        const matchText = item.name.toLowerCase().includes(query);
        return matchCat && matchText;
    });

    filtered.forEach(item => {
        const isSelected = selectedIngredients.has(item.id);
        const card = document.createElement('div');
        card.className = `ing-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `<span class="ing-emoji">${item.emoji}</span><span class="ing-name">${item.name}</span>`;
        card.onclick = () => {
            if (selectedIngredients.has(item.id)) selectedIngredients.delete(item.id);
            else selectedIngredients.add(item.id);
            renderIngredients();
            renderRecipes();
        };
        ingredientsGrid.appendChild(card);
    });
    localStorage.setItem('oshxona_ingredients', JSON.stringify(Array.from(selectedIngredients)));
}

// RENDER RECIPES
function renderRecipes() {
    const mealType = mealFilter.value;
    recipesGrid.innerHTML = '';
    favCountEl.textContent = favoriteRecipes.size;

    let scored = RECIPES_DB
        .filter(r => mealType === 'all' || r.meal === mealType)
        .filter(r => !onlyFavoritesMode || favoriteRecipes.has(r.id))
        .map(recipe => {
            const matched = recipe.ingredients.filter(ing => selectedIngredients.has(ing));
            const missing = recipe.ingredients.filter(ing => !selectedIngredients.has(ing));
            const percent = Math.round((matched.length / recipe.ingredients.length) * 100);
            return { ...recipe, matched, missing, percent };
        })
        .filter(r => !onlyReadyMode || r.percent === 100)
        .sort((a, b) => b.percent - a.percent);

    scored.forEach(recipe => {
        const isFav = favoriteRecipes.has(recipe.id);
        let badgeClass = recipe.percent === 100 ? 'match-100' : recipe.percent >= 50 ? 'match-high' : 'match-low';

        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div class="recipe-banner">
                <button class="fav-btn-card" onclick="toggleFavorite(${recipe.id})">${isFav ? '❤️' : '🤍'}</button>
                <span>${recipe.emoji}</span>
                <span class="match-badge ${badgeClass}">${recipe.percent}% mos</span>
            </div>
            <div class="recipe-body">
                <div class="recipe-meta">
                    <span>⏱ ${recipe.time}</span>
                    <span>🔥 ${recipe.calories} kkal</span>
                </div>
                <h3 class="recipe-title">${recipe.title}</h3>
                ${recipe.missing.length === 0 
                    ? `<div class="ready-box">✅ Tayyorlash mumkin!</div>`
                    : `<div class="missing-box">⚠️ Yetishmayapti: ${recipe.missing.length} ta</div>`
                }
                <div class="recipe-actions">
                    <button class="btn-view-recipe" onclick="openRecipeModal(${recipe.id})">Ko'rish</button>
                    ${recipe.missing.length > 0 ? `<button class="btn-add-missing" onclick="addMissingToShopping(${recipe.id})">+ 🛒</button>` : ''}
                </div>
            </div>
        `;
        recipesGrid.appendChild(card);
    });
}

window.toggleFavorite = function(id) {
    if (favoriteRecipes.has(id)) favoriteRecipes.delete(id);
    else favoriteRecipes.add(id);
    localStorage.setItem('oshxona_favorites', JSON.stringify(Array.from(favoriteRecipes)));
    renderRecipes();
};

// SHOPPING
function renderShopping() {
    shoppingListEl.innerHTML = '';
    shoppingItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = `shopping-item ${item.done ? 'done' : ''}`;
        li.innerHTML = `
            <div class="shopping-item-left" onclick="shoppingItems[${index}].done = !shoppingItems[${index}].done; renderShopping();">
                <input type="checkbox" ${item.done ? 'checked' : ''}>
                <span>${item.text}</span>
            </div>
            <button class="btn-del-item" onclick="shoppingItems.splice(${index}, 1); renderShopping();">&times;</button>
        `;
        shoppingListEl.appendChild(li);
    });
    shoppingCountEl.textContent = `${shoppingItems.length} ta`;
    localStorage.setItem('oshxona_shopping', JSON.stringify(shoppingItems));
}

window.addMissingToShopping = function(recipeId) {
    const recipe = RECIPES_DB.find(r => r.id === recipeId);
    recipe.ingredients.forEach(ingId => {
        if (!selectedIngredients.has(ingId)) {
            const ing = INGREDIENTS_DB.find(i => i.id === ingId);
            if (ing && !shoppingItems.some(i => i.text === ing.name)) shoppingItems.unshift({ text: ing.name, done: false });
        }
    });
    renderShopping();
};

// MODAL & VIDEO & OVOZLI YORDAMCHI (3 TILDA)
window.openRecipeModal = function(recipeId) {
    const recipe = RECIPES_DB.find(r => r.id === recipeId);
    const stepsHtml = recipe.steps.map((s, idx) => `
        <div class="step-item ${idx === recipe.steps.length - 1 ? 'final-step' : ''}">
            <span class="step-num">${idx === recipe.steps.length - 1 ? '✓' : idx + 1}</span>
            <p>${s}</p>
        </div>
    `).join('');

    // Faqat video mavjud bo'lsa iframe chiqadi, qolganlarida faqat matn!
    const videoHtml = recipe.youtubeId ? `
        <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/${recipe.youtubeId}" allowfullscreen></iframe>
        </div>
    ` : '';

    document.getElementById('recipeModalContent').innerHTML = `
        <h2 style="font-size:1.4rem; font-weight:800; margin-bottom:12px;">${recipe.emoji} ${recipe.title}</h2>
        ${videoHtml}
        <div class="voice-action-bar">
            <button class="btn-voice" onclick="readAloud(${recipe.id})">🎙 Ovozli o'qish (${currentLang.toUpperCase()})</button>
            <button class="btn-ate-this" onclick="addCalories(${recipe.calories})">🔥 Pishirdim (+${recipe.calories} kkal)</button>
        </div>
        <div class="guide-steps">${stepsHtml}</div>
    `;
    document.getElementById('recipeModal').classList.add('active');
};

// 3 TILDA OVOZLI O'QISH
window.readAloud = function(recipeId) {
    const recipe = RECIPES_DB.find(r => r.id === recipeId);
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const text = recipe.steps.map(s => s.replace(/<[^>]*>?/gm, '')).join('. ');
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Tanlangan tilga qarab ovoz kodini to'g'rilaymiz
        if (currentLang === 'ru') utterance.lang = 'ru-RU';
        else if (currentLang === 'en') utterance.lang = 'en-US';
        else utterance.lang = 'tr-TR'; // O'zbek tili uchun eng yaqin fonetika

        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    }
};

window.addCalories = function(cal) {
    dailyCalories += cal;
    localStorage.setItem('oshxona_calories', dailyCalories);
    dailyCaloriesTotalEl.textContent = `${dailyCalories} kkal`;
    alert(`+${cal} kkal qo'shildi!`);
};

document.getElementById('resetCalBtn').onclick = () => {
    dailyCalories = 0;
    localStorage.setItem('oshxona_calories', 0);
    dailyCaloriesTotalEl.textContent = "0 kkal";
};

// EVENT LISTENERS
document.querySelectorAll('.chip').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.cat;
        renderIngredients();
    };
});

document.getElementById('onlyReadyToggle').onclick = function() {
    onlyReadyMode = !onlyReadyMode;
    this.classList.toggle('active', onlyReadyMode);
    renderRecipes();
};

document.getElementById('onlyFavoritesToggle').onclick = function() {
    onlyFavoritesMode = !onlyFavoritesMode;
    this.classList.toggle('active', onlyFavoritesMode);
    renderRecipes();
};

ingredientSearch.oninput = renderIngredients;
mealFilter.onchange = renderRecipes;

document.getElementById('clearIngredientsBtn').onclick = () => {
    selectedIngredients.clear();
    renderIngredients();
    renderRecipes();
};

document.getElementById('addShoppingBtn').onclick = () => {
    const input = document.getElementById('customShoppingInput');
    if (input.value.trim()) {
        shoppingItems.unshift({ text: input.value.trim(), done: false });
        input.value = '';
        renderShopping();
    }
};

document.getElementById('shareShoppingBtn').onclick = () => {
    const text = "🛒 Bozorlik:\n" + shoppingItems.map((i, idx) => `${idx + 1}. ${i.text}`).join('\n');
    navigator.clipboard.writeText(text);
    alert("Nusxalandi!");
};

document.getElementById('clearPurchasedBtn').onclick = () => {
    shoppingItems = shoppingItems.filter(i => !i.done);
    renderShopping();
};

// MODALLAR
const guideModal = document.getElementById('guideModal');
const recipeModal = document.getElementById('recipeModal');
document.getElementById('openGuideBtn').onclick = () => guideModal.classList.add('active');
document.getElementById('closeGuideModal').onclick = () => guideModal.classList.remove('active');
document.getElementById('closeRecipeModal').onclick = () => {
    recipeModal.classList.remove('active');
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
};

// MOBIL TABS
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active-mobile-tab'));
        document.getElementById(btn.dataset.target).classList.add('active-mobile-tab');
    };
});

// START
applyTheme(currentTheme);
applyLanguage(currentLang);
dailyCaloriesTotalEl.textContent = `${dailyCalories} kkal`;
updateGreetingUI();
renderIngredients();
renderRecipes();
renderShopping();