import {
    decode as base64Decode,
    encode as base64Encode,
  } from "universal-base64";
  
  type OriginDeck = {
    Cards: OriginCardInfo[];
  };
  type OriginCardInfo = {
    CardDefId: string;
  };
  
  type DeckList = string[]; // CardDefId[]
  interface DeckDefinition {
    cards: DeckList;
  }
  
  const encode = (deck: DeckDefinition) => {
    return base64Encode(
      JSON.stringify({
        Cards: deck.cards.map((cardDefId) => ({ CardDefId: cardDefId })),
      })
    );
  };
  
  const decode = (base64String: string): DeckDefinition => {
    const originDeck = JSON.parse(base64Decode(base64String)) as OriginDeck;
    return {
      cards: originDeck.Cards.map((cardInfo) => cardInfo.CardDefId),
    };
  };
  
  export { encode, decode };
  export type { DeckDefinition };
  