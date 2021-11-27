/* CHARACTERS */
// uppercase letter
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",'V','W','X','Y',"Z"];

// lowerCase
var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// special character
var specialChar = ["!","@","#","$","%","^","&","*","(",")",":",";",",","<",".",">","/","?","{","}","[","]","|","\'","\"","-","_","+","=","`","~"];

// numbers
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

// empty array -- where the other arrays will be pushed to
var characters = [];

/* GENERATE PASSWORD FUNCTION*/
var generatePassword = function(){

/* PROMPTS USER FOR PASSWORD CRITERIA */
while (!passwordTotal) {
  var passwordTotal = prompt("What is your password LENGTH? 8 - 128 Characters");
  if (passwordTotal === "" || passwordTotal === null) {
    window.alert("You need to provide a valid number. Please try again. 8 - 128 Characters");
    return "I bet you didn't ask nice enough... Click Generate Password.";
  }
  else if (passwordTotal >= 8 && passwordTotal <= 128) {
    window.alert("Your password will be " + passwordTotal + " characters long! Woohoo!");
    console.log("Your password has a total of: \n" + passwordTotal + " characters")
  } 
  else {
    window.alert("You need to provide a valid number. Please try again. 8 - 128 Characters");
    return "Hmm.. something is not right with your selection. Try clicking the Generate Password button again.";
  }
};

// asks user to select if special characters are wanted in generator
var confirmSpecCharacters = window.confirm("Would you like to have SPECIAL CHARACTERS in your password?");
  if (confirmSpecCharacters === true){
  console.log("You selected to have SPECIAL CHARACTERS added to your password.");
  confirmSpecCharacters === true;
  // pushes array to characters array to be randomized
  characters.push(...specialChar);
  } else if (confirmSpecCharacters === false) {
  confirmSpecCharacters === false;
  console.log("Got it! No SPECIAL CHARACTERS.");
  }

// asks user to select if numbers are wanted in generator
var confirmNumbers = window.confirm("What about NUMBERS?");
  if (confirmNumbers === true) {
  console.log("You selected to have NUMBERS added to your password.");
  confirmNumbers === true;
  // pushes array to characters array to be randomized
  characters.push(...numbers);
  } else if (confirmNumbers === false) {
  confirmNumbers === false;
  console.log("Got it! No NUMBERS.");
  }

// asks user to select if upperCase letters are wanted in generator
var confirmUpperCase = window.confirm("How do you feel about UPPERCASE LETTERS?");
  if (confirmUpperCase === true) {
  console.log("You selected to have UPPERCASE CHARACTERS added to your password.");
  confirmUpperCase === true;
  // pushes array to characters array to be randomized
  characters.push(...uppercaseLetters);
  } else if (confirmUpperCase === false) {
  confirmUpperCase === false;
  console.log("Got it! No UPPERCASE LETTERS.");
  }

// asks user to select if lowercase letters are wanted in generator
var confirmLowerCase = window.confirm("What about LOWERCASE LETTERS?");
  if (confirmLowerCase === true) {
  console.log("You selected to have LOWERCASE LETTERS added to your password.");
  confirmLowerCase === true;

  // pushes array to characters array to be randomized
  characters.push(...lowercaseLetters);
  } else if (confirmLowerCase === false) {
  confirmLowerCase === false;
  console.log("Got it! No LOWERCASE CHARACTERS.");
  }

var confirmPassword = window.confirm("Are you ready to receive your password?");
  if (confirmPassword === true) {
  console.log("Here ya go!");
  confirmPassword === true;
  } else if (confirmPassword === false){
  confirmPassword ===  false;
  window.alert("Not a problem, maybe next time!");
  return "You know you want a password... Try again!";
  }

// password randomizer & output
var length = passwordTotal;
var pass = "";

  for (let i = 0; i < length; i++) {
    var randPass = characters[Math.floor(Math.random() * characters.length)];
    pass += randPass;
  };
  
    return pass;
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // this is resetting the array before each click
  characters = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
