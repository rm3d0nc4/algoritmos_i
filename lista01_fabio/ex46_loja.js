import {input, print} from '../io_utils.js'
function main() {
    print('----- Loja -----')

    const valor_produto = Number(input('Informe o valor do produto:'))

    const adicional_entrada = valor_produto % 3
    const parcelas = (valor_produto-adicional_entrada)/3
    const entrada = (parcelas+adicional_entrada).toFixed(2)

    print(`Este valor pode ser divido em 1 parcela de R$${entrada} (entrada) \n+ 2 parcelas de R$ ${parcelas.toFixed(2)} `)
}
main()