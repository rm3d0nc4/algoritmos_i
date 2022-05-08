import {input, print} from '../io_utils.js'
function main() {
    print('----- Distribuição de dias -----')

    const n_dias = Number(input('Digite a quantidade de dias:'))

    const dias_total = n_dias % 7

    const semanas_total = (n_dias-dias_total)/7

    print(`${n_dias} dias corresponde a ${semanas_total} semanas e ${dias_total} dias`)

}
main()