const filhas = [ "Ualeska", "Cibalena"];
const filhos = ["Uoxiton", "Uesclei"];
const todos = filhas.concat(filhos, "Fulano");
console.log(todos, filhas, filhos);

// É gerado um novo array com essa concatenação.
console.log(["a", "b"].concat([1, 2], [3, 4], 5, [[6, 7]]));