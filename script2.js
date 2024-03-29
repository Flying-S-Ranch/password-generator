// DEPENDENCIES
var generateBtn = document.querySelector("#generate");

// DATA / STATE
var characters = [
    "abcdefghijklmnopqrstuvwxyz".split(""),
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")
]

var isChar = ['isLowercase', 'isUppercase', 'isNumbers', 'isSpecialChars'];
var whatChars = ["lowercase", "uppercase", "numerals", "special characters"];

var howLong;
var charArray = [];
var password

// FUNCTIONS
// Write password to the #password input
function getUserLength() {
    howLong = prompt("How many characters would you like in your password? Enter a number between 8 and 128");
    if (howLong >=8 && howLong <=128) {
        console.log(howLong)
        return howLong
    } else {
        alert("Your password length was too long or too short. Please enter a number between 8 and 128");
        userLength();
    }
}

function getCharacters() {
    for(i = 0; i < isChar.length; i++) {
        isChar[i] = confirm("Would you like to include " + whatChars[i] + "? Choose OK for yes and 'Cancel' for no.")
        if (isChar[i]) {
            console.log(characters[i]);
            charArray = charArray.concat(characters[i])
        }
      }
    
      if(!isChar[0] && !isChar[1] && !isChar[2] && !isChar[3] ) {
        alert("Please choose at least one type of character for your password");
        getCharacters();
      } else {
        console.log(charArray)
      }
}

function generateCharacters () {
    // for each place in the user-chosen length (userLength)
    wordArray = [];
    for (i = 0; i < howLong; i++) {
        // generate a random number according to the number of characters chosen by the user (charArray.length)
        var random = Math.floor(Math.random()*charArray.length)
        var newChar = charArray[random]
        // return the character value corresponding to the generated random number 'r' (charArray[r])
        wordArray.push(newChar)
    }
    // return full password
    password = wordArray.join("")
    console.log(password)
}

function generatePassword() {
    // determine the length of the password
    getUserLength()
    // determine the character types used in the password 
    // create an array of the selected character sets
    getCharacters()
    // fill in each character with the chosen characters array
    generateCharacters()
    charArray = [];
}

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// USER INTERACTIONS
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// INITIALIZATIONS