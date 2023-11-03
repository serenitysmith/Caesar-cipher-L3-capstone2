// Import the readline-sync library to get user input.



var readline = require('readline-sync');


// Define a function for the Caesar Cipher.
function caesarCipher(text, shift) {
 var result = "";

 // Loop through each character in the input text.
  for (var i = 0; i < text.length; i++) {
    var char = text[i];



    

    // Check if the character is an alphabetic letter (A-Z or a-z).
    if (char.match(/[a-z]/i)) {
      // Determine if the character is uppercase or lowercase



      var isUpperCase = char === char.toUpperCase();

      


    

// convert the character to lowercase for processing
// The char variable initially holds the current character from the input text.

    char = char.toLowerCase();

     // Get the character code of the lowercase letter.
      var charCode = char.charCodeAt(0);


      // Calculate the shifted character code using the Caesar Cipher formula.



      var shiftedCharCode = ((charCode - 97 + shift) % 26 + 26 ) % 26 + 97
      // Convert back to uppercase if it was originally uppercase
      if (isUpperCase) {
        char = String.fromCharCode(shiftedCharCode).toUpperCase();
      } else {
        char = String.fromCharCode(shiftedCharCode);
      }
    }

    // Add the character (either shifted or unchanged) to the result.
    result += char;
  }

  // Return the encrypted text.

  return result;
}

// Prompt the user for the input text.
var input = readline.question("what phrase would you like to encrypt?")

// Prompt the user for the number of letters to shift.
var shift = parseInt(readline.question("how many letters would you like to shift?"));


///Call the caesarCipher function with the input text and shift value
var encryptedText = caesarCipher(input, shift);

// Display the encrypted text to the user.
console.log('Encrypted Text:', encryptedText);

