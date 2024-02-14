console.log('welcome to the index.js file!');


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


const deck1 = new Deck();

deck1.shuffle();
for (let card in deck1.deck) {
    console.log(deck1.deck[card]);
}

console.log('Let\'s deal some cards! Here is your hand of eight:')
for (let i = 0; i < 8; i++)
{
    console.log(deck1.deal());
}
