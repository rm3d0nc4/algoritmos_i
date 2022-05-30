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

    // for(let num1 = 1; num1<=10; num1++){
    //     console.log(`========= Tabuada do ${num1} =========`)
    //     for(let num2 = 1; num2<=10; num2++){
    //         console.log(`\t${num1}*${num2}= ${num1*num2}`)
    //     }
    //     console.log('=================================')
    // }
}

main()