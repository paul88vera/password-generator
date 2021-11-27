// 1. Prompt the user for password criteria
//   a. password length 8 < 128
//   b. lowercase, uppercase, numbers, special characters = arrays
// 2. Validate input
// 3. Display password based on criteria
// 4. Display password to the page. Use return in generatePassword();

/* CHARACTERS */
// uppercase letter
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",'V','W','X','Y',"Z"];

// lowerCase
var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// special character
var specialChar = ["!","@","#","$","%","^","&","*","(",")",":",";",",","<",".",">","/","?","{","}","[","]","|","\'","\"","-","_","+","=","`","~"];

// numbers
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

var characters = [];

/* PROMPT FUNCTION */



/* GENERATES PASSWORD */

var generatePassword = function(){
/* PROMPTS USER FOR PASSWORD CRITERIA */
// var passwordTotal = function() {
//   var passwordTotal = prompt("How long would you like your password to be? 8 - 128 Characters");
//   if (passwordTotal <= 8 && passwordTotal >= 128) {
//     window.alert("You need to provide a valid number. Please try again. 8 - 128 Characters");
//     passwordTotal === false;
//     return passwordTotal();
//   }
//   else if (passwordTotal === "" || passwordTotal === null) {
//     window.alert("You need to provide a valid number. Please try again. 8 - 128 Characters");
//     passwordTotal === false;
//     return passwordTotal();
//   } 
//   else {
//     console.log("Your password total length is: " + passwordTotal);
//     passwordTotal === true;
    
//   }
// };
//   passwordTotal();

var passwordTotal = prompt("How long would you like your password to be? 8 - 128 Characters");
while (passwordTotal <= 8 && passwordTotal >= 128 ) {
  if (passwordTotal === "" || passwordTotal === null) {
    window.alert("You need to provide a valid number. Please try again. 8 - 128 Characters");
    passwordTotal === false;
  } 
  else {
    console.log("Your password total length is: " + passwordTotal);    
  }
};

// asks user to select if special characters are wanted in generator
var confirmSpecCharacters = window.confirm("Would you like to have special characters in your password?");
if (confirmSpecCharacters === true){
console.log("You selected to have special characters added to your password.");
confirmSpecCharacters === true;

// pushes array to characters array to be randomized
characters.push(...specialChar);
console.log(characters);

} else if (confirmSpecCharacters === false) {
confirmSpecCharacters === false;
console.log("Got it! No special characters.");
}

// asks user to select if numbers are wanted in generator
var confirmNumbers = window.confirm("Would you like to have numbers in your password?");
if (confirmNumbers === true) {
console.log("You selected to have numbers added to your password.");
confirmNumbers === true;

// pushes array to characters array to be randomized
characters.push(...numbers);
console.log(characters);

} else if (confirmNumbers === false) {
confirmNumbers === false;
console.log("Got it! No numbers.");
}

// asks user to select if upperCase letters are wanted in generator
var confirmUpperCase = window.confirm("Would you like to have uppercase letters in your password?");
if (confirmUpperCase === true) {
console.log("You selected to have uppercase characters added to your password.");
confirmUpperCase === true;

// pushes array to characters array to be randomized
characters.push(...uppercaseLetters);
console.log(characters);

} else if (confirmUpperCase === false) {
confirmUpperCase === false;
console.log("Got it! No uppercase characters.");
}

// asks user to select if lowercase letters are wanted in generator
var confirmLowerCase = window.confirm("Would you like to have lowercase letters in your password?");
if (confirmLowerCase === true) {
console.log("You selected to have lowercase characters added to your password.");
confirmLowerCase === true;

// pushes array to characters array to be randomized
characters.push(...lowercaseLetters);
console.log(characters);

} else if (confirmLowerCase === false) {
confirmLowerCase === false;
console.log("Got it! No lowercase characters.");
}

var confirmPassword = window.confirm("Are you ready to receive your password?");
if (confirmPassword === true) {
console.log("Here ya go!");
confirmPassword === true;
} else if (confirmPassword === false){
confirmPassword ===  false;
window.alert("Not a problem, maybe next time!");
}

// password randomizer
var length = passwordTotal;
var pass = "";

for (let i = 0; i < length; i++) {
  var randPass = characters[Math.floor(Math.random() * characters.length)];
  pass += randPass;
  
};
  console.log(pass);
  return pass;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  characters = [""];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
