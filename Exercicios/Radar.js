const verificarVelocidade = (velocidade) => {
    const velocidadeMax = 70;
    const kmPorPonto = 5;

        if (velocidade <= velocidadeMax) {
            console.log(`Sua velocidade é de ${velocidade} km/h. Dirija com cuidado e utilize o cinto de segurança!`);
        } else { 
           pontos = Math.floor((velocidade - velocidadeMax) / kmPorPonto);
                if (pontos >= 12 ) {
                    console.log("Carteira suspensa!");
                } else {
                    console.log(`Você recebeu ${pontos} pontos na sua carteira!`);
                }
        }
}

verificarVelocidade(60);
verificarVelocidade(90);
verificarVelocidade(190);
verificarVelocidade(75);    