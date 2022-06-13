import {ler_numero, input} from '../io_utils.js'

function main() {

    const num_elementos = Number(input('Quantos N primeiros elementos da sequência de Fibonacci? '))
    const vetor = new Array(num_elementos+1)

    let contador = 0
    let atual = 1
    let anterior = 0

    // console.log('Sequência de Fibonacci:')
    vetor[contador] = 0
    contador++

    while(contador<vetor.length){

        vetor[contador] = atual

        atual+=anterior
        anterior = atual-anterior
        contador++
    }

    vetor.forEach(elemento => console.log(elemento))
}

main()