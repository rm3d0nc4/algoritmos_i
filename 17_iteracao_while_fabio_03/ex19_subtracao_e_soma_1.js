import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let contador1 = 1
    let contador2 = n
    let resultado = 0

    while(contador1<=n){

        if(eh_par(contador1)){

            resultado-=(contador1/contador2)
        } else {
            
            resultado+=(contador2/contador1)
        }
        contador1++
        contador2--
    }

    console.log(`Resultado: ${resultado}`)

}

const eh_par = n => n % 2 === 0

main()