var lowerCaseCharacters = [
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

var upperCaseCharacters = [
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
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



function getPasswordOptions(){




    var length = parseInt(
        prompt('How many characters will your new password contain?')
    );





    if(isNaN(length)===true){
        alert('Password length must be provided as a number');
        return;
    }




    if(length<8){
        alert('Not enough characters provided');
        return;
    }



    if(length>128);
    alert('Password length must contain less than 129 characers');
    return;
    }

var hasSpecialCharacter = confirm('Click OK to confirm inclusion of special characers.');


var hasNumericCharacters = confirm('Click OK to confirm inclusion of numerical characters');


var hasLowerCaseCharacters = confirm('Click OK to confirm inclusion of lower case characters.');


var hasUpperCaseCharacters = confirm('Click OK to confirm inclusion of upper case characters.');



if(
    hasSpecialCharacter===false&&
    hasNumericCharacters===false&&
    hasLowerCaseCharacter===false&&
    hasUpperCaseCharacters===false
)
{
    alert('Must select one of each type of character');
    return;

}

var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
};

return passwordOptions;

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}

var result = [ ];

var possibleCharacters = [ ];

var guarunteedCharacters = [ ];

if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
    }
if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }
if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }

for(var i = 0 ; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
    }


for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
    }
  return result.join('');
    

//

var generateBtn = document.querySelector('#generate');

//

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//

//
generateBtn.addEventListener('click', writePassword)
// Assignment Code
var generateBtn = document.querySelector("#generate");

//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//
generateBtn.addEventListener("click", writePassword);
