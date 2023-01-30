const pai = {nome: "Pedro", corCabelo: "preto"};
const filha1 = Object.create(pai);   // cria um obj novo, tendo pai como protótipo de filha1
filha1.nome = "Ana";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: "Bia", writable: false, enumerable: true } //writable não será modificável, enumerable poderá ser enumerado/listado.
});

console.log(filha2.nome);
filha2.nome = "Luana";      // Não pode ser modificável então continuará "Bia"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(filha1.nome);
console.log(Object.keys(filha2));

for (let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);;;
}