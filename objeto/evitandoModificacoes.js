// Object.preventExtensions (pode excluir atributos mas não pode adicionar novos)
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "Promoção"
});
console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escola branca";   // Não pode ser add
delete produto.tag;
console.log(produto);

// Object.seal  (não pode add nem excluir atributos desse objeto, mas pode modificar valores dos atributos)
const pessoa = {nome: "Juliana", idade: 35};
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));
pessoa.sobrenome = "Lala";
delete pessoa.nome;
pessoa.idade = 29
console.log(pessoa);    //Alterou a idade mas não add o sobrenome "lala"

// Object.freeze = selado + valores constantes (completamente constante, congela tudo)