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
  // If no or only one selections are made

// 3) - PASSWORD VARIABLES ARE SELECTED - SCRIPT GENERATES PASSWORD BASED ON USER SELECTIONS
  // Password is written to the page


// Prompt Function
function passwordPrompts(){
  // these variables are set to strings so they can be added during the confirm prompts displayed to the user when the Generate Password button is clicked.
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*()_-+=";
  // this variable is an empty string so when running the the if statements, the appropriate strings can be added based on user input
  var acceptedChars = "";
  // this variable is assigned as a prompt asking for password length. we feed the user selection (which is take in as a string) into the parseInt() function - parseInt() converts or parses the string into an integer
  var passLength = parseInt(prompt("Please choose password length between 8 and 128 characters."));
  // I'm not really sure what's happening with this if statement - I know that when I console.log passLength and press cancel for the propmpt it returns NaN. if passLength is NaN it should alert and return.
          // console.log(passLength)
          // if (passLength == NaN) {
          //   alert("Please choose password length between 8 and 128 characters.");
          //   return
          // };
  // this if statement checks to see if the user selects a number between 8 and 128 - if they do not we use the return statement to stop the passwordPrompts() function from continuing
  if (passLength < 8 || passLength > 128) {
    alert("Warning! A minimum of one of the following four prompts MUST be selected in order to generate a password.");
    return
  };
  // this if statment uses the confirm() method to return a true or false value. if true it will add the acceptedChars string and the lowercase string together
  if (confirm("Include lowercase letters?")) {
    acceptedChars = acceptedChars + lowercase;
  };
  if (confirm("Include uppercase letters?")) {
    // we can shorten the statement acceptedChars = acceptedChars + uppercase to what is displayed in the line below. every time the user returns a true value for these confirm() methods they are added as a string to the acceptedChars variable, meaning that it is dynamically changing based on user input.
    acceptedChars += uppercase;
  };
  if (confirm("Include numbers?")) {
    acceptedChars += numbers;
  };
  if (confirm("Include special characters?")) {
    acceptedChars += specialChars;
  };
  // this if statment returns an alert and returns the user if none of the above parameters have been selected
  if (acceptedChars === "") {
    alert('Please select at least one password parameter. Click "Generate Button" to try again.');
    return
  }
  // this is a call to a custom function, generatePassword(), which is called after the user goes through all the prompts. it is given two parameters: acceptedChars and passLength - we need to do this so that we can pass these parameters to the function generatePassword() because it is defined outside of the passwordPrompts() function 
  generatePassword(acceptedChars, passLength)
};

// this is the custom generatePassword which was called at the end of the previous function passing the variables acceptedChars and passLength which were also determined in the last function based on user input.
function generatePassword(acceptedChars, passLength) {
  // this variable is set to an empty string as it will ultimately be our final password to render to the page.
  var password = "";
  // this for loop iterates around passLength until it reaches the end of the user designated number. 
  for (let i = 0; i < passLength; i++) {
    // variable max is set to the length of all the user selected prompts/variables which were added previously to acceptedChars (which at this point is essentially an array - it is still a string but could be considered as a dynamic array). this allows max to be a dynamic variable when used in the Math.random() function
    var max = acceptedChars.length
    // the variable randomNumber is set to Math.random()*max which will return a random number between 0 and our max variable. Math.floor() is used to round the random number generated by Math.random() to a whole integer
    var randomNumber = (Math.floor(Math.random()*max))
    // here randomCharacter is assigned as the index number (determined with the above variable) of the acceptedChars array
    var randomCharacter = acceptedChars[randomNumber]
    // the (initially) empty password string is added together with the randomCharacter determined in the above variable. each time this for loop iterates it will generate a new random character to add
    password = password + randomCharacter
  }
  // call the writePassword() function (defined outside of this function and pass the parameter "password")
  writePassword(password);
};

// Write password to the #password input
function writePassword(password) {
  // reach into the HTML and grab the element with the id of password and assign it to the variable passwordText
  var passwordText = document.querySelector("#password");
  // this sets the value of passwordText to the password which was passed into this function from the generatePassword() function
  passwordText.value = password;
}
// EVENT LISTENERS
// create a variable generateBtn which selects the element with the id generate
var generateBtn = document.querySelector("#generate");
// this listens for when the button (defined above) is clicked
generateBtn.addEventListener("click", passwordPrompts);