// RANDOM PASSWORD GENERATOR

// Generate password
function generatePassword() {
  
  // Prompt user to choose character length 8 - 128
  var confirmLength = window.prompt("How many characters would you like your password to be? Must be between 8 - 128."); 
    console.log(confirmLength);

  while(confirmLength < 8 || confirmLength > 128){
    alert("Please enter a number between 8 - 128.")
    confirmLength = prompt("How many characters would you like your password to be? Must be between 8 - 128.");
  }
  alert("Thank you. Your password will be " + confirmLength + " characters in length.");
  
  // Confirm lowercase letters in password 
  var confirmLowercase = window.confirm("Click OK to confirm including lowercase characters."); 
    console.log(confirmLowercase);

    var selectedCharacters = "";

    
  if (confirmLowercase) {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    selectedCharacters += lowercase;
    alert("Your password will contain lowercase letters.");
  }
  else {
    var lowercase = ""
    alert("Your password will not contain lowercase letters.");
  };

  // Confirm uppercase letters in password 
  var confirmUppercase = window.confirm("Click OK to confirm including uppercase characters."); 
    console.log(confirmUppercase);

  if (confirmUppercase === true) {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    selectedCharacters += uppercase;
    alert("Your password will contain uppercase letters.");
  }
  else {
    var uppercase = ""
    alert("Your password will not contain uppercase letters.");
  };

  // Confirm numbers in password 
  var confirmNumbers = window.confirm("Click OK to confirm including numeric characters."); 
    console.log(confirmNumbers);

  if (confirmNumbers) {
    var numbers = '1234567890';
    selectedCharacters += numbers;
    alert("Your password will contain numbers.");
  }
  else {
    var numbers = ""
    alert("Your password will not contain numbers.");
  };

  // Confirm symbols in password 
  var confirmSymbols = window.confirm("Click OK to confirm including special characters."); 
    console.log(confirmSymbols);

  if (confirmSymbols) {
    var symbols = '!@#$%^&*()_+{}[]:<>?/';
    selectedCharacters += symbols;
    alert("Your password will contain symbols.");
  }
  else {
    var symbols = ""
    alert("Your password will not contain symbols.");
  };

  // calculation of user input
  var userInput = [lowercase, uppercase, numbers, symbols];
  console.log("user input: ", userInput);

  var generatedPasswordResult = "";
  console.log(selectedCharacters);

  for (var i = 0; i < confirmLength; i++) {
  console.log(generatedPasswordResult);
  generatedPasswordResult += selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));
  }

  
  console.log(generatedPasswordResult);
  return generatedPasswordResult;
};

// generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();   
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);