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
    
    // console.log('Ímpares')
    // for(let counter = l_inferior; counter<=l_superior; counter++){
    //     if(eh_impar(counter)){
    //         console.log(counter)
    //     }
    // }
}

const eh_impar = n => !(n%2===0)

main()