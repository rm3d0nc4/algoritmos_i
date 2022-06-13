import {ler_numero, input} from '../io_utils.js'

function main() {

    const num_elementos = ler_numero('Número de elementos')

    const vetorA = new Array(num_elementos)
    const vetorB = new Array(num_elementos)

    //Inserindo Valors nos vetores A e B

    for(let posicao = 0; posicao<num_elementos; posicao++) {
        vetorA[posicao] = ler_numero(`A[${posicao}]`)
    }

    for(let posicao = 0; posicao<num_elementos; posicao++) {
        vetorB[posicao] = ler_numero(`B[${posicao}]`)
    }

    // Gerando vetor união

    const vetorC = new Array()

    for(let elemento = 0; elemento < num_elementos; elemento++) {
        vetorC[elemento] = vetorA[elemento]
    }

    for(let elemento = 0; elemento < num_elementos; elemento++) {
        if(!contem(vetorB[elemento], vetorC)){
            vetorC[vetorC.length] = vetorB[elemento]
        }
    }

    // Gerando vetor insterseção

    const vetorD = new Array()

    for(let elemento = 0; elemento< vetorA.length; elemento++) {
        if(contem(vetorA[elemento], vetorB)) {
            vetorD[vetorD.length] = vetorA[elemento]
        }
    }

    console.log(vetorA)
    console.log(vetorB)
    console.log('Vetor união: ')
    console.log(vetorC)
    console.log('Vetor interseção: ')
    console.log(vetorD)
}

function contem(elemento, vetor) {
    for (let indice = 0; indice < vetor.length; indice++) {
        if(elemento === vetor[indice]) {
            return true
        }
    }

    return false
}

main()