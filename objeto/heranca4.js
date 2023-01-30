function MeuObjeto() {}
console.log(MeuObjeto.prototype);

// instanciando objetos da minha função construtora
const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

/* crio dois objetos diferentes a partir da mesma função construtora, 
os protótipos deles apontam pro mesmo objeto? */
console.log(obj1.__proto__ === obj2.__proto__); // SIM
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome é ${this.nome}`);
}

console.log(obj1.nome);
obj1.falar();
obj2.nome = "Rafael";
console.log(obj2.nome);
obj2.falar();

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Obj3";
obj3.falar();

// Resumindo a loucura
// Criar uma instancia
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);