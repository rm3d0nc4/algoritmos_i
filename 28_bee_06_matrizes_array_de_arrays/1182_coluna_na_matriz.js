import { media_elementos_vetor, somar_elementos_vetor } from '../array_utils.js'
import {ler_numero, input} from '../io_utils.js'
import { gerar_matriz, povoar_matriz, print_matriz, transpor_matriz } from '../matriz_utils.js'

function main() {

    const coluna = ler_numero('coluna')
    const operacao = input('Operacao (S ou M): ').toUpperCase()
    const matriz = povoar_matriz(gerar_matriz(4, 4), [-10, 10])
    const matriz_transposta = transpor_matriz(matriz)
    print_matriz(matriz)
    print_matriz(matriz_transposta)

    let resultado_operacao
    const coluna_selecionada = matriz_transposta[coluna]

    resultado_operacao = 
    operacao === 'S' ? 
    somar_elementos_vetor(coluna_selecionada) :
    media_elementos_vetor(coluna_selecionada) 
    

    console.log(resultado_operacao)
}

main()