// Assignment Code
var generateBtn = document.querySelector("#generate");
// Need variables for lowercase, uppercase, numbers, and special characters
var lowerCase = []
var upperCase = []
var numbers = []
var specialChars = []
var passwordLength = []




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Generate 5 prompts for user - password length, lowercase, uppercase, numeric, and/or special char
passwordLength prompt("Please choose password length between 8 and 128 characters.")
prompt("Include lowercase letters?")
prompt("Include uppercase letters?")
prompt("Include numbers?")
prompt("Include special characters?")

// Need if/else statements for user prompt selections 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~