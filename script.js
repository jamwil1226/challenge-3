// Assignment Code
var generateBtn = document.querySelector("#generate");


// Prompt user to choose character length 8 - 128
var confirmLength = window.prompt("How many characters would you like your password to be? Must be between 8 - 128."); {
  console.log(confirmLength);
}

// Confirm lowercase letters in password 
var confirmLowercase = window.confirm("Click OK to confirm including lowercase characters."); {
  console.log(confirmLowercase);
}

// Confirm uppercase letters in password 
var confirmUppercase = window.confirm("Click OK to confirm including uppercase characters."); {
  console.log(confirmUppercase);
}

// Confirm numbers in password 
var confirmNumbers = window.confirm("Click OK to confirm including numeric characters."); {
  console.log(confirmNumbers);
}

// Confirm symbols in password 
var confirmSymbols = window.confirm("Click OK to confirm including special characters."); {
  console.log(confirmSymbols);
}

// Generate random password that matches selected criteria

var randomPassword = {
  length: confirmLength,
  lower: confirmLowercase,
  upper: confirmUppercase, 
  numbers: confirmNumbers, 
  symbols: confirmSymbols
};

console.log('randomPassword: ', randomPassword)

function getRandomLength() {
  var length = confirmLength
  return confirmLength;
}
console.log(getRandomLength());

function getRandomLowercase() {
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}
console.log(getRandomLowercase());

function getRandomUppercase() {
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}
console.log(getRandomUppercase());

function getRandomNumbers() {
  var numbers = '1234567890'
  return numbers[Math.floor(Math.random() * numbers.length)];
}
console.log(getRandomNumbers());

function getRandomSymbols() {
  var symbols = '!@#$%^&*()_+{}[]:<>?/'
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbols());



// Generate password function
function generatePassword() {
  const userInputArray = [ { confirmLowercase } , { confirmUppercase }, { confirmNumbers }, { confirmSymbols }].filter
  (
    item => Object.values(item)[0]
  );
  console.log('userInputArray: ', userInputArray);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();   
  var passwordText = document.querySelector("#password");

  passwordText.values = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
  

