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
  var lowerPrompt = window.prompt('Would you like lower case letters in your pass word? Y for YES or N for NO.');
    if (lowerPrompt === "y" ||lowerPrompt === "yes" || lowerPrompt === "Y" ||lowerPrompt === "YES")
      uppercaseCheck();
      /* array shit here*/
      if (lowerPrompt === "n" ||lowerPrompt === "no" || lowerPrompt === "N" ||lowerPrompt === "NO")
      uppercaseCheck();
    else {
        window.alert("You need to provide a valid answer! Please try again");
        return lowercaseCheck();
  }


}
as