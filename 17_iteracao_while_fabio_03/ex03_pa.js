import {ler_numeros} from '../io_utils.js'

function main() {

    const [a0] = ler_numeros('o valor de a0 da PA')
    let [limite] = ler_numeros('o valor limite da PA')
    let [razao] = ler_numeros('o valor da razão a PA')

    let termo = 1
    let contador = 1

    while (termo< limite){
        termo = a0+(contador-1)*razao
        contador++
        console.log(termo)
    }
}

main()