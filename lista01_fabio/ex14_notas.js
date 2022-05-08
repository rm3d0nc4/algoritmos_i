import {input, print} from '../io_utils.js'
function main() {
    const n1 = Number(input('Digite a primeira nota:'))
    const p1 = Number(input('Digite o peso da primeira nota:'))

    const n2 = Number(input('Digite a segunda nota:'))
    const p2 = Number(input('Digite o peso da segunda nota:'))

    const n3 = Number(input('Digite a terceira nota:'))
    const p3 = Number(input('Digite o peso da terceira nota:'))

    const preliminar1 = n1*p1
    const preliminar2 = n2*p2
    const preliminar3 = n3*p3

    const nota_final = (preliminar1+preliminar2+preliminar3)/(p1+p2+p3)

    print(`Sua nota final é: ${nota_final}`)
}
main()