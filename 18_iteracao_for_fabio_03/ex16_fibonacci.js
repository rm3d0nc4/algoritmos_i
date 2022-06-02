import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros("quantos N's primeiros elementos da sequência de Fibonacci")

    let atual = 1
    let anterior = 0

    console.log('Sequência de Fibonacci:')
    console.log(0)

    for(let counter= 1; counter<n; counter++){
        console.log(atual)
        atual+=anterior
        anterior = atual-anterior
    }
}

main()