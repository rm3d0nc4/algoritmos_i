import {input, print} from '../io_utils.js'
function main() {
    const n1 = Number(input('Digite o primeiro número:'))
    const n2 = Number(input('Digite o segundo número:'))
    const n3 = Number(input('Digite o terceiro número:'))

    print(`Soma entre ${n1} e ${n2} número é: ${n1+n2} `)
    print(`A diferença entre ${n2} e ${n3} é:${n2-n3}`)
}
main()