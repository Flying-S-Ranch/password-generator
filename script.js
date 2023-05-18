// DEPENDENCIES
var generateBtn = document.querySelector("#generate");

// DATA

//FUNCTIONS


function generatePassword() {
  console.log("generating password");
  //Ask user how long they want their password to be
  //Store user length within a variable
  //Ask user what type of characters they want to use
  //Store user characters within a variable
  //Use chosen length and characters to make a password
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
