import {ler_numeros} from '../io_utils.js'

function main() {

    let numero = 1

    while(numero<=10){

        let numero2 = 1
        
        console.log(`========= Tabuada do ${numero} =========`)
        while(numero2<=10){
            console.log(`\t${numero}*${numero2}= ${numero*numero2}`)
            numero2++
        }
        console.log('=================================')
        numero++
    }
}

main()