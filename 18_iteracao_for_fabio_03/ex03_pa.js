import {ler_numeros} from '../io_utils.js'

function main() {

    const [a0] = ler_numeros('o valor de a0 da PA')
    let [limite] = ler_numeros('o valor limite da PA')
    let [razao] = ler_numeros('o valor da razão a PA')

    for(let counter =1 ; counter<=limite/2; counter++){
        const elemento = a0+(counter-1)*razao
        console.log(elemento)
    }

}

main()