import {input, print} from '../io_utils.js'
function main() {
    const temperatura_c = Number(input('Digite o valor da temperatura, em °C:'))

    const temperatura_f = (9*temperatura_c+160)/5

    print(`A temperatura ${temperatura_c} °C equivale a ${temperatura_f} °F`)
}
main()