// Assignment Code
var generateBtn = document.querySelector("#generate");
var userInput = prompt("Hello! I am a password generator")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = prompt("Enter the desired length of the password:");
  var useLowerCase = confirm("Do you want to include lowercase letters?");
  var useUpperCase = confirm("Do you want to include uppercase letters?");
  var useNumbers = confirm("Do you want to include numbers?");
  
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  
  var characters = "";
  
  if (useLowerCase) {
    characters += lowercaseLetters;
  }
  
  if (useUpperCase) {
    characters += uppercaseLetters;
  }
  
  if (useNumbers) {
    characters += numbers;
  }
  
  var password = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  
  return password;
}

var newPassword = generatePassword();
console.log("Generated password: " + newPassword);
