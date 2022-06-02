import {ler_numeros} from '../io_utils.js'

function main() {

    const [l_superior] = ler_numeros('limite superior')
    const [l_inferior] = ler_numeros('limite inferior')
    let contador

    contador=l_inferior

    console.log('Pares:')
    while (contador<=l_superior) {
        if(eh_par(contador)){
            console.log(contador)
        }
        contador++
    }
}

const eh_par = n => n%2===0

main()