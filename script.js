// DEPENDENCIES
var generateBtn = document.querySelector("#generate");

// DATA
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const numbers= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")

var charArrays = [lowercase, uppercase, numbers, specialChar];

var howLong;

var isChar = ['isLowercase', 'isUppercase', 'isNumbers', 'isSpecialChar'];

// var isLowercase;
// var isUppercase;
// var isNumbers;
// var isSpecialChar;
var emptyChar = [];
var chosenChar = [];



//FUNCTIONS
function userLength() {
 let howLong = prompt("How many characters would you like in your password? Enter a number between 8 and 128");

if (howLong >=8 && howLong <=128) {
    console.log(howLong)
} else {
    alert("Your password length was too long or too short. Please enter a number between 8 and 128");
    userLength();
}
}
  
function chooseCharacters() {

  isChar[0] = confirm("Would you like to include lowercase characters? Choose OK for yes and 'Cancel' for no.")
  console.log(isChar[0]);

  isChar[1] = confirm("Would you like to include uppercase characters? Choose OK for yes and 'Cancel' for no.")
  console.log(isChar[1]);

  isChar[2] = confirm("Would you like to include numeral characters? Choose OK for yes and 'Cancel' for no.")
  console.log(isChar[2]);

  isChar[3] = confirm("Would you like to include special characters? Choose OK for yes and 'Cancel' for no.")
  console.log(isChar[3]);

  // for (i=0; i<isChar.length; i++) {

  // }

  if(isChar[0]) {
    chosenChar = emptyChar.concat(charArrays[0]);
    console.log(chosenChar)
  }
}

function generatePassword() {
  console.log("generating password");
  //Ask user how long they want their password to be
    //Store user length within a variable
  userLength();
  
  //Ask user what type of characters they want to use
    //Store user characters within a variable
  chooseCharacters();
  //Use chosen length and characters to make a password
    //Create an array with the chosen character sets
    //Create a for loop using the user's chosen lengths
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()

  // CREATE
  var passwordText = document.querySelector("#password");
  // BUILD
  passwordText.value = password;
  // PLACE
}

// USER INTERACTIONS
generateBtn.addEventListener("click", writePassword);
