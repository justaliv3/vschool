var hello = "hello"

var capitilizeAndLowercase = hello.toUpperCase() + hello.toLowerCase()

console.log(capitilizeAndLowercase);

//return half string

function findMiddleIndex(string){
    var length = string.length
    var half = Math.floor(length/2);
    return half
 }

console.log(findMiddleIndex("hello"))

//first half
function returnFirstHalf(string){
   var slicing = string.slice(0, (string.length/2));
    return slicing
}

console.log(returnFirstHalf("Hello World"))

//capitalize half 

function capitalizeHalf(string) {
    const length = string.length;
    const halfLength = Math.floor(length / 2);

    const firstHalf = string.substring(0, halfLength).toUpperCase();
    const secondHalf = string.substring(halfLength).toLowerCase();

    return firstHalf + secondHalf;
}

console.log (capitalizeHalf("hello world"))