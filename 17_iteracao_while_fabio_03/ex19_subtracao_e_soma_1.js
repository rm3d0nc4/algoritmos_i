import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let contador1 = 1
    let contador2 = n
    let resultado = 0

    while(contador1<=n){
        resultado+=(contador1/contador2)
        contador1++
        contador2--

        resultado-=(contador2/contador1)
        contador1++
        contador2--
    }

    console.log(`Resultado: ${resultado}`)

}

main()