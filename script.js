// Function to track prayer checklist progress
function trackProgress() {
    let prayers = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
    let completedPrayers = 0;
    prayers.forEach(prayer => {
        let checkbox = document.getElementById(prayer);
        if (checkbox.checked) {
            completedPrayers++;
        }
    });
    let progressMessage = `${completedPrayers} out of 5 prayers completed today.`;
    document.getElementById("progress-message").innerText = progressMessage;
}

// Display Dua of the Day dynamically (can be updated for each day)
function updateDua() {
    let duas = [
        "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
        "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ"
    ];
    let randomIndex = Math.floor(Math.random() * duas.length);
    document.getElementById("dua-text").innerText = duas[randomIndex];
}

// Initial Dua update when the page loads
window.onload = function() {
    updateDua();
};
