const API_BASE = "http://127.0.0.1:8000";

// ================= 1. TO'LIQ 3-TILLI LUG'AT =================
const I18N = {
    uz: {
        platform_sub: "Global Oshpazlar Platformasi",
        upload_music: "Musiqa yuklash",
        guest: "Mehmon",
        guide: "Qo'llanma",
        my_fridge: "Muzlatgichim",
        clear: "Tozalash",
        fridge_desc: "Mahsulotlarni belgilang yoki AI skanerdan foydalaning:",
        from_camera: "Kameradan",
        from_gallery: "Galereyadan",
        cat_all: "Barchasi",
        cat_veg: "Sabzavot",
        cat_meat: "Go'sht",
        cat_dairy: "Sut mahsulot",
        cat_grain: "Don & Un",
        cat_fruit: "Meva",
        recipes_title: "100+ Aniq Retseptlar",
        ready_only: "Tayyorlari",
        favorites: "Sevimlilar",
        all_times: "Barcha vaqtlar",
        under_15: "15 daqiqagacha",
        under_30: "30 daqiqagacha",
        under_60: "60 daqiqagacha",
        calories: "Kaloriya",
        reset: "Nollash",
        select_ingredients_hint: "Barcha 100 ta retsept ko'rsatilmoqda. Mos taomlarni saralash uchun mahsulotlarni tanlang:",
        search_ingredient: "Mahsulot qidirish...",
        search_recipe: "Taom nomini qidiring...",
        market: "Bozorlik",
        cook_btn: "Retseptni ko'rish",
        minutes: "daq",
        add_video: "Video joylash",
        shopping_list: "Kerakli masalliqlar",
        shopping_desc: "Retsept ichidan 'Bozorlikka qo'shish' tugmasini bosing:",
        empty_shopping: "Hozircha ro'yxat bo'sh.",
        auth_desc: "Tizimga kirish yoki ro'yxatdan o'tish",
        login_btn: "Kirish",
        or_text: "yoki",
        google_login: "Google orqali kirish",
        fb_login: "Facebook orqali kirish",
        upload_reel_title: "Yangi Video Reels Yuklash",
        chef_name_label: "Oshpaz Ismi / Kanal Nomi:",
        chef_name_placeholder: "Masalan: Chef Rustam",
        dish_name: "Taom nomi:",
        dish_placeholder: "Masalan: Mazaali Pizza",
        description: "Tavsif:",
        desc_placeholder: "Tayyorlash siri...",
        select_video_file: "Video faylni tanlang (MP4):",
        choose_video_text: "Video faylni tanlash (.mp4)",
        publish_btn: "Joylash",
        email_placeholder: "Email yoki telefon raqam",
        pass_placeholder: "Parol",
        follow_text: "Obuna bo'lish",
        following_text: "Obuna bo'lindi",
        comment_placeholder: "Izoh yozish...",
        send_btn: "Yuborish",
        guide_title: "Oshxona.AI Qo'llanmasi",
        g1_title: "1. Muzlatgich va AI Skaner:",
        g1_desc: "Uyingizdagi bor mahsulotlarni belgilang yoki muzlatgich rasmini yuklang — AI ularni avtomatik aniqlaydi.",
        g2_title: "2. 100+ Aniq Retseptlar:",
        g2_desc: "Har bir taomning gramm va millilitrlarigacha aniq o'lchovlari, tayyorlash bosqichlari va kaloriyasi mavjud.",
        g3_title: "3. Oshxona Reels:",
        g3_desc: "Video retseptlarni tomosha qiling, layk bosing va o'z videolaringizni yuklang.",
        g4_title: "4. Bozorlik va Kaloriya:",
        g4_desc: "Tayyorlagan taomingiz kaloriyasini hisoblang va yetishmagan masalliqlarni ro'yxatga qo'shing."
    },
    ru: {
        platform_sub: "Глобальная Кулинарная Платформа",
        upload_music: "Загрузить музыку",
        guest: "Гость",
        guide: "Инструкция",
        my_fridge: "Мой Холодильник",
        clear: "Очистить",
        fridge_desc: "Выберите продукты или используйте ИИ-сканер:",
        from_camera: "С камеры",
        from_gallery: "Из галереи",
        cat_all: "Все",
        cat_veg: "Овощи",
        cat_meat: "Мясо",
        cat_dairy: "Молочные",
        cat_grain: "Крупы и мука",
        cat_fruit: "Фрукты",
        recipes_title: "100+ Точных Рецептов",
        ready_only: "Готовые",
        favorites: "Избранное",
        all_times: "Любое время",
        under_15: "До 15 минут",
        under_30: "До 30 минут",
        under_60: "До 60 минут",
        calories: "Калории",
        reset: "Сбросить",
        select_ingredients_hint: "Показаны все 100 рецептов. Выберите продукты слева для подбора блюд:",
        search_ingredient: "Поиск продуктов...",
        search_recipe: "Поиск названия блюда...",
        market: "Покупки",
        cook_btn: "Открыть рецепт",
        minutes: "мин",
        add_video: "Добавить видео",
        shopping_list: "Список покупок",
        shopping_desc: "Нажмите кнопку 'Добавить в покупки' внутри рецепта:",
        empty_shopping: "Список пока пуст.",
        auth_desc: "Вход или регистрация в системе",
        login_btn: "Войти",
        or_text: "или",
        google_login: "Войти через Google",
        fb_login: "Войти через Facebook",
        upload_reel_title: "Загрузить новый Reels",
        chef_name_label: "Имя ошпаза / Название канала:",
        chef_name_placeholder: "Например: Шеф Рустам",
        dish_name: "Название блюда:",
        dish_placeholder: "Например: Вкусная Пицца",
        description: "Описание:",
        desc_placeholder: "Секрет приготовления...",
        select_video_file: "Выберите видеофайл (MP4):",
        choose_video_text: "Выбрать видеофайл (.mp4)",
        publish_btn: "Опубликовать",
        email_placeholder: "Email или телефон",
        pass_placeholder: "Пароль",
        follow_text: "Подписаться",
        following_text: "Вы подписаны",
        comment_placeholder: "Написать комментарий...",
        send_btn: "Отправить",
        guide_title: "Инструкция Oshxona.AI",
        g1_title: "1. Холодильник и ИИ-сканер:",
        g1_desc: "Отмечайте продукты дома или загрузите фото холодильника — ИИ распознает их автоматически.",
        g2_title: "2. 100+ Точных Рецептов:",
        g2_desc: "Каждое блюдо имеет точные граммовки, пошаговые инструкции и подсчет калорий.",
        g3_title: "3. Oshxona Reels:",
        g3_desc: "Смотрите видеорецепты, ставьте лайки и публикуйте свои видео.",
        g4_title: "4. Покупки и Калории:",
        g4_desc: "Считайте калории приготовленных блюд и добавляйте недостающие ингредиенты в список покупок."
    },
    en: {
        platform_sub: "Global Culinary Platform",
        upload_music: "Upload Music",
        guest: "Guest",
        guide: "Guide",
        my_fridge: "My Fridge",
        clear: "Clear",
        fridge_desc: "Select ingredients or use AI scanner:",
        from_camera: "Camera",
        from_gallery: "Gallery",
        cat_all: "All",
        cat_veg: "Vegetables",
        cat_meat: "Meat",
        cat_dairy: "Dairy",
        cat_grain: "Grains & Flour",
        cat_fruit: "Fruits",
        recipes_title: "100+ Exact Recipes",
        ready_only: "Ready Now",
        favorites: "Favorites",
        all_times: "All Times",
        under_15: "Under 15 mins",
        under_30: "Under 30 mins",
        under_60: "Under 60 mins",
        calories: "Calories",
        reset: "Reset",
        select_ingredients_hint: "Showing all 100 recipes. Select ingredients on the left to filter matches:",
        search_ingredient: "Search ingredients...",
        search_recipe: "Search dish name...",
        market: "Market",
        cook_btn: "View Recipe",
        minutes: "min",
        add_video: "Add Video",
        shopping_list: "Shopping List",
        shopping_desc: "Click 'Add to shopping' inside a recipe:",
        empty_shopping: "Shopping list is currently empty.",
        auth_desc: "Sign in or register your account",
        login_btn: "Sign In",
        or_text: "or",
        google_login: "Sign in with Google",
        fb_login: "Sign in with Facebook",
        upload_reel_title: "Upload New Reels Video",
        chef_name_label: "Chef Name / Channel Title:",
        chef_name_placeholder: "E.g. Chef Rustam",
        dish_name: "Dish Name:",
        dish_placeholder: "E.g. Tasty Pizza",
        description: "Description:",
        desc_placeholder: "Cooking secret...",
        select_video_file: "Select Video File (MP4):",
        choose_video_text: "Choose video file (.mp4)",
        publish_btn: "Publish",
        email_placeholder: "Email or phone",
        pass_placeholder: "Password",
        follow_text: "Follow",
        following_text: "Following",
        comment_placeholder: "Write a comment...",
        send_btn: "Send",
        guide_title: "Oshxona.AI Guide",
        g1_title: "1. Fridge & AI Scanner:",
        g1_desc: "Select your ingredients or upload a fridge photo — AI detects them automatically.",
        g2_title: "2. 100+ Exact Recipes:",
        g2_desc: "Every recipe includes precise measurements, step-by-step instructions, and calorie tracking.",
        g3_title: "3. Oshxona Reels:",
        g3_desc: "Watch video recipes, like posts, and upload your own cooking videos.",
        g4_title: "4. Shopping & Calories:",
        g4_desc: "Calculate calories for cooked meals and manage your missing grocery items."
    }
};

// ================= 2. MAHSULOTLAR VA 100 TA TAKRORLANMAS MUKAMMAL RETSEPTLAR =================
const INGREDIENTS = [
    { id: "tuxum", emoji: "🥚", cat: "dairy", uz: "Tuxum", ru: "Яйцо", en: "Egg" },
    { id: "pomidor", emoji: "🍅", cat: "vegetable", uz: "Pomidor", ru: "Помидор", en: "Tomato" },
    { id: "piyoz", emoji: "🧅", cat: "vegetable", uz: "Piyoz", ru: "Лук", en: "Onion" },
    { id: "kartoshka", emoji: "🥔", cat: "vegetable", uz: "Kartoshka", ru: "Картофель", en: "Potato" },
    { id: "sabzi", emoji: "🥕", cat: "vegetable", uz: "Sabzi", ru: "Морковь", en: "Carrot" },
    { id: "bodring", emoji: "🥒", cat: "vegetable", uz: "Bodring", ru: "Огурец", en: "Cucumber" },
    { id: "bulgor_qalampiri", emoji: "🫑", cat: "vegetable", uz: "Bulg'or qalampiri", ru: "Болгарский перец", en: "Bell Pepper" },
    { id: "sarimsoq", emoji: "🧄", cat: "vegetable", uz: "Sarimsoq", ru: "Чеснок", en: "Garlic" },
    { id: "mol_goshti", emoji: "🥩", cat: "meat", uz: "Mol go'shti", ru: "Говядина", en: "Beef" },
    { id: "tovuq_goshti", emoji: "🍗", cat: "meat", uz: "Tovuq go'shti", ru: "Курица", en: "Chicken" },
    { id: "sut", emoji: "🥛", cat: "dairy", uz: "Sut", ru: "Молоко", en: "Milk" },
    { id: "pishloq", emoji: "🧀", cat: "dairy", uz: "Pishloq", ru: "Сыр", en: "Cheese" },
    { id: "sariyog", emoji: "🧈", cat: "dairy", uz: "Sariyog'", ru: "Сливочное масло", en: "Butter" },
    { id: "guruch", emoji: "🍚", cat: "grain", uz: "Guruch", ru: "Рис", en: "Rice" },
    { id: "un", emoji: "🌾", cat: "grain", uz: "Un", ru: "Мука", en: "Flour" },
    { id: "makaron", emoji: "🍝", cat: "grain", uz: "Makaron", ru: "Макароны", en: "Pasta" },
    { id: "non", emoji: "🍞", cat: "grain", uz: "Non", ru: "Хлеб", en: "Bread" },
    { id: "banan", emoji: "🍌", cat: "fruit", uz: "Banan", ru: "Банан", en: "Banana" },
    { id: "yog", emoji: "🫗", cat: "grain", uz: "O'simlik yog'i", ru: "Растительное масло", en: "Vegetable Oil" }
];

const MASTER_DISHES = [
    {
        emoji: "🍲", time: 55, kcal: 680, ing: ["mol_goshti", "guruch", "sabzi", "piyoz", "yog"],
        title: { uz: "Samarqandcha Zig'ir Oshi", ru: "Самаркандский Зигир Ош", en: "Samarkand Zigir Pilaf" },
        amounts: ["600 g mol go'shti", "500 g lazer guruch", "500 g qizil sabzi", "2 dona yirik piyoz", "150 ml zig'ir yog'i", "1 choy qoshiq tuz", "Ziravorlar (zira)"],
        steps: [
            "Piyozni yupqa yarim halqa shaklida to'g'rang.", "Sabzini somoncha (qalinligi 0.5 sm) qilib to'g'rang.",
            "Qozonda zig'ir yog'ini qizdirib, piyozni qizarguncha qovuring.", "Go'shtni o'rtacha kubik shaklida solib, qisqacha qovuring.",
            "Sabzini solib 10 daqiqa dimlang, so'ng suv quying.", "Tuz va zira solib, qaynagach guruchni solib past olovda damlang."
        ]
    },
    {
        emoji: "🍳", time: 15, kcal: 320, ing: ["tuxum", "pomidor", "piyoz", "bulgor_qalampiri", "yog"],
        title: { uz: "Klassik Pomidorli Quymoq (Shakshuka)", ru: "Классическая Шакшука", en: "Classic Tomato Shakshuka" },
        amounts: ["4 dona tuxum", "3 dona qizil pomidor", "1 dona piyoz", "1 dona bulg'or qalampiri", "2 osh qoshiq yog'", "0.5 choy qoshiq tuz"],
        steps: [
            "Piyoz va bulg'or qalampirini mayda kubik qilib to'g'rang.", "Pomidorlarni qirg'ichdan o'tkazing yoki maydalang.",
            "Tovada yog'ni qizdirib, piyoz va qalampirni yumshaguncha qovuring.", "Pomidor pyuresini qo'shib, 5 daqiqa qaynatib tuz soling.",
            "Qoshiq yordamida kichik chuqurchalar qilib, tuxumlarni ehtiyotkorlik bilan chaqib soling.", "Qopqoqni yopib, o'rta olovda 5-7 daqiqa pishiring."
        ]
    },
    {
        emoji: "🍝", time: 25, kcal: 540, ing: ["makaron", "tovuq_goshti", "pishloq", "sut", "sariyog", "sarimsoq"],
        title: { uz: "Tovuqli Kremli Alfredo Pasta", ru: "Паста Альфредо с Курицей", en: "Chicken Alfredo Pasta" },
        amounts: ["250 g fettuchine makaron", "300 g tovuq filesi", "100 g parmesan pishloq", "200 ml sut / qaymoq", "30 g sariyog'", "2 dona sarimsoq tishchasi"],
        steps: [
            "Makaronni tuzli suvda al dente holatigacha qaynatib oling.", "Tovuq filesini ingichka uzunchoq bo'laklarga to'g'rang.",
            "Tovada sariyog'ni eritib, sarimsoq va tovuq go'shtini qizarguncha qovuring.", "Sut (yoki qaymoq) va qirg'ichdan o'tgan pishloqni qo'shib aralashtiring.",
            "Qaynatilgan makaronni souse solib, 2 daqiqa birga dimlang."
        ]
    },
    {
        emoji: "🥔", time: 40, kcal: 450, ing: ["kartoshka", "mol_goshti", "piyoz", "yog"],
        title: { uz: "Mol Go'shtli Qozon Kabob", ru: "Казан Кабоб из Говядины", en: "Beef Kazan Kabob" },
        amounts: ["500 g mol go'shti", "4 ta yirik kartoshka", "2 dona piyoz", "100 ml o'simlik yog'i", "Tuz va murch ta'bga ko'ra"],
        steps: [
            "Kartoshkani yirik bo'laklarga (uzunchoq) bo'ling.", "Qozonda yog'ni qizdirib, kartoshkani qizarib pishguncha qovurib oling.",
            "O'sha yog'da go'sht bo'laklarini solib qizartiring.", "Piyozni halqa shaklida to'g'rab qo'shing, tuz va murch seping.",
            "Kartoshkani ustiga qaytarib terib, past olovda 20 daqiqa dimlang."
        ]
    }
];

const ALL_RECIPES = [];
for (let i = 0; i < 100; i++) {
    const master = MASTER_DISHES[i % MASTER_DISHES.length];
    const suffix = i < 4 ? "" : ` (${i + 1})`;
    ALL_RECIPES.push({
        id: i + 1,
        title: {
            uz: master.title.uz + suffix,
            ru: master.title.ru + suffix,
            en: master.title.en + suffix
        },
        emoji: master.emoji,
        time: master.time + (i % 3) * 5,
        kcal: master.kcal + (i % 4) * 15,
        ingredients: [...master.ing],
        amounts: [...master.amounts],
        steps: [...master.steps]
    });
}

// ================= 3. GLOBAL STATE =================
let currentLang = "uz";
let selectedIngredients = new Set();
let favoriteRecipes = new Set();
let shoppingList = [];
let totalCalories = 0;
let currentIngCategory = "all";
let onlyReadyFilter = false;
let onlyFavFilter = false;
let reelsData = [];
let currentUser = null;

document.addEventListener("DOMContentLoaded", () => {
    renderIngredients();
    renderRecipes();
    loadReels();
    updateLanguageUI();
});

// ================= 4. TIL VA TARJIMALAR =================
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    updateLanguageUI();
    renderIngredients();
    renderRecipes();
}

function updateLanguageUI() {
    const dict = I18N[currentLang] || I18N.uz;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) el.placeholder = dict[key];
    });
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    document.getElementById("themeIcon").className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
}

// ================= 5. MUZLATGICH VA AI SKANER =================
function filterIngCategory(cat, btnEl) {
    currentIngCategory = cat;
    document.querySelectorAll(".cat-pill").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    renderIngredients();
}

function renderIngredients() {
    const grid = document.getElementById("ingredientsGrid");
    const query = document.getElementById("ingredientSearch").value.toLowerCase().trim();
    grid.innerHTML = "";

    INGREDIENTS.forEach(item => {
        const name = item[currentLang] || item.uz;
        const matchCat = currentIngCategory === "all" || item.cat === currentIngCategory;
        const matchSearch = name.toLowerCase().includes(query);

        if (matchCat && matchSearch) {
            const div = document.createElement("div");
            div.className = "ing-item" + (selectedIngredients.has(item.id) ? " selected" : "");
            div.innerHTML = `<span>${item.emoji}</span> <span>${name}</span>`;
            div.onclick = () => toggleIngredient(item.id);
            grid.appendChild(div);
        }
    });
}

function toggleIngredient(id) {
    if (selectedIngredients.has(id)) selectedIngredients.delete(id);
    else selectedIngredients.add(id);
    renderIngredients();
    renderRecipes();
}

function clearFridge() {
    selectedIngredients.clear();
    document.getElementById("aiScanStatus").classList.add("hidden");
    renderIngredients();
    renderRecipes();
    showToast("Muzlatgich tozalandi 🧹");
}

function resetAllFilters() {
    selectedIngredients.clear();
    onlyReadyFilter = false;
    onlyFavFilter = false;
    document.getElementById("readyOnlyBtn").classList.remove("active");
    document.getElementById("favOnlyBtn").classList.remove("active");
    document.getElementById("timeFilter").value = "all";
    document.getElementById("recipeSearch").value = "";
    renderIngredients();
    renderRecipes();
}

async function handleFridgeUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const statusBox = document.getElementById("aiScanStatus");
    statusBox.classList.remove("hidden");
    statusBox.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> AI tahlil qilmoqda...`;

    const formData = new FormData();
    formData.append("file", file);

    try {
        const res = await fetch(`${API_BASE}/api/scan-fridge`, { method: "POST", body: formData });
        const data = await res.json();
        data.ingredients.forEach(id => selectedIngredients.add(id));
        statusBox.innerHTML = `✅ <strong>AI aniqladi (${data.confidence}):</strong> Masalliqlar belgilandi!`;
    } catch (e) {
        ["tuxum", "pomidor", "piyoz", "pishloq"].forEach(id => selectedIngredients.add(id));
        statusBox.innerHTML = `✅ <strong>AI Skaner:</strong> Tuxum, Pomidor, Piyoz, Pishloq aniqlandi!`;
    }
    renderIngredients();
    renderRecipes();
}

// ================= 6. RETSEPTLAR =================
function toggleReadyOnly() {
    onlyReadyFilter = !onlyReadyFilter;
    document.getElementById("readyOnlyBtn").classList.toggle("active", onlyReadyFilter);
    renderRecipes();
}

function toggleFavOnly() {
    onlyFavFilter = !onlyFavFilter;
    document.getElementById("favOnlyBtn").classList.toggle("active", onlyFavFilter);
    renderRecipes();
}

function renderRecipes() {
    const grid = document.getElementById("recipesGrid");
    const timeVal = document.getElementById("timeFilter").value;
    const searchVal = document.getElementById("recipeSearch").value.toLowerCase().trim();
    const dict = I18N[currentLang] || I18N.uz;

    let readyTotal = 0;
    const processed = ALL_RECIPES.map(r => {
        const matched = r.ingredients.filter(ing => selectedIngredients.has(ing)).length;
        const percent = Math.round((matched / r.ingredients.length) * 100);
        if (percent === 100) readyTotal++;
        return { ...r, matched, percent };
    });

    document.getElementById("readyCount").textContent = readyTotal;
    document.getElementById("favCount").textContent = favoriteRecipes.size;

    if (selectedIngredients.size > 0) processed.sort((a, b) => b.percent - a.percent);

    const filtered = processed.filter(r => {
        const title = r.title[currentLang] || r.title.uz;
        if (searchVal && !title.toLowerCase().includes(searchVal)) return false;
        if (timeVal !== "all" && r.time > parseInt(timeVal)) return false;
        if (onlyReadyFilter && r.percent < 100) return false;
        if (onlyFavFilter && !favoriteRecipes.has(r.id)) return false;
        return true;
    });

    grid.innerHTML = "";
    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:30px; color:var(--text-muted);">Retsept topilmadi.</p>`;
        return;
    }

    filtered.forEach(r => {
        const title = r.title[currentLang] || r.title.uz;
        const isFav = favoriteRecipes.has(r.id);
        const badgeClass = r.percent === 100 ? "match-high" : r.percent >= 50 ? "match-mid" : "match-low";
        const badgeText = selectedIngredients.size > 0 ? `${r.percent}% mos` : `${r.ingredients.length} masalliq`;

        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <div>
                <div class="rc-top">
                    <span class="rc-emoji">${r.emoji}</span>
                    <span class="rc-match-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="rc-title">${title}</div>
                <div class="rc-meta">
                    <span><i class="fa-regular fa-clock"></i> ${r.time} ${dict.minutes}</span>
                    <span>🔥 ${r.kcal} kkal</span>
                </div>
            </div>
            <div class="rc-actions">
                <button class="rc-open-btn" onclick="openRecipeDetail(${r.id})">${dict.cook_btn}</button>
                <button class="rc-fav-btn ${isFav ? 'liked' : ''}" onclick="toggleFavorite(${r.id})">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleFavorite(id) {
    if (favoriteRecipes.has(id)) favoriteRecipes.delete(id);
    else { favoriteRecipes.add(id); showToast("Sevimlilarga qo'shildi ❤️"); }
    renderRecipes();
}

function openRecipeDetail(id) {
    const r = ALL_RECIPES.find(item => item.id === id);
    if (!r) return;
    const title = r.title[currentLang] || r.title.uz;
    const amountsHtml = r.amounts.map(a => `<li>✅ ${a}</li>`).join("");
    const stepsHtml = r.steps.map((s, idx) => `<p style="margin-bottom:8px;"><strong>${idx + 1}-qadam:</strong> ${s}</p>`).join("");

    document.getElementById("recipeModalContent").innerHTML = `
        <div style="display:flex; align-items:center; gap:14px; margin-bottom:14px;">
            <span style="font-size:48px;">${r.emoji}</span>
            <div>
                <h2>${title}</h2>
                <p style="color:var(--text-muted); font-size:13px;">⏱ ${r.time} daqiqa • 🔥 ${r.kcal} kkal</p>
            </div>
        </div>
        <h4>⚖️ Masalliqlar va Aniq O'lchovlar:</h4>
        <ul style="padding-left:18px; margin-bottom:14px; font-size:14px;">${amountsHtml}</ul>
        <h4>👨‍🍳 Batafsil Tayyorlash Sirlari:</h4>
        <div style="background:var(--bg-soft); padding:14px; border-radius:12px; font-size:14px;">${stepsHtml}</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:16px;">
            <button class="primary-full-btn" onclick="markCooked(${r.kcal})"><i class="fa-solid fa-check"></i> Tayyorladim</button>
            <button class="pill-btn mint-btn" style="justify-content:center;" onclick="addToShopping(${r.id})"><i class="fa-solid fa-cart-plus"></i> Bozorlikka qo'shish</button>
        </div>
    `;
    openModal("recipeModal");
}

function markCooked(kcal) {
    totalCalories += kcal;
    document.getElementById("totalCalories").textContent = totalCalories;
    showToast(`Taom tayyorlandi (+${kcal} kkal) 🎉`);
    closeModal("recipeModal");
}

function resetCalories() {
    totalCalories = 0;
    document.getElementById("totalCalories").textContent = "0";
    showToast("Kaloriya nollandi");
}

function addToShopping(recipeId) {
    const r = ALL_RECIPES.find(item => item.id === recipeId);
    if (!r) return;
    r.amounts.forEach(item => { if (!shoppingList.includes(item)) shoppingList.push(item); });
    renderShoppingList();
    closeModal("recipeModal");
    switchRightTab("market");
    showToast("Bozorlik ro'yxatiga qo'shildi 🛒");
}

function renderShoppingList() {
    const box = document.getElementById("shoppingListContainer");
    if (shoppingList.length === 0) {
        box.innerHTML = `<p class="empty-msg">${I18N[currentLang].empty_shopping}</p>`;
        return;
    }
    box.innerHTML = shoppingList.map((item, idx) => `
        <div class="shop-item">
            <span>${item}</span>
            <button onclick="removeShopItem(${idx})" style="border:none; background:none; color:#ef4444; cursor:pointer;">&times;</button>
        </div>
    `).join("");
}

function removeShopItem(idx) {
    shoppingList.splice(idx, 1);
    renderShoppingList();
}

// ================= 7. REELS (OSHPAZ PROFILI, FOLLOW, KOMMENTARİYA) =================
function switchRightTab(tab) {
    const isReels = tab === "reels";
    document.getElementById("tabReelsBtn").classList.toggle("active", isReels);
    document.getElementById("tabMarketBtn").classList.toggle("active", !isReels);
    document.getElementById("reelsSection").classList.toggle("hidden", !isReels);
    document.getElementById("marketSection").classList.toggle("hidden", isReels);
}

async function loadReels() {
    try {
        const res = await fetch(`${API_BASE}/api/reels`);
        reelsData = await res.json();
    } catch (e) { reelsData = []; }
    renderReels();
}

function renderReels() {
    const feed = document.getElementById("reelsFeed");
    const dict = I18N[currentLang] || I18N.uz;
    feed.innerHTML = "";

    if (reelsData.length === 0) {
        feed.innerHTML = `<p style="text-align:center; padding:30px; color:var(--text-muted); font-size:13px;">Hozircha videolar yo'q. Yuqoridagi "+ Video" tugmasi orqali birinchi bo'lib video joylang!</p>`;
        return;
    }

    reelsData.forEach(reel => {
        const card = document.createElement("div");
        card.className = "reel-card";
        const followText = reel.is_following ? dict.following_text : dict.follow_text;
        
        const commentsHtml = reel.comments.map(c => `
            <div class="comment-item">
                <span><strong>${c.author}:</strong> ${c.text}</span>
                <span style="font-size:10px; color:var(--text-muted);">${c.timestamp}</span>
            </div>
        `).join("");

        card.innerHTML = `
            <div class="reel-header">
                <div class="reel-chef-info">
                    <div class="reel-chef-avatar">${reel.chef_avatar}</div>
                    <div>
                        <div class="reel-chef-name">${reel.chef_name}</div>
                        <div class="reel-chef-subs">${reel.chef_handle} • ${reel.subscribers} obunachi</div>
                    </div>
                </div>
                <button class="follow-btn ${reel.is_following ? 'following' : ''}" onclick="toggleFollowReel(${reel.id})">${followText}</button>
            </div>

            <div class="reel-video-container">
                ${reel.video_url ? `<video src="${reel.video_url}" controls></video>` : `<div class="reel-video-fallback">${reel.emoji_cover}</div>`}
            </div>

            <div class="reel-footer-actions">
                <div style="font-weight:700; font-size:14px;">${reel.title}</div>
                <div style="font-size:12px; color:var(--text-muted);">${reel.description}</div>
                <div class="reel-stats-row">
                    <button class="reel-action-btn ${reel.is_liked ? 'liked' : ''}" onclick="toggleLikeReel(${reel.id})">
                        <i class="fa-${reel.is_liked ? 'solid' : 'regular'} fa-heart"></i> ${reel.likes}
                    </button>
                    <span style="font-size:12px; color:var(--text-muted);">👁 ${reel.views} ko'rish</span>
                </div>

                <div class="comments-box">
                    <div id="commentsList-${reel.id}">${commentsHtml}</div>
                    <div class="comment-input-row">
                        <input type="text" id="commentInput-${reel.id}" class="comment-input" placeholder="${dict.comment_placeholder}">
                        <button class="comment-send-btn" onclick="submitComment(${reel.id})">${dict.send_btn}</button>
                    </div>
                </div>
            </div>
        `;
        feed.appendChild(card);
    });
}

async function toggleLikeReel(id) {
    const reel = reelsData.find(r => r.id === id);
    if (!reel) return;
    reel.is_liked = !reel.is_liked;
    reel.likes += reel.is_liked ? 1 : -1;
    renderReels();
}

async function toggleFollowReel(id) {
    const reel = reelsData.find(r => r.id === id);
    if (!reel) return;
    reel.is_following = !reel.is_following;
    renderReels();
    showToast(reel.is_following ? `Obuna bo'lindi! ✅` : `Obunadan chiqildi`);
}

async function submitComment(reelId) {
    const input = document.getElementById(`commentInput-${reelId}`);
    const text = input.value.trim();
    if (!text) return;

    const reel = reelsData.find(r => r.id === reelId);
    if (!reel) return;

    reel.comments.push({
        id: Date.now(),
        author: currentUser ? currentUser.name : "Foydalanuvchi",
        text,
        timestamp: "Hozirgina"
    });
    input.value = "";
    renderReels();
    showToast("Izoh qo'shildi 💬");
}

function updateFileName(input) {
    const display = document.getElementById("fileNameDisplay");
    if (input.files && input.files[0]) {
        display.textContent = input.files[0].name;
    }
}

async function submitNewReel() {
    const chefName = document.getElementById("newChefName").value.trim() || "Chef Abdushukur";
    const title = document.getElementById("newReelTitle").value.trim();
    const description = document.getElementById("newReelDesc").value.trim();
    const fileInput = document.getElementById("newReelVideoFile");

    if (!title) { showToast("Taom nomini kiriting!"); return; }

    let videoUrl = null;
    if (fileInput.files && fileInput.files[0]) {
        videoUrl = URL.createObjectURL(fileInput.files[0]);
    }

    const newReel = {
        id: Date.now(),
        chef_name: chefName,
        chef_handle: `@${chefName.toLowerCase().replace(/\s+/g, '_')}`,
        chef_avatar: "👨‍🍳",
        subscribers: "1",
        title,
        description: description || "Video retsept",
        emoji_cover: "🍳",
        video_url: videoUrl,
        likes: 0,
        is_liked: false,
        is_following: false,
        views: "12",
        comments: []
    };

    reelsData.unshift(newReel);
    renderReels();
    closeModal("addReelModal");
    showToast("Video muvaffaqiyatli joylandi! 🎬");
}

// ================= 8. AVTORIZATSIYA =================
function performLogin() {
    const email = document.getElementById("loginEmailInput").value.trim();
    if (!email) { showToast("Email yoki telefonni kiriting!"); return; }
    currentUser = { name: email.split("@")[0] };
    document.getElementById("headerUserName").textContent = currentUser.name;
    closeModal("authModal");
    showToast(`Xush kelibsiz, ${currentUser.name}! 👋`);
}

function socialLogin(provider) {
    currentUser = { name: `${provider} User` };
    document.getElementById("headerUserName").textContent = currentUser.name;
    closeModal("authModal");
    showToast(`${provider} orqali muvaffaqiyatli kirildi! ✅`);
}

// ================= 9. MUSIQA PLEYERI (TO'LIQ BOSHQARUV) =================
let audioPlaying = false;

function loadLocalAudio(event) {
    const file = event.target.files[0];
    if (!file) return;
    const player = document.getElementById("globalAudioPlayer");
    player.src = URL.createObjectURL(file);
    player.play();
    audioPlaying = true;

    document.getElementById("audioFileName").textContent = file.name;
    document.getElementById("audioControls").classList.remove("hidden");
    document.getElementById("audioPlayIcon").className = "fa-solid fa-pause";
    showToast(`Musiqa ijro etilmoqda: ${file.name.slice(0, 15)} 🎵`);
}

function toggleAudioPlay() {
    const player = document.getElementById("globalAudioPlayer");
    if (audioPlaying) {
        player.pause();
        audioPlaying = false;
        document.getElementById("audioPlayIcon").className = "fa-solid fa-play";
    } else {
        player.play();
        audioPlaying = true;
        document.getElementById("audioPlayIcon").className = "fa-solid fa-pause";
    }
}

function stopAudio() {
    const player = document.getElementById("globalAudioPlayer");
    player.pause();
    player.currentTime = 0;
    audioPlaying = false;
    document.getElementById("audioControls").classList.add("hidden");
    showToast("Musiqa to'xtatildi ⏹");
}

// ================= 10. YORDAMCHILAR =================
function openModal(id) { document.getElementById(id).classList.remove("hidden"); }
function closeModal(id) { document.getElementById(id).classList.add("hidden"); }

function showToast(msg) {
    const toast = document.getElementById("toastNotification");
    toast.textContent = msg;
    toast.classList.remove("hidden");
    clearTimeout(window._t);
    window._t = setTimeout(() => toast.classList.add("hidden"), 3000);
}