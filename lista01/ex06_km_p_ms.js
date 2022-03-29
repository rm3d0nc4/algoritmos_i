import {input, print} from '../io_utils.js'
function main() {
    const kmh = Number(input('Digite uma valocidade, em km/h:'))

    const ms = kmh/ 3.6

    print(`${kmh} km/h equivale a exatamente ${ms.toFixed(2)} m/s`)
}
main()