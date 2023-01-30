// Removendo elementos do array

const numeros = [1, 2, 3, 4, 5, 6];
numeros.unshift(); // Adiciona o elemento no inicio
numeros.splice(); // Adiciona o elemento no meio
numeros.push(); // Adiciona o elemento no final

// Remover elementos do final 
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// Remover elementos do ínicio
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

// Remover elementos do meio
const meio = numeros.splice(2,1); // removo o indice 2 (vulgo 4), e apenas 1 elemento quero que seja removido 
console.log(meio);  
console.log(numeros);

// Exercício de fixação
console.log("----------");
const times = [
    {time: "Internacional", competicao: "Libertadores"},
    {time: "Flamengo", competicao: "Libertadores"},
    {time: "Grêmio", competicao: "Série B"}
]
 // Tirar o inicio (vulgo internacional)
// const inicio1 = times.shift();
// console.log(inicio1);
// console.log(times);

// Tirar o meio (vulgo flamengo)
// const meio1 = times.splice(1,1);
// console.log(meio1);
// console.log(times);

// Tirar o final (vulgo grêmio)
const final1 = times.pop();
console.log(final1);
console.log(times); 