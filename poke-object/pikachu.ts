import Pokemon from "../pokemon/Pokemon"
import Types from "../pokeType/types";

const pikachuMoves: string[] = ['Thunderbolt', 'Quick Attack', 'Colleja', 'Thunder'];
const pikachuTypes = [Types.TYPES.Electric]

const pikachu: Pokemon = new Pokemon(25, 'Pikachu', pikachuTypes, pikachuMoves, 35, 55, 45);

console.log(pikachu);

pikachu.Attack(pikachuMoves);