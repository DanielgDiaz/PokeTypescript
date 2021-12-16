"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(id, name, type, moves) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.moves = moves;
    }
    Pokemon.prototype.toString = function () {
        return [
            "pokemon ID: ".concat(this.id),
            "pokemon Name: ".concat(this.name),
            "pokemon type: ".concat(this.type),
            "pokemon moves: ".concat(this.moves),
        ];
    };
    Object.defineProperty(Pokemon.prototype, "pokemonId", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonType", {
        get: function () {
            return this.type;
        },
        set: function (type) {
            this.type = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonMoves", {
        get: function () {
            return this.moves;
        },
        set: function (moves) {
            this.moves = moves;
        },
        enumerable: false,
        configurable: true
    });
    Pokemon.prototype.Attack = function (moves) {
        var random = Math.round(Math.random() * 3);
        console.log("".concat(this.name, " used ").concat(moves[random], "!"));
    };
    return Pokemon;
}());
exports["default"] = Pokemon;
