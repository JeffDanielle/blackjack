let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

//object
let player = {
    name: "User",
    chips: 250,
};

let money = player.chips

playerEl.textContent = player.name + ": $" + money;



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    hasBlackJack = false;
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
        money += 50
        player.chips = money;
    } else {
        message = "You're out of the game!";
        isAlive = false;
        if (money > 0){
            money -= 50
            player.chips = money;
        }
        else {
            money = 0
            player.chips = money
        }
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    playerEl.textContent = `${player.name}: \$${money}`
}

function newGame() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}
