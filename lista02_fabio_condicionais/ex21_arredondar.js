import {ler_numeros } from './../io_utils.js';

function main() {
    const input21 = ler_numeros('um número para arredondar')
    const result = arredondar(input21[0])

    console.log(`Ǹúmero arredondado: ${result}`)
}

function arredondar(numero) {
    const resto = numero%1
    if (resto<0.5) {
        return numero-resto
    } else {
        return numero-resto+1
    }
}

main()