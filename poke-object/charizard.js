"use strict";
exports.__esModule = true;
var Pokemon_1 = require("../pokemon/Pokemon");
var charizardMoves = ["Flamethrower", "Fire Spin", "Inferno", "Wing Atack"];
var Charizard = new Pokemon_1["default"](6, "Charizard", "fuego", charizardMoves);
console.table(Charizard);
Charizard.Attack(charizardMoves);


