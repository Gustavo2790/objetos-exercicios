const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}

const copiaPokemon1 = {
    ...pokemon1
}

copiaPokemon1.nome = "Squirtle"
copiaPokemon1.tipo = "Água"
pokemon1.ataques = []

const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push(ataque)
copiaPokemon1.ataques = [{...ataque}]

const ataque2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}

pokemon1.ataques.push(ataque2)

const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
}

copiaPokemon1.ataques.push(ataque3)

console.log(pokemon1)
console.log(copiaPokemon1)