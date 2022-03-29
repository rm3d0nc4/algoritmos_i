import {input, print} from '../io_utils.js'

function main() {

    const velocidade_ms = Number(input('Insira a velocidade em m/s:'))
    
    const velocidade_kmh = velocidade_ms * 3.6

    print(`A velocidade ${velocidade_ms} m/s equivale a ${velocidade_kmh} km/h`)
}

main()