import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número inteiro')

    let soma = 0

    for(let counter = 1; counter<=n; counter++){
        soma+=counter
    }
    console.log(`Soma de todos os número ente 1 e ${n}: ${soma}`)

}

main()