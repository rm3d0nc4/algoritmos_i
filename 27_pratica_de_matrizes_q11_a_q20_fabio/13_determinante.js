import {ler_numero, input} from '../io_utils.js'
import { eh_da_diagonal_principal, remover_linha_matriz, eh_elemento_da_diagonal, gerar_matriz, povoar_matriz, print_matriz, transpor_matriz, eh_da_diagonal_secundaria, push_coluna, shift_coluna, multiplicar_diagonal_matriz } from '../matriz_utils.js'
import { criar_vetor, criar_vetor_2 } from './../array_utils.js';

function main() {
    const ordem = ler_numero('Ordem')
    const matriz = gerar_matriz(ordem, ordem)

    let matriz_povoada = povoar_matriz(matriz, [0,10])
    // [[1,2,3],[4,5,6],[7,8,9]]
    // print_matriz(matriz_povoada)

    let multiplicacao_principal, multiplicacao_secundaria
    let coluna_a_ser_movida
    let soma = 0
    let subtracao = 0

    for(let linha = 0; linha < matriz_povoada.length; linha++) {
        multiplicacao_principal = 1
        multiplicacao_secundaria = 1

        print_matriz(matriz_povoada)
        multiplicacao_principal *=  multiplicar_diagonal_matriz(matriz_povoada)
        multiplicacao_secundaria *= multiplicar_diagonal_matriz(matriz_povoada, false)

        
        soma += multiplicacao_principal
        subtracao += multiplicacao_secundaria
        
        coluna_a_ser_movida = transpor_matriz(matriz_povoada)[0]

        matriz_povoada = push_coluna(coluna_a_ser_movida, matriz_povoada)
        matriz_povoada = shift_coluna(0, matriz_povoada)

    }

    const determinante = soma - subtracao

    console.log(`Soma: ${soma}`)
    console.log(`Subtração: ${subtracao}`)
    console.log(`Determinante da matriz: ${determinante}`)
    
}

main()