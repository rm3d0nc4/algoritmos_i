import { ler_numeros } from './../io_utils.js';

function main() {
    const input04 = ler_numeros('um número de 2 dígitos')
    const compara_algarismos = verifica_algarismos_dezena(input04[0])
    console.log(compara_algarismos)
}

//Questão 04
function verifica_algarismos_dezena(numero) {
    const numeros = String(numero).split('').map(Number)
    if(numeros[0] == numeros[1]) {
        return 'Números iguais!'
    } else {
        return 'Números diferentes!'
    }
}


main()