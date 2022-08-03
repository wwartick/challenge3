// Assignment code here
/* array declarations for each character choice + options*/
const lowerArray =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ">", "<"];

/* variables used for final result */
var holder = new Array();
var finalHolder = new Array();
var passwordLength;

/* starting function - checks for length and makes sure it is a numeric*/
var lengthCheck = function(){
  holder = [];
  var lengthPrompt = window.prompt('Select a password length between 8 and 128 characters');
    if (lengthPrompt >= 8 && lengthPrompt <= 128){
     passwordLength = lengthPrompt;
      lowercaseCheck();
      return;

    } else {
      window.alert("The value must be between 8 and 128. Please try again.");
      return lengthCheck();
    }
}

/*lower case prompt - push command adds the lower case array to a new "holder" array if user inputs yes */
var lowercaseCheck = function(){
  var lowerPrompt = window.prompt('Would you like lower case letters in your password? Y for YES or N for NO.');
    if (lowerPrompt === "y" ||lowerPrompt === "yes" || lowerPrompt === "Y" ||lowerPrompt === "YES"){
        holder.push(lowerArray);
        uppercaseCheck();
        return;

    } if (lowerPrompt === "n" ||lowerPrompt === "no" || lowerPrompt === "N" ||lowerPrompt === "NO"){
      uppercaseCheck();
      return;

    }else {
        window.alert("You need to provide a valid answer for lower case letters! Please try again");
        return lowercaseCheck();
  }
}
/*upper case prompt */
var uppercaseCheck = function(){
  var upperPrompt = window.prompt('Would you like upper case letters in your password? Y for YES or N for NO.');
    if (upperPrompt === "y" ||upperPrompt === "yes" || upperPrompt === "Y" ||upperPrompt === "YES"){
        holder.push(upperArray);
      numberCheck();
      return;
      
    }if (upperPrompt === "n" ||upperPrompt === "no" || upperPrompt === "N" ||upperPrompt === "NO"){
      numberCheck();
      return;

    }else {
        window.alert("You need to provide a valid answer for upper case letters! Please try again");
        return uppercaseCheck();
  }
}
/*number prompt */
var numberCheck = function(){
  var numberPrompt = window.prompt('Would you like numbers in your password? Y for YES or N for NO.');
    if (numberPrompt === "y" ||numberPrompt === "yes" || numberPrompt === "Y" ||numberPrompt === "YES"){
      holder.push(numberArray);
      specialCheck();
      return;

    }if (numberPrompt === "n" ||numberPrompt === "no" || numberPrompt === "N" ||numberPrompt === "NO"){
      specialCheck();
      return;

    }else {
        window.alert("You need to provide a valid answer for numbers! Please try again");
        return numberCheck();
  }
}
/*special character prompt */
var specialCheck = function(){
  var specialPrompt = window.prompt('Would you like special case characters in your password? Y for YES or N for NO.');
    if (specialPrompt === "y" ||specialPrompt === "yes" || specialPrompt === "Y" ||specialPrompt === "YES"){
      holder.push(specialArray);
     randomizer();
     return;
    /*checks to make sure at least one prompt was said yes to */
    }if ((specialPrompt === "n" ||specialPrompt === "no" || specialPrompt === "N" ||specialPrompt === "NO") && holder.length == 0 ){
      window.alert("You must select at least one option! Please try again");
      lowercaseCheck();
    }else if (specialPrompt === "n" ||specialPrompt === "no" || specialPrompt === "N" ||specialPrompt === "NO"){
      randomizer();
      return;

    }else {
        window.alert("You need to provide a valid answer for special characters! Please try again");
        return; 
  }
}

/*picks a random item from a randomly picked array, and assigns the value to a final holder array */
var randomizer = function(){
  finalHolder = []
  for(let i = 0; i < passwordLength; i++){
  const newHolder = holder[Math.floor(Math.random() * (holder.length))];
  finalHolder.push(newHolder[Math.floor(Math.random() * (newHolder.length))]);
  }
}

/*converts the final array to string. the .join function removes all spaces and commas for the final password */
var generatePassword = function() {
  var finalPassword = finalHolder.join("");
  return finalPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  lengthCheck();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
