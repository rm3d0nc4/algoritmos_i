import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('qtd de N primeiros termos da sequência')

    let contador = 1
    let sequencia = 1

    while(contador<=n){
        console.log(sequencia)
        sequencia+=(contador+1)
        contador++
    }
}

main()