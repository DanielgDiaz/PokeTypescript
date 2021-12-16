import Pokemon from "../pokemon/Pokemon";

const charizardMoves = ["Flamethrower", "Fire Spin", "Inferno", "Wing Atack"];

const Charizard: Pokemon = new Pokemon (6,"Charizard","fuego", charizardMoves);

console.table(Charizard);

Charizard.Attack(charizardMoves);

