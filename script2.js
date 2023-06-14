// DEPENDENCIES
var generateBtn = document.querySelector("#generate");

// DATA / STATE
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")

var howLong

// FUNCTIONS
// Write password to the #password input
function userLength() {
    howLong = prompt("How many characters would you like in your password? Enter a number between 8 and 128");
    if (howLong >=8 && howLong <=128) {
        console.log(howLong)
    } else {
        alert("Your password length was too long or too short. Please enter a number between 8 and 128");
        userLength();
    }
}

function generateCharacters() {
    for(let i = 0; i < howLong + 1; i++) {

    }
}

function generatePassword() {
    // determine the length of the password
    userLength()
    // determine the character types used in the password
    // create an array of the selected character sets
    // fill in each character with the chosen characters array
    generateCharacters()
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// USER INTERACTIONS
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// INITIALIZATIONS