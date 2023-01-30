// Função construtora
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.falar = function () {
            console.log(`Meu nome é: ${this.nome}. Meu sobrenome é: ${this.sobrenome} e tenho ${this.idade} anos!`);
        }
}

// Instância da classe Pessoa.
const p1 = new Pessoa("Kauê", "Da Hora", 21); 
p1.falar();