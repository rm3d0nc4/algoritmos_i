import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let resultado = 0


    let counter2 = n
    for(let counter1= 1; counter1<=n;counter1++){
        if(eh_par(counter1)){

            resultado-=(counter1/counter2)
        } else {
            
            resultado+=(counter2/counter1)
        }
        counter2--
    }

    console.log(`Resultado: ${resultado}`)

}

const eh_par = n => n % 2 === 0


main()