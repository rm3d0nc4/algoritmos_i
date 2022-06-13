import {ler_numeros, input} from '../io_utils.js'

function main() {
    const num_elementos = Number(input('Número de elementos: '))

    const vetorA = new Array(num_elementos)
    const vetorB = new Array(num_elementos)

    for(let posicao = 0; posicao < vetorA.length; posicao++) {
        vetorA[posicao] = Number(input(`A[${posicao}]: `))
    }
    
    for(let posicao = 0; posicao < vetorB.length; posicao++) {
        vetorB[posicao] = Number(input(`B[${posicao}]: `))
    }

    const vetorC = new Array(2*num_elementos)

    for(let posicao = 0; posicao < vetorC.length; posicao++) {

        if(posicao < num_elementos) {
            vetorC[posicao] = vetorA[posicao]
        } else {
            vetorC[posicao] = vetorB[posicao-num_elementos]
        }
    }

    console.log(vetorC)
    
}

main()