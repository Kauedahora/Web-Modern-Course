// pessoa -> 123 -> {...}
const pessoa = {nome : "João"};
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> {...} 
// pessoa = {nome : "Ana"};

Object.freeze(pessoa);  //Congelando o objeto pessoa
pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;     // Não consegue excluir após congelar o objeto
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome : "João"});
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);