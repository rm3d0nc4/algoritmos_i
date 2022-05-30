import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um valor inteiro')

    // for(let counter = 1; counter<=n; counter++){
        //     console.log(counter)
        // }
        
    let contador = 0
    
    while(contador<n){
        contador++
        console.log(contador)
    }
}

main()