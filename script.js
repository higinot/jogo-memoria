const cards = document.querySelectorAll('.carta')
let hasFlippedCard = false;
let firstCard, secoundCard;
let blockBoard = false;
function flipCard () {
    if(blockBoard) {
        return;
    }
    this.classList.add('flip');
    if(!hasFlippedCard) {
        firstCard = this;
        hasFlippedCard = true;
        return;
    }

    secoundCard = this;
    hasFlippedCard = false;
    checkForMatch()
}

function checkForMatch () {
    if( firstCard.childNodes[3].src === secoundCard.childNodes[3].src) {
        disableCard();
    }

    unflipCard()
}

function disableCard() {
    firstCard.removeEventListener('click', flipCard)
    secoundCard.removeEventListener('click', flipCard)
}

function unflipCard () {
    blockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secoundCard.classList.remove('flip')

        blockBoard = false;
    }, 1500)
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard )
})