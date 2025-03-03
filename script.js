// Function to load saved data
function loadProgress() {
    let prayers = ["fajr", "dhuhr", "asr", "maghrib", "isha", "tarawih"];
    prayers.forEach(prayer => {
        let checkbox = document.getElementById(prayer);
        if (localStorage.getItem(prayer) === "checked") {
            checkbox.checked = true;
        }
    });
}

// Function to track progress and save to localStorage
function trackProgress() {
    let prayers = ["fajr", "dhuhr", "asr", "maghrib", "isha", "tarawih"];
    prayers.forEach(prayer => {
        let checkbox = document.getElementById(prayer);
        localStorage.setItem(prayer, checkbox.checked ? "checked" : "unchecked");
    });
}

// On page load, load previous progress
window.onload = loadProgress;

// Attach the track progress function to any relevant button or event
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', trackProgress);
});
