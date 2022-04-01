import {input, print} from '../io_utils.js'
function main() {
    print('----- Distribuindo minutos -----')

    const minutos_bruto = Number(input('Digite a quantidade de minutos:'))

    const minutos = minutos_bruto % 60
    const horas = ((minutos_bruto-minutos)/60) % 24
    const dias = ((minutos_bruto-minutos-(horas*60))/60)/24

    print(dias,horas, minutos)
}
main()