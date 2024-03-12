function fizzBuzz() {
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

function countPhrases(array) {
    let fizzCount = 0;
    let buzzCount = 0;
    let fizzBuzzCount = 0;

    array.forEach(item => {
        if (item === "Fizz") {
            fizzCount++;
        } else if (item === "Buzz") {
            buzzCount++;
        } else if (item === "FizzBuzz") {
            fizzBuzzCount++;
        }
    });

    return {
        fizz: fizzCount,
        buzz: buzzCount,
        fizzBuzz: fizzBuzzCount
    };
}

const resultArray = fizzBuzz();

console.log("Result Array:");
console.log(resultArray);

const counts = countPhrases(resultArray);
console.log("\nFizz count:", counts.fizz);
console.log("Buzz count:", counts.buzz);
console.log("FizzBuzz count:", counts.fizzBuzz);
