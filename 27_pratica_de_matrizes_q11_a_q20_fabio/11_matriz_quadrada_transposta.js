import {ler_numero, input, get_numero_aleatorio} from '../io_utils.js'

function main() {

    const ordem = ler_numero('Ordem da matriz')
    // const num_colunas = ler_numero('Número de colunas')

    const matriz = gerar_matriz(ordem, ordem)

    const matriz_povoada = povoar_matriz(matriz, [0, 100])

    print_matriz(matriz_povoada)

    const matriz_transposta = transpor_matriz(matriz_povoada)
    
    print_matriz(matriz_transposta)
}

function transpor_matriz(matriz) {
    const nova_matriz = gerar_matriz(matriz[0].length, matriz.length)

    for(let i = 0; i < nova_matriz.length; i++ ) {
        for (let j = 0; j < nova_matriz[i].length; j++) {
            nova_matriz[i][j] = matriz[j][i]
        }
    }

    return nova_matriz
}

function gerar_matriz(n_linhas, n_colunas) {
    
    const matriz = new Array(n_linhas)
    
    for (let pos_linha = 0; pos_linha < n_linhas; pos_linha++) {
        matriz[pos_linha] = new Array(n_colunas)
    }
    
    return matriz
}

function povoar_matriz(matriz, [min, max]) {
    const matriz_povoada = matriz

    for( let i = 0; i < matriz_povoada.length; i++) {
        for(let j = 0; j < matriz_povoada[i].length; j++) {
            matriz_povoada[i][j] = get_numero_aleatorio(min, max)
        }
    }

    return matriz_povoada
}


function print_matriz(matriz) {
    console.table(matriz)
}

main()