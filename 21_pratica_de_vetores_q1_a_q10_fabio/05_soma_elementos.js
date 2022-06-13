import {ler_numero, input} from '../io_utils.js'

function main() {

    const vetorA = new Array(20)

    for(let posicao = 0; posicao < vetorA.length; posicao++) {
        vetorA[posicao] = ler_numero(`A[${posicao}]`)
    }

    let soma = 0

    for( let elemento of vetorA){
        soma+=elemento
    }

    console.log('Vetor:')
    console.log(vetorA)
    console.log(`Soma: ${soma}`)
}

main()