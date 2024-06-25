var readline = require('readline-sync');

// Read inputs
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

// Function to encrypt the input text using Caesar cipher
function caesarCipher(text, shift) {

    shift = shift % 26;


    var result = '';


    for (var i = 0; i < text.length; i++) {
        var char = text[i];

        if (char === ' ') {
            result += " "
        }

        if (char >= 'a' && char <= 'z') {

            var newCharCode = char.charCodeAt(0) + shift;


            if (newCharCode > 'z'.charCodeAt(0)) {
                newCharCode = newCharCode - 26;
            }


            result += String.fromCharCode(newCharCode);

            result += char;
        }
    }

    return result;
}

// print the result
var encryptedText = caesarCipher(input, shift);
console.log('Encrypted text:', encryptedText);
