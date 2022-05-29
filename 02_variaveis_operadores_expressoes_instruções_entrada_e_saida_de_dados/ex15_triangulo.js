import {input, print} from '../io_utils.js'
function main() {
    print('----- Vamos calcular a área de um triângulo -----')
    const base = Number(input('Digite o valor da base do triângulo (em cm):'))
    const altura = Number(input('Digite o valor da altura do triângulo (em cm):'))

    const area = (base*altura)/2

    print(`A área do triângulo é: ${area} cm²`)
}
main()