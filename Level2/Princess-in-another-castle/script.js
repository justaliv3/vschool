class Player {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.status = "";
        this.hasStar = false;
    }

    setName(namePicked) {
        if (namePicked === "Mario" || namePicked === "Luigi") {
            this.name = namePicked;
        } else {
            console.log("Invalid name. Please choose 'Mario' or 'Luigi'.");
        }
    }

    gotHit() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                break;
            default:
                console.log("Player is already Dead.");
                break;
        }
        this.hasStar = false;
    }

    gotPowerup() {
        switch (this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";
                break;
            case "Powered Up":
                this.hasStar = true;
                break;
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        console.log("Name:", this.name);
        console.log("Total Coins:", this.totalCoins);
        console.log("Status:", this.status);
        console.log("Star:", this.hasStar ? "Yes" : "No");
    }
}

function randomRange() {
    return Math.floor(Math.random() * 3); 
}

const player = new Player();
player.setName("Mario");

const game = setInterval(() => {
    const action = randomRange();
    switch (action) {
        case 0:
            player.gotHit();
            break;
        case 1:
            player.gotPowerup();
            break;
        case 2:
            player.addCoin();
            break;
    }
    player.print();
    
    if (player.status === "Dead") {
        clearInterval(game);
        console.log("Player is dead. Game over!");

    }
}, 1000);


