const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
];

// Mapeia o array e cria um array novo com as notas dos alunos.
console.log(alunos.map(a => a.nota));

// Function que recebe o acumulador (ou valorInicial do array!) e o valor atual e somo os elementos
// do array para obter o valor total da soma de todos.
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, 0); // Se eu quiser passar um valor inicial, antes da callback, coloco neste local. 

console.log(resultado);