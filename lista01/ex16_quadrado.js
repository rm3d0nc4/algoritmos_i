import {input, print} from '../io_utils.js'
function main() {
    print('----- Vamos calcular a área de um quadrado -----')
    const lado = Number(input('Digite o valor do lado do quadrado  (em cm):'))

    const area = lado*lado

    print(`A área do quadrado é: ${area} cm²`)
}
main()