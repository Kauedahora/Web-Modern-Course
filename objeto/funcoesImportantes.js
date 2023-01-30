const pessoa = {
    nome : "Rebeca",
    idade : 2,
    peso : 13,
}

console.log(Object.keys(pessoa));       // Chaves definidas do objeto
console.log(Object.values(pessoa));     // Valores definidos do objeto
console.log(Object.entries(pessoa));    // Array com subarrays das chaves e valor deste objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${[chave]} : ${[valor]}`);
});

Object.defineProperty(pessoa, "dataNascimento",{
    enumerable: true, 
    writable: false,
    value: "01/01/2019",
})
pessoa.dataNascimento = "01/01/2017";   // Não enumera!

console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

// Object.assign (ECMAscript 2015)
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const objResultante = Object.assign(dest, o1, o2);  // atribui ao primeiro parâmetro "dest", os outros 2 objetos passados
console.log(objResultante);
console.log(dest);  