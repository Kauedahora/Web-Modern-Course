const ferrari = {
    modelo: "F40",
    velocidadeMax: 324
}

const volvo = {
    modelo: "V40",
    velocidadeMax: 200
}

console.log(ferrari.__proto__); // A partir disto, consigo ver quem é o prototype desse obj (ou o SUPER Objeto do objeto ferrari)
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);