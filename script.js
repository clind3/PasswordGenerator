// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create arrays for letters, numbers and special characters
var specialString = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var spCharArray = specialString.split("");
// console.log(spCharArray); 
var letterString = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = letterString.split("");
var upperArray = letterString.toUpperCase().split("");
console.log(upperArray);
console.log(lowerArray);
var numberString = "0123456789";
var numberArray = numberString.split("");
// console.log(numberArray);


// Write password to the #password input
function writePassword() {
  // var password = generatePassword(includeUpper, includeLower, includeNum, includeSpChar, pwLength); 
  var passwordText = document.querySelector("#password");
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  alert("Now we are just going to go through some password criteria to understand what you are needing in your password.\nHit 'Ok' to continue");
  // window.alert(); reads the same as the single alert()
  
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var pwLength = prompt("How many characters would you like for your password? (min 8, max 128) ");
  while(pwLength < 8 || pwLength >128){
    pwLength = prompt("The length must be within 8 to 128 characters.\nHow many characters would you like for your password?")
  }
  // console.log(pwLength);

  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  var toInclude = false;
  while(toInclude==false){
    var includeUpper = confirm("Would you like to include uppercase letters?");
    // console.log(includeUpper);
    var includeLower = confirm("Would you like to include lowercase letters?");
    // console.log(includeLower);
    var includeNum = confirm("Would you like to include numbers?");
    var includeSpChar = confirm("Would you like to include special characters?");
    
    if(!includeLower && !includeUpper && !includeNum && !includeSpChar){
      confirm("You need to select atleast one of the criterias provided to generate a password.")
    }else{
      var included = "Verify that you would like to include the following in your pw:";
      if(includeUpper){
        included += "\nUppercase";
      }
      if(includeLower){
        included += "\nLowercase";
      }
      if(includeNum){
        included += "\nNumeric";
      }
      if(includeSpChar){
        included += "\nSpecial Characters"
      }

      // WHEN I answer each prompt
      // THEN my input should be validated and at least one character type should be selected
      var confirmCriteria = confirm(included);
      if(confirmCriteria){
        toInclude = true;
      }
    }
  }
  
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // passwordText.value = password;
  //**the above provided command did not generate pw 
  passwordText.value = generatePassword(includeUpper, includeLower, includeNum, includeSpChar, pwLength);

}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
function generatePassword(upper, lower, number, spCharacter, pwLength) {
  var password = ""; //this will be the pw generated and displayed
  var pwItems = [];
  // console.log("within generate fcn");

  //create array with numbers,letters,spcharacters (add to array if included in criteria)
  //randomly index through array
  if(upper){
    pwItems.push(upperArray);
  }
  if(lower){
    pwItems.push(lowerArray);
  }
  if(number){
    pwItems.push(numberArray);
  }
  if(spCharacter){
    pwItems.push(spCharArray);
  }

  //for length provided include given criteria in random order
  for(var i=0; i<pwLength; i++){
    //generate random index number Math.floor(Math.random()* array.length)
    var pwArrayIndex = Math.floor(Math.random()*pwItems.length);
    var pwArrayUsed = pwItems[pwArrayIndex];
    //console.log("Array index used " + pwArrayUsed);
    var pwItemIndex = Math.floor(Math.random()*pwArrayUsed.length);
    //console.log("Item index within the specific array: "+ pwItemToBeUsed)
    password += pwArrayUsed[pwItemIndex];
  }
  // console.log(password);
  return(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



