import {ler_numero, input} from '../io_utils.js'

function main() {

    const vetor_fibonacci = [0,1]

    const posicao = ler_numero('Posição')
    let elemento_fibonacci

    for(let indice = vetor_fibonacci.length - 1; indice < posicao; indice++) {

        elemento_fibonacci = vetor_fibonacci[indice] + vetor_fibonacci[indice - 1]

        vetor_fibonacci[vetor_fibonacci.length] = elemento_fibonacci
    }

    console.log(`Fib(${posicao}) = ${vetor_fibonacci[posicao]}`)

}

main()