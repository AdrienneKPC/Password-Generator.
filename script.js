// Assignment Code
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_',
  '.'];

var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let charReturn = prompt("Pick a length for your password between 8 and 128 characters")
  let charReturnNum = Number(charReturn)

  if (charReturnNum <= 128 && charReturnNum >= 8) {
    let uppercase = confirm("Do you want uppercase characters?");
    let lowercase = confirm("Do you want lowercase characters?");
    let specialChar = confirm("Do you want special characters?");
    let numbers = confirm("Do you want numbers?");
    if (uppercase === false && lowercase === false && specialChar === false && numbers === false) {
      alert("Please select at least one character type")
      writePassword()
      return
    }
    let selectedChars = []
    //combining arrays
    if (uppercase === true) {
      selectedChars = selectedChars.concat(upperCase)
    }
    if (lowercase === true) {
      selectedChars = selectedChars.concat(lowerCase)
    }
    if (numbers === true) {
      selectedChars = selectedChars.concat(number)
    }
    if (specialChar === true) {
      selectedChars = selectedChars.concat(specialCharacters)
    }
    let password = ""
    for (let i = 0; i <= charReturnNum; i++) {
      password += getRandomArrayIndex(selectedChars)
    }

    return password
  } else {
    alert("Please select length between 8 and 128")
    writePassword()
    return
  }

}

function getRandomArrayIndex(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

