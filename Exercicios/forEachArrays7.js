const numeros = [1,2,3,4,5];

// Iterando com array
for (numero of numeros) {
    console.log(numero);
}

// forEach (mais informações sobre o array)
numeros.forEach((numero, indice) => console.log(numero, indice));

const times = ["Internacional", "Liverpool", "Barcelona", "Real Madrid"];

// forEach times
times.forEach((nome, indice) => console.log(nome, indice));