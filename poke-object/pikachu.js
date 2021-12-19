"use strict";
exports.__esModule = true;
var Pokemon_1 = require("../pokemon/Pokemon");
var types_1 = require("../pokeType/types");
var pikachuMoves = ['Thunderbolt', 'Quick Attack', 'Colleja', 'Thunder'];
var pikachuTypes = [types_1["default"].TYPES.Electric];
var pikachu = new Pokemon_1["default"](25, 'Pikachu', pikachuTypes, pikachuMoves, 35, 55, 45);
console.log(pikachu);
pikachu.Attack(pikachuMoves);
