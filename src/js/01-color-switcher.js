//Pobierz przyciski ze strony
const startButton = document.querySelector('[data-start');
const stopButton = document.querySelector('[data-stop]');

// Funkcja generująca losowy kolor w formacie heksadecymalnym
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Zmienna przechowująca identyfikator interwału zmiany koloru
let colorChangeInterval;

// Obsługa kliknięcia przycisku "Start"
startButton.addEventListener('click', () => {
  //Wyłącz przycisk "Start"
  startButton.disabled = true;

  // Uruchom interwał zmiany koloru co 1000 ms(1 sekunda)
  colorChangeInterval = setInterval(() => {
    //Ustaw nowy losowy kolor tła body
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

// Obsługa kliknięcia przycisku "Stop"
stopButton.addEventListener('click', () => {
  // Włącz przycisk "Start"
  startButton.disabled = false;

  // Zatrzymaj interwał zmiany koloru
  clearInterval(colorChangeInterval);
});
