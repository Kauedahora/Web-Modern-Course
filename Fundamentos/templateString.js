const nome = "Rebeca";              
const concatenacao = "Olá " + nome + "!";

//Cria um template string
const template =`   
  Olá
  ${nome}!`;      //Dolar ${entre chaves o nome da variavel} e exclamação crase 
console.log(concatenacao, template);

//expressoes...
console.log(`1 + 1 = ${1 + 1}`); //o que estiver entre dolar entre chaves, ele irá interpretar

const up = texto => texto.toUpperCase();   //Deixar a frase com letras maiusculas
console.log(`Ei... ${up("cuidado")}!`);