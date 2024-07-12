const colors = ["red", "blue", "yellow", "green"];
let gameSequence = [];
let userSequence = [];
let level = 0;

const startButton = document.getElementById("startButton");
const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");

const buttons = {
  red: redButton,
  blue: blueButton,
  yellow: yellowButton,
  green: greenButton,
};

startButton.addEventListener("click", () => startGame());
redButton.addEventListener("click", () => handleUserInput("red"));
blueButton.addEventListener("click", () => handleUserInput("blue"));
yellowButton.addEventListener("click", () => handleUserInput("yellow"));
greenButton.addEventListener("click", () => handleUserInput("green"));

function startGame() {
  level = 0;
  gameSequence = [];
  userSequence = [];
  nextLevel();
}


function nextLevel() {
  level++;
  userSequence = [];
  const nextColor = colors[Math.floor(Math.random() * colors.length)];
  gameSequence.push(nextColor);
  displaySequence();
}

function displaySequence() {
  let delay = 500;
  gameSequence.forEach((color, index) => {
    setTimeout(() => {
      buttons[color].classList.add("active");
      setTimeout(() => buttons[color].classList.remove("active"), 300);
    }, delay * (index + 1));
  });
}

function handleUserInput(color) {
  userSequence.push(color);
  buttons[color].classList.add("active");
  setTimeout(() => buttons[color].classList.remove("active"), 300);

  if (userSequence[userSequence.length - 1] !== gameSequence[userSequence.length - 1]) {
        console.log("Sequência incorreta");
        alert('Você perdeu! Tente novamente.');
        startGame();
    } else if (userSequence.length === gameSequence.length) {
        console.log("Sequência correta");
        setTimeout(nextLevel, 1000);
  }
}

