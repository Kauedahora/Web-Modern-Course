function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++
        console.log(`Feliz aniversário de ${this.idade} anos de idade!`);
    }, 1000);
}

new Pessoa