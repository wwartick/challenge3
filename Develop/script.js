// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercaseCheck = function(){
  var lowerPrompt = window.prompt('Would you like lower case letters in your password? Y for YES or N for NO.');
      if (lowerPrompt === "y" ||lowerPrompt === "yes" || lowerPrompt === "Y" ||lowerPrompt === "YES"){
      uppercaseCheck();
      /* array shit here*/
    } if (lowerPrompt === "n" ||lowerPrompt === "no" || lowerPrompt === "N" ||lowerPrompt === "NO"){
      uppercaseCheck();
     }else {
        window.alert("You need to provide a valid answer! Please try again");
        return lowercaseCheck();
  }
}

var uppercaseCheck = function(){
  var upperPrompt = window.prompt('Would you like upper case letters in your password? Y for YES or N for NO.');
      if (upperPrompt === "y" ||upperPrompt === "yes" || upperPrompt === "Y" ||upperPrompt === "YES"){
      numberCheck();
      /* array shit here*/
      }if (upperPrompt === "n" ||upperPrompt === "no" || upperPrompt === "N" ||upperPrompt === "NO"){
      numberCheck();
      }else {
        window.alert("You need to provide a valid answer! Please try again");
        return uppercaseCheck();
  }
}

var numberCheck = function(){
  var numberPrompt = window.prompt('Would you like numbers in your password? Y for YES or N for NO.');
     if (numberPrompt === "y" ||numberPrompt === "yes" || numberPrompt === "Y" ||numberPrompt === "YES"){
      specialCheck();
      /* array shit here*/
      }if (numberPrompt === "n" ||numberPrompt === "no" || numberPrompt === "N" ||numberPrompt === "NO"){
      specialCheck();
      }else {
        window.alert("You need to provide a valid answer! Please try again");
        return numberCheck();
  }
}

var specialCheck = function(){
  var specialPrompt = window.prompt('Would you like special case characters in your password? Y for YES or N for NO.');
    if (specialPrompt === "y" ||specialPrompt === "yes" || specialPrompt === "Y" ||specialPrompt === "YES"){
    window.prompt('donezo');
      /* array shit here*/
      }if (specialPrompt === "n" ||specialPrompt === "no" || specialPrompt === "N" ||specialPrompt === "NO"){
      window.prompt('donezo');
      }else {
        window.alert("You need to provide a valid answer! Please try again");
        return specialCheck();
  }
}