// Assignment Code
var generateBtn = document.querySelector("#generate");

// Adding vars to include pass length, lower and upper case letters, numbers, special characters, and choices
var passswordLength;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
