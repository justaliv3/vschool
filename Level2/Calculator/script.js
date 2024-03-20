
const add = document.getElementById("add")
const subtract = document.getElementById("subtract")
const multiply = document.getElementById("multiply")


add.addEventListener("click", function addNum()
{
    const num1 = document.getElementById("add1").value;
    const num2 = document.getElementById("add2").value;
    const sum = Number(num1) + Number(num2);
    console.log(sum);
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    h1.textContent = sum
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)

})

subtract.addEventListener("click", function addNum()
{
    const num1 = document.getElementById("sub1").value;
    const num2 = document.getElementById("sub2").value;
    const sub = Number(num1) - Number(num2);
    console.log(sub);
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    h1.textContent = sub
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)

})

multiply.addEventListener("click", function addNum()
{
    const num1 = document.getElementById("mul1").value;
    const num2 = document.getElementById("mul2").value;
    const mult = Number(num1) * Number(num2);
    console.log(mult);
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    h1.textContent = mult
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)

})