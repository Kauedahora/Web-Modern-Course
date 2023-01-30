function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto1 = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());    // O this, neste contexto do global. O preço não está definido!

// Posso chamar o getPreco a partir de um objeto {}.

console.log(produto1.getPreco());

// A partir do call e aply:

const carro = {
    preco: 49990,
    desc: 0.20
}
console.log(getPreco.call(carro)); // Passando o carro como contexto no qual será executado (call).
console.log(getPreco.apply(carro)); // Passando o carro como contexto no qual será executado (aply).

    // (Call) - Primeiro é o objeto contexto, depois são os parâmetros que vai passar para a função getPreco.
console.log(getPreco.call(carro, 0.17, "$"));   // Diretamente nos parâmetros do call, passei obj contexto(carro) e também os parâmetros que serão passados pra função getPreco.

    // (Aply) - Primeiro parâmetro é o objeto que será utilizado como contexto daquela execução, depois terei um array com todos os parâmetros dentro da função, porém, dentro de um ARRAY! 
    console.log(getPreco.apply(global, [0.17, "$"])); // Diretamente no parâmetro do aply, passei obj contexto(global) e o restante dos parâmetros passo em ARRAY!