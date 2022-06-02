import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um valor inteiro')

    for(let counter = 2; counter<=n; counter+=2) {
        console.log(counter)
    }
}

main()