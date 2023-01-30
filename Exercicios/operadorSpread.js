const primeiro = [1,2,3];
const segundo = [4,5,6];

// Spread
const combinado = [...primeiro,...segundo];
console.log(combinado);
// const cortado = combinado.slice();

const clonado = [...combinado];
console.log(clonado);

// Exercício de fixação 
const teste = [...primeiro,"%",...segundo];
console.log(teste);