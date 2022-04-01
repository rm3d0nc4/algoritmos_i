import {input, print} from '../io_utils.js'
function main() {
    print('----- Distribuindo horas -----')

    const horas_bruta = Number(input('Digite a quantidade de horas:'))

    const horas = horas_bruta % 24
    const dias = ((horas_bruta - horas) %168) /24 
    const semanas = (horas_bruta - horas - (dias * 24)) /24

    print(`${horas_bruta} corresponde a ${horas} horas, ${dias} dias e ${semanas/7} semanas`)
}
main()