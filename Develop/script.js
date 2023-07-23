// Assignment code here

// Declare arrays needed to provide sources for the password characters 

var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var mixedAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var stringNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "|", "}", "~"];

// A function that takes an array as a parameter and retrieves a random item from it

function randomItemFromArray(x) {
return x[Math.ceil(Math.random() * (x.length -1))];
}

// A function taking into account the user preferences and retrieving a random relevant letter for password generation
function randomRelevantLetter() {
  var letter = "";

  if (document.getElementById("caseChoice3").checked) {
    letter = randomItemFromArray(mixedAlphabet);
  }
  else if (document.getElementById("caseChoice1").checked) {
    letter = randomItemFromArray(lowerCaseAlphabet);
  }
  else if (document.getElementById("caseChoice2").checked) {
    letter = randomItemFromArray(upperCaseAlphabet);
  }

  return letter;
}

// A function taking into account the user preferences and retrieving a random relevant character for password generation

function generateRelevantRandomItem () {

var x = Math.random();

var item = "";

if (document.getElementById("specialChoice").checked && document.getElementById("numberChoice").checked) {

if (x < 0.34) {
  item = randomRelevantLetter();
}
else if ((x >= 0.34) && (x < 0.67)) {
  item = randomItemFromArray(stringNumbers);
}
else if (x >= 0.67) {
  item = randomItemFromArray(specialCharacters);
}

}

else if (document.getElementById("specialChoice").checked && !document.getElementById("numberChoice").checked) {

  if (x < 0.5) {
    item = randomRelevantLetter();
  }

  else if (x >= 0.5) {
    item = randomItemFromArray(specialCharacters);
  }

}

else if (!document.getElementById("specialChoice").checked && document.getElementById("numberChoice").checked) {

  if (x < 0.5) {
    item = randomRelevantLetter();
  }

  else if (x >= 0.5) {
    item = randomItemFromArray(stringNumbers);
  }

}

else {

  item = randomRelevantLetter();

}

return item;
}

// A function taking into account the user preferences and retrieving a random relevant password
function generatePassword () {
  var password = "";
for (i = 0; i < numberOfCharacters.value; i++) {
password = password + generateRelevantRandomItem();
}
return password
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Get references to the #numberOfCharacters element
var numberOfCharacters = document.getElementById("numberOfCharacters");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", () => {
  writePassword()
});







