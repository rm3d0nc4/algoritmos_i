import {input, print} from '../io_utils.js'
function main() {
    const n1 = Number(input('Digite o primeiro número:'))
    const n2 = Number(input('Digite o segundo número:'))

    const resto = n1%n2
    const quociente = (n1-resto)/n2

    print(`Quociente de ${n1}/${n2}: ${quociente}`)
    print(`Resto da divisão de ${n1}/${n2}: ${resto}`)
}
main()