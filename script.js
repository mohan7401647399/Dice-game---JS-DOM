const roll1 = document.querySelector(".roll1");     //roll button
const roll2 = document.querySelector(".roll2");        //roll button
const playerScore1 = document.querySelector(".player1num");         //scores
const playerScore2 = document.querySelector(".player2num");         //scores

let a = 1;
roll1.addEventListener("click", () => {
    a++;
    a = a < 10 ? "0" + a : a;
    playerScore1.innerHTML = a;
})