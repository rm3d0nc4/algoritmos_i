import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let soma = 0
    let contador1 = 1
    let contador2 = n

    while(contador1<=n){
        soma+=(contador1/contador2)
        contador1++
        contador2--
    }

    // let counter2 = n
    // for(let counter= 1; counter<=n;counter++){
    //     soma+=(counter/counter2)
    //     counter2--
        
    // }

    console.log(`Soma: ${soma}`)

}

main()