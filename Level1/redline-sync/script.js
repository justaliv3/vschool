const readlineSync = require("readline-sync");

var enterNum1 = readlineSync.question("Please enter your first number: ");
var enterNum2 = readlineSync.question("Please enter your second number: ");
var operations = ["add", "sub", "mul", "div"];
var selectOperation = readlineSync.keyInSelect(operations, "What operation will you like to perform?");


function addNum(num1, num2){
    console.log("The result is : " + (Number(num1) + Number(num2)));
}

function subNum(num1, num2){
    console.log("The result is : " + (Number(num1) - Number(num2)));
}

function mulNum(num1, num2){
    console.log( "The result is : " + (Number(num1) * Number(num2)));
}

function divNum(num1, num2){
    console.log("The result is : " + (Number(num1) / Number(num2)));
}

if(selectOperation === 0){
    addNum(enterNum1, enterNum2);
}else if(selectOperation === 1){
    subNum(enterNum1, enterNum2)
}else if(selectOperation === 2){
    mulNum(enterNum1, enterNum2);
}else {
    divNum(enterNum1, enterNum2);
}