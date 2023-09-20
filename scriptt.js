// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice images
function updateDiceImages() {
    // const dice1 = document.getElementById("dice1");
    // const dice2 = document.getElementById("dice2");
    // const dice3 = document.getElementById("dice3");
    // const dice4 = document.getElementById("dice4");
    // const dice5 = document.getElementById("dice5");
    // const dice6 = document.getElementById("dice6");
    const player1 = rollDice();
    playe.addEventListener("click",() => {

    })
    const player2 = rollDice();
    // const roll1 = rollDice();
    // const roll2 = rollDice();
    // const roll3 = rollDice();
    // const roll4 = rollDice();
    // const roll5 = rollDice();
    // const roll6 = rollDice();

    // dice1.src = `dice-${roll1}.png`;
    dice1.src = `${player1}.png`;
    // dice2.src = `${player1}.png`;
    // dice3.src = `${player1}.png`;
    // dice4.src = `${player1}.png`;
    // dice5.src = `${player1}.png`;
    // dice6.src = `${player1}.png`;
    // dice2.src = `dice-${roll2}.png`;
    dice1.src = `${player2}.png`;
    // dice2.src = `${player2}.png`;
    // dice3.src = `${player2}.png`;
    // dice4.src = `${player2}.png`;
    // dice5.src = `${player2}.png`;
    // dice6.src = `${player2}.png`;
    // dice3.src = `dice-${roll3}.png`;
    // dice4.src = `dice-${roll4}.png`;
    // dice5.src = `dice-${roll5}.png`;
    // dice6.src = `dice-${roll6}.png`;

    // return [roll1, roll2,roll3,roll4,roll5,roll6];
    return [player1,player2];
}

// Function to determine the winner and display the result
function determineWinner() {
    
    const [player1,player2] = updateDiceImages();
    // const [roll1, roll2,roll3,roll4,roll5,roll6] = updateDiceImages();
    const resultText = document.getElementById("result");

    if (player1 > player2) {
        resultText.textContent = "Player 1 wins!";
    } else if (player1 < player2) {
        resultText.textContent = "Player 2 wins!";
    } else {
        resultText.textContent = "It's a tie!";
    }
}

// Event listener for the roll button
document.getElementById("roll-button").addEventListener("click", determineWinner);




// Function to generate a random number between 1 and 6
// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// Function to update the dice images
// function updateDiceImages() {
//     const dice1 = document.getElementById("dice1");
//     const dice2 = document.getElementById("dice2");
//     const roll1 = rollDice();
//     const roll2 = rollDice();

//     dice1.src = `dice-${roll1}.png`;
//     dice2.src = `dice-${roll2}.png`;

//     return [roll1, roll2];
// }

// Function to determine the winner and display the result
// function determineWinner() {
//     const [roll1, roll2] = updateDiceImages();
//     const resultText = document.getElementById("result");

//     if (roll1 > roll2) {
//         resultText.textContent = "Player 1 wins!";
//     } else if (roll1 < roll2) {
//         resultText.textContent = "Player 2 wins!";
//     } else {
//         resultText.textContent = "It's a tie!";
//     }
// }

// Event listener for the roll button
// document.getElementById("roll-button").addEventListener("click", determineWinner);
