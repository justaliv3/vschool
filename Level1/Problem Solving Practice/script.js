
function findLargestNumber(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    
    let largest = arr[0]; // Initialize largest to the first element of the array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if a larger number is found
        }
    }

    return largest;
}


// test data

const numbers = [6, 13, 250, 3]
const largestNumber = findLargestNumber(numbers);
console.log(largestNumber) // => 250



function lettersWithStrings(words, char) {
    return words.filter(word => word.includes(char));
}

// Test:
const wordArray = ["$hello!", "%%^%%", "test!"];
const character = "e";
const wordsWithLetter = lettersWithStrings(wordArray, character);
console.log("Words containing the character:", wordsWithLetter);



//2 numbers are divisible

function isDivisible(num1, num2){
    if (num1 % num2 === 0){
        return true
    } else {
        return false
    }
}

//test divisibility 

const number1 = 10
const number2 = 2

console.log("Are these two numbers divisible?:", isDivisible(number1, number2))