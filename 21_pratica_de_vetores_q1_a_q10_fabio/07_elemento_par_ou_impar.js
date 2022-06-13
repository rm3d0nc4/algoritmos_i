import {ler_numero, input} from '../io_utils.js'

function main() {

    //Lendo valor de N
    const num_elementos = ler_numero('Número de elementos')

    // Criando vetores
    const vetorA = new Array(num_elementos)
    const vetorB = new Array(num_elementos)

    // Preenchendo vetor A
    for(let posicao = 0; posicao<num_elementos; posicao++) {
        vetorA[posicao] = ler_numero(`A[${posicao}]`)
    }

    // Gerando vetor B

    for(let posicao = 0; posicao<vetorA.length; posicao++) {
        if(eh_par(vetorA[posicao])) {
            vetorB[posicao] = 0
        } else {
            vetorB[posicao] = 1
        }
    }

    // Imprimindo vetores

    console.log('Vetor A:')
    console.log(vetorA)
    console.log('Vetor B:')
    console.log(vetorB)
}

const eh_par = n => n % 2 === 0

main()