import {input, print} from '../io_utils.js'

function main() {
    const n_funcionario = Number(input('Número do Funcionário:'))
    const carga_horaria = Number(input('Horas Trabalhadas:'))
    const salario_por_hora = Number(input('Valor recebido por hora:')).toFixed(2)

    const salario = carga_horaria*salario_por_hora

    console.log(`NUMBER = ${n_funcionario}`)
    console.log(`SALARY = U$ ${salario.toFixed(2)}`)

}
main()