const exibirNumerosPrimos = (limite) => {
        for (let numero = 2; numero <= limite; numero++) {
            if (numeroPrimo(numero)) { console.log(numero);
            }
        }
}

const numeroPrimo = (numero) => {
    for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0) {
            return false;
        }
    } return true;
}
exibirNumerosPrimos(15); 