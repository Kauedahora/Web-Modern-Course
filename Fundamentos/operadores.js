var a = 5;
var b = 8;
var idade = 12;
var estado = "BH";
var salario = 2000;
var sexo = "F";
var media = 5.5;
var teste = 12;
var teste2 = "12";


console.log(a <= b || b / 2 == 2);  // operador OU retorna verdadeiro se um dos lados for verdadeiro, no restante retorna falso

console.log(a > b && b % 2 == 0);   // operador E retorna verdadeiro se os dois lados forem verdadeiros, se um ou os dois forem falsos retorna falso

//Ordem de precedencia é primeiro o não !, depois o e && e por último o ou ||

console.log(idade >= 15 && 17); // a idade está entre 15 e 17?
console.log(estado == "RJ" || estado == "SP"); // o estado é RJ ou SP?
console.log(salario > 1500 && sexo != "M"); // o salário é acima de 1500 e não é homem?

var resposta = media > 7?"Aprovado" : "Reprovado";  //Operador ternario, se a media for maior que 7 retorna aprovado, se não reprovado
console.log(resposta); //media 5.5 é menor que 7, então retorna reprovado

console.log(teste == teste2); //no JS o valor mesmo colocado em outro tipo, é reconhecido como igual
console.log(teste === teste2); //porém, utilizar o  === (identico), permite visualizar se o valor e o tipo são os mesmos