const arr = [1, 3, 5, 2, 90, 20]

const leastToGreatest = arr.sort(function(a, b){
    return a - b
})

// const greatestToLeast = arr.sort(function(a, b){
//     return b - a
// })

console.log(leastToGreatest)


const animals = ["dog", "wolf", "by", "family", "eaten"]

// const lengthSort = animals.sort(function(a, b){
//     return a.length - b.length
// })

// console.log(lengthSort)


const alphabeticalOrder = animals.sort(function(a, b){
    return a.localeCompare(b)
})

console.log(alphabeticalOrder);


const people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]


const byAge = people.sort(function(a, b){
    return a.age - b.age
})

console.log (byAge)