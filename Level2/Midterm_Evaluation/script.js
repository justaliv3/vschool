const numbers = [4, 2, 7, 1, 9, 5]


const result = numbers.sort(function(a, b){
    return a-b
})

console.log(result)


const strings = ['hello', 'world', 'javascript']

const convertToUppercase = strings.map(function(string){
    return string.toUpperCase()
})

console.log(convertToUppercase)