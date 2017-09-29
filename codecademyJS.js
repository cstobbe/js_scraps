//Kelvin Weather
//const kelvin = prompt('What is the Kelvin temperature today?');
//Taking Kelvin and converting it to celsius
//const celsius = kelvin-273;
//taking Celsius and converting to farenheit
//let farenheit = celsius * (9/5) + 32;
//farenheit = Math.floor(farenheit);

//console.log("The temperature is " + farenheit + " degrees farenheit.");

//function declarations
function isGreaterThan (numberOne,numberTwo) {
  if ( numberOne > numberTwo) {
    return true;
  }
  else {
    return false;
  }
}
isGreaterThan(5,66);


//rockPaperScissors
const getUserChoice = userInput => {
 userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  }
  else {
    console.log('Not a valid argument!!!');
  }
};
const getComputerChoice = () => {
  Math.Floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  }
  else if (randomNumber === 1) {
    return 'paper';
  }
  else if (randomNumber === 2) {
    return 'scissors';
  }

}
