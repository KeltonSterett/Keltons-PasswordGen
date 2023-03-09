// Assignment Code
var generateBtn = document.querySelector("#generate");

// Adding vars to include pass length, lower and upper case letters, numbers, special characters, and choices
var passswordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

// this sets var lowerCase = (lower case alphabet)
var lowerCase = ["a", "b", "c","d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// sets var to UpperCase
var blankUpper =[];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// adding/start functions
function generatePassword() {
// this asks for user input
passswordLength = prompt("Choose a number between 8 and 128");
console.log("Password Length + passwordLength");

// added if and else if statements to give prompts for criteria
if(!passwordLength) {
  alert("Required Value");

} else if (passwordLength < 8 || passswordLength > 128) { 
  passwordLength = prompt("Number must be between 8 and 128");
  console.log("Password Length" + passwordLength);

} else {
confirmLower = confirm(" Would you like to include lower case letters?");
console.log("Lower case" + confirmLower);
confirmUpper = confirm("Would you like to include Upper case letters?");
console.log("Upper case" + confirmUpper);
confirmNumber = confirm("Would you like to include numbers?");
console.log("Number" + confirmNumber);
confirmSpecial = confirm("Would you like to include special characters?");
console.log("Special Character" + confirmSpecial);

}

};
