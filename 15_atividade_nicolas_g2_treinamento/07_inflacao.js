import {ler_numero, input} from '../io_utils.js'

function main() {

    let salario = ler_numero('Digite o seu antigo salário')
    const perc_inflacao = ler_numero('Digite o valor da inflacao (%)')
    const novo_salario = salario + (salario * (perc_inflacao / 100))

    let incremento_salario

    while( salario < novo_salario) {
        incremento_salario = reajustar_salario()

        salario += incremento_salario
    }

    console.log(`Agora seu salário está acima da inflação! (R$ ${salario.toFixed(2)})`)
}

function reajustar_salario() {
    let reajuste = ler_numero('Digite um valor do reajuste válido (cédulas)')

    while(!eh_valido(reajuste)) {
        
        console.log('Valor inválido. o valor deve ser igual ao de alguma das cédulas!')
        reajuste = ler_numero('Digite um valor do reajuste válido (cédulas)')
    }

    return reajuste
}

const eh_valido = n => n === 2 || n === 5 || n === 10 || n === 20 || n === 50 || n === 100 || n === 200

main()