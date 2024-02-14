## Copycat of Palia's Hotpot minigame!

As described [here](https://palia.wiki.gg/wiki/Hotpot_Minigame) on the Palia wiki, the Hotpot Minigame is a playable minigame at the Maji Market Luna New Year event. All rights for the original gameplay go to Palia and its creators, Singularity 6. This is simply me playing around in getting a working version for myself, with the added benefit that I'll (hopefully) learn some JS, HTML, and CSS along the way!

Following is a quick explanation of the game, modified from the more thorough one found at the link above.

#### The cards
- Each card has a category and an ingredient, similar to how a typical deck has suits and values.
- There are 8 categories, with 3 unique cards each.
    - For example, the 'greens' category consists of the bok choy, napa cabbage, and spring onion ingredients.

#### The board
- There are always four players, and each player gets to go once per round.
- You can see your hand of cards, which consists of eight cards and a ninth drawn card when it is your turn.
- You can see four discard piles. One is from cards you have discarded, and is accordingly right in front of your hand. The other three are from each of the other players.

#### Gameplay
- The goal is to make three sets before any of the other players. There are two types of sets:
    - 'Three-of-a-kind' consists of three cards identical in category and ingredient. For example, three carrot cards.
    - 'Category' consists of one of each ingredient type within a category. For example:
        - A carrot, a potato, and a corn
        - Note that the ingredients must be different. A set consisting of two carrots and a potato will not count.
- You will initially receive eight random cards from the deck. Gameplay proceeds counterclockwise. The player whose turn it is will draw a card from either the draw pile (face down in the middle) or from any of their opponents' discard piles.
    - The first player to go cannot draw from the discard piles, since no cards will have been discarded yet.
- On drawing a card, the player can either keep it or discard it.
    - If they keep it, they must discard another of their cards. The one they discard will appear in their discard pile, where the other players can see it (and grab it, if they so choose).
    - If they discard it, it will simply appear in their discard pile.
- The first player to achieve three sets wins!

<br><br>

[Here](https://trello.com/b/OcHap1pa/hatpat) is the trollo board tracking the traffic light components

#### done
- [completed tasks]
- This is where I'd put completed tasks... if I had any!

#### red light
- [critical tasks]
- Getting the player's hand to appear onscreen
- Getting the opponent's discards to appear onscreen
- Able to draw from the draw pile
- Able to draw from discard piles
    - *Not* your own, though!
- Detect when player has three sets

#### yellow light
- [ideal if possible... tasks]
- Discards screen pop-up
- Detect when opponents have winning sets
- Detect when the game should end from too many discards

#### green light
- [sure would be nice if... tasks]
- Clearer alternate screen of your own hand
- Intentional behavior for computer opponents
    - Initial behavior will probably be to draw from draw pile and immediately discard, since this is what Palia *seems* to do
- Able to play with other people
- Rearrange hand on discard
- Game rearranges nicely when window is resized

