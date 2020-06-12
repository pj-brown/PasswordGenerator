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
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = Math.floor(Math.random()*129);
var specialChars = "!@#$%^&*()_";
var passwordLength = Math.floor(Math.random()*129);
// PROMPTS
// these prompts need to be rendered when the user selects the "Generate Password" button (so they would be part of a the function of generatePassword)
let isLength = prompt("Please choose password length between 8 and 128 characters.", "A number between 8 and 128 is required");
alert("Warning! A minimum of one of the following four prompts MUST be selected in order to generate a password");
let isLowercase = confirm("Include lowercase letters?");
let isUppercase = confirm("Include uppercase letters?");
let isNumbers = confirm("Include numbers?");
let isSpecialChars = confirm("Include special characters?");
// Assignment Code (I am assuming assignemnt code would cover both prompts & variables?)
var generateBtn = document.querySelector("#generate");

// Now I need to figure out how to take the answers given by the user to change the outcome of the password to be generated...


// FUNCTIONS
// need a function to loop back through the prompts if invalid password length is selected
for (let i = 0; i < array.length; i++) {
  const isLength != passwordLength;
  else 
  
}
// need a function to loop back through the prompts if only password length is selected (or do i just need for loops?)


// Write password to the #password input (writePassword function responsible for choosing a random password and rendering it to the page [as a string? or is a variable determined by the function?])
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// EVENT LISTENERS
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






