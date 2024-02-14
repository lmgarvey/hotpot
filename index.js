console.log('welcome to the index.js file!');

// GLOBAL VARIABLES
const cardImgDefs = [
    {id: 'rib', imagePath: '/images/0_rib.png'},
    {id: 'rolled_beef', imagePath: '/images/0_rolled_beef.png'},
    {id: 'steak', imagePath: '/images/0_steak.png'},
    {id: 'brightshroom', imagePath: '/images/1_brightshroom.png'},
    {id: 'enoki', imagePath: '/images/1_enoki.png'},
    {id: 'mountain_morel', imagePath: '/images/1_mountain_morel.png'},
    {id: 'dumplings', imagePath: '/images/2_dumplings.png'},
    {id: 'tofu', imagePath: '/images/2_tofu.png'},
    {id: 'carrot', imagePath: '/images/5_carrot.png'}
]

const cardBackImgPath = '/images/9_card_back.png';

const cardContainerElem = document.querySelector('.card-container');


// FUNCTIONS AND CLASSES
class Deck {
    /**
     * Creates and shuffles the deck of cards, with 5 of each suit-value combo
     */
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
    }

    /**
     * Provides a new, in-order deck of cards
     */
    reset() {
        this.deck = [];

        const suits = ['meat', 'mushrooms', 'carbs', 'greens', 'spices', 'veggies', 'noodles', 'fish'];
        const values = ['rib', 'rolled beef', 'steak', 'brightshroom', 'enoki', 'mountain morel', 'dumplings', 'tofu', 'water chestnut', 'bok choy', 'napa cabbage', 'spring onion', 'dari clove', 'garlic', 'heat root', 'carrot', 'corn', 'potato', 'handpulled noodles', 'ramen noodles', 'udon noodles', 'fish', 'lobster', 'shrimp'];
    
        // creating the cards
        for (let i = 0; i < suits.length; i++) {
            for (let j = 3*i; j < 3*i + 3; j++) {
                let suit = suits[i].toUpperCase();
                let value = values[j].toUpperCase();
                let card = suit + ' : ' + value;

                // five of each card in the entire deck
                this.deck.push(card);
                this.deck.push(card);
                this.deck.push(card);
                this.deck.push(card);
                this.deck.push(card);
            }
        }
    }

    /**
     * Shuffles the cards
     * @returns The shuffled deck
     */
    shuffle() {
        console.log('Shuffling the deck...');

        const deck = this.deck;
        let m = deck.length;
        let i;

        while (m) {
            // Math.random() grabs a number in [0..1)
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }

    /**
     * Deals a single card from the deck
     * @returns The dealt card
     */
    deal() {
        return this.deck.pop();
    }
}

function createCards() {
    cardImgDefs.forEach((cardItem)=>{
        createCard(cardItem)
    });
}

/**
 * Creates the card as given, with front and back elements and images
 * @param cardItem The card to create
 */
function createCard(cardItem) {
    // create div elements to make up a card with a front and back
    const cardElem = document.createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');

    // create front and back image elements for a card
    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');

    // add class and id to card element
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);

    // add classes to card elements
    addClassToElement(cardInnerElem, 'card-inner');
    addClassToElement(cardFrontElem, 'card-front');
    addClassToElement(cardBackElem, 'card-back');

    addSrcToImageElement(cardBackImg, cardBackImgPath);
    addSrcToImageElement(cardFrontImg, cardItem.imagePath);

    addClassToElement(cardBackImg, 'card-img');
    addClassToElement(cardFrontImg, 'card-img');

    // the image is a child of the card
    addChildElement(cardFrontElem, cardFrontImg);
    addChildElement(cardBackElem, cardBackImg);

    // the 'front' and 'back' of the card are both children of The Inner Card
    addChildElement(cardInnerElem, cardFrontElem);
    addChildElement(cardInnerElem, cardBackElem);

    // the inner card is a child of The Card
    addChildElement(cardElem, cardInnerElem);

    addCardToGridCell(cardElem);

}

function createElement(elemType) {
    return document.createElement(elemType);
}

function addClassToElement(elem, className) {
    elem.classList.add(className);
}

function addIdToElement(elem, id) {
    elem.id = id;
}

function addSrcToImageElement(imgElem, src) {
    imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem);
}

function addCardToGridCell(card) {
    const cardPosClassName = mapCardIdToGridCell(card);
    const cardPosElem = document.querySelector(cardPosClassName);
    addChildElement(cardPosElem, card);
}

function mapCardIdToGridCell(card) {
    if (card.id == 'rib')
    {
        return '.card-pos-a';
    }
    else if (card.id == 'rolled_beef')
    {
        return '.card-pos-b';
    }
    else if (card.id == 'steak')
    {
        return '.card-pos-c';
    }
    else if (card.id == 'brightshroom')
    {
        return '.card-pos-d';
    }
    else if (card.id == 'enoki')
    {
        return '.card-pos-e';
    }
    else if (card.id == 'mountain_morel')
    {
        return '.card-pos-f';
    }
    else if (card.id == 'dumplings')
    {
        return '.card-pos-g';
    }
    else if (card.id == 'tofu')
    {
        return '.card-pos-h';
    }
    else
    {
        return '.card-pos-draw';
    }

}


// THE PROGRAM...

const deck1 = new Deck();

console.log('Let\'s deal some cards! Here is your hand of eight:')
for (let i = 0; i < 8; i++)
{
    console.log(deck1.deal());
}

console.log('Now let\'s try getting some cards on screen...');
createCards();