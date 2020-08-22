/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 25;
if (votingAge > 18) {
	console.log(true);
} else {
	console.log('Sorry, you are not old enough to vote');
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var captain = null;
var newCaptain = 'Kirk';

if (newCaptain != captain) {
	captain = newCaptain;
}

console.log(captain);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var year = Number('1999');

console.log(year);

//Task d: Write a function to multiply a*b

function multi(a, b) {
	return a * b;
}
multi(2, 78);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(myAge) {
	myAge = myAge * 7;
	console.log(`Your age in dog years is ${myAge} years old.`);
	return myAge;
}
dogYears(23);

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(dogWeight, dogAge) {
	if (dogAge >= 1 && dogWeight < 6) {
		return dogWeight * 0.05;
	} else if (dogAge >= 1 && dogWeight >= 6 && dogWeight <= 10) {
		return dogWeight * 0.04;
	} else if (dogAge >= 1 && dogWeight >= 11 && dogWeight <= 15) {
		return dogWeight * 0.03;
	} else if (dogAge >= 1 && dogWeight > 15) {
		return dogWeight * 0.02;
	} else if (dogAge >= (1 / 12) * 2 && dogAge <= (1 / 12) * 4) {
		return dogWeight * 0.1;
	} else if (dogAge >= (1 / 12) * 4 && dogAge <= (1 / 12) * 7) {
		return dogWeight * 0.05;
	} else if (dogAge >= (1 / 12) * 7 && dogAge <= 1) {
		return dogWeight * 0.04;
	}
}

dogFeeder(15, 1);

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

const choices = ['rock', 'paper', 'scissors'];
let cpuChoice = Math.floor(Math.random() * 3);
let playerChoice = 'paper';

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

function rpsGame(playerChoice) {
	if (playerChoice === 'scissors' && cpu(cpuChoice) === 'rock') {
		return 'You Lose!';
	} else if (playerChoice === 'rock' && cpu(cpuChoice) === 'scissors') {
		return 'You Win!';
	} else if (playerChoice === 'paper' && cpu(cpuChoice) === 'rock') {
		return 'You Win!';
	} else if (playerChoice === 'scissors' && cpu(cpuChoice) === 'paper') {
		return 'You Win!';
	} else if (playerChoice === 'rock' && cpu(cpuChoice) === 'paper') {
		return 'You Lose!';
	} else if (playerChoice === 'paper' && cpu(cpuChoice) === 'scissors') {
		return 'You Lose!';
	} else {
		return 'Tie';
	}
}

rpsGame(playerChoice);

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kiloConverter() {}

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corresponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalc(grade) {
	if (grade >= 90) {
		return console.log('A');
	} else if (grade >= 80 && grade < 90) {
		return console.log('B');
	}
}

gradeCalc();

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's training kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Scissors further
//update your rock papers scissors code below to take a prompt from a user using the window object
