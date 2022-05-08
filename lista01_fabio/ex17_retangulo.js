import {input, print} from '../io_utils.js'
function main() {
    print('----- Vamos calcular a área de um retângulo -----')
    const base = Number(input('Digite o valor da base (em cm):'))
    const altura = Number(input('Digite o valor da altura (em cm):'))

    const area = (base*altura)

    print(`A área do retângulo é: ${area} cm²`)
}
main()