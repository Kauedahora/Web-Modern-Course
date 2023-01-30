let valores = [5, 8, 2, 9, 3];  //Declarei desordenado!!!
valores.push(1);                //Adiciona o valor 1 para o final do array
valores.sort();                 //Ordena os arrays, portanto, o 1 passa a ser o indice 0
console.log(valores);
console.log(`O vetor tem ${valores.length} posições!`);
console.log(`O primeiro valor do vetor é: ${valores[0]}`);

let pos = valores.indexOf(8);   //Procura o valor 8 na variavel valores e retorna a posição dele no array  

if (pos == -1) {
    console.log(`O valor não foi encontrado!`);
} else{
    console.log(`O valor está na posição ${pos}`); 
}
      


