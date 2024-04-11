function collectAnimals(...animals){
    return animals
}



console.log (collectAnimals( "dog", "cat", "mouse"))

//Question 2

function combineFruit(fruit, sweets, vegetables) {
    return { fruit, sweets, vegetables };
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));

//Question 3

function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${location} for ${duration}`;
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }));

  //Question 4

  function returnFirst(items){
    let firstItem = items[0]; 
    return firstItem
}

//Question 5

const favoriteActivities = ["magnets", "snowboarding", "philanthropy"];

function returnFavorites([firstFav, secondFav, thirdFav]){
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav
}

console.log(returnFavorites(favoriteActivities))


//Question 6
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

function combineAnimals (...[...ani]){
    return ani
}

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))


//Question 7

const product = (...numbers) => {
    return numbers.reduce((acc, number) => acc * number, 1);
  };
  
  //Quesiton 8

  const unshift = (array, ...elements) => {
    return [...elements, ...array];
  };
  

  const originalArray = [1, 2, 3];
  console.log(unshift(originalArray, 4, 5, 6)); 


  //Question 8

  const populatePeople = (names) => {
    return names.map((name) => {
        const [firstName, lastName] = name.split(" ");
        return {
            firstName,
            lastName
        };
    });
};

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));


  