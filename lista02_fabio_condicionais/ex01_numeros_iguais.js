import { ler_numeros } from './../io_utils.js';

function main() {
    const input01 = ler_numeros('3 valores, separados por espaço')
    const num_iguais = quant_numeros_iguais(input01[0],input01[1],input01[2])
    console.log(`Existem ${num_iguais} números iguais!`)
}

//Questão 01
function quant_numeros_iguais(n1,n2,n3) {
    if(n1 ===n2 && n2==n3) {
        return 3
    } else if(n1!=n2 && n2!=n3 && n1!=n3) {
        return 0
    } else {
        return 2
    }
}

main()