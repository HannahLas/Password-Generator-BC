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

let userObject = {};

// Function to prompt user for password options
function getPasswordOptions() {
  let userInput = prompt(
    "Hello! How many characters would you like your password to contain?"
  );
  userObject.data = userInput;
  console.log(userInput);

  if (userInput < 8 || userInput > 128) {
    alert(
      "Please make sure that the number is between 9 and 128 characters. Click on Generate Password again."
    );
    return;
  } else if (isNaN(userInput)) {
    alert("Please enter a number. Click on Generate Password again.");
    return;
  } else {
    userObject.data = userInput;
  }

  confirm("Would you like your password to contain lowercase letters?");
  confirm("Would you like your password to contain uppercase letters");
  confirm("Would you like your password to contain numbers?");
  confirm("Would you like your password to contain special characters?");
}

// var arrays = [
//   specialCharacters,
//   numericCharacters,
//   lowerCasedCharacters,
//   upperCasedCharacters,
// ];

// Function for getting a random element from an array
//THE PROBLEM with this is that it only selects one element.
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function getRandom(arr, numberOfElements) {
  var randomElements = [];
  for (let i = 0; i < numberOfElements; i++) {
    var randomElement = getRandom(arr);
    randomElements.push(randomElement);
  }
  return randomElements;
}

var numberOfRandomElements = 3;
var randomElements = getRandom(specialCharacters, numberOfRandomElements);
console.log(randomElements);

// // Checking if it works
// const randomSpecialCharacter = getRandom(specialCharacters);
// console.log(randomSpecialCharacter);
// const randomNumber = getRandom(numericCharacters);
// console.log(randomNumber);

// Function to generate password with user input
function generatePassword() {
  var pwOpts = getPasswordOptions();
}

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
