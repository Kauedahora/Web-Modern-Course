const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;                                             //adicionar valor 10 na posição 4
console.log(valores);
console.log(valores.length);                                 //verificar o comprimento(tamanho) do array

valores.push({id: 3}, false, null, "teste");                 //adicionar novos elementos no array
console.log(valores);

console.log(valores.pop());                                  //pega o ultimo valor do array e retira do array
delete valores[0];                                           //outra forma de retirar o array
console.log(valores);

console.log(typeof valores);

let vaga = ["a0", "a1", "a2", "a3", "a4", "a5"];
console.log(vaga[0], vaga[4]);

vaga.push("a6");                                             //push cria mais um elemento no array e colocará o valor passado
console.log(vaga);                                           //mostrará o array já com o valor a6

let num = [5, 8, 2, 9, 3];
num.push(1);                                                 //irá colocar o valor 1 no final 
num.sort();                                                  //irá ordenar o array
console.log(`O vetor tem ${num.length} posições!`);          //irá mostrar o comprimento(tamanho) do array
console.log(`O primeiro valor do vetor é ${num[0]}`);        
