/* Escreva uma função que usa 2 números e retorna 
o maior entre eles */

let maiorNumero = max(10, 10);
console.log(maiorNumero);
console.log("-------------");

// Com if:

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
        return num2;
}

console.log(max(5, 7));
console.log(max(3, 0));
console.log("--------------");


// Com operador ternário:

max = (num1, num2) =>{
   return num1 > num2 ? num1 : num2;
}
