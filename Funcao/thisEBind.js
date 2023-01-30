const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;

falar();                                             // Conflito entre paradigmas: funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa);     //Bind passa um obj no qual quer que seja resolvido o "this".
falarDePessoa();