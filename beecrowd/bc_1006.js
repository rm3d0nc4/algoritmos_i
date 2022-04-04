import {input, print} from '../io_utils.js'

function main() {
    const A = Number(input('Primeiro Valor:')).toFixed(1)
    const B = Number(input('Segundo Valor:')).toFixed(1)
    const C = Number(input('Terceiro Valor:')).toFixed(1)

    const media = (A*2+B*3+C*5)/10

    console.log(`MEDIA = ${media.toFixed(1)}`)

}
main()