"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector(".number").textContent = secretNumber;
//function to modify the message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//function to modify the score
const displayNumber = function (number) {
  document.querySelector(".score").textContent = number;
};

//changing colors on screen for winning
const winningScreen = function (message1) {
  displayMessage(message1);
  document.querySelector("body").style.backgroundColor = "#e0f780";
  document.querySelector("body").style.color = "#033f47";
  document.querySelector(".heading").textContent = " You Won The Game... 🎉🎊";
  document.querySelector(".check").style.display = " none";
  document.querySelector(".guess").style.display = " none";
};
//changing colors on screen for losing
const losingScreen = function (message1) {
  displayMessage(message1);
  document.querySelector("body").style.backgroundColor = "#e27602";
  document.querySelector("body").style.color = "#FAFAFA";
  document.querySelector(".heading").textContent = " You Lose The Game... 😟";
  document.querySelector(".check").style.display = " none";
  document.querySelector(".guess").style.display = " none";
};

//changing colors on screen for initial
const initialScreen = function () {
  document.querySelector("body").style.backgroundColor = "#033f47";
  document.querySelector("body").style.color = "#e0f780";
};

//validating the fields
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No Number...");
    if (score <= 0) {
      score = 0;
      losingScreen("click on play again To Continue....👆");
    }
    score--;
  } else if (guess < 1 || guess > 20) {
    displayMessage("🚫 Enter the  Number Between the range( 1 - 20 )");
    score--;
  } else if (secretNumber === guess) {
    winningScreen("click on play again To Continue....👆");

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "📈 too high..!" : "📉 too low..!");
      score--;
    } else {
      losingScreen("click on play again To Continue....👆");
      score = 0;
    }
  }
  displayNumber(score);
});
//click event for reset the page (or) replay the game
document.querySelector(".again").addEventListener("click", function () {
  displayNumber(20);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".number").textContent = "?";
  initialScreen();
  document.querySelector(".heading").textContent = " Guess My Number...😊";
  document.querySelector(".check").style.display = " inherit";
  document.querySelector(".guess").style.display = " inherit";
});
