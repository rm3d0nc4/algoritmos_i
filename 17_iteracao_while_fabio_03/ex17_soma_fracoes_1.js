import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let soma = 0
    let contador = 1

    while(contador<=n){
        soma+=(1/contador)
        contador++
    }

    console.log(`Soma: ${soma}`)

}

main()