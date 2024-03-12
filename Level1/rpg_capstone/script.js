const readline = require("readline-sync");
const greetings = readline.question("Hello Master, you are entering a dungeon. Be prepared. [press Enter] ");
const name = readline.question("What is your name? [press Enter] ");
const question1 = readline.question("You find yourself in a large meadow...ready to start your adventure! [press Enter]");

const readlineSync = require('readline-sync');


const enemies = ['Boar', 'Minion', 'Troll'];
const playerMaxDamage = 30;
const playerMinDamage = 10;
const enemyMaxDamage = 25;
const enemyMinDamage = 5;


let player = {
    name,
    HP: 100,
    inventory: []
};



let walking = true;

function randomAttack(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function enemyAttack() {
    return randomAttack(enemyMinDamage, enemyMaxDamage);
}

function playerAttack() {
    return randomAttack(playerMinDamage, playerMaxDamage);
}

function encounterEnemy() {
    console.log(`Oh no! You've encountered a wild ${enemies[Math.floor(Math.random() * enemies.length)]}!`);
    let enemyHP = 50;
    while (true) {
        const userInput = readlineSync.question('Do you want to (a)ttack or (r)un? ');

        if (userInput.toLowerCase() === 'a') {
            const playerDamage = playerAttack();
            console.log(`You attacked the enemy and dealt ${playerDamage} damage.`);
            const enemyDamage = enemyAttack();
            console.log(`The enemy attacked you and dealt ${enemyDamage} damage.`);
            player.HP -= enemyDamage;
            enemyHP -= playerDamage;
            if (player.HP <= 0) {
                console.log("You have been defeated. Game over.");
                walking = false;
                break;
            }
            if (enemyHP <= 0) {
                console.log("You defeated the enemy!");
                player.HP += 20; // Increase player HP
                const specialItem = "Special Sword"; // Special item
                player.inventory.push(specialItem);
                console.log(`You gained ${specialItem} and restored some HP.`);
                break;
            }
        } else if (userInput.toLowerCase() === 'r') {
            const escapeChance = Math.random();
            if (escapeChance > 0.5) {
                console.log("You managed to escape!");
                break;
            } else {
                console.log("You failed to escape! The enemy attacked you.");
                const enemyDamage = enemyAttack();
                console.log(`The enemy attacked you and dealt ${enemyDamage} damage.`);
                player.HP -= enemyDamage;
                if (player.HP <= 0) {
                    console.log("You have been defeated. Game over.");
                    walking = false;
                }
                break;
            }
        } else {
            console.log("Invalid input. Please choose 'a' to attack or 'r' to run.");
        }
    }
}

function printPlayerInfo() {
    console.log(`Player Name: ${player.name}`);
    console.log(`Player HP: ${player.HP}`);
    console.log("Inventory:");
    player.inventory.forEach(item => {
        console.log(`- ${item}`);
    });
}

function startWalking() {
    console.log("Welcome to your walk. Press 'w' to walk.");



    while (walking) {
        const userInput = readlineSync.question('Enter "w" to walk or "p" to print player info: ');

        if (userInput.toLowerCase() === 'w') {
            console.log("You walked.");
            if (Math.random() < 0.25) {
                encounterEnemy();
            } else {
                console.log("You continue walking safely.");
            }
        } else if (userInput.toLowerCase() === 'p') {
            printPlayerInfo();
        } else {
            console.log("Invalid input. Please enter 'w' to walk or 'p' to print player info.");
        }
    }
}

startWalking();
