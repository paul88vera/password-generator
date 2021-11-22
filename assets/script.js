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

/* ARRAY OF RANDOMIZED INPUT SELECTIONS */

var randomArray = [
  // 0 - this will allow random selections from specialChar array
  specialChar[Math.floor(Math.random() * specialChar.length)],
  
  // 1 - this will only allow random numbers 0-9
  Math.floor(Math.random() * 9),
  
  // 2 - this will allow random selections from the uppercaseLetters array
  uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)],

  // 3 - this will allow random selections from the lowercaseLetters array
  lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)],

];

/* GENERATE PASSWORD */

// Password Length Verification Function
var passwordLength = function(){

    var passwordTotal = prompt("How long would you like your password to be? 4-40 Characters");

    if  (passwordTotal === "" || passwordTotal === null) {
      window.alert("You need to provide a valid number. Please try again. 4-40 Characters");
      return passwordLength();
    }
    else if (passwordTotal >= 4 && passwordTotal <= 40) {
      console.log("Your password total length is: " + passwordTotal);
    }
    else {
      window.alert("You need to provide a valid number. Please try again. 4-40 Characters");
      return passwordLength();
    }

  };


generatePassword = function(){
  
  passwordLength(); 

  // Criteria
  // asks user to select if special characters are wanted in generator
  var confirmSpecCharacters = window.confirm("Would you like to have special characters in your password?");
  if (confirmSpecCharacters === true){
    console.log("You selected to have special characters added to your password.");
  } else {
    console.log("Got it! No special characters.");
  }

  // asks user to select if numbers are wanted in generator
  var confirmNumbers = window.confirm("Would you like to have numbers in your password?");
  if (confirmNumbers === true) {
    console.log("You selected to have numbers added to your password.");
  } else {
    console.log("Got it! No numbers.");
  }

  // asks user to select if upperCase letters are wanted in generator
  var confirmUpperCase = window.confirm("Would you like to have uppercase letters in your password?");
  if (confirmUpperCase === true) {
    console.log("You selected to have uppercase characters added to your password.");
  } else {
    console.log("Got it! No uppercase characters.");
  }

  // asks user to select if lowercase letters are wanted in generator
  var confirmLowerCase = window.confirm("Would you like to have lowercase letters in your password?");
  if (confirmLowerCase === true) {
    console.log("You selected to have lowercase characters added to your password.");
  } else {
    console.log("Got it! No lowercase characters.");
  }

  var confirmPassword = window.confirm("Are you ready to receive your password?");
  if (confirmPassword === true) {
    console.log("Here ya go!");
    /*
    * function goes here to call completed password
     */
  } else {
    window.alert("Not a problem, maybe next time!");
  }

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
