class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    falar(){
        console.log(`Meu nome é: ${this.nome}. Meu sobrenome é: ${this.sobrenome} e tenho ${this.idade} anos!`);
    }
}

// Instância da classe Pessoa.
const p1 = new Pessoa("Kauê", "Da Hora", 21); 
p1.falar();

// Factory
const criarPessoa = (nome, sobrenome, idade) => {
    return { 
        falar: () => console.log(`Meu nome é: ${nome}. Meu sobrenome é: ${sobrenome} e tenho ${idade} anos! `)
    }
};

const p2 = criarPessoa("Yuri", "Da Hora", 14);
p2.falar();