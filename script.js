// Assignment code here
//Array of special characters to be included in password
var specialCharacters = [
'@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'{',
'}',
'[',
']',
'~',
'-',
'_',
'.'
];

//Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Array of lowercase characters to be included in password
var lowerCasedCharacters = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'
];

//Array of uppercase characters to be included in password
var upperCasedCharacters = [
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z'
];

//function to prompt user for password options
function getPasswordOptions() {
  //variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
    );

    //conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(length) === true) {
      alert('Password length must be provided as a number');
      return;
    }

    //conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false.
    if (length < 8) {
      alert('Password length must be at least 8 characters');
      return;
    }

    //conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 128) {
      alert ('Password length must be less than 129 characters');
      return;
    }

    //variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm(
      'Click OK if you would like to include special characters.'
    );

    //variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacters = confirm(
      'Click OK to confirm including numeric characters.'
    );

    //variable to store boolean regarding the inclusion of lower-cased characters
    var hasLowerCasedCharacters = confirm(
      'Click OK if you would like to include lowercase characters.'
    );
      
    //variable to store boolean regarding the inclusion of upper-cased characters
    var hasUpperCasedCharacters = confirm(
      'Click OK if you would like to include uppercase characters.'
    );

    //conditional statement to check if user has confirmed upper/lowercase characters. Prompts end if this evaluates false
    if (
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false
    ) {
      alert ('Must select at least one character type');
      return;
    }

    //Object to store user input
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };

    return passwordOptions;
  }

    //Function for getting a random element from an array
    function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];
    
      return randElement;
    }

    //Function to generate password with user input
    function generatePassword() {
      var options = getPasswordOptions();
    //variable to store password as it's being concatenated
    var result = [];

    //Array to store types of characters to include in password
    var possibleCharacters = [];

    //Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];

  //conditional statement that adds array of special characters into array of possible characters based on user input
  //push new random special characters to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  //conditional statement that adds array of numeric characters into array of possible characters based on user input
  //push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  //conditional statement that adds array of lowercase characters into array of possible characters based on user input
  //push new random lowercase character to guaranteedCharacters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  //conditional statement that adds array of uppercase characters into array of possible characters based on user input
  //push new random uppercase characters to guaranteedCharacters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  //for loop to iterate over the password length from the options object, selecting random indices from the array of possible characters
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  //Mix in at least one of each guaranteed character in the result
  for (var i = 0; i <guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  //Transform the results into a string and pass into WritePassword
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
