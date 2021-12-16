"use strict";
exports.__esModule = true;
var Pokemon_1 = require("../pokemon/Pokemon");
var pikachuMoves = ['Thunderbolt', 'Quick Attack', 'Zip Zap', 'Thunder'];
var pikachu = new Pokemon_1["default"](25, 'Pikachu', "electrico", pikachuMoves);
console.log(pikachu);
pikachu.Attack(pikachuMoves);
