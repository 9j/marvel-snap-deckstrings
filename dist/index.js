// index.ts
import { decode as base64Decode, encode as base64Encode } from "universal-base64";
var encode = function(deck) {
    return base64Encode(JSON.stringify({
        Cards: deck.cards.map(function(cardDefId) {
            return {
                CardDefId: cardDefId
            };
        })
    }));
};
var decode = function(base64String) {
    var originDeck = JSON.parse(base64Decode(base64String));
    return {
        cards: originDeck.Cards.map(function(cardInfo) {
            return cardInfo.CardDefId;
        })
    };
};
export { decode, encode };
