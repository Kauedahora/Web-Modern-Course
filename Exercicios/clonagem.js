const celular = {
    marca : "iPhone",
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    ligar: function () {
        console.log("Fazendo ligação!");
    }
}

const novoCelular = Object.assign({
    bateria : 5000,
},celular);
console.log(novoCelular);


const novoCelular2 = {...celular};
console.log(novoCelular2);