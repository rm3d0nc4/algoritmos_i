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
    console.log(`Soma: ${soma}`)

}

main()