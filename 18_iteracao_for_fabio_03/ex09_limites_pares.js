import {ler_numeros} from '../io_utils.js'

function main() {

    const [l_superior] = ler_numeros('limite superior')
    const [l_inferior] = ler_numeros('limite inferior')


    console.log('Pares:')
    for(let counter = l_inferior; counter<=l_superior; counter++){
        if(eh_par(counter)){
            console.log(counter)
        }
    }
}

const eh_par = n => n%2===0

main()