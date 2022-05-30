import {ler_numeros} from '../io_utils.js'

function main() {

    const [a0] = ler_numeros('o valor de a0 da PG')
    const [limite] = ler_numeros('o valor limite da PG ')
    const [razao] = ler_numeros('a razão da PG')

    let counter = 1

    // for(let contador = 1; contador<=limite; contador++){
    //     const elemento = a0*razao**(counter-1)

    //     if(elemento<limite){
    //         console.log(elemento)
    //     }
    // }

    while(counter<= limite){
        const elemento = a0*razao**(counter-1)

        if(elemento<limite){
            console.log(elemento)
        }
        counter++
    }
}

main()