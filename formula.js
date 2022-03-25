import {print} from './io_utils.js'
import {input} from './io_utils.js'

function main(){
    const incial = Number(input('Digite o número inicial:'))
    const final = Number(input('Digite o número inicial:'))
    const resultado = (final+incial) * (final/2)
    print(`Soma: ${resultado}`)
}

main()