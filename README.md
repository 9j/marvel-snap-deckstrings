# `deckstrings` for Marvel Snap
[![npm](https://img.shields.io/npm/v/marvel-snap-deckstrings.svg)](http://npmjs.com/package/marvel-snap-deckstrings)

Decode and encode Marvel Snap deckstrings.

## Install

Install the package from npm using your favourite package manager:

```
$ yarn add marvel-snap-deckstrings
```
## Usage

```javascript
import { encode, decode } from "marvel-snap-deckstrings";

const deck = {
    cards: ["ProfessorX", "JessicaJones", "AmericaChavez", "Enchantress"], // dbfId[]
};

const deckstring = encode(deck);
console.log(deckstring); // eyJDYXJkcyI6W3siQ2Fy

const decoded = decode(deckstring);
console.log(JSON.stringify(deck) === JSON.stringify(decoded)); // true
```