function computerPlay() {
	randomWord = Math.floor(Math.random() * 3) + 1;
	if (randomWord === 1) {
		console.log("Rock")
	} else if (randomWord === 2) {
		console.log("Paper")
	} else if (randomWord === 3) {
		console.log("Scissors")
	} else {
		console.log("Fatal Error..")
	}

}

function playGame(playerSelection, computerSelection) {
	playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
	computerSelection = computerPlay();
	if ((playerSelection === "rock" && computerSelection === 3) ||
		(playerSelection === "paper" && computerSelection === 1) ||
		(playerSelection === "scissors" && computerSelection === 2)) {
		console.log("Winner!");
	} else if ((playerSelection === "rock" && computerSelection === 2) ||
			   (playerSelection === "paper" && computerSelection === 3) ||
			   (playerSelection === "scissors" && computerSelection === 1)) {
		console.log("Loser!");
	} else if (playerSelection === computerSelection) {
		console.log("Draw!")
	} else {
		return playGame();
	}
}

