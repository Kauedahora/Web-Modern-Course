const escola = "Cod3r";

console.log(escola.charAt(4)); //Irá me retornar o caracter que está no indice 4
console.log(escola.charAt(5)); //Quando não há o char no indice 5 me retorna um valor vazio
console.log(escola.charCodeAt(3)); //Código relacionado a tabela unicode, o digito 3 é o número 51 da mesma
console.log(escola.indexOf("3")); 

console.log(escola.substring(1)); //Imprime o valor do o para a frente
console.log(escola.substring(0,3)); //Imprime o indice zero até o indice 3, mas não imprime o 3

console.log("Escola".concat(escola).concat("!")); //Concatenar string com a variavel e concatenando com outra string
console.log("Escola" + escola + "!"); //Concatenação mas de um modo mais simples com o simbolo +

console.log(escola.replace("r", "e")); //Substituirá o 3 da minha constante escola pelo "e"

console.log("Ana, Maria, Pedro".split(",")); //Cria um array com três elementos independentes
