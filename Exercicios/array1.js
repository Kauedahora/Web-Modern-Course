// Add elementos no array
const numeros = [1, 2, 3];

// Adiciona o elemento no inicio
numeros.unshift(0);
console.log(numeros);

// Adiciona o elemento no meio
numeros.splice(1,0,"a");
console.log(numeros);

// Adiciona o elemento no final
numeros.push(5);
console.log(numeros);

// Ordena os elementos do array
numeros.sort();
console.log(numeros);