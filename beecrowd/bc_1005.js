import {input, print} from '../io_utils.js'

function main() {
    const n1 = Number(input('Primeiro Valor:'))
    const n2 = Number(input('Segundo Valor:'))

    const media = (n1*3.5+n2*7.5)/11

    console.log(`MEDIA = ${media.toFixed(5)}`)

}
main()