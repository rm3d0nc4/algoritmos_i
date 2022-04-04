import {input, print} from '../io_utils.js'
function main() {
    print('----- Extremamente Básico -----')
    
    const  numero_1 = Number(input('Digite o primeiro número:'))
    const  numero_2 = Number(input('Digite o segundo número:'))

    const soma = numero_1+numero_2

    print(`X= ${soma}`)
    
}
main()