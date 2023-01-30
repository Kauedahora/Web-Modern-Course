const array = [70, 70, 80];

const mediaDoAluno = (notas) => {
const media = calcularMedia(notas);
        if (media < 59) {
            return "F";
        }
            if (media < 69) {
                return "D";
            }
                if (media < 79) {
                    return "C";
                }
                    if (media < 89) {
                        return "B";
                    }
                        if (media < 100) {
                            return "A";
                        }
                }


const calcularMedia = (array) => {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    } 
        return soma / (array.lenght);
}

console.log(mediaDoAluno(array));