/* Callback === uma função passada a outra função como argumento, que é invocado dentro da função externa para 
completar algum tipo de rotina ou ação! */

const fabricantes = ["Mercedes", "Audi", "BMW"];    // Variável constante com nomes de carros.

function imprimirNome(nome, indice){                // Função para imprimir o nome e o indice passado por parâmetros.
    console.log(`${indice + 1}. ${nome}`);          // Mostra o índice iniciando no 1 e mostra o nome                
}

fabricantes.forEach(imprimirNome);                  // Para cada nome e indice dentro do array "fabricantes", callback a função imprimirNome. 

// Para cada nome dentro do array "fabricantes", callback a função "fabricante" passada por parâmetro, onde retornará o nome.
fabricantes.forEach(fabricante => console.log(fabricante)); 