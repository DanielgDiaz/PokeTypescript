class Pokemon {
    private id: number
    private name: string
    private type: string
    private moves : Array<string>


 constructor(
    id: number,
    name: string,
    type: string,
    moves: Array<string>,
    ) {
        this.id = id
        this.name = name
        this.type = type
        this.moves = moves
    }

 public toString(): string[] {
    return [
        `pokemon ID: ${this.id}`,
        `pokemon Name: ${this.name}`,
        `pokemon type: ${this.type}`,
        `pokemon moves: ${this.moves}`,
    ]
}    
 get pokemonId(): number {
     return this.id
 }

 set pokemonId(id: number) {
     this.id = id
 }

 get pokemonName(): string {
    return this.name
}

set pokemonName(name:string) {
    this.name = name
}

get pokemonType(): string {
    return this.type
}

set pokemonType(type:string) {
    this.type = type
}

get pokemonMoves(): Array<string> {
    return this.moves
}

set pokemonMoves(moves: Array<string>) {
    this.moves = moves
}

public Attack(moves: Array<string>) {
    let random = Math.round(Math.random() * 3);
    console.log(`${this.pokemonName} used ${moves[random]}!`);
    
}
}

export default Pokemon