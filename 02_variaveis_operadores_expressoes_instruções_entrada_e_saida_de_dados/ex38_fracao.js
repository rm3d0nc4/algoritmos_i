import {input, print} from '../io_utils.js'
function main() {
    print('----- Somando frações -----\n')

    // Entrada de dados

    print('<<< Primeira fração >>>>')
    const numerador1 = Number(input('Digite o numerador:'))
    const denominador1 = Number(input('Digite o denominador:'))
    print(`Primeira fração: ${numerador1}/${denominador1}`)

    print('<<< Segunda fração >>>>')
    const numerador2 = Number(input('Digite o numerador:'))
    const denominador2 = Number(input('Digite o denominador:'))
    print(`Segunda fração: ${numerador2}/${denominador2}`)

    // Processamento de dados

    const denominador_result = denominador1*denominador2
    const numerador_result = (((denominador_result/denominador1)*numerador1) + ((denominador_result/denominador2)*numerador2))

    const fracao_result = `${numerador_result}/${denominador_result}`
    
    // Saída de dados

    print(`A soma das frações é: ${fracao_result}`)

    
}
main()