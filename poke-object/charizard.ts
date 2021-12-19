import FirePokemon from "../pokemon/TypeFire/FirePokemon";
import Types from "../pokeType/types";

const charizardMoves = ["Flamethrower", "Fire Spin", "Inferno", "Wing Atack"];
const charizardTypes = [Types.TYPES.Fire];

const Charizard: FirePokemon = new FirePokemon (6,"Charizard", charizardTypes, charizardMoves, 76, 85, 80);

console.table(Charizard);
console.table(Charizard.toString());


Charizard.Attack(charizardMoves);
console.log(Charizard.AttackType(Types.TYPES.Fire));
