// Assignment Code
var generateBtn = document.querySelector("#generate");

// Adding vars to include pass length, lower and upper case letters, numbers, special characters, and choices
var passwordLength;
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
passwordLength = prompt("Choose a number between 8 and 128");
console.log("Password Length + passwordLength");

// added if and else if statements to give prompts for criteria
if(!passwordLength) {
  alert("Please enter Required Value");

} else if (passwordLength < 8 || passwordLength > 128) { 
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

};

// statement for if the user does not answer the criteria prompts
if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("You must choose criteria");
}
  //statements for true options
else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
}
 // true options needed to generate the password based on user choices

 else if (confirmLower && confirmUpper && confirmNumber) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}
else if (confirmLower && confirmUpper && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, special);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(numbers, special);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = upperCase.concat(numbers, special);
  console.log(userChoices);
}
 // more true options needed to generate the password based on user choices 

else if (confirmLower && confirmUpper) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmLower && confirmSpecial) {
  userChoices = lowerCase.concat(special);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmUpper && confirmSpecial) {
  userChoices = upperCase.concat(special);
  console.log(userChoices);
}
else if (confirmNumber && confirmSpecial) {
  userChoices = numbers.concat(special);
  console.log(userChoices);
}
else if (confirmLower) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (confirmUpper) {
  userChoices = blankUpper.concat(upperCase);
  console.log(userChoices);
}
else if (confirmNumber) {
  userChoices = numbers;
  console.log(userChoices);
}
else if (confirmSpecial) {
  userChoices = special;
  console.log(userChoices);
};

// Empty variable for the password length
var passwordBlank = [];

// Added a for loop to complete the random selection of the password based on user choices above
for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

// this will join and display the password on the screen
var password = passwordBlank.join("");
console.log("Your Pasword is: " + password);
return password;

}



