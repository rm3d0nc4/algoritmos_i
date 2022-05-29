import { ler_numeros } from './../io_utils.js';

function main() {

    let numero = ler_numeros('um número')[0]

    while (numero>=1) {
        numero/=2
    }

    console.log(`Resultado final: ${numero}`)

}

main()