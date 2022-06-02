import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let soma = 0

    for(let counter= 1; counter<=n;counter++){
        soma+=(1/counter)
    }

    console.log(`Soma: ${soma}`)

}

main()