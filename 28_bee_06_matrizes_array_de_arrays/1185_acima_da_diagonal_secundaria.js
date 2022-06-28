import {ler_numero, input} from '../io_utils.js'
import { gerar_matriz, povoar_matriz, print_matriz } from '../matriz_utils.js'

function main() {
    const operacao = input('Operacao (S ou M): ').toUpperCase()
    const matriz = povoar_matriz(gerar_matriz(3, 3), [0, 10])
    print_matriz(matriz)
    
    const resultado_operacao = 
    operacao === 'S' ? 
    somar_elementos_acima_da_diagonal_secundaria(matriz) :
    extrair_media_elementos_acima_da_diagonal_secundaria(matriz)

    console.log(resultado_operacao.toFixed(1))
}

function somar_elementos_acima_da_diagonal_secundaria(matriz) {
    const ordem = matriz.length - 1
    let soma = 0

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {

            if(esta_acima_da_diagonal_secundaria(i, j, ordem)) {
                soma+= matriz[i][j]
            }
        }
    }

    return soma
}

function extrair_media_elementos_acima_da_diagonal_secundaria(matriz) {
    const soma = somar_elementos_acima_da_diagonal_secundaria(matriz)

    const qtd_elementos = ((matriz.length ** 2) / 2) - (matriz.length/2) 
    const media = soma / qtd_elementos

    return media
}

const esta_acima_da_diagonal_secundaria = (i, j, ordem) => i + j < ordem

main()