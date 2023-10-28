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

// Array of numeric characters to be included in the password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in the password
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

// Array of uppercase characters to be included in the password
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(
    prompt("Enter the length of the password (8-128 characters):")
  );
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return null;
  }

  var useLowercase = confirm("Click Ok to include lowercase letters?");
  var useUppercase = confirm("CLick Ok to include uppercase letters?");
  var useNumbers = confirm("Click Ok to include numbers?");
  var useSpecialChars = confirm("Click Ok to include special characters?");

  if (!useLowercase && !useUppercase && !useNumbers && !useSpecialChars) {
    alert("You must select at least one character type.");
    return null;
  }

  return {
    length: length,
    useLowercase: useLowercase,
    useUppercase: useUppercase,
    useNumbers: useNumbers,
    useSpecialChars: useSpecialChars,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

// Function to generate password with user input
function generatePassword() {
  var input = getPasswordOptions();
  if (!input) return ""; // User canceled or provided invalid input

  var allChars = [];
  if (input.useLowercase) allChars = allChars.concat(lowerCasedCharacters);
  if (input.useUppercase) allChars = allChars.concat(upperCasedCharacters);
  if (input.useNumbers) allChars = allChars.concat(numericCharacters);
  if (input.useSpecialChars) allChars = allChars.concat(specialCharacters);

  var password = "";
  for (var i = 0; i < input.length; i++) {
    password += getRandom(allChars);
  }

  return password;
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
