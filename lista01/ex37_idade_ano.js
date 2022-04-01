import {input, print} from '../io_utils.js'
function main() {
    print('----- Distribuindo idades em dias, meses e anos -----')

    const dias_total = Number(input('Digite uma idade, em dias:'))

    const dias = dias_total % 30
    const meses = ((dias_total- dias) /30) % 12
    const anos = ((dias_total-dias-(meses*30))/30)/12

    print(`${dias_total} dias correspondem a ${anos} anos, ${meses} meses e ${dias} dias`)
}
main()