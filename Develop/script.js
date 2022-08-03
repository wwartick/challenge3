// Assignment code here
var randomNumber = Math.floor(Math.random() * 126) + 8;
var passwordLength;

const lowerArray =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const holder = new Array();

var lengthCheck = function(){
  var lengthPrompt = window.prompt('Select a password length between 8 and 128 characters');
    if (lengthPrompt >= 8 && lengthPrompt <= 128){
     passwordLength = lengthPrompt;
      console.log(passwordLength);
      lowercaseCheck();
    } else {
      window.alert("The value must be between 8 and 128. Please try again.");
      return lengthCheck();
    }
}

var lowercaseCheck = function(){
  var lowerPrompt = window.prompt('Would you like lower case letters in your password? Y for YES or N for NO.');
    if (lowerPrompt === "y" ||lowerPrompt === "yes" || lowerPrompt === "Y" ||lowerPrompt === "YES"){
        holder.push(lowerArray);
        uppercaseCheck();
      /* array shit here*/
    } if (lowerPrompt === "n" ||lowerPrompt === "no" || lowerPrompt === "N" ||lowerPrompt === "NO"){
      uppercaseCheck();
    }else {
        window.alert("You need to provide a valid answer for lower case letters! Please try again");
        return lowercaseCheck();
  }
}

var uppercaseCheck = function(){
  var upperPrompt = window.prompt('Would you like upper case letters in your password? Y for YES or N for NO.');
    if (upperPrompt === "y" ||upperPrompt === "yes" || upperPrompt === "Y" ||upperPrompt === "YES"){
        holder.push(upperArray);
      numberCheck();
      /* array shit here*/
    }if (upperPrompt === "n" ||upperPrompt === "no" || upperPrompt === "N" ||upperPrompt === "NO"){
      numberCheck();
    }else {
        window.alert("You need to provide a valid answer for upper case letters! Please try again");
        return uppercaseCheck();
  }
}

var numberCheck = function(){
  var numberPrompt = window.prompt('Would you like numbers in your password? Y for YES or N for NO.');
    if (numberPrompt === "y" ||numberPrompt === "yes" || numberPrompt === "Y" ||numberPrompt === "YES"){
      holder.push(numberArray);
      specialCheck();
      /* array shit here*/
    }if (numberPrompt === "n" ||numberPrompt === "no" || numberPrompt === "N" ||numberPrompt === "NO"){
      specialCheck();
    }else {
        window.alert("You need to provide a valid answer for numbers! Please try again");
        return numberCheck();
  }
}

var specialCheck = function(){
  var specialPrompt = window.prompt('Would you like special case characters in your password? Y for YES or N for NO.');
    if (specialPrompt === "y" ||specialPrompt === "yes" || specialPrompt === "Y" ||specialPrompt === "YES"){
      holder.push(specialArray);
     randomizer();
     writePassword()
    }if (specialPrompt === "n" ||specialPrompt === "no" || specialPrompt === "N" ||specialPrompt === "NO"){
      randomizer();
      writePassword();
    }else {
        window.alert("You need to provide a valid answer for special characters! Please try again");
        return; 
  }
}

var randomizer = function(){
  for(let i = 0; i < passwordLength; i++){
  const newHolder = holder[Math.floor(Math.random() * (holder.length))];
  console.log(newHolder[Math.floor(Math.random() * (newHolder.length))]);
  }
}
 /*for(let i = 0; i < holder.length; i++){
  const newHolder = holder[i];
for(let i = 0; i < newHolder.length; i++){
  console.log(newHolder[i]);
}
}
 */

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
