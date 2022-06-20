import {ler_numero, input} from '../io_utils.js'

function main() {

    const vetor = new Array(0,
        -5,
        63,
        -8.5, 7)

    for(let posicao = 0; posicao < vetor.length; posicao++) {

        if(!eh_maior_q_10(vetor[posicao])) {
            console.log(`A[${posicao}] = ${vetor[posicao]}`)
        }
    }
}

const eh_maior_q_10 = n => n > 10

main()