let isAtivo = false;  //let para alterar variavel. Mas sempre priorizar constantes.
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);       //Transformar o valor em um valor verdadeiro ou falso. 

console.log("Os verdadeiros"); //Tipos/situações que são verdadeiros
console.log(!!3);
console.log(!!-1);
console.log(!!" "); //String com espaço é verdadeiro
console.log(!!"texto");
console.log(!![]); //array vazio é verdadeiro
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos"); //Tipos/situações que são falsos
console.log(!!0);
console.log(!!''); //String vazia é falso
console.log(!!null);
console.log(!!NaN); //Not a number é falso
console.log(!!undefined);;
console.log(!!(isAtivo = false));

console.log("Pra finalizar");
console.log(!!("" || null || 0 || " "));

let nome = "";

console.log(nome || "Desconhecido");