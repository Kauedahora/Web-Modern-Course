const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback:
const notasBaixas1 = [];                  // Declarei uma variável notasBaixas de array, porém, vazio.
for(let i in notas){                    // Laço for in, indice[i] em notas.
    if (notas[i] < 7) {                 // Se o índice[i] no array "notas" for menor que 7.
        notasBaixas1.push(notas[i]);    // Adiciona a minha variável criada notasBaixas, os índices da constante "notas" menores que 7.
    }
}

console.log(notasBaixas1);

// Com callback:
const notasBaixas2 = notas.filter(nota => nota < 7);  // Criei uma constante notasBaixas 2, que irá receber o filtro da variavel notas, onde se a nota for menor que 7 é criado um novo array e armazenado lá apenas os menores que 7, o restante é ignorado.
console.log(notasBaixas2);