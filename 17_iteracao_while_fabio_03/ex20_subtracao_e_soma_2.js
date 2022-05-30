import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let contador =1
    let contador2 = n
    let resultado = 0 

    while(contador<=n){

        resultado+=(1/contador)
        contador++

        resultado-=(1/contador)
        contador++
    }

    // for(let counter=1;counter<=n;counter++){
    //     resultado+=(1/counter)
    //     counter++
    //     resultado-=(1/counter)
    // }

    console.log(`Resultado: ${resultado}`)
}

main()