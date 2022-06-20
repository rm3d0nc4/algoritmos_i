import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let contador1 =1
    let resultado = 0 

    while(contador1<=n){

        if(eh_par(contador1)){

            resultado-=(1 / contador1)
        } else {
            
            resultado+=(1 / contador1)
        }
        contador1++

    }

    console.log(`Resultado: ${resultado.toFixed(2)}`)
}

const eh_par = n => n % 2 === 0

main()