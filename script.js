// DEPENDENCIES
var generateBtn = document.querySelector("#generate");

// DATA
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const numbers= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")

var howLong;

var isChar = ['isLowercase', 'isUppercase', 'isNumbers', 'isSpecialChar'];
var whatChars = ["lowercase", "uppercase", "numerals", "special characters"];

// var isLowercase;
// var isUppercase;
// var isNumbers;
// var isSpecialChar;
var emptyChar = [];
var passwordChars = [];



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
  for(i = 0; i < isChar.length; i++) {
    isChar[i] = confirm("Would you like to include " + whatChars[i] + "? Choose OK for yes and 'Cancel' for no.")
    console.log(isChar[i]);
  }

  if(!isChar[0] && !isChar[1] && !isChar[2] && !isChar[3] ) {
    alert("Please choose at least one type of character for your password");
    chooseCharacters();
  }
}

function combineCharacters() {
  if(isChar[0] && isChar[1] && isChar[2] && isChar[3]) {
    var userChars = emptyChar.concat(lowercase, uppercase, numbers, specialChar);
    console.log(userChars);
  } else if(isChar[0] && isChar[1] && isChar[2] && !isChar[3]) {
    var userChars = emptyChar.concat(lowercase, uppercase, numbers);
    console.log(userChars);
  } else if(isChar[0] && isChar[1] && !isChar[2] && isChar[3]) {
    var userChars = emptyChar.concat(lowercase, uppercase, specialChar);
    console.log(userChars);
  } else if(isChar[0] && !isChar[1] && isChar[2] && isChar[3]) {
    var userChars = emptyChar.concat(lowercase, numbers, specialChar);
    console.log(userChars);
  } else if(!isChar[0] && isChar[1] && isChar[2] && isChar[3]) {
    var userChars = emptyChar.concat(uppercase, numbers, specialChar);
    console.log(userChars);
  } else if(isChar[0] && isChar[1] && !isChar[2] && !isChar[3]) {
    var userChars = emptyChar.concat(lowercase, uppercase,);
    console.log(userChars);
  } else if(isChar[0] && !isChar[1] && !isChar[2] && isChar[3]) {
    var userChars = emptyChar.concat(lowercase, specialChar);
    console.log(userChars);
  } else if(!isChar[0] && !isChar[1] && isChar[2] && isChar[3]) {
    var userChars = emptyChar.concat(numbers, specialChar);
    console.log(userChars);
  } else if(isChar[0] && !isChar[1] && isChar[2] && !isChar[3]) {
    var userChars = emptyChar.concat(lowercase, numbers);
    console.log(userChars);
  } else if(!isChar[0] && isChar[1] && !isChar[2] && isChar[3]) {
    var userChars = emptyChar.concat(uppercase, specialChar);
    console.log(userChars);
  } else if(isChar[0] && !isChar[1] && !isChar[2] && !isChar[3]) {
    var userChars = emptyChar.concat(lowercase);
    console.log(userChars);
  } else if(!isChar[0] && isChar[1] && !isChar[2] && !isChar[3]) {
    var userChars = emptyChar.concat(uppercase);
    console.log(userChars);
  } else if(!isChar[0] && !isChar[1] && isChar[2] && !isChar[3]) {
    var userChars = emptyChar.concat(numbers);
    console.log(userChars);
  } else if(!isChar[0] && !isChar[1] && !isChar[2] && isChar[3]) {
    var userChars = emptyChar.concat(specialChar);
    console.log(userChars);
  }
}

function makePassword() {
  for (i = 0; i <= howLong; i++) {
  var passwordChar = userChars[Math.floor(Math.random()*userChars.length)];
  passwordChars.push(passwordChar)
  }
  console.log(passwordChars);
  let finalPassword = passwordChars.toString();
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
  combineCharacters();

  //Create a for loop using the user's chosen lengths
  makePassword()
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
