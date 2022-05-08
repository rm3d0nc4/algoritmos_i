import {input, print} from '../io_utils.js'
function main() {
    print('----- Convertendo de KM pra M -----')

    const valor_km = Number(input('Digite a distância em KM:'))

    const valor_m = valor_km*1000

    print(`${valor_km} km equivalem a ${valor_m} m`)

}
main()