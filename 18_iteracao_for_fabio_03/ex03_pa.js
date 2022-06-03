import {ler_numeros} from '../io_utils.js'

function main() {

    const [a0] = ler_numeros('o valor de a0 da PA')
    let [limite] = ler_numeros('o valor limite da PA')
    let [razao] = ler_numeros('o valor da razão a PA')
    let termo = 1

    for(let counter =1 ; termo< limite; counter++){
        termo = a0+(counter-1)*razao
        console.log(termo)
    }

}

main()