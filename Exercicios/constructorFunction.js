// Objeto postagem
// const postagem = {
//     titulo: "Copa do mundo",
//     mensagem: "O brasil é o atual favorito ao título mundial de 2022!",
//     autor: "Kauê",
//     visualizacoes: 5000,
//     comentarios : [
//         {autor: "Pedro", mensagem: "Eu espero que o Brasil seja o campeão desta copa!"},
//         {autor: "Lucas", mensagem: "Com Neymar, Vinicius Junior, Paquetá e companhia. O Brasil literalmente é o mais favorito desta copa!!"}
//     ], estaAoVivo : true
// }

// Construtor function de postagem 
function Postagem (titulo, mensagem, autor) {
    this.titulo = titulo;
    this.mensagem = mensagem;
    this.autor = autor;
    this.visualizacoes = 0;
    this.comentarios = [];
    this.estaAoVivo = false;
}

let postagem = new Postagem("Copa do mundo","O brasil é o atual favorito ao título mundial de 2022!", "Kauê");
console.log(postagem);