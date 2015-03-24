var lbl;
var playerTxt;
var compTxt;

var compScore = 0;
var playerScore = 0;

window.onload = function () {
	lbl = document.getElementById("lblTxt");
	playerTxt = document.getElementById("playerScoreTxt");
	compTxt = document.getElementById("compScoreTxt");
};

function play(choice) { 
	var compChoice;
	
	switch (Math.floor(Math.random() * 3 + 1)) {
	case 1: 
		compChoice = "rock";
		break;
	case 2:
		compChoice = "paper";
		break;
	case 3:
		compChoice = "scissors";
		break;
	}
	
	if (compChoice == choice) {
		tie(choice, compChoice);
 	}

 	else if (choice == "rock") { 
		if (compChoice == "paper") 
			compWins(choice, compChoice);
		else 
			userWins(choice, compChoice);
	 }

	 else if (choice == "scissors") { 
		 if (compChoice == "rock") 
			 compWins(choice, compChoice); 
		 else 
			 userWins(choice, compChoice);
	 }

 	else if (choice == "paper") { 
	 	if (compChoice == "scissors") 
		 	compWins(choice, compChoice);
	 	else 
			userWins(choice, compChoice);
	} 
}

function compWins(choice, compChoice) {
	lbl.innerHTML = "You chose " + choice + ". The computer chose " + compChoice + ". The computer wins..";
	compScore++;
	compTxt.innerHTML = "Computer score: " + compScore;
}

function userWins(choice, compChoice) {
	lbl.innerHTML = "You chose " + choice + ". The computer chose " + compChoice + ". You win!";
	playerScore++;
	playerTxt.innerHTML = "Your score: " + playerScore;
}

function tie(choice, compChoice) {
	lbl.innerHTML = "You chose " + choice + ". The computer chose " + compChoice + ". It was a tie.";
}


function reset() {
	lbl.innerHTML = "Play a game of Rock, Paper, Scissors against the computer!";
	
	playerScore = 0;
	playerTxt.innerHTML = "Your score: " + playerScore;
	
	compScore = 0;
	compTxt.innerHTML = "Computer score: " + compScore;
}