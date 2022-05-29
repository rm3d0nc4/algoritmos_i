import {input, print} from '../io_utils.js'

function main() {
    print('-----Vamos aumentar o seu salário-----')
    const salario = Number(input('Insira o seu salário atual (em R$):'))

    const aumento = salario*0.25
    const novo_salario = salario + aumento

    print(`Parabéns, seu novo salário passará a ser R$ ${novo_salario.toFixed(2)} (aumento de R$ ${aumento.toFixed(2)})`)
}
main()