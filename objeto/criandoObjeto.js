// Usando notação literal
const obj1 = {}

// Object em JS
console.log(typeof Object, typeof new Object()); // Function/Object
const obj2 = new Object();
console.log(obj2);

// Função construtora
function produto (nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new produto("Caneta", 7.99, 0.15);
const p2 = new produto("Notebook", 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função factory
function criarFuncionario(nome, salarioBase, qtdFaltas) {
    return {
        nome,
        salarioBase,
        qtdFaltas,
        getSalario() {
            return (salarioBase / 30) * (30 - qtdFaltas);
        }
    }
}
const f1 = new criarFuncionario("João", 7980, 4);
const f2 = new criarFuncionario("Maria", 11700, 1);
console.log(f1.getSalario(),f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info" : "Sou um JSON"}');
console.log(fromJSON.info);