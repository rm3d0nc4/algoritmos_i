import {ler_numeros} from '../io_utils.js'

function main() {

    let soma = 0


    let counter2 = 1
    for(let counter1= 1; counter1<=99;counter1+=2){
        soma+=(counter1/counter2)
        counter2++
    }

    console.log(`Soma: ${soma}`)

}

main()