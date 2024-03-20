var arr = [2, 5, 100]


const result = arr.map(function(num){
    return num * 2;
})

console.log (result)


const stringItUp = arr.map(function(num){
    return JSON.stringify(num) 
})

console.log (stringItUp)

var jnames = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const capitalizeNames = jnames.map(function(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
})

console.log (capitalizeNames)


var famousnames = [
    {name: "Angelina Jolie",
     age: 80   },
     {
      name: "Eric Jones",
      age: 2  
     },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const namesOnly = famousnames.map(function(names){
    return names.name
})

console.log (namesOnly)

const makeStrings = famousnames.map(function(names){
    if (names.age < 17){
        return names.name + " is under age!"
    } else{
        return names.name + " can go to the Matrix"
    }
})

console.log (makeStrings)

const readyToPutInTheDOM = famousnames.map(function(arr){
          return "<h1>" +arr.name +"</h1>" + "<h2>" + arr.age +"</h2>";
})

console.log (readyToPutInTheDOM)