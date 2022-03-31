import {input, print} from '../io_utils.js'
function main() {
    print('----- Converter Metros para Centímetros -----')

    const valor_metro = Number(input('Digite a distância, em metros:'))

    const valor_centimetro = valor_metro *100

    print(`${valor_metro} metro(s) equivale a ${valor_centimetro} centímetro(s)`)

}
main()