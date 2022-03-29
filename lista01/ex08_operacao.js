import {input, print} from '../io_utils.js'
function main() {
    print('----- Divsão da soma pela subtração de dois números -----')
    const n1 = Number(input('Digite o primeiro número:'))
    const n2 = Number(input('Digite o segundo número:'))

    const operacao = (n1+n2)/(n1-n2)

    print(`Resultado: ${operacao}`)
}
main()