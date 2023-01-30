const marcas = [
    {id: 1, nome: "A"},
    {id: 2, nome: "B"},
    {id: 3, nome: "C"},
    {id: 4, nome: "D"}
]

const marca = marcas.find(function(marca){
    return marca.nome === "A";
});

console.log(marca);

// array de objetos com alguns times
const times = [
    {time: 1, nome: "Internacional"},
    {time: 2, nome: "Flamengo"},
    {time: 3, nome: "Vasco"}
]

// variavel criada para armazenar uma função que procura o nome do Vasco em um array de objetos
const procuraTime = times.find(times => times.nome === "Vasco");


console.log(procuraTime);