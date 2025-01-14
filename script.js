"use strict";
let gamestarted = false;
let randomNumber;
let tries = 1;
function StartTheGame() {
  if (!gamestarted) {
    tries = 0;
    randomNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector(
      ".message"
    ).textContent = `We have selected a random number between 1 and 100 See
      if you can guess it in 10 turns or fewer. We'll tell you if your guess was
      too high or too low.`;
    console.log(randomNumber);
    document.querySelector(".GuessInput").removeAttribute("disabled");
    document.querySelector(".tries").removeAttribute("hidden");
    document.querySelector(".GuessSumbit").textContent = "Check";
    gamestarted = true;
  } else {
    GuessTheNumber();
  }
}
function GuessTheNumber() {
  let guessnumber = document.querySelector(".GuessInput").value;
  if (randomNumber == guessnumber) {
    tries++;
    EndThegame();
  } else if (randomNumber > guessnumber) {
    tries++;
    document.querySelector(".message").textContent = "too Low";
    document.querySelector(".tries").textContent = "Tries = " + String(tries);
  } else if (randomNumber < guessnumber) {
    tries++;
    document.querySelector(".message").textContent = "too High";
    document.querySelector(".tries").textContent = "Tries = " + String(tries);
  }
}
function EndThegame() {
  document.querySelector(
    ".message"
  ).textContent = `You Won it took ${tries} tries`;
  gamestarted = false;
  document.querySelector(".GuessInput").setAttribute("disabled", "true");
  document.querySelector(".tries").setAttribute("hidden", "true");
  document.querySelector(".GuessInput").value = 0;
  document.querySelector(".GuessSumbit").textContent = " New Game ? ";
}
document.querySelector(".GuessSumbit").addEventListener("click", StartTheGame);
