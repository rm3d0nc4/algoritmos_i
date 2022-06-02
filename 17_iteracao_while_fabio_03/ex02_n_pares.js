import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um valor inteiro')

    let contador = 2

    while(contador<=n) {
        console.log(contador)
        contador+=2
    }
}

main()