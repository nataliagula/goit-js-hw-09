<button type="button" data-start onclick="startColorChange()">Start</button>
<button type="button" data-stop onclick="stopColorChange()">Stop</button>

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorChange() {
  // Disable the start button
  document.querySelector("[data-start]").disabled = true;

  // Enable the stop button
  document.querySelector("[data-stop]").disabled = false;

  // Start changing background color every second
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  // Enable the start button
  document.querySelector("[data-start]").disabled = false;

  // Disable the stop button
  document.querySelector("[data-stop]").disabled = true;

  // Stop changing background color
  clearInterval(intervalId);

  // Reset background color
  document.body.style.backgroundColor = "";
}
