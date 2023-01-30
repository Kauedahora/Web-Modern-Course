console.log(this === global); // This não aponta pra global no node, e sim para module.exports
console.log(this === module); // Não! This é um objeto, extamente a referencia para module.exports
console.log(this === module.exports);
console.log(this === exports);  // Sim, porque exports aponta pra mesma referência (mesmo objeto)

// this em função tradicional (o this irá apontar para o objeto global!)
function logThis () {
    console.log("Dentro de uma função ..");
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);   // this, aponta para global dentro de uma function

    this.perigo = " ... "
}
    logThis(); // dentro de uma função, não aponta pra exports e nem module.exports, mas fora sim.