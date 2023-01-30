const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// laço for, percorre o array aprovados e quando executa o primeiro elemento(nome), 
// chama a função passando o (nome) e o indice do array aprovados.
aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
});

console.log("-----------------");
// Outro exemplo
// Sem parâmetros
aprovados.forEach(nome => console.log(nome));

// Armazenar uma function em uma variável e passar a variável por parâmetro.
console.log("=================");
const teste = aprovado => console.log(aprovado);
aprovados.forEach(teste);