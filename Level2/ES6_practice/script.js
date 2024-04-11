const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])



const carrots = ["bright orange", "ripe", "rotten"]

/*function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}*/


const mapVegetables = (arr) => arr.map((carrot) => ({ type: "carrot", name: carrot }));


console.log(mapVegetables(carrots))


const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

/*
function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}*/


const filterForFriendly = (arr) => arr.filter((person) => {person.friendly});

console.log (filterForFriendly(people));

//Task 3


// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }

const doMathSum = (a, b) => a + b;
const produceProduct = (a, b) => a * b;

console.log(produceProduct(3, 3));

//Example 4

// Hi Kat Stark, how does it feel to be 40?


const printString = (firstName, lastName, age) => "Hi " + firstName + " " + lastName + " " + "how does it feel to be " + age;

console.log(printString("Kat", "Stark", 40))
