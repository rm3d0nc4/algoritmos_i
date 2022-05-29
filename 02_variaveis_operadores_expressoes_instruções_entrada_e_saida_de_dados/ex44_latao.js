import {input, print} from '../io_utils.js'
function main() {
    print('----- Calcular quantidade de cobre e zinco em um latão  -----')

    const peso_latao = Number(input('Peso total do latão (kg)):'))

    const quant_cobre = peso_latao*.7
    const quant_zinco = peso_latao*.3

    print(`Em um latão de ${peso_latao.toFixed(2)} Kg há ${quant_cobre.toFixed(2)} Kg de cobre e ${quant_zinco.toFixed(2)} Kg de zinco.`)
}
main()