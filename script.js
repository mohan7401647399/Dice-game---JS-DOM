const roll1 = document.querySelector(".roll1"); //roll button
const roll2 = document.querySelector(".roll2"); //roll button
const playerScore1 = document.querySelector(".player1num"); //scores
const playerScore2 = document.querySelector(".player2num"); //scores
const resetbtn = document.getElementById("reset"); //reset
const btn1 = document.querySelector("#roll-button1");
const btn2 = document.querySelector("#roll-button2");
const play = document.getElementById("play");
const resultText = document.getElementById("result");
const click = document.getElementById("click");

let currentPoint1 = 0;
let currentPoint2 = 0;
playerScore1.textContent = 0;
playerScore2.textContent = 0;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

roll1.addEventListener("click", () => {
  btn1.disabled = true;
  play.innerText = "Player-2 To Play";
  btn2.disabled = false;
  const dice = rollDice();
  dice1.src = `${dice}.png`;
  if (dice !== 0) {
    currentPoint1 += dice;
    playerScore1.textContent = currentPoint1;
    if (currentPoint1 >= 30) {
      resultText.innerText = "Player 1 wins!";
      play.innerText = "Match Results!";
      btn2.disabled = true;
      click.innerText = "Click to start the new Game"
    }
  }
});
roll2.addEventListener("click", () => {
  btn2.disabled = true;
  play.innerText = "Player-1 To Play";
  btn1.disabled = false;
  const dice = rollDice();
  dice1.src = `${dice}.png`;
  if (dice !== 0) {
    currentPoint2 += dice;
    playerScore2.textContent = currentPoint2;
    if (currentPoint2 >= 30) {
      resultText.innerText = "Player 2 wins!";
      play.innerText = "Match Results!";
      btn1.disabled = true;
      click.innerText = "Click to start the new Game"
    }
  }
});

resetbtn.addEventListener("click", () => {
  window.location.reload();
});
