import Pokemon from "../pokemon/Pokemon"

const pikachuMoves: string[] = ['Thunderbolt', 'Quick Attack', 'Zip Zap', 'Thunder'];

const pikachu: Pokemon = new Pokemon(25, 'Pikachu', "electrico", pikachuMoves);

console.log(pikachu);

pikachu.Attack(pikachuMoves);