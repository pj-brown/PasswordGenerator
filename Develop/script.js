// USE CASES
// 1) - USER LOADS THE PAGE
  // HTML/CSS Loads 

// 2) - USER SELECTS 'GENERATE PASSWORD' BUTTON
  // Separate prompts are given to the user to include in the password for:
    // a) - password length
    // b) - lowercase
    // c) - uppercase
    // d) - numbers
    // e) - special characters
  // Password length must be chosen + one additional prompt
  // If no or only one selections are made (loop back to beginning of prompts?)

// 3) - PASSWORD VARIABLES ARE SELECTED - SCRIPT GENERATES PASSWORD BASED ON USER SELECTIONS
  // Password is given via alert OR
  // written to the page

// VARIABLES
  // Declare variables for storing the following:
    // a) - password length

    // b) - lowercase
    // c) - uppercase
    // d) - numbers
    // e) - special characters

// Assignment Code
var generateBtn = document.querySelector("#generate");

// FUNCTIONS
// Write password to the #password input (writePassword function responsible for choosing a random password and rendering it to the page [as a string? or is a variable determined by the function?])
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// EVENT LISTENERS
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






