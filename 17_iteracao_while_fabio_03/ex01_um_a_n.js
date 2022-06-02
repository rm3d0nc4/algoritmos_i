import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um valor inteiro')

    let contador = 0
    
    while(contador<n){
        contador++
        console.log(contador)
    }
}

main()