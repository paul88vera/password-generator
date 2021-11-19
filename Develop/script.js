// Assignment code here
// lowercase letter array
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

// Number array
var numberList = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
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

 // this will only allow random numbers 0-9
  var randChar = specialChar[Math.floor(Math.random() * specialChar.length)];
  console.log(randChar);

  // this will only allow random numbers 0-9
  var randNum = Math.floor(Math.random() * 9);
  console.log(randNum);

  // this will only allow random numbers 0-9
  var randUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  console.log(randUpper);

  // this will only allow random numbers 0-9
  var randLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  console.log(randLower);


var generatePassword = function(){
 
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
