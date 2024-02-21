const readline = require("readline-sync");
const name = readline.question("What is your name? ");

const question1 = readline.question("You find yourself locked in a room. You need to escape! [press Enter]");



let foundKey = false
let escape = false

while (!escape){
    const options = ['Find the key', 'Put hand in hole', 'Open the door'];
    const index = readline.keyInSelect(options, 'What would you like to do?');
    
if (index === 0) {
    if (foundKey) {
    console.log("You've already found the key!");
    } else {
    console.log("You found the key! Now go open the door.");
    foundKey = true;
    }
    } else if (index === 1) {
        console.log("You put your hand in the hole... and die.");
        break;
    } else if (index === 2) {
        if (foundKey) {
            console.log("Congratulations! You've escaped the room! " + name);
            escape = true;
        } else {
            console.log("You can't open the door without the key!");
        }
    } else {
        console.log("Please choose a valid option.");
}

}