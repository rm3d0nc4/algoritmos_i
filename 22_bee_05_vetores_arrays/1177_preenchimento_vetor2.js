import {ler_numero, input} from '../io_utils.js'

function main() {

    const vetor = new Array(1000)

    const numero = ler_numero('Numero')

    let contador = 0
    while(contador < vetor.length) {

        for(let elemento = 0; elemento < numero && contador < vetor.length; elemento++) {
            vetor[contador] = elemento
            contador++
        }
    }

    for (let indice = 0; indice < vetor.length; indice++) {
        console.log(`N[${indice}] = ${vetor[indice]}`)
    }
}

main()