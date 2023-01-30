// Operador ...rest(juntar)/spread(espalhar)
// Usar rest como parâmetro de uma function

// Usar spread com objetos
const funcionario = { nome: "Maria", salario: 12348.99 }
const clone = { ativo: true, ...funcionario}    // Pegando todos os atributos de funcionario e atribuindo a const clone.
console.log(clone);

// Usar spread com arrays
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...grupoA,"Rafaela"]; // Espalhando todos os elementos do grupoA, para grupoFinal nesta posição.
console.log(grupoFinal);