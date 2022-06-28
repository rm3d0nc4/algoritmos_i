import {ler_numero, input} from '../io_utils.js'
import { 
    esta_abaixo_da_diagonal_principal, 
    esta_acima_da_diagonal_secundaria, 
    filtrar_elementos_matriz, 
    gerar_matriz, 
    get_qtd_elementos_matriz, 
    povoar_matriz, 
    print_matriz, 
    somar_todos_elementos } from '../matriz_utils.js'


    function main() {
        const operacao = input('Operacao (S ou M): ').toUpperCase()
        const matriz = povoar_matriz(gerar_matriz(12, 12), [-10, 10])
        print_matriz(matriz)
        
        const elementos_a_esquerda = filtrar_elementos_matriz(matriz, esta_na_area_esquerda)
        print_matriz(elementos_a_esquerda)
        
        const soma = somar_todos_elementos(elementos_a_esquerda)
        const media = soma / get_qtd_elementos_matriz(elementos_a_esquerda)
    
        console.log( operacao === 'S' ? soma.toFixed(1) : media.toFixed(1))
    }
    
    const esta_na_area_esquerda = (i, j, ordem) => 
    esta_abaixo_da_diagonal_principal(i,j) && esta_acima_da_diagonal_secundaria(i, j, ordem)

main()