// Combinar e dividir os arrays
const primeiro = [1,2,3];
const segundo = [4,5,6];

// Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

// Dividir 
const dividir = combinado.slice(1, 3);
console.log(dividir);
console.log(primeiro);
console.log(segundo);

// Exercicio de fixação

const letras = ["a", "b", "c"];
const letras2 = ["d", "e", "f"];

// Combinar 
const combinar = letras.concat(letras2);
console.log(combinar);

// Dividir
const separar = combinar.splice(0, 4);
console.log(separar);
console.log(letras);
console.log(letras2);