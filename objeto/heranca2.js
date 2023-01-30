// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0";   // Não recomendado, não faça!

const avo = { attr1: "A"};
const pai = { __proto__: avo, attr2: "B"};   //Referenciar que o pai, tem como protótipo avo utilizo __proto__
const filho = {__proto__: pai, attr3: "C"};

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0, 
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    }, status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`; 
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324     //shadowing ou sombreamento(sobreescrita)
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}`;     //shadowing 
    }
}

Object.setPrototypeOf(ferrari, carro);  // Estabeleci uma relação de herança de carro e ferrari
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());