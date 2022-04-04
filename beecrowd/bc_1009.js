import {input, print} from '../io_utils.js'

function main() {
    const nome_funcionario = input('Digite seu nome:')
    const salario_fixo = Number(input('Salário fixo:'))
    const vendas = Number(input('Vendas realizadas (em R$):'))

    const salario_total = (salario_fixo+(vendas*0.15)).toFixed(2)

    console.log(`TOTAL = R$ ${salario_total}`)

}
main()