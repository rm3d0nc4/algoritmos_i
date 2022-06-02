import {ler_numeros} from '../io_utils.js'

function main() {

    const [l_superior] = ler_numeros('o limite superior')
    const [l_inferior] = ler_numeros('o limite inferior')

    let contador = l_inferior

    console.log('Ímpares')
    while(contador<=l_superior){
        if(eh_impar(contador)){
            console.log(contador)
        }
        contador++
    }
}

const eh_impar = n => !(n%2===0)

main()