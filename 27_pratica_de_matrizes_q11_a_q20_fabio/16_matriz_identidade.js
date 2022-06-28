import {ler_numero} from '../io_utils.js'
import { gerar_matriz, eh_da_diagonal_principal, print_matriz} from '../matriz_utils.js'

function main() {

    const ordem = ler_numero('Ordem da matriz')
    
    const matriz_identidade = gerar_matriz_identidade(ordem)

    print_matriz(matriz_identidade)
}

function gerar_matriz_identidade(ordem) {
    const matriz = gerar_matriz(ordem, ordem)

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {

            if( eh_da_diagonal_principal(i, j)) {
                matriz[i][j] = 1
            } else {
                matriz[i][j] = 0
            }
        }
    }
    return matriz
}

main()