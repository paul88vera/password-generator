// Assignment code here

/* CHARACTER ARRAYS */

// uppercase letter array
var uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// lowerCase array
var lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"

];

// special character array
var specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  ":",
  ";",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  "'",
  '"',
  "-",
  "_",
  "+",
  "=",
  "`",
  "~",
  " "
];

/* RANDOMIZED VARIABLES */

// this will allow random selections from specialChar array
var randChar = specialChar[Math.floor(Math.random() * specialChar.length)];
console.log(randChar);

// this will only allow random numbers 0-9
var randNum = Math.floor(Math.random() * 9);
console.log(randNum);

// this will allow random selections from the uppercaseLetters array
var randUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
console.log(randUpper);

// this will allow random selections from the lowercaseLetters array
var randLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
console.log(randLower);

/* GENERATE PASSWORD */

var generatePassword = function(){
  // asks user to select if special characters are wanted in generator
  var confirmSpecCharacters = window.confirm("Would you like to have special characters in your password?");

  // asks user to select if numbers are wanted in generator
  var confirmNumbers = window.confirm("Would you like to have numbers in your password?");

  // asks user to select if upperCase letters are wanted in generator
  var confirmUpperCase = window.confirm("Would you like to have uppercase letters in your password?");

  // asks user to select if lowercase letters are wanted in generator
  var confirmLowerCase = window.confirm("Would you like to have lowercase letters in your password?")

  // how long should the password be from 4-40 characters
  var passwordLength = window.prompt("How long would you like your password to be?");

};



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
