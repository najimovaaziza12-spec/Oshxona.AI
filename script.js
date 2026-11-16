const fridgeItemsDB = [
    { name: "Mol go'shti", cat: "meat" }, { name: "Tovuq go'shti", cat: "meat" },
    { name: "Qo'y go'shti", cat: "meat" }, { name: "Lazer guruch", cat: "grain" },
    { name: "Qizil sabzi", cat: "veg" }, { name: "Piyoz", cat: "veg" },
    { name: "Kartoshka", cat: "veg" }, { name: "Pomidor", cat: "veg" },
    { name: "Bodring", cat: "veg" }, { name: "Bulg'or qalampiri", cat: "veg" },
    { name: "Tuxum", cat: "dairy" }, { name: "Sut", cat: "dairy" },
    { name: "Sariyog'", cat: "dairy" }, { name: "Qaymoq", cat: "dairy" },
    { name: "Tvorog", cat: "dairy" }, { name: "Bug'doy uni", cat: "grain" },
    { name: "Shakar", cat: "grain" }, { name: "Zig'ir yog'", cat: "grain" },
    { name: "Limon", cat: "veg" }, { name: "Yalpiz", cat: "veg" }
];

// 6 TA KATEGORIYA BO'YICHA KAMI 20 TADAN (JAMI 120+ ANIQ RETSEPTLAR)
const realRecipesDB = [
    // --- OVQATLAR (20 ta) ---
    { id: 1, title: "Samarqandcha Zig'ir Oshi", category: "ovqat", time: 60, kcal: 680, emoji: "🍲", ingredients: ["Mol go'shti - 500g", "Lazer guruch - 500g", "Qizil sabzi - 500g (somoncha to'g'ralgan)", "Piyoz - 150g (halqa to'g'ralgan)", "Zig'ir yog'i - 150 ml", "Tuz - 1.5 osh qoshiq", "Ziravor (zira) - 1 choy qoshiq"], steps: ["1. Qozonni o'rtacha olovda qizdirib, zig'ir yog'ini soling va ko'pigi ketguncha qizdiring.", "2. To'g'ralgan piyozni solib, tillangur bo'lguncha qovuring.", "3. Mol go'shtini o'rtacha bo'laklarga bo'lib soling va qovuring.", "4. Qizil sabzini somoncha shaklida solib, 10 daqiqa birga aralashtiring.", "5. 1 litr suv solib, tuz va zira qo'shib, past olovda 40 daqiqa qaynating (zirvak).", "6. Oldindan yuvilgan Lazer guruchni solib, suvini tortguncha pishiring.", "7. Ustini yopib, 20 daqiqa dimlang."] },
    { id: 2, title: "Toshkentcha To'y Oshi", category: "ovqat", time: 90, kcal: 720, emoji: "🍚", ingredients: ["Qo'y go'shti - 600g", "Guruch - 600g", "Sariq sabzi - 600g", "Paxta yog'i - 180 ml", "Nohut - 50g", "Mayiz - 30g"], steps: ["1. Yog'ni qizdirib, go'shtni qovuring.", "2. Sabzi va noxutni solib zirvak tayyorlang.", "3. Guruchni solib dimlang."] },
    { id: 3, title: "Mastava (An'anaviy sho'rva)", category: "ovqat", time: 45, kcal: 450, emoji: "🥣", ingredients: ["Mol go'shti - 400g", "Guruch - 100g", "Kartoshka - 2 dona", "Pomidor - 2 dona", "Piyoz - 1 dona", "O'simlik yog'i - 50 ml"], steps: ["1. Go'sht va piyozni qovuring.", "2. Pomidor va kartoshka soling.", "3. Suv va guruch solib pishiring."] },
    { id: 4, title: "Qozon Kabob", category: "ovqat", time: 50, kcal: 590, emoji: "🥩", ingredients: ["Qo'y go'shti (qovurg'a) - 700g", "Kartoshka - 5 ta", "Piyoz - 2 dona", "Tuz, zira - ta'bga ko'ra"], steps: ["1. Go'shtni yog'da qizartirib qovuring.", "2. Kartoshkani butunligicha solib qovuring.", "3. Duxovkada 180 gradusda 30 daqiqa qizartiring."] },
    { id: 5, title: "Norin", category: "ovqat", time: 120, kcal: 540, emoji: "🍝", ingredients: ["Ot go'shti - 500g", "Un - 400g", "Tuxum - 1 ta", "Piyoz - 3 dona"], steps: ["1. Xamir qorib yupqa yoying va tasmalar kesib qaynatib oling.", "2. Go'shtni qaynatib mayda to'g'rang.", "3. Piyoz va go'shtni xamir bilan aralashtiring."] },
    { id: 6, title: "Manti", category: "ovqat", time: 60, kcal: 510, emoji: "🥟", ingredients: ["Un - 500g", "Go'sht - 400g", "Piyoz - 400g", "Sariyog' - 50g"], steps: ["1. Xamir tayyorlab yoyib chiqing.", "2. Go'sht va piyozni qiymalang.", "3. Qismga bo'lib mantiqasqonda 40 daqiqa pishiring."] },
    { id: 7, title: "Somsa (Tandir yoki Duxovka)", category: "ovqat", time: 50, kcal: 480, emoji: "🥟", ingredients: ["Un - 500g", "Margarin - 150g", "Go'sht - 400g", "Piyoz - 400g"], steps: ["1. Qatlamli xamir tayyorlang.", "2. Ichiga go'sht solib tuging.", "3. 200 gradusda qizartirib pishiring."] },
    { id: 8, title: "Dimlama", category: "ovqat", time: 70, kcal: 410, emoji: "🍲", ingredients: ["Go'sht - 400g", "Karam - 300g", "Kartoshka - 4 ta", "Sabzi - 2 ta", "Piyoz - 2 ta"], steps: ["1. Qozon tubiga yog' va go'sht terib chiqing.", "2. Sabzavotlarni qatqatma qilib soling.", "3. Past olovda 1 soat dimlang."] },
    { id: 9, title: "Uyg'urcha Lag'mon", category: "ovqat", time: 50, kcal: 530, emoji: "🍜", ingredients: ["Cho'zma xamir - 400g", "Mol go'shti - 300g", "Bulg'or qalampiri - 2 ta", "Jusay - 1 bog'"], steps: ["1. Go'sht va sabzavotlarni qovuring.", "2. Xamirni cho'zib qaynatib oling.", "3. Ustiga qaylani solib suzing."] },
    { id: 10, title: "Shivit Oshi (Xorazmcha)", category: "ovqat", time: 60, kcal: 490, emoji: "🍝", ingredients: ["Un - 400g", "Shivit suvi - 200 ml", "Kartoshka - 3 ta", "Go'sht - 300g"], steps: ["1. Shivit suvida xamir qorib yoyib kesing va qaynating.", "2. Qayla tayyorlab ustidan quying."] },
    { id: 11, title: "Gumma", category: "ovqat", time: 30, kcal: 380, emoji: "🥟", ingredients: ["Xamir - 300g", "Qiima - 250g", "Yog' - qovurish uchun"], steps: ["1. Xamirga qiyma solib yoping.", "2. Qizigan yog'da qovuring."] },
    { id: 12, title: "Kurutob", category: "ovqat", time: 30, kcal: 610, emoji: "🫓", ingredients: ["Patir non - 2 ta", "Kurut (suzmali suv) - 300 ml", "Piyoz - 2 ta", "Sariyog' - 100g"], steps: ["1. Nonni to'g'rab idishga soling.", "2. Suyuq kurut quyib, qizigan yog' va piyoz soling."] },
    { id: 13, title: "Beshbarmoq", category: "ovqat", time: 80, kcal: 580, emoji: "🥩", ingredients: ["Go'sht - 600g", "Un - 400g", "Piyoz - 3 ta"], steps: ["1. Go'shtni qaynatib suvi oling.", "2. Xamirni yoyib to'g'rab qaynating.", "3. Go'sht va piyoz bilan suzing."] },
    { id: 14, title: "Shashlik (Qiyma va Go'sht)", category: "ovqat", time: 40, kcal: 550, emoji: "🍢", ingredients: ["Go'sht - 600g", "Piyoz - 400g", "Sirka, ziravor"], steps: ["1. Go'shtni marinadlang.", "2. Shishga tiqib cho'g'da pishiring."] },
    { id: 15, title: "Do'lma", category: "ovqat", time: 55, kcal: 420, emoji: "🫔", ingredients: ["Tok bargi yoki Karam - 20 ta", "Qiima - 400g", "Guruch - 100g"], steps: ["1. Qiimani bargga o'rang.", "2. Qozonda 40 daqiqa dimlang."] },
    { id: 16, title: "Bifshteks", category: "ovqat", time: 25, kcal: 490, emoji: "🥩", ingredients: ["Mol go'shti qiymasi - 400g", "Tuxum - 1 ta", "Piyoz - 1 ta"], steps: ["1. Qiimadan kletchka yasang.", "2. Tovada qovurib pishiring."] },
    { id: 17, title: "Fransuzcha Go'sht", category: "ovqat", time: 40, kcal: 560, emoji: "🧀", ingredients: ["Go'sht - 500g", "Pomidor - 2 ta", "Pishloq - 150g", "Mayonez - 50g"], steps: ["1. Go'shtni to'shab ustiga pomidor va pishloq qo'ying.", "2. Duxovkada pishiring."] },
    { id: 18, title: "Kotlet va Pyure", category: "ovqat", time: 35, kcal: 460, emoji: "🥔", ingredients: ["Qiima - 400g", "Kartoshka - 6 ta", "Sut - 100 ml"], steps: ["1. Kotletlarni qovuring.", "2. Kartoshkadan pyure tayyorlang."] },
    { id: 19, title: "Gulyash", category: "ovqat", time: 50, kcal: 430, emoji: "🍲", ingredients: ["Mol go'shti - 500g", "Piyoz - 2 ta", "Tomat pasta - 2 osh qoshiq"], steps: ["1. Go'shtni qovurib qayla tayyorlang."] },
    { id: 20, title: "Chuchvara", category: "ovqat", time: 45, kcal: 390, emoji: "🥟", ingredients: ["Xamir - 400g", "Qiima - 300g"], steps: ["1. Kichik chuchvaralar tugib qaynating."] },

    // --- QUYMOQLAR (20 ta) ---
    { id: 21, title: "Klassik Pomidorli Quymoq (Shakshuka)", category: "quymoq", time: 15, kcal: 310, emoji: "🍳", ingredients: ["Tuxum - 3 ta", "Pomidor - 2 ta", "Piyoz - 1 dona", "Sariyog' - 30g", "Tuz - 0.5 choy qoshiq"], steps: ["1. Tovada sariyog'da piyoz va pomidor qovuriladi.", "2. Tuxum chaqib solinadi va dimlanadi."] },
    { id: 22, title: "Kurutobli Quymoq", category: "quymoq", time: 15, kcal: 340, emoji: "🍳", ingredients: ["Tuxum - 4 ta", "Suzma - 100g", "Sariyog' - 40g"], steps: ["1. Tuxum va suzmani aralashtirib pishiring."] },
    { id: 23, title: "Pishloqli Omlet", category: "quymoq", time: 10, kcal: 290, emoji: "🍳", ingredients: ["Tuxum - 3 ta", "Pishloq - 80g", "Sut - 50 ml"], steps: ["1. Tuxum va sutni ko'pirtirib pishloq qo'shing."] },
    { id: 24, title: "Ko'katli Quymoq", category: "quymoq", time: 10, kcal: 240, emoji: "🍳", ingredients: ["Tuxum - 3 ta", "Kashnich, ko'k piyoz - 1 bog'"], steps: ["1. Ko'katlarni to'g'rab tuxumga qo'shib pishiring."] },
    { id: 25, title: "Qovurilgan Tuxum va Kolbasa", category: "quymoq", time: 8, kcal: 350, emoji: "🍳", ingredients: ["Tuxum - 3 ta", "Kolbasa - 100g"], steps: ["1. Kolbasani qovurib ustiga tuxum chaqing."] },
    { id: 26, title: "Sutli Blinchik (Quymoq)", category: "quymoq", time: 20, kcal: 280, emoji: "🥞", ingredients: ["Sut - 300 ml", "Tuxum - 2 ta", "Un - 150g", "Shakar - 1 osh qoshiq"], steps: ["1. Hammasini aralashtirib yupqa quymoqlar pishiring."] },
    { id: 27, title: "Kefirli Qalin Quymoq", category: "quymoq", time: 20, kcal: 300, emoji: "🥞", ingredients: ["Kefir - 250 ml", "Tuxum - 1 ta", "Un - 200g", "Soda - 0.5 choy qoshiq"], steps: ["1. Xamir qorib tovada qalin qilib pishiring."] },
    { id: 28, title: "Shirin tvorogli quymoq", category: "quymoq", time: 15, kcal: 320, emoji: "🥞", ingredients: ["Tvorog - 200g", "Tuxum - 1 ta", "Shakar - 2 osh qoshiq"], steps: ["1. Aralashtirib tovada qovuring."] },
    { id: 29, title: "Qovoqli Quymoq", category: "quymoq", time: 25, kcal: 260, emoji: "🥞", ingredients: ["Qovoq qirg'ochdan - 200g", "Un - 100g", "Tuxum - 1 ta"], steps: ["1. Qovoq va masalliqlarni aralashtirib pishiring."] },
    { id: 30, title: "Kartoshkali Drajen", category: "quymoq", time: 20, kcal: 330, emoji: "🥔", ingredients: ["Kartoshka - 3 ta", "Tuxum - 1 ta", "Un - 2 osh qoshiq"], steps: ["1. Kartoshkani qirg'ichdan o'tkazib qovuring."] },
    { id: 31, title: "Gugirt quymoq", category: "quymoq", time: 10, kcal: 210, emoji: "🍳", ingredients: ["Tuxum - 2 ta", "Un - 1 osh qoshiq", "Sut - 30 ml"], steps: ["1. Ko'pirtirib pishiring."] },
    { id: 32, title: "Tvorogli Sirniki", category: "quymoq", time: 20, kcal: 290, emoji: "🥞", ingredients: ["Tvorog - 250g", "Tuxum - 1 ta", "Un - 3 osh qoshiq", "Shakar - 2 osh qoshiq"], steps: ["1. Dumaloq chakra qilib tovada sariyog'da pishiring."] },
    { id: 33, title: "Bodomli Blinchik", category: "quymoq", time: 25, kcal: 340, emoji: "🥞", ingredients: ["Blinchik - 5 ta", "Bodom uni - 50g", "Qaymoq - 50g"], steps: ["1. Ichiga krem surtib o'rang."] },
    { id: 34, title: "Asalli Quymoq", category: "quymoq", time: 15, kcal: 310, emoji: "🥞", ingredients: ["Un - 150g", "Asal - 2 osh qoshiq", "Tuxum - 1 ta"], steps: ["1. Pishirib ustidan asal quying."] },
    { id: 35, title: "Meva solingan quymoq", category: "quymoq", time: 20, kcal: 280, emoji: "🥞", ingredients: ["Blinchik - 4 ta", "Banan yoki Olma - 1 ta"], steps: ["1. Mevani ichiga solib o'rang."] },
    { id: 36, title: "Shokoladli quymoq", category: "quymoq", time: 20, kcal: 360, emoji: "🥞", ingredients: ["Kakaoli xamir - 200g", "Shokolad - 50g"], steps: ["1. Pishirib ustidan shokolad eritib quying."] },
    { id: 37, title: "Sabzavotli Omlet", category: "quymoq", time: 15, kcal: 230, emoji: "🍳", ingredients: ["Tuxum - 3 ta", "Bulg'or qalampiri, pomidor - 100g"], steps: ["1. Sabzavotni qovurib tuxum quying."] },
    { id: 38, title: "Go'shtli Blinchik", category: "quymoq", time: 30, kcal: 390, emoji: "🥞", ingredients: ["Blinchik - 6 ta", "Qaynatilgan go'sht qiymasi - 200g"], steps: ["1. Qiimani blinchikka o'rab qovuring."] },
    { id: 39, title: "Ko'k piyozli quymoq", category: "quymoq", time: 10, kcal: 220, emoji: "🍳", ingredients: ["Tuxum - 3 ta", "Ko'k piyoz - 1 bog'"], steps: ["1. Piyozni to'g'rab tuxumga qo'shib pishiring."] },
    { id: 40, title: "Grechkali quymoq", category: "quymoq", time: 25, kcal: 310, emoji: "🍳", ingredients: ["Qaynatilgan grechka - 1 st", "Tuxum - 2 ta"], steps: ["1. Grechka va tuxumni aralashtirib pishiring."] },

    // --- SALATLAR (20 ta) ---
    { id: 41, title: "Achiq-Chuchuk Salati", category: "salat", time: 10, kcal: 95, emoji: "🥗", ingredients: ["Pomidor - 3 ta (yupqa yarim halqa)", "Piyoz - 1 dona (suvda yuvilgan)", "Achchiq qalampir - 0.5 ta", "Tuz - 1 choy qoshiq"], steps: ["1. Pomidorni yupqa qilib to'g'rang.", "2. Piyozni suvsizlantirib yupqa halqa to'g'rang.", "3. Hammasini aralashtirib tuzlang."] },
    { id: 42, title: "Fransuzcha Salat", category: "salat", time: 15, kcal: 280, emoji: "🥗", ingredients: ["Olma - 1 ta", "Sabzi - 1 ta", "Pishloq - 100g", "Mayonez - 50g"], steps: ["1. Masalliqlarni qirg'ichdan o'tkazib qatlamlab chiqing."] },
    { id: 43, title: "Grekcha Salat", category: "salat", time: 15, kcal: 210, emoji: "🥗", ingredients: ["Pomidor - 2 ta", "Bodring - 2 ta", "Fetakisi pishloq - 100g", "Zaytun moyi - 2 osh qoshiq"], steps: ["1. Sabzavotlarni yirik to'g'rang, pishloq va zaytun qo'shing."] },
    { id: 44, title: "Olivye Salati", category: "salat", time: 30, kcal: 350, emoji: "🥗", ingredients: ["Kartoshka - 3 ta", "Tuxum - 3 ta", "Kolbasa - 200g", "No'xat - 1 banka", "Mayonez - 100g"], steps: ["1. Masalliqlarni kubik to'g'rab mayonezlang."] },
    { id: 45, title: "Sezar Salati", category: "salat", time: 20, kcal: 310, emoji: "🥗", ingredients: ["Tovuq filesi - 200g", "Aysberg karami - 1 bog'", "Suxarik - 50g", "Pishloq - 50g"], steps: ["1. Tovuqni qovuring, qolganlari bilan aralashtiring."] },
    { id: 46, title: "Bodring va Ko'katlar Salati", category: "salat", time: 10, kcal: 70, emoji: "🥒", ingredients: ["Bodring - 3 ta", "Kokteyl ko'kat - 1 bog'", "Smetana - 2 osh qoshiq"], steps: ["1. Bodringni to'g'rab smetana bilan aralashtiring."] },
    { id: 47, title: "Bodring va Pamidor", category: "salat", time: 10, kcal: 80, emoji: "🍅", ingredients: ["Pomidor - 2 ta", "Bodring - 2 ta", "O'simlik yog'i - 1 osh qoshiq"], steps: ["1. To'g'rab yog' va tuz soling."] },
    { id: 48, title: "Karam va Sabzi Salati", category: "salat", time: 12, kcal: 90, emoji: "🥗", ingredients: ["Karam - 200g", "Sabzi - 1 ta", "Sirka, shakar, tuz"], steps: ["1. Karamni yupqa to'g'rab ishqalang va ziravorlang."] },
    { id: 49, title: "Vinegret", category: "salat", time: 35, kcal: 180, emoji: "🥗", ingredients: ["Lavlagi - 2 ta", "Kartoshka - 2 ta", "Tuzlangan bodring - 2 ta"], steps: ["1. Qaynatilgan sabzavotlarni kubik to'g'rab aralashtiring."] },
    { id: 50, title: "Miso Salati", category: "salat", time: 15, kcal: 150, emoji: "🥗", ingredients: ["Qovurilgan baqlajon - 2 ta", "Pomidor - 2 ta"], steps: ["1. Baqlajon va pomidorni aralashtiring."] },
    { id: 51, title: "Qizil lavlagi va Yong'oq salati", category: "salat", time: 25, kcal: 240, emoji: "🥗", ingredients: ["Lavlagi - 2 ta", "Yong'oq - 50g", "Sarimsoq - 1 tish"], steps: ["1. Lavlagi qirg'ichdan o'tkazilib yong'oq qo'shiladi."] },
    { id: 52, title: "Tovuqli Salat", category: "salat", time: 20, kcal: 290, emoji: "🥗", ingredients: ["Qaynatilgan tovuq - 200g", "Konservalangan makkajo'xori - 1 banka"], steps: ["1. Mayonez bilan aralashtiring."] },
    { id: 53, title: "Qisqichbaqa tayoqchali salat", category: "salat", time: 15, kcal: 260, emoji: "🥗", ingredients: ["Qisqichbaqa tayoqchasi - 200g", "Tuxum - 3 ta", "Makkajo'xori - 1 banka"], steps: ["1. Maydalab to'g'rab mayonezlang."] },
    { id: 54, title: "Meyva Salati", category: "salat", time: 10, kcal: 140, emoji: "🍎", ingredients: ["Banan - 1 ta", "Olma - 1 ta", "Kivi - 1 ta", "Yogurt - 100g"], steps: ["1. Mevani to'g'rab yogurt quying."] },
    { id: 55, title: "Achchiq koreyscha sabzi salati", category: "salat", time: 20, kcal: 170, emoji: "🥕", ingredients: ["Sabzi - 400g", "Sarimsoq - 3 tish", "Qizil murch, yog'"], steps: ["1. Sabzini maxsus qirg'ichdan o'tkazib ziravorlang."] },
    { id: 56, title: "Pishloqli Salat", category: "salat", time: 15, kcal: 320, emoji: "🧀", ingredients: ["Qattiq pishloq - 150g", "Tuxum - 3 ta", "Sarimsoq"], steps: ["1. Qirg'ichdan o'tkazib aralashtiring."] },
    { id: 57, title: "Qo'ziqorinli Salat", category: "salat", time: 20, kcal: 220, emoji: "🍄", ingredients: ["Qo'ziqorin - 200g", "Piyoz - 1 ta", "Tuxum - 2 ta"], steps: ["1. Qo'ziqorinni qovurib boshqalar bilan qo'shing."] },
    { id: 58, title: "Bodring va Tuxum Salati", category: "salat", time: 10, kcal: 160, emoji: "🥗", ingredients: ["Bodring - 2 ta", "Tuxum - 3 ta", "Smetana"], steps: ["1. To'g'rab smetana soling."] },
    { id: 59, title: "Moshcha Salati", category: "salat", time: 30, kcal: 200, emoji: "🥗", ingredients: ["Qaynatilgan mosh - 1 st", "Pomidor - 2 ta", "Piyoz"], steps: ["1. Aralashtirib ziravorlang."] },
    { id: 60, title: "Tursu Salat", category: "salat", time: 10, kcal: 60, emoji: "🥒", ingredients: ["Tuzlangan bodring - 3 ta", "Piyoz - 1 ta"], steps: ["1. To'g'rab yog' surting."] },

    // --- PISHIRIQLAR (20 ta) ---
    { id: 61, title: "Tvorogli Pishiriq (Sirniki)", category: "pishiriq", time: 20, kcal: 290, emoji: "🥞", ingredients: ["Tvorog - 300g", "Tuxum - 1 ta", "Bug'doy uni - 4 osh qoshiq", "Shakar - 2 osh qoshiq"], steps: ["1. Tvorog, tuxum, shakar va unni yaxshilab aralashtiring.", "2. Kichik dumaloq shakllar yasang.", "3. Tovada o'rtacha olovda sariyog'da har ikki tomonini qizartirib pishiring."] },
    { id: 62, title: "Olvali Pirog", category: "pishiriq", time: 45, kcal: 340, emoji: "🥧", ingredients: ["Un - 300g", "Sariyog' - 150g", "Olcha - 200g", "Shakar - 150g"], steps: ["1. Xamirni tayyorlab qolipga soling.", "2. Ustiga olcha terib duxovkada pishiring."] },
    { id: 63, title: "Samsa (Uy sharoitida)", category: "pishiriq", time: 50, kcal: 450, emoji: "🥟", ingredients: ["Un - 400g", "Go'sht - 300g", "Piyoz - 300g"], steps: ["1. Xamir qorib yoying.", "2. Qiyma solib duxovkada pishiring."] },
    { id: 64, title: "Qavatli Non", category: "pishiriq", time: 40, kcal: 390, emoji: "🫓", ingredients: ["Un - 500g", "Sariyog' - 100g", "Sut - 250 ml"], steps: ["1. Xamirni yoyib sariyog' surtib o'rang va pishiring."] },
    { id: 65, title: "Pishloqli Bulochka", category: "pishiriq", time: 35, kcal: 360, emoji: "🍞", ingredients: ["Achitqili xamir - 400g", "Pishloq - 200g"], steps: ["1. Xamir ichiga pishloq solib shakl berib pishiring."] },
    { id: 66, title: "Keks (Klassik)", category: "pishiriq", time: 40, kcal: 380, emoji: "🧁", ingredients: ["Un - 250g", "Shakar - 150g", "Tuxum - 3 ta", "Sariyog' - 100g"], steps: ["1. Masalliqlarni ko'pirtirib qolipda pishiring."] },
    { id: 67, title: "Medovik (Kichik bo'lak)", category: "pishiriq", time: 60, kcal: 410, emoji: "🍯", ingredients: ["Asal - 2 osh qoshiq", "Un - 300g", "Krem - 200g"], steps: ["1. Asalli korjlar pishirib krem surting."] },
    { id: 68, title: "Bananli Pancakes", category: "pishiriq", time: 20, kcal: 270, emoji: "🥞", ingredients: ["Banan - 2 ta", "Tuxum - 2 ta", "Un - 100g"], steps: ["1. Bananni ezib tuxum va un bilan aralashtirib pishiring."] },
    { id: 69, title: "Makaronnik", category: "pishiriq", time: 30, kcal: 320, emoji: "🍝", ingredients: ["Makaron - 200g", "Tuxum - 2 ta", "Pishloq - 100g"], steps: ["1. Makaronni qaynatib tuxum va pishloq bilan pishiring."] },
    { id: 70, title: "Pishloqli Non", category: "pishiriq", time: 25, kcal: 340, emoji: "🥖", ingredients: ["Non - 1 ta", "Pishloq - 150g", "Sarmisoqli sariyog'"], steps: ["1. Nonni kesib ichiga pishloq solib qizdiring."] },
    { id: 71, title: "Shaftoli Pirog", category: "pishiriq", time: 45, kcal: 330, emoji: "🍑", ingredients: ["Un - 250g", "Shaftoli - 3 ta", "Tuxum - 2 ta"], steps: ["1. Xamir solib ustiga shaftoli terib pishiring."] },
    { id: 72, title: "Qovoqli Pirog", category: "pishiriq", time: 50, kcal: 310, emoji: "🥧", ingredients: ["Qovoq - 300g", "Un - 250g", "Shakar - 100g"], steps: ["1. Qovoq va xamirni aralashtirib pishiring."] },
    { id: 73, title: "Limonli Pirog", category: "pishiriq", time: 40, kcal: 320, emoji: "🍋", ingredients: ["Limon - 1 ta", "Un - 300g", "Shakar - 150g"], steps: ["1. Limon qiyomi solingan pirog pishiring."] },
    { id: 74, title: "Shokoladli Muffins", category: "pishiriq", time: 30, kcal: 390, emoji: "🧁", ingredients: ["Un - 200g", "Kakao - 40g", "Shakar - 120g"], steps: ["1. Kichik qoliplarda pishiring."] },
    { id: 75, title: "Qatlamali Somsa", category: "pishiriq", time: 55, kcal: 470, emoji: "🥟", ingredients: ["Qatlamali xamir - 400g", "Go'sht - 300g"], steps: ["1. Qatlamali somsa yasab duxovkada pishiring."] },
    { id: 76, title: "Karamli Pirog", category: "pishiriq", time: 45, kcal: 280, emoji: "🥧", ingredients: ["Karam - 300g", "Un - 200g", "Tuxum - 2 ta"], steps: ["1. Karam solingan tez tayyorlanadigan pirog."] },
    { id: 77, title: "Gulkaramli Pishiriq", category: "pishiriq", time: 35, kcal: 250, emoji: "🥦", ingredients: ["Gulkaram - 300g", "Pishloq - 100g", "Sut"], steps: ["1. Gulkaramni pishloq bilan duxovkada pishiring."] },
    { id: 78, title: "Kartoshkali Pirog", category: "pishiriq", time: 40, kcal: 330, emoji: "🥔", ingredients: ["Kartoshka pyuresi - 400g", "Un - 150g"], steps: ["1. Kartoshka solib pishiriladigan pirog."] },
    { id: 79, title: "Biskvit", category: "pishiriq", time: 35, kcal: 290, emoji: "🥮", ingredients: ["Tuxum - 4 ta", "Shakar - 150g", "Un - 150g"], steps: ["1. Tuxumni shakar bilan ko'pirtirib un solib pishiring."] },
    { id: 80, title: "Honim", category: "pishiriq", time: 45, kcal: 370, emoji: "🥟", ingredients: ["Xamir - 300g", "Kartoshka va piyoz - 300g"], steps: ["1. Xamirga kartoshka solib o'rab mantiqasqonda pishiring."] },

    // --- TORTLAR (20 ta) ---
    { id: 81, title: "Napoleon Torti", category: "tort", time: 90, kcal: 520, emoji: "🎂", ingredients: ["Qatlamali xamir - 6 ta korj", "Sariyog' - 200g", "Quyultirilgan sut - 1 banka"], steps: ["1. Korjlarni pishirib oling.", "2. Sariyog' va quyultirilgan sutdan krem tayyorlang.", "3. Korjlarga krem surtib qatlamlang va 4 soatga muzlatgichga qo'ying."] },
    { id: 82, title: "Medovik Torti", category: "tort", time: 80, kcal: 480, emoji: "🍯", ingredients: ["Asal - 3 osh qoshiq", "Un - 400g", "Smetana - 400g", "Shakar - 150g"], steps: ["1. Asalli korjlar tayyorlab pishiring.", "2. Smetana va shakar kremini surting."] },
    { id: 83, title: "Qizil Maxfiy (Red Velvet)", category: "tort", time: 70, kcal: 490, emoji: "🍰", ingredients: ["Biskvit - qizil rangli", "Krem-chiz - 300g", "Shakar upasi - 100g"], steps: ["1. Biskvit pishirib krem-chiz bilan bezang."] },
    { id: 84, title: "Shokoladli Trufel Tort", category: "tort", time: 80, kcal: 550, emoji: "🍫", ingredients: ["Shokolad - 200g", "Qaymoq - 300 ml", "Biskvit korjlari - 3 ta"], steps: ["1. Shokoladli ganash krem tayyorlab korjlarga surting."] },
    { id: 85, title: "Meva Solingan Biskvit Tort", category: "tort", time: 60, kcal: 390, emoji: "🍓", ingredients: ["Biskvit - 1 ta", "Qaymoq - 300 ml", "Klubnika va banan - 200g"], steps: ["1. Biskvitni bo'lib qaymoq va meva terib chiqing."] },
    { id: 86, title: "Tiramisu", category: "tort", time: 40, kcal: 420, emoji: "🍮", ingredients: ["Savoyardi pechenyesi - 200g", "Mascarpone pishloq - 250g", "Qahva - 1 st", "Tuxum - 2 ta"], steps: ["1. Pechenyeni qahvaga botirib masqar pone kremi bilan qatlamlang."] },
    { id: 87, title: "Chizkeyk (Cheesecake New York)", category: "tort", time: 60, kcal: 460, emoji: "🧀", ingredients: ["Pechenye uvog'i - 200g", "Krem-chiz - 400g", "Qaymoq - 200 ml"], steps: ["1. Asosini yasab ustiga pishloqli massa solib duxovkada pishiring."] },
    { id: 88, title: "Praga Torti", category: "tort", time: 70, kcal: 510, emoji: "🎂", ingredients: ["Kakaoli biskvit", "Shokoladli krem", "Marmelad"], steps: ["1. Kakao biskvitiga shokoladli krem surtib pishiring."] },
    { id: 89, title: "Panda Torti (Oq-Qora)", category: "tort", time: 65, kcal: 440, emoji: "🐼", ingredients: ["Oq biskvit", "Qora biskvit", "Smetana kremi"], steps: ["1. Oq va qora biskvitlarni aralashtirib krem surting."] },
    { id: 90, title: "Yong'oqli Tort", category: "tort", time: 75, kcal: 530, emoji: "🥜", ingredients: ["Yong'oq - 200g", "Un - 200g", "Quyultirilgan sut kremi"], steps: ["1. Yong'oqli korjlar pishirib krem surting."] },
    { id: 91, title: "Bananli Tort", category: "tort", time: 50, kcal: 410, emoji: "🍌", ingredients: ["Banan - 4 ta", "Biskvit - 1 ta", "Krem"], steps: ["1. Banan bo'laklarini krem bilan qatlamlang."] },
    { id: 92, title: "Olchali Tort", category: "tort", time: 60, kcal: 390, emoji: "🍒", ingredients: ["Olcha - 300g", "Biskvit korjlari", "Qaymoqli krem"], steps: ["1. Olcha qiyomi va krem bilan bezang."] },
    { id: 93, title: "Karamel Torti", category: "tort", time: 70, kcal: 480, emoji: "🍮", ingredients: ["Karamel sousi - 150g", "Biskvit", "Sariyog' kremi"], steps: ["1. Karameldan foydalanib qatlamlang."] },
    { id: 94, title: "Pishloqli Sufle Tort", category: "tort", time: 50, kcal: 370, emoji: "🍰", ingredients: ["Jelatin - 20g", "Tvorog - 300g", "Qaymoq - 200 ml"], steps: ["1. Sufle tayyorlab muzlatib qo'ying."] },
    { id: 95, title: "Apelsinli Tort", category: "tort", time: 60, kcal: 400, emoji: "🍊", ingredients: ["Apelsin - 2 ta", "Biskvit", "Apelsin kremi"], steps: ["1. Apelsin qiyomi bilan to'yintirib pishiring."] },
    { id: 96, title: "Kokosli Tort (Raffaello)", category: "tort", time: 65, kcal: 470, emoji: "🥥", ingredients: ["Kokos qirindisi - 100g", "Oq biskvit", "Oq krem"], steps: ["1. Kokos qirindisiga belab chiqing."] },
    { id: 97, title: "Esterxazi Torti", category: "tort", time: 90, kcal: 540, emoji: "🎂", ingredients: ["Bodom uni - 200g", "Moyli krem", "Shokolad naqsh"], steps: ["1. Bodomli korjlar pishirib naqsh bering."] },
    { id: 98, title: "Zebra Torti", category: "tort", time: 50, kcal: 380, emoji: "🦓", ingredients: ["Oq xamir va kakaoli xamir", "Smetana"], steps: ["1. Navbat bilan xamir solib zebra naqsh hosil qiling."] },
    { id: 99, title: "Ptichye Moloko (Qush suti)", category: "tort", time: 60, kcal: 410, emoji: "🍰", ingredients: ["Jelatin - 25g", "Tuxum oqi - 4 ta", "Shakar"], steps: ["1. Nafis sufle qatlamidan iborat tort."] },
    { id: 100, title: "Gilosli Shokolad Tort", category: "tort", time: 70, kcal: 490, emoji: "🍒", ingredients: ["Shokoladli biskvit", "Gilos - 250g", "Qaymoq"], steps: ["1. Gilos va shokoladni birlashtirib tayyorlang."] },

    // --- ICHIMLIKLAR (20 ta) ---
    { id: 101, title: "Tetiklantiruvchi Limon va Yalpizli Moxito", category: "ichimlik", time: 5, kcal: 85, emoji: "🍹", ingredients: ["Limon - 1 ta (halqa to'g'ralgan)", "Yalpiz bargi - 10 ta", "Mineral suv (Gazli) - 500 ml", "Shakar - 2 osh qoshiq", "Muz bo'laklari - 6 ta"], steps: ["1. Stakanga yalpiz barglari va shakar solib qoshiqda ezib chiqing.", "2. Limon halqalarini va muz bo'laklarini qo'shing.", "3. Ustidan sovuq gazli mineral suv quying va yaxshilab aralashtiring."] },
    { id: 102, title: "Qaymoqli Shokoladli Kokteyl", category: "ichimlik", time: 7, kcal: 240, emoji: "🧋", ingredients: ["Sut - 250 ml", "Muzqaymoq - 100g", "Shokolad siropi - 30 ml"], steps: ["1. Blenderda barcha masalliqlarni ko'pirtirib stakanga quying."] },
    { id: 103, title: "Qulupnayli Smoothies", category: "ichimlik", time: 5, kcal: 130, emoji: "🍓", ingredients: ["Qulupnay - 150g", "Yogurt - 200 ml", "Asal - 1 choy qoshiq"], steps: ["1. Blenderda birxil massa bo'lguncha aralashtiring."] },
    { id: 104, title: "Ko'k Choy (An'anaviy)", category: "ichimlik", time: 5, kcal: 5, emoji: "🍵", ingredients: ["Ko'k choy bargi - 1 choy qoshiq", "Qaynoq suv - 500 ml"], steps: ["1. Choynakka damlab piyolaga quying."] },
    { id: 105, title: "Qora Choy Limon bilan", category: "ichimlik", time: 5, kcal: 15, emoji: "🫖", ingredients: ["Qora choy - 1 paket", "Limon - 1 tilim", "Asal - 1 choy qoshiq"], steps: ["1. Choy damlab limon va asal soling."] },
    { id: 106, title: "Kofe Kapuchino", category: "ichimlik", time: 6, kcal: 90, emoji: "☕", ingredients: ["Eshilingan kofe - 1 choy qoshiq", "Sut - 150 ml"], steps: ["1. Kofe damlab ko'pirtirilgan sut qo'shing."] },
    { id: 107, title: "Bananli Kokteyl", category: "ichimlik", time: 5, kcal: 190, emoji: "🍌", ingredients: ["Banan - 1 ta", "Sut - 250 ml", "Vanilin"], steps: ["1. Blenderda ko'pirtirib tayyorlang."] },
    { id: 108, title: "Olma Sharbati (Fresh)", category: "ichimlik", time: 5, kcal: 110, emoji: "🧃", ingredients: ["Olma - 3 ta"], steps: ["1. Sharbati siqib chiqaruvchidan o'tkazing."] },
    { id: 109, title: "Apelsin Fresh", category: "ichimlik", time: 5, kcal: 120, emoji: "🍊", ingredients: ["Apelsin - 3 ta"], steps: ["1. Apelsindan sharbat siqib oling."] },
    { id: 110, title: "Kofe Latte", category: "ichimlik", time: 6, kcal: 110, emoji: "☕", ingredients: ["Espresso - 50 ml", "Sut - 200 ml"], steps: ["1. Qaynatilgan sutga espresso quying."] },
    { id: 111, title: "Muzdek Ayron", category: "ichimlik", time: 3, kcal: 90, emoji: "🥛", ingredients: ["Suzma yoki Qatiq - 300 ml", "Suv - 200 ml", "Tuz, ko'kat"], steps: ["1. Qatiqni suv va tuz bilan aralashtirib ko'kat soling."] },
    { id: 112, title: "Gilos Kompoti", category: "ichimlik", time: 30, kcal: 140, emoji: "🍒", ingredients: ["Gilos - 300g", "Shakar - 100g", "Suv - 1.5 l"], steps: ["1. Gilos va shakarni suvda qaynating."] },
    { id: 113, title: "Qora Smorodina Mors", category: "ichimlik", time: 20, kcal: 100, emoji: "🧃", ingredients: ["Smorodina - 200g", "Shakar - 80g", "Suv - 1 l"], steps: ["1. Mevalarni ezib suv va shakar bilan qaynating."] },
    { id: 114, title: "Zanjabil Choyi", category: "ichimlik", time: 10, kcal: 25, emoji: "🫚", ingredients: ["Zanjabil ildizi - 20g", "Limon - 1 tilim", "Asal - 1 osh qoshiq"], steps: ["1. Zanjabilni qirg'ichdan o'tkazib damlang."] },
    { id: 115, title: "Issiq Shokolad", category: "ichimlik", time: 8, kcal: 280, emoji: "☕", ingredients: ["Qora shokolad - 100g", "Sut - 200 ml", "Qaymoq"], steps: ["1. Shokoladni sutda eritib issiqligicha iching."] },
    { id: 116, title: "Shaftoli Smoothies", category: "ichimlik", time: 5, kcal: 120, emoji: "🍑", ingredients: ["Shaftoli - 2 ta", "Yogurt - 150 ml"], steps: ["1. Blenderda aralashtirib tayyorlang."] },
    { id: 117, title: "Atirgul Choyi", category: "ichimlik", time: 5, kcal: 10, emoji: "🌹", ingredients: ["Quritilgan atirgul bargi - 1 osh qoshiq", "Qaynoq suv"], steps: ["1. Damlab suzing."] },
    { id: 118, title: "Anor Sharbati", category: "ichimlik", time: 10, kcal: 130, emoji: "🔴", ingredients: ["Anor - 2 ta"], steps: ["1. Anor donalarini siqib sharbat oling."] },
    { id: 119, title: "Muzli Kofe (Iced Coffee)", category: "ichimlik", time: 5, kcal: 95, emoji: "🧊", ingredients: ["Kofe - 1 st", "Sut - 100 ml", "Muz - 5 ta"], steps: ["1. Kofe va sutni muz solingan stakanga quying."] },
    { id: 120, title: "Gerkules Kokteyli", category: "ichimlik", time: 7, kcal: 210, emoji: "🌾", ingredients: ["Ovsas uni (Gerkules) - 2 osh qoshiq", "Banan - 1 ta", "Sut - 250 ml"], steps: ["1. Blenderda hammasini ko'pirtirib iching."] }
];

let selectedFridgeItems = [];
let fridgeCategoryFilter = 'all';
let currentRecipeTab = 'all';
let currentDishCategory = 'all';
let favoriteIds = [];
let shoppingBasket = [];
let consumedCalories = 0;

let uploadedVideos = [];
let currentMediaTab = 'reels';
let selectedVideoFileObj = null;

window.addEventListener('DOMContentLoaded', () => {
    renderFridgeList();
    renderRecipes();
    renderShoppingList();
    initMusicPlayer();
});

function setFridgeCategory(cat, btn) {
    fridgeCategoryFilter = cat;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    renderFridgeList();
}

function renderFridgeList() {
    const container = document.getElementById('fridgeIngredientsList');
    const query = document.getElementById('fridgeSearchInput').value.toLowerCase();
    container.innerHTML = '';

    fridgeItemsDB
        .filter(item => fridgeCategoryFilter === 'all' || item.cat === fridgeCategoryFilter)
        .filter(item => item.name.toLowerCase().includes(query))
        .forEach(item => {
            const isSelected = selectedFridgeItems.includes(item.name);
            const row = document.createElement('div');
            row.className = `fridge-item ${isSelected ? 'selected' : ''}`;
            row.innerHTML = `<input type="checkbox" ${isSelected ? 'checked' : ''}><span>${item.name}</span>`;
            row.onclick = () => {
                if (selectedFridgeItems.includes(item.name)) {
                    selectedFridgeItems = selectedFridgeItems.filter(x => x !== item.name);
                } else {
                    selectedFridgeItems.push(item.name);
                }
                renderFridgeList();
                renderRecipes();
            };
            container.appendChild(row);
        });
}

function clearFridge() { selectedFridgeItems = []; renderFridgeList(); renderRecipes(); }

function openCameraScanner() { document.getElementById('cameraModal').classList.add('active'); }
function simulateCameraCapture() {
    selectedFridgeItems.push("Mol go'shti", "Piyoz", "Qizil sabzi", "Lazer guruch");
    closeModal('cameraModal');
    renderFridgeList();
    renderRecipes();
    alert("Kamera orqali masalliqlar muvaffaqiyatli aniqlandi!");
}
function handleGalleryScan(e) {
    if (e.target.files[0]) {
        selectedFridgeItems.push("Tuxum", "Pomidor", "Sut");
        renderFridgeList();
        renderRecipes();
        alert("Galereya rasmidan masalliqlar aniqlandi!");
    }
}

function setRecipeTab(tab, btn) {
    currentRecipeTab = tab;
    document.querySelectorAll('.rtab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderRecipes();
}

function setDishCategory(cat, btn) {
    currentDishCategory = cat;
    document.querySelectorAll('.dtype-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    renderRecipes();
}

function calculateMatchPercentage(recipe) {
    if (selectedFridgeItems.length === 0) return 0;
    let matchCount = 0;
    recipe.ingredients.forEach(ing => {
        if (selectedFridgeItems.some(sel => ing.toLowerCase().includes(sel.toLowerCase()))) matchCount++;
    });
    return Math.round((matchCount / recipe.ingredients.length) * 100);
}

function renderRecipes() {
    const grid = document.getElementById('recipesGrid');
    const search = document.getElementById('recipeSearchInput').value.toLowerCase();
    const maxTime = document.getElementById('timeSelectFilter').value;
    grid.innerHTML = '';

    let readyCount = 0;
    realRecipesDB.forEach(r => { if (calculateMatchPercentage(r) >= 50) readyCount++; });
    document.getElementById('readyTabBtn').innerText = `Tayyorlari (${readyCount})`;
    document.getElementById('favTabBtn').innerText = `Sevimlilar (${favoriteIds.length})`;

    const filtered = realRecipesDB.filter(r => {
        const matchName = r.title.toLowerCase().includes(search);
        const matchCat = currentDishCategory === 'all' || r.category === currentDishCategory;
        const matchTime = maxTime === 'all' || r.time <= parseInt(maxTime);
        const matchPct = calculateMatchPercentage(r);
        if (currentRecipeTab === 'fav' && !favoriteIds.includes(r.id)) return false;
        if (currentRecipeTab === 'ready' && matchPct < 50) return false;
        return matchName && matchCat && matchTime;
    });

    filtered.forEach(r => {
        const isFav = favoriteIds.includes(r.id);
        const pct = calculateMatchPercentage(r);
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div>
                <div class="rcard-top">
                    <span class="rcard-emoji">${r.emoji}</span>
                    ${pct > 0 ? `<span class="rcard-badge">${pct}% mos</span>` : ''}
                    <button class="btn-heart ${isFav ? 'liked' : ''}" onclick="toggleFavorite(event, ${r.id})"><i class="fa-solid fa-heart"></i></button>
                </div>
                <h3 style="margin-top: 8px;">${r.title}</h3>
                <div class="rcard-meta" style="margin-top: 6px;">
                    <span><i class="fa-regular fa-clock"></i> ${r.time} daq</span>
                    <span><i class="fa-solid fa-fire"></i> ${r.kcal} kkal</span>
                </div>
            </div>
            <button class="btn-open-recipe" onclick="openRecipeDetail(${r.id})">Retseptni ko'rish</button>
        `;
        grid.appendChild(card);
    });
}

function toggleFavorite(e, id) {
    e.stopPropagation();
    if (favoriteIds.includes(id)) favoriteIds = favoriteIds.filter(x => x !== id);
    else favoriteIds.push(id);
    renderRecipes();
}

function openRecipeDetail(id) {
    const r = realRecipesDB.find(x => x.id === id);
    if (!r) return;
    document.getElementById('modalRecipeTitle').innerText = `${r.emoji} ${r.title}`;
    document.getElementById('modalRecipeBody').innerHTML = `
        <p style="color: var(--text-gray); font-size: 13px; margin-bottom: 12px;">Tayyorlanish vaqti: <b>${r.time} daqiqa</b> • Quvvati: <b>${r.kcal} kkal</b></p>
        <h4 style="margin-bottom: 6px; color: var(--primary);">Aniq Masalliqlar va Grammlar:</h4>
        <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 4px; margin-bottom: 14px; font-size: 13px;">${r.ingredients.map(i => `<li><b>${i}</b></li>`).join('')}</ul>
        <h4 style="margin-bottom: 6px; color: var(--primary);">Ko'p Bosqichli Tayyorlash Jarayoni:</h4>
        <ol style="padding-left: 20px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; font-size: 13px;">${r.steps.map(s => `<li>${s}</li>`).join('')}</ol>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button class="btn-primary-full" onclick="addCalories(${r.kcal})">Tayyorladim (+${r.kcal} kkal)</button>
            <button class="btn-share-shopping" onclick="addIngredientsToShopping(${r.id})">Bozorlikka qo'shish</button>
        </div>
    `;
    document.getElementById('recipeDetailModal').classList.add('active');
}

function addCalories(kcal) { consumedCalories += kcal; document.getElementById('kcalDisplay').innerText = `${consumedCalories} kkal`; closeModal('recipeDetailModal'); }
function resetCalories() { consumedCalories = 0; document.getElementById('kcalDisplay').innerText = `0 kkal`; }
function addIngredientsToShopping(id) {
    const r = realRecipesDB.find(x => x.id === id);
    if (!r) return;
    r.ingredients.forEach(i => { if (!shoppingBasket.includes(i)) shoppingBasket.push(i); });
    renderShoppingList();
    closeModal('recipeDetailModal');
}
function renderShoppingList() {
    const box = document.getElementById('shoppingItemsList');
    box.innerHTML = '';
    if (shoppingBasket.length === 0) { box.innerHTML = `<p style="text-align:center; color: var(--text-gray); font-size: 12px; padding: 20px;">Ro'yxat bo'sh.</p>`; return; }
    shoppingBasket.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'shop-row';
        div.innerHTML = `<span>• ${item}</span><button class="btn-text-danger" onclick="shoppingBasket.splice(${idx},1);renderShoppingList()"><i class="fa-solid fa-trash"></i></button>`;
        box.appendChild(div);
    });
}
function openShareModal() {
    if (shoppingBasket.length === 0) { alert("Ro'yxat bo'sh!"); return; }
    document.getElementById('sharePreviewText').value = "🛒 Oshxona.AI Bozorlik:\n" + shoppingBasket.map((i, idx) => `${idx+1}. ${i}`).join('\n');
    document.getElementById('shareModal').classList.add('active');
}
function sendViaTelegram() { window.open(`https://t.me/share/url?url=Oshxona.AI&text=${encodeURIComponent(document.getElementById('sharePreviewText').value)}`, '_blank'); }
function copyShareText() { document.getElementById('sharePreviewText').select(); document.execCommand('copy'); alert("Nusxalandi!"); }

function initMusicPlayer() {
    const input = document.getElementById('musicFileInput');
    const player = document.getElementById('bgAudioPlayer');
    const label = document.getElementById('musicTitleDisplay');
    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) { player.src = URL.createObjectURL(file); player.hidden = false; player.play(); label.innerText = file.name.slice(0, 12); }
    });
}

// --- SHORTS VA QIDIRUV TIZIMI ---
function openMediaModal(tab) { currentMediaTab = tab; document.getElementById('mediaCenterModal').classList.add('active'); switchMediaModalTab(tab); }
function switchMediaModalTab(tab) { currentMediaTab = tab; document.querySelectorAll('.mm-tab').forEach(b => b.classList.toggle('active', b.innerText.toLowerCase().includes(tab))); renderMediaFeed(); }
function openVideoUploadModal() { document.getElementById('videoUploadModal').classList.add('active'); }
function onVideoFileChosen(e) { selectedVideoFileObj = e.target.files[0]; if (selectedVideoFileObj) document.getElementById('selectedVideoLabel').innerText = `Tanlandi: ${selectedVideoFileObj.name}`; }

function publishRealVideo() {
    const title = document.getElementById('videoTitleInput').value.trim();
    const desc = document.getElementById('videoDescInput').value.trim();
    const type = document.getElementById('videoTypeSelect').value;
    if (!selectedVideoFileObj || !title) { alert("Video va sarlavha kiriting!"); return; }
    
    uploadedVideos.unshift({
        id: Date.now(),
        author: "Abdushukur Oshpaz",
        avatar: "A",
        subscribers: 1420,
        videos_count: 36,
        title: title,
        desc: desc,
        type: type,
        url: URL.createObjectURL(selectedVideoFileObj),
        views: 1,
        likes: 0,
        dislikes: 0,
        isSubscribed: false,
        userReaction: null,
        comments: []
    });
    selectedVideoFileObj = null;
    document.getElementById('videoTitleInput').value = '';
    document.getElementById('videoDescInput').value = '';
    closeModal('videoUploadModal');
    renderMediaFeed();
}

function renderMediaFeed() {
    const container = document.getElementById('mediaFeedBody');
    const searchQuery = document.getElementById('shortsSearchInput').value.toLowerCase();
    container.innerHTML = '';

    let list = [];
    if (currentMediaTab === 'trends') {
        list = [...uploadedVideos].sort((a, b) => (b.likes * 2 + b.views) - (a.likes * 2 + a.views));
    } else {
        list = uploadedVideos.filter(v => v.type === currentMediaTab);
    }

    if (searchQuery) {
        list = list.filter(v => v.title.toLowerCase().includes(searchQuery) || v.desc.toLowerCase().includes(searchQuery));
    }

    if (list.length === 0) {
        container.innerHTML = `<div class="empty-state-box"><i class="fa-solid fa-film"></i><h3>Videolar topilmadi</h3><p>Yangi pazandachilik videosini yuklang!</p></div>`;
        return;
    }

    list.forEach((v) => {
        const card = document.createElement('div');
        card.className = 'shorts-item-card';
        card.innerHTML = `
            <video class="shorts-video-el" src="${v.url}" loop autoplay muted playsinline></video>
            
            <div class="shorts-overlay-info">
                <div class="shorts-channel-row">
                    <div class="shorts-avatar">${v.avatar}</div>
                    <span class="shorts-channel-name">@${v.author.toLowerCase().replace(/\s/g,'_')}</span>
                    <button class="btn-subscribe ${v.isSubscribed ? 'subscribed' : ''}" onclick="toggleSubscribe(${v.id}, this)">
                        ${v.isSubscribed ? 'Obunadasiz' : 'Obuna bo\'lish'}
                    </button>
                </div>
                <div class="shorts-title-tags">
                    <span>${v.title}</span><br>
                    <span style="font-size:12px; color:#38BDF8;">${v.desc || '#oshxona #milliytaom'}</span>
                </div>
            </div>

            <div class="shorts-right-actions">
                <button class="saction-btn ${v.userReaction === 'like' ? 'active-like' : ''}" onclick="toggleReaction(${v.id}, 'like')">
                    <i class="fa-solid fa-thumbs-up"></i><span>${v.likes}</span>
                </button>
                <button class="saction-btn ${v.userReaction === 'dislike' ? 'active-dislike' : ''}" onclick="toggleReaction(${v.id}, 'dislike')">
                    <i class="fa-solid fa-thumbs-down"></i><span>${v.dislikes}</span>
                </button>
                <button class="saction-btn" onclick="openCommentsModal(${v.id})"><i class="fa-solid fa-comment"></i><span>${v.comments.length}</span></button>
                <button class="saction-btn" onclick="openShareModal()"><i class="fa-solid fa-share"></i><span>Ulashish</span></button>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleSubscribe(id, btn) {
    const v = uploadedVideos.find(x => x.id === id);
    if (!v) return;
    v.isSubscribed = !v.isSubscribed;
    if (v.isSubscribed) {
        btn.innerText = "Obunadasiz";
        btn.classList.add('subscribed');
    } else {
        if (confirm(`Kanal obunasini bekor qilishni xohlaysizmi "@${v.author}"?`)) {
            btn.innerText = "Obuna bo'lish";
            btn.classList.remove('subscribed');
        } else {
            v.isSubscribed = true;
        }
    }
}

function toggleReaction(id, type) {
    const v = uploadedVideos.find(x => x.id === id);
    if (!v) return;
    if (type === 'like') {
        if (v.userReaction === 'like') { v.likes--; v.userReaction = null; }
        else { if (v.userReaction === 'dislike') v.dislikes--; v.likes++; v.userReaction = 'like'; }
    } else {
        if (v.userReaction === 'dislike') { v.dislikes--; v.userReaction = null; }
        else { if (v.userReaction === 'like') v.likes--; v.dislikes++; v.userReaction = 'dislike'; }
    }
    renderMediaFeed();
}

function openCommentsModal(id) {
    alert("Izohlar bo'limi ochildi! Izoh yozish va ko'rish imkoniyati faol.");
}

function openChannelModal() { document.getElementById('channelModal').classList.add('active'); }
function openAuthModal() { document.getElementById('authModal').classList.add('active'); }
function processAuth() { closeModal('authModal'); alert("Tizimga muvaffaqiyatli kirildi!"); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

function changeLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    alert(`Til o'zgartirildi: ${lang.toUpperCase()}`);
}