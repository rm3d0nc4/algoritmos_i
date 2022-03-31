import {input, print} from '../io_utils.js'
function main() {
    const temperatura_f = Number(input('Digite o valor da temperatura, em °F:'))

    const temperatura_c = (5*temperatura_f-160)/9

    print(`A temperatura ${temperatura_f} °F equivale a ${temperatura_c} °C`)
}
main()