"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// index.ts
var marvel_snap_deckstrings_exports = {};
__export(marvel_snap_deckstrings_exports, {
    decode: function() {
        return decode;
    },
    encode: function() {
        return encode;
    }
});
module.exports = __toCommonJS(marvel_snap_deckstrings_exports);
var import_universal_base64 = require("universal-base64");
var encode = function(deck) {
    return (0, import_universal_base64.encode)(JSON.stringify({
        Cards: deck.cards.map(function(cardDefId) {
            return {
                CardDefId: cardDefId
            };
        })
    }));
};
var decode = function(base64String) {
    var originDeck = JSON.parse((0, import_universal_base64.decode)(base64String));
    return {
        cards: originDeck.Cards.map(function(cardInfo) {
            return cardInfo.CardDefId;
        })
    };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    decode: decode,
    encode: encode
});
