import {ler_numeros} from '../io_utils.js'

function main() {

    const  [n] = ler_numeros('um valor inteiro')


    let numero = n
    let fatorial = 1
    
    while(numero>=1){
        fatorial*=numero
        numero--
    }

    console.log(`Fatorial de ${n}: ${fatorial}`)


}

main()