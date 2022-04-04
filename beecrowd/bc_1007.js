import {input, print} from '../io_utils.js'

function main() {
    const A = (input('Primeiro Valor:'))
    const B = Number(input('Segundo Valor:'))
    const C = Number(input('Terceiro Valor:'))
    const D = Number(input('Quarto Valor:'))

    const dif = (A*B)-(C*D)

    console.log(`DIFERENCA = ${dif}`)

}
main()