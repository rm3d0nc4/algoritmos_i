import {ler_numero, input, ler_numeros} from '../io_utils.js'

function main() {

    let [largura, comprimento, area_liberada] = ler_numeros('Largura, comprimento e area liberada')

    const area_total = ((largura * comprimento) * 100) / area_liberada

    const medida_do_lado = Math.sqrt(area_total)

    console.log(Math.trunc(medida_do_lado))
}

main()