import {ler_numeros} from '../io_utils.js'

function main() {

    let soma = 0
    let contador1 = 1
    let contador2 = 1

    while(contador1<=99){
        soma+=(contador1/contador2)
        contador1+=2
        contador2++

    }

    // let counter2 = 1
    // for(let counter1= 1; counter1<=99;counter1+=2){
    //     soma+=(counter1/counter2)
    //     counter2++
    // }

    console.log(`Soma: ${soma}`)

}

main()