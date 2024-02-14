console.log('welcome to the index.js file!');

// GLOBAL VARIABLES
const cardImgDefs = [
    {id: 'rib', imagePath: '/images/0_rib.png'},
    {id: 'rolled beef', imagePath: '/images/0_rolled_beef.png'},
    {id: 'steak', imagePath: '/images/0_steak.png'},
    {id: 'brightshroom', imagePath: '/images/1_brightshroom.png'},
    {id: 'enoki', imagePath: '/images/1_enoki.png'},
    {id: 'mountain morel', imagePath: '/images/1_mountain_morel.png'},
    {id: 'dumplings', imagePath: '/images/2_dumplings.png'},
    {id: 'tofu', imagePath: '/images/2_tofu.png'},
    {id: 'water chestnut', imagePath: '/images/2_water_chestnut.png'},
    {id: 'bok choy', imagePath: '/images/3_bok_choy.png'},
    {id: 'napa cabbage', imagePath: '/images/3_napa_cabbage.png'},
    {id: 'spring onion', imagePath: '/images/3_spring_onion.png'},
    {id: 'dari clove', imagePath: '/images/4_dari_clove.png'},
    {id: 'garlic', imagePath: '/images/4_garlic.png'},
    {id: 'heat root', imagePath: '/images/4_heat_root.png'},
    {id: 'carrot', imagePath: '/images/5_carrot.png'},
    {id: 'corn', imagePath: '/images/5_corn.png'},
    {id: 'potato', imagePath: '/images/5_potato.png'},
    {id: 'handpulled', imagePath: '/images/6_handpulled.png'},
    {id: 'ramen', imagePath: '/images/6_ramen.png'},
    {id: 'udon', imagePath: '/images/6_udon.png'},
    {id: 'fish', imagePath: '/images/7_fish.png'},
    {id: 'lobster', imagePath: '/images/7_lobster.png'},
    {id: 'shrimp', imagePath: '/images/7_shrimp.png'}
]

const cardBackImgPath = '/images/9_card_back.png';

const cardContainerElem = document.querySelector('.card-container');

let playerHandId = 0;


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
        const values = ['rib', 'rolled beef', 'steak', 'brightshroom', 'enoki', 'mountain morel', 'dumplings', 'tofu', 'water chestnut', 'bok choy', 'napa cabbage', 'spring onion', 'dari clove', 'garlic', 'heat root', 'carrot', 'corn', 'potato', 'handpulled', 'ramen', 'udon', 'fish', 'lobster', 'shrimp'];
    
        // creating the cards
        for (let i = 0; i < suits.length; i++) {
            for (let j = 3*i; j < 3*i + 3; j++) {
                // let suit = suits[i].toUpperCase();
                // let value = values[j].toUpperCase();
                // let card = suit + ' : ' + value;
                let card = values[j];

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
    // each 'cardItem' is a pair of {id: 'some_id', imagePath: 'some_path'}
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

    const cardPosClassName = mapCardIdToGridCell(playerHandId++);
    const cardPosElem = document.querySelector(cardPosClassName);
    addChildElement(cardPosElem, card);
}

function mapCardIdToGridCell(handId) {
    if (handId == 0)
    {
        return '.card-pos-a';
    }
    else if (handId == 1)
    {
        return '.card-pos-b';
    }
    else if (handId == 2)
    {
        return '.card-pos-c';
    }
    else if (handId == 3)    {
        return '.card-pos-d';
    }
    else if (handId == 4)    {
        return '.card-pos-e';
    }
    else if (handId == 5)    {
        return '.card-pos-f';
    }
    else if (handId == 6)    {
        return '.card-pos-g';
    }
    else if (handId == 7)    {
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
let hand = [];
for (let i = 0; i < 8; i++)
{
    let card = deck1.deal();
    console.log(card);
    hand.push(card);
}

console.log('Now let\'s try getting some cards on screen...');
for (let i = 0; i < hand.length; i++)
{
    let cardId = hand[i];
    let cardItem = cardImgDefs.find(searchId => searchId.id == cardId);
    createCard(cardItem);
}

let drawnCard = deck1.deal();
let cardItem = cardImgDefs.find(searchId => searchId.id == drawnCard);
createCard(cardItem);

// createCards();