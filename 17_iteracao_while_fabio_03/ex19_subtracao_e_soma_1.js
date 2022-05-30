import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número')
    let contador1 = 1
    let contador2 = n
    let resultado = 0

    while(contador1<=n){
        resultado+=(contador1/contador2)
        contador1++
        contador2--

        resultado-=(contador2/contador1)
        contador1++
        contador2--
    }


    // let counter2 = n
    // for(let counter1= 1; counter1<=n;counter1++){
    //     resultado+=(counter1/counter2)
    //     counter1++
    //     counter2--

    //     resultado-=(counter2/counter1)
    //     counter2--
    // }

    console.log(`Resultado: ${resultado}`)

}

main()