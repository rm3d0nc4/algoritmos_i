import {ler_numeros} from '../io_utils.js'

function main() {

    const [n_funcionarios] = ler_numeros('o número de funcionários')

    for(let counter = 1; counter<=n_funcionarios; counter++) {
        let [codigo, n_horas_trabalhas, n_dependentes] = ler_numeros('a identificação, nº de horas trabalhadas e nº de dependentes ')

        const valor_por_horas_trabalhadas = n_horas_trabalhas*12
        const valor_por_n_dependentes = n_dependentes*40

        const salario_bruto = valor_por_horas_trabalhadas + valor_por_n_dependentes
        const inss = salario_bruto * .085
        const ir = salario_bruto * .05
        const salario_liquido = salario_bruto - inss - ir

        let resumo = `========== Folha de Pagamento (${codigo}) ==========`
        resumo+=`\nSalário Bruto ......... R$${salario_bruto.toFixed(2)}`
        resumo+=`\nInss .................. - R$${inss.toFixed(2)}`
        resumo+=`\nIR .................... - R$${ir.toFixed(2)}`
        resumo+=`\nSalário líquido ....... R$${salario_liquido.toFixed(2)}`

        console.log(resumo)
    }
}

main()