// Iteração sobre objeto:

const filme = {
    titulo : "Vingadores",
    ano : 2018,
    diretor : "Kauê",
    personagem : "Thor"
}

exibirPropriedades = (obj) => {
    for (prop in obj){
        if (typeof obj[prop] === "string"){
            console.log(prop, obj[prop]);
        }
    }
}

exibirPropriedades(filme);