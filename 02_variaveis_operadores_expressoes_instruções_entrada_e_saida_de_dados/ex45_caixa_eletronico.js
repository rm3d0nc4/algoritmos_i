import {input, print} from '../io_utils.js'
function main() {
    print('----- CAIXA ELETRÔNICO -----')

    const saque = Number(input('Informe a quantia que deseja sacar:'))

    const nota_1_real = saque % 5
    const nota_5_reais = ((saque - nota_1_real) % 10) / 5
    const nota_10_reais = ((saque - nota_1_real - (nota_5_reais * 5)) %50 ) / 10
    const nota_50_reais = (saque- nota_1_real - (nota_5_reais*5)-(nota_10_reais*10)) / 50

    print(`Você receberá ${nota_50_reais} notas de R$50`)
    print(`Você receberá ${nota_10_reais} notas de R$10`)
    print(`Você receberá ${nota_5_reais} notas de R$5`)
    print(`Você receberá ${nota_1_real} notas de R$1`)

    print('Sacando...')
}
main()