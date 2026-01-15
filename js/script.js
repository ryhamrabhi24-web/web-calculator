// Gestion des opérations de la calculatrice

let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
    animateDisplay();
}

function clearDisplay() {
    display.value = "";
    animateDisplay();
}

function calculate() {
    try {
        display.value = eval(display.value);
        animateDisplay();
    } catch {
        display.value = "Erreur";
        setTimeout(() => display.value = "", 1000);
    }
}

/* Animation écran */
function animateDisplay() {
    display.style.transform = "scale(1.05)";
    setTimeout(() => {
        display.style.transform = "scale(1)";
    }, 100);
}
