// let a = 1;
// console.log(a);

const primeiroElemento = arrayOuString => arrayOuString[0]; 
const letraMinuscula = letra => letra.toLowerCase();

let p = new Promise((resolve, reject) => {
    resolve(["Ana", "Bia", "Carlos", "Daniel"])   
  })
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
    .catch(e => console.log(e.message))