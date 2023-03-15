

const myDeck = {
    deck : [],
    drawnCards : [],
    suits : ["hearts", "diamonds", "spades", "clubs"],
    values : ['2','3','4','5','6','7','8','9','10','A','J','Q','K'],
    initializeDeck(){
    const {deck, suits, values} = this;
    for(let value of values){
        for (let suit of suits){
            deck.push({value, suit});
        }
    }
    return deck;
    },
    drawCard(){
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards){
        const cards = [];
        for(let i=0; i<numCards; i++){
            cards.push(this.drawCard());
        }

    }
}

myDeck.initializeDeck();
const card = myDeck.drawCard();
console.log(myDeck.deck)