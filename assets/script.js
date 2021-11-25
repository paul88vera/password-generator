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

var characters = [""];

/* PROMPTS USER FOR PASSWORD CRITERIA */

var promptCriteria = function() {

  // asks user to select if special characters are wanted in generator
  var confirmSpecCharacters = window.confirm("Would you like to have special characters in your password?");
  if (confirmSpecCharacters){
    console.log("You selected to have special characters added to your password.");
    confirmSpecCharacters === true;

    // pushes array to characters array to be randomized
    characters.concat(specialChar);
    console.log(characters);

  } else {
    confirmSpecCharacters === false;
    console.log("Got it! No special characters.");
  }

  // asks user to select if numbers are wanted in generator
  var confirmNumbers = window.confirm("Would you like to have numbers in your password?");
  if (confirmNumbers) {
    console.log("You selected to have numbers added to your password.");
    confirmNumbers === true;

    // pushes array to characters array to be randomized
    characters.concat(numbers);
    console.log(characters);

  } else {
    confirmNumbers === false;
    console.log("Got it! No numbers.");
  }

  // asks user to select if upperCase letters are wanted in generator
  var confirmUpperCase = window.confirm("Would you like to have uppercase letters in your password?");
  if (confirmUpperCase) {
    console.log("You selected to have uppercase characters added to your password.");
    confirmUpperCase === true;

    // pushes array to characters array to be randomized
    characters.concat(uppercaseLetters);
    console.log(characters);

  } else {
    confirmUpperCase === false;
    console.log("Got it! No uppercase characters.");
  }

  // asks user to select if lowercase letters are wanted in generator
  var confirmLowerCase = window.confirm("Would you like to have lowercase letters in your password?");
  if (confirmLowerCase) {
    console.log("You selected to have lowercase characters added to your password.");
    confirmLowerCase === true;

    // pushes array to characters array to be randomized
    characters.concat(lowercaseLetters);
    console.log(characters);

  } else {
    confirmLowerCase === false;
    console.log("Got it! No lowercase characters.");
  }
  
  var confirmPassword = window.confirm("Are you ready to receive your password?");
  if (confirmPassword) {
    console.log("Here ya go!");
    confirmPassword === true;
  } else {
    confirmPassword ===  false;
    window.alert("Not a problem, maybe next time!");
  }

};

/* GENERATES PASSWORD */

var generatePassword = function(){
  var passwordTotal = prompt("How long would you like your password to be? 8 - 128 Characters");
  if (passwordTotal === "" || passwordTotal === null) {
    window.alert("You need to provide a valid number. Please try again. 8 - 128 Characters");
    return promptCriteria();
  }
  else if (passwordTotal >= 8 && passwordTotal <= 128) {
    console.log("Your password total length is: " + passwordTotal);
    return promptCriteria();
  }


  var passwordTotalLength = passwordTotal;
  var pass = "";
  
  for (var i=0; i < passwordTotalLength; i++) {
    var randomNumber = characters[Math.floor(Math.random() * characters.length)];
    var pass = characters.push(randomNumber, randomNumber);
    
  }

  document.getElementById("password").value = pass;
  return pass;

};

// characters.push(numbers);
// characters.push(specialChar);
// characters.push(uppercaseLetters);
// characters.push(lowercaseLetters);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
