const choices = ['rock', 'paper', 'scissors'];
let cpuChoice = Math.floor(Math.random() * 3);
let playerChoice = prompt('Make your move!').toLowerCase();

if (playerChoice === choices) {
	playerChoice === playerChoice;
}

function cpu(cpuChoice) {
	if (cpuChoice === 0) {
		return choices[0];
	} else if (cpuChoice === 1) {
		return choices[1];
	} else {
		return choices[2];
	}
}
cpu(cpuChoice);

const win = 'You Win! &#128513';
const lose = 'You lose! &#128547';
const tie = 'Tie!';

function rpsGame(playerChoice) {
	if (playerChoice === 'scissors' && cpu(cpuChoice) === 'rock') {
		return lose;
	} else if (playerChoice === 'rock' && cpu(cpuChoice) === 'scissors') {
		return win;
	} else if (playerChoice === 'paper' && cpu(cpuChoice) === 'rock') {
		return win;
	} else if (playerChoice === 'scissors' && cpu(cpuChoice) === 'paper') {
		return win;
	} else if (playerChoice === 'rock' && cpu(cpuChoice) === 'paper') {
		return lose;
	} else if (playerChoice === 'paper' && cpu(cpuChoice) === 'scissors') {
		return lose;
	} else {
		return tie;
	}
}

rpsGame(playerChoice);

document.getElementById('results').innerHTML = rpsGame(playerChoice);
document.getElementById('computerPlayed').innerHTML = cpu(cpuChoice);
