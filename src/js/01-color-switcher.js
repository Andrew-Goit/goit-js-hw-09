body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartColorChange);
stopBtn.addEventListener('click', onStopColorChange);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function setBodyColor () {
    body.style.background = getRandomHexColor()
}

let newColor = 0;

function onStartColorChange () {
    startBtn.setAttribute('disabled', 'disabled');
    setBodyColor();
    newColor = setInterval(setBodyColor, 1000);
};

function onStopColorChange () {
    startBtn.removeAttribute('disabled');
    clearInterval(newColor);
}

