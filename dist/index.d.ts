type DeckList = string[];
interface DeckDefinition {
    cards: DeckList;
}
declare const encode: (deck: DeckDefinition) => string;
declare const decode: (base64String: string) => DeckDefinition;

export { DeckDefinition, decode, encode };
