const arr = [3, 6, 8, 2]

const fiveAndGreaterOnly = arr.filter(function(num){
    if (num > 5){
    return num}
})

console.log (fiveAndGreaterOnly)

const evensOnly = arr.filter(function(num){
    if (num % 2 === 0)
    return true
})

console.log(evensOnly)


const animals = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveCharactersOrFewerOnly = animals.filter(function(string){
    if (string.length <= 5){
        return true
    }
})

console.log (fiveCharactersOrFewerOnly)


const obj = [
    { name: "Angelina Jolie", member: true, age: 80},
    { name: "Eric Jones", member: false, age: 2 },
    { name: "Paris Hilton", member: true, age: 5 },
    { name: "Kayne West", member: false, age: 16 },
    { name: "Bob Ziroll", member: true, age: 100 }
]

const peopleWhoBelongToTheIlluminati = obj.filter(function(obj){
    return obj.member
    }
)

console.log (peopleWhoBelongToTheIlluminati)


const ofAge = obj.filter(function(obj){
    if (obj.age > 18){
        return obj
    }
})

console.log (ofAge)