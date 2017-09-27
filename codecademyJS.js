//Kelvin Weather
const kelvin = prompt('What is the Kelvin temperature today?');
//Taking Kelvin and converting it to celsius
const celsius = kelvin-273;
//taking Celsius and converting to farenheit
let farenheit = celsius * (9/5) + 32;
farenheit = Math.floor(farenheit);
console.log("The temperature is " + farenheit + " degrees farenheit.");
