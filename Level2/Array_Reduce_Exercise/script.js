const arr = [1, 2, 3]

// const total = arr.reduce(function(final, num){
//     final += num
//     return final
// })

// console.log(total)

const stringConcat = arr.reduce(function(final, num){
   return final + num
}, '')

console.log (stringConcat)

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const totalVotes = voters.reduce(function(final, voter){
//     if (voter.voted){
//         final++
//     }
//     return final
// }, 0)

// console.log(totalVotes)


var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const shoppingSpree = wishlist.reduce(function(final, current){
    return final + current.price;
}, 0)

console.log(shoppingSpree)


var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]


const flattenedArray = [].concat(...arrays);

console.log(flattenedArray);

///6

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

function calculateVoteResults(voters) {
    return voters.reduce((acc, voter) => {
        if (voter.age >= 18 && voter.age <= 25) {
            acc.age18to25++;
            if (voter.voted) acc.voted18to25++;
        } else if (voter.age >= 26 && voter.age <= 35) {
            acc.age26to35++;
            if (voter.voted) acc.voted26to35++;
        } else if (voter.age >= 36 && voter.age <= 55) {
            acc.age36to55++;
            if (voter.voted) acc.voted36to55++;
        }
        return acc;
    }, {
        age18to25: 0,
        age26to35: 0,
        age36to55: 0,
        voted18to25: 0,
        voted26to35: 0,
        voted36to55: 0
    });
}
const voteResults = calculateVoteResults(voters);
console.log(voteResults)