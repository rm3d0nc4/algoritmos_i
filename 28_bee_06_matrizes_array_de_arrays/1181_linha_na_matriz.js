import { multiplicar_elementos_vetor, somar_elementos_vetor } from '../array_utils.js'
import {ler_numero, input} from '../io_utils.js'
import { gerar_matriz, povoar_matriz, print_matriz } from '../matriz_utils.js'

function main() {

    const linha = ler_numero('Linha')
    const operacao = input('Operacao (S ou M): ').toUpperCase()
    const matriz = povoar_matriz(gerar_matriz(4, 4), [-10, 10])
    print_matriz(matriz)

    let resultado_operacao
    const linha_selecionada = matriz[linha]

    resultado_operacao = 
    operacao === 'S' ? 
    somar_elementos_vetor(linha_selecionada) :
    media_elementos_vetor(linha_selecionada) 
    

    console.log(resultado_operacao)
}


function media_elementos_vetor(vetor) {
    const soma  = somar_elementos_vetor(vetor)
    const media = soma/vetor.length

    return media
}

main()