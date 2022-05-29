import {input, print} from '../io_utils.js'
function main() {
    print('----- Média de três números -----')

    const numero1 = Number(input('Digite o primeiro número:'))
    const numero2 = Number(input('Digite o segundo número:'))
    const numero3 = Number(input('Digite o terceiro número:'))

    const media = (numero1+numero2+numero3)/3

    print(`A média entre os tr~Es números é: ${media}`)
}
main()