import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let resultado = 0 

    for(let counter=1;counter<=n;counter++){
        if(eh_par(counter)){

            resultado-=(1 / counter)
        } else {
            
            resultado+=(1 / counter)
        }
    }

    console.log(`Resultado: ${resultado.toFixed(2)}`)
}

const eh_par = n => n % 2 === 0

main()