import {ler_numero, input} from '../io_utils.js'

function main() {

    const vetor = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10]

    let posicao_menor_elemento = Infinity
    let menor_elemento = Infinity

    for(let posicao = 0; posicao< vetor.length; posicao++) {
        if(vetor[posicao] < menor_elemento) {
            menor_elemento = vetor[posicao]
            posicao_menor_elemento = posicao
        }
    }

    console.log(`Menor valor: ${menor_elemento}`) 
    console.log(`Posicao: ${posicao_menor_elemento}`)
}

main()