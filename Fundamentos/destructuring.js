const pessoa = {
    nome: "Kauê",
    idade: 21,
    endereco: {
        logradouro: "Carmen miranda",
        numero: 324
    }
}

const { nome, idade} = pessoa; // tira da estrutura de pessoa o nome e idade
console.log(nome,idade);

const { nome: n, idade: i} = pessoa; //tire da estrutura pessoa, nome e idade e crie variaveis n e i, respectivamente para as duas
console.log(n, i); //mostra nome e idade

const {sobrenome, bemHumorado = true} = pessoa;  //atributos que não existem 
console.log(sobrenome, bemHumorado);

const{endereco: {logradouro, numero, cep} } = pessoa; //atributos logradouro e numero existem em pessoa mas cep não, extrai endereco de pessoa e extrai logradouro e numero de endereco
console.log(logradouro, numero, cep);

console.log("-----------------");

const [a] = [10];  //criou uma variavel a que recebe 10
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; //ignora o n2 e n4. O n5 já não existe no array
console.log(n1, n3, n5, n6); //aqui mostra 10, ignora o n2, 9, n5 não existe, mostra 0

const [,[, nota]] = [[, 8,8],[9,6,8]]; //ignora o primeiro elemento do array 1, o segundo elemento do array 1 é outro array. Então, ignora o primeiro elemento do 2 array.
console.log(nota); //não usa esse array na prática. Muito confuso esta desestruturação.