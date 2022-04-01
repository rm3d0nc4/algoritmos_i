import {input, print} from '../io_utils.js'
function main() {
    print('----- Calculando Expressão -----')

    // Entrada de dados

    const nA = Number(input('Digite o primeiro número(A):'))
    const nB = Number(input('Digite o segundo número(B):'))
    const nC = Number(input('Digite o terceiro número(C):'))
    
    // Primeira parte da espressão
    const r = (nA+nB)**2

    // Segunda parte da espressão
    const s = (nB+nC)**2
    
    // Parte final da espressão
    const d = (r+s)/2

    print(`O resultado da expressão é: ${d}`)
}
main()