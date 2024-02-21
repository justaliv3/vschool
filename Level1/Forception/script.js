

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
alphabet = alphabet.toUpperCase()
// console.log(alphabet)
var splitAlphabet = alphabet.split("")
//console.log(splitAlphabet)
// var newArr = people.concat(splitAlphabet)
//console.log(newArr)


function forception(people, splitAlphabet){
    var peopleAlpha = [];
    // your code here
 
    for (var i = 0; i < people.length; i ++){
        peopleAlpha.push(people[i]);
        for (var j = 0; j < splitAlphabet.length; j++){
            peopleAlpha.push(splitAlphabet[j]);
          
        }
    }
    return peopleAlpha
}


console.log(forception(people, splitAlphabet));




// Output:
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


