// Variável constante com nome tipoTriangulo, que recebe por parâmetros 3 valores e insere numa função arrow, com verificação por condição.
const tipoTriangulo = (a, b, c) => {        
if (a == b && b == c){
    console.log("Triangulo Equilátero!");

} else if(a != b && a != c && b != c){
    console.log("Triangulo Escaleno!");
    
} else{
    console.log("Triangulo Isóceles!");
}   
}

tipoTriangulo(5, 2, 5);
tipoTriangulo(10, 5, 3);
tipoTriangulo(10, 10, 10);