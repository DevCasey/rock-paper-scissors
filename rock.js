let gameChoice = ['rock', 'paper', 'scissors'];

function computerPlay(playerSelection, computerSelection) {
	let randomNumber = Math.floor(Math.random()*gameChoice.length);
	return gameChoice[randomNumber];
}

function playGame(playerSelection, computerSelection) {
	playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
	computerSelection = computerPlay();
	if (playerSelection === "rock" && computerSelection === "scissors" ||
		playerSelection === "scissors" && computerSelection === "paper"||
		playerSelection === "paper" && computerSelection === "rock") {
			return playerSelection + " beats " + computerSelection + ".";
	} else if (playerSelection === "scissors" && computerSelection === "rock" ||
			   playerSelection === "rock" && computerSelection === "paper" ||
			   playerSelection === "paper" && computerSelection === "scissors") {
				   return playerSelection + " loses to " + computerSelection + ".";
			   } else {
				   return "Draw";
			   }
}