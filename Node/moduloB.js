let a = 2;  // Não está visível fora do módulo pois não foi exportado!

// module.exports (estará visível fora do módulo) e um objeto declarado desta maneira, só funcionará com module.exports.
module.exports = {
    bomDia: "Bom dia!",
    boaNoite() {
        return "Boa noite!"
    }
}