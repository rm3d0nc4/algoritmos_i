import {input, print} from '../io_utils.js'
function main() {
    print('----- Transformando Kg em g -----')

    const peso_kg = Number(input('Digite o peso, em Kg:'))

    const peso_g = peso_kg*1000

    print(`${peso_kg} Kg equivale a ${peso_g} g`)

}
main()