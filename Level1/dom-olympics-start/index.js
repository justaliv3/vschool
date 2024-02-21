var header = document.getElementById("header").append("JavaScript Made This!!");
document.getElementById("header").style.fontWeight = "900";
var span = document.getElementById("name").style.color = "peachpuff";
var messages = document.querySelector('.messages')
document.getElementById("right1").textContent = "something good";
document.querySelector("#left1").textContent = "Hello World";

var messages1 = document.getElementById("right1");
var messages2 = document.getElementById("left1");
var messages3 = document.getElementById("right2");
var messages4 = document.getElementById("left2");


document.getElementById("clear-button").onclick = function () {
    const messages = document.querySelectorAll('.message')
    for (var i = 0; i < messages.length; i++) {
        messages[i].remove()
    }
    // messages1.remove();
    // messages2.remove();
    // messages3.remove();
    // messages4.remove();
d
}






