// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordCriteria = {
    length: 0,
    characterBase: [],
  };
  let lengthInput = prompt(
    "Hello! How many characters would you like your password to contain?"
  );
  if (lengthInput < 8 || lengthInput > 128) {
    alert(
      "Please make sure that the number is between 9 and 128 characters. Click on Generate Password again."
    );
    return;
  } else if (isNaN(lengthInput)) {
    alert("Please enter a number. Click on Generate Password again.");
    return;
  } else {
    passwordCriteria.length = lengthInput;
  }

  var userWantsLowercase = confirm(
    "Would you like your password to contain lowercase letters?"
  );
  if (userWantsLowercase === true) {
    passwordCriteria.characterBase =
      passwordCriteria.characterBase.concat(lowerCasedCharacters);
  }

  var userWantsUppercase = confirm(
    "Would you like your password to contain uppercase letters?"
  );

  if (userWantsUppercase === true) {
    passwordCriteria.characterBase =
      passwordCriteria.characterBase.concat(upperCasedCharacters);
  }
  var userWantsNumbers = confirm(
    "Would you like your password to contain numbers?"
  );

  if (userWantsNumbers === true) {
    passwordCriteria.characterBase =
      passwordCriteria.characterBase.concat(numericCharacters);
  }

  var userWantsSpecialCharacters = confirm(
    "Would you like your password to contain special characters?"
  );

  if (userWantsSpecialCharacters === true) {
    passwordCriteria.characterBase =
      passwordCriteria.characterBase.concat(specialCharacters);
  }

  //Checks that the user has selected at least one type of character

  if (
    userWantsLowercase === false &&
    userWantsNumbers === false &&
    userWantsSpecialCharacters === false &&
    userWantsUppercase === false
  ) {
    alert(
      "You must select at least one type of character. Please click on the Generate Password button again"
    );
    return;
  }

  return passwordCriteria;
}
// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var passwordCriteria = getPasswordOptions();
  if (passwordCriteria === undefined) {
    return "Invalid password options!";
  }
  var userPassword = "";
  for (var i = 0; i < passwordCriteria.length; i++) {
    var randomIndex = Math.floor(
      Math.random() * passwordCriteria.characterBase.length
    );
    userPassword += passwordCriteria.characterBase[randomIndex];
  }
  return userPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = userPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
