import {ler_numero, input} from '../io_utils.js'

function main() {

    const vetor = new Array(10)
    const n = ler_numero('Digite o valor de N')

    vetor[0] = n
    for(let posicao = 1; posicao < vetor.length; posicao++) {
        vetor[posicao] = vetor[posicao -1] * 2
    }

    for (let indice = 0; indice < vetor.length; indice++) {
        console.log(`N[${indice}] = ${vetor[indice]}`)
    }
}

main()