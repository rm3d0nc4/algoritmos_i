import {input, print} from '../io_utils.js'
function main() {
    print('----- Distribuição de metros -----')

    const valor_metro = Number(input('Digite a distância, em metros:'))

    const valor_m = valor_metro % 1000
    const valor_km =  (valor_metro - valor_m)/1000

    print(`${valor_metro} corresponde a ${valor_km} quilômetros e ${valor_m} metros`)

}
main()