import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let contador =1
    let contador2 = n
    let resultado = 0 

    while(contador<=n){

        resultado+=(1/contador)
        contador++

        resultado-=(1/contador)
        contador++
    }

    console.log(`Resultado: ${resultado}`)
}

main()