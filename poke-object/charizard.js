"use strict";
exports.__esModule = true;
var FirePokemon_1 = require("../pokemon/TypeFire/FirePokemon");
var types_1 = require("../pokeType/types");
var charizardMoves = ["Flamethrower", "Fire Spin", "Inferno", "Wing Atack"];
var charizardTypes = [types_1["default"].TYPES.Fire];
var Charizard = new FirePokemon_1["default"](6, "Charizard", charizardTypes, charizardMoves, 76, 85, 80);
console.table(Charizard);
console.table(Charizard.toString());
Charizard.Attack(charizardMoves);
console.log(Charizard.AttackType(types_1["default"].TYPES.Fire));
