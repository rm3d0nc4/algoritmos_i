import {ler_numeros} from '../io_utils.js'

function main() {

    for(let num1 = 1; num1<=10; num1++){
        console.log(`========= Tabuada do ${num1} =========`)
        for(let num2 = 1; num2<=10; num2++){
            console.log(`\t${num1}*${num2}= ${num1*num2}`)
        }
        console.log('=================================')
    }
}

main()