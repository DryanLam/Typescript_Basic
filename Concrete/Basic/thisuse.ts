/*
    How to use 'this' and how to spot when it's not being used correctly
    Fortunately, Typescript lets us catch incorrect use of 'this' with couple of techniques
 */

// 01
// this & arrow function
let deck_01 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
  
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    }
  };
  
  let cardPicker_01 = deck_01.createCardPicker();
  let pickedCard_01 = cardPicker_01();
  
  console.log("card: " + pickedCard_01.card + " of " + pickedCard_01.suit);

// 02
// this is parameter
interface Card {
    suit: string;
    card: number;
  }
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
  
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    }
};
  
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// 03
// Callback
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class HandlerBad {
    info: string;
    onClickGood(this: void, e: Event) {
      // can't use `this` here because it's of type void!
      console.log("clicked!");
    }
  }
  let h = new HandlerBad();
  let uiElement;
  uiElement.addClickListener(h.onClickGood);

 //> Because onClickGood specifies its this type as void, it is legal to pass to addClickListener. 
 // Of course, this also means that it can’t use this.info. If you want both then you’ll have to use an arrow function
 class HandlerGood {
    info: string;
    onClickGood = (e: Event) => {
      this.info = e.message;
    };
  }