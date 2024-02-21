function largestNumber(num1, num2, num3){
if (num1 > num2 && num1 > num3){
    return num1
} else if (num2 > num1 && num2 > num3){
    return num2
} else {
    return num3
}
}




console.log(largestNumber(3,8,9)) // 9


function maxNumber(arr){

  return Math.max(...arr)
}

console.log(maxNumber([3, 28, 9]))

// data is coming in  -> 3 numbers

// data going out -> 1 number

// loop and/or logic