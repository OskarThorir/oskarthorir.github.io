document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");

    function switchLanguage() {
        if (window.location.pathname.includes("/en/")) {
            // Switch to Icelandic version
            window.location.href = window.location.href.replace("/en/", "/is/");
            localStorage.setItem("language", "is"); // Save language preference
        } else {
            // Switch to English version
            window.location.href = window.location.href.replace("/is/", "/en/");
            localStorage.setItem("language", "en"); // Save language preference
        }
    }

    // Update button text dynamically based on current language
    function updateButtonText() {
        if (window.location.pathname.includes("/en/")) {
            langToggle.textContent = "🇮🇸 Icelandic";
        } else {
            langToggle.textContent = "🇬🇧 English";
        }
    }

    langToggle.addEventListener("click", switchLanguage);
    updateButtonText(); // Run this function when the page loads
});