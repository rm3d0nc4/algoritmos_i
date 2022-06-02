import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('qtd de N primeiros termos da sequência')

    let sequencia = 1


    for(let counter = 1; counter<=n; counter++){
        console.log(sequencia)
        sequencia+=(counter+1)
    }
}

main()