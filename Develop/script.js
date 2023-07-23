// Assignment code here

// Declare arrays needed to provide sources for the password characters 

var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var mixedAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var stringNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "|", "}", "~"];

// Declare and initialize user preference variables with default values

var desiredPasswordLenght = 64;
var letterType = "both";
var special = true;
var numbers = true;

// A function that takes an array as a parameter and retrieves a random item from it

function randomItemFromArray(x) {
return x[Math.ceil(Math.random() * (x.length -1))];
}

// A function taking into account the user preferences and retrieving a random relevant letter for password generation
function randomRelevantLetter() {
  var letter = "";
  if (letterType === "both") {
    letter = randomItemFromArray(mixedAlphabet);
  }
  else if (letterType === "lower") {
    letter = randomItemFromArray(lowerCaseAlphabetAlphabet);
  }
  else if (letterType === "upper") {
    letter = randomItemFromArray(upperCaseAlphabet);
  }
  return letter;
}

// A function taking into account the user preferences and retrieving a random relevant character for password generation
function generateRelevantRandomItem () {
var x = Math.random();
var item = "";
if (x < 0.34) {
  item = randomRelevantLetter();
}
else if ((x >= 0.34) && (x < 0.67)) {
  item = randomItemFromArray(stringNumbers);
}
else if (x >= 0.67) {
  item = randomItemFromArray(specialCharacters);
}
return item;
}

// A function taking into account the user preferences and retrieving a random relevant password
function generatePassword () {
  var password = "";
for (i = 0; i < desiredPasswordLenght; i++) {
password = password + generateRelevantRandomItem();
}
return password
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











var test = randomItemFromArray(lowerCaseAlphabet);

console.log(test);
console.log(lowerCaseAlphabet.length)
console.log(randomRelevantLetter());
console.log(generateRelevantRandomItem());
console.log(generatePassword());