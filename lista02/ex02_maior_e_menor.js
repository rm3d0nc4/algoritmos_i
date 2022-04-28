import { ler_numeros } from './../io_utils.js';

function main() {
    const input02 = ler_numeros('2 valores, separados por espaço')
    const compara2 = compara_2numeros(input02[0], input02[1])
    console.log(compara2)
}


//Questão 02
function compara_2numeros(n1, n2){
    if(n1>n2) {
        return `Maior: ${n1}; Menor: ${n2}`
    } else if (n1===n2){
        return `${n1} igual a ${n2}`
    } else {
        return `Maior: ${n2}; Menor: ${n1}`
    }
}

main()