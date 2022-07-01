import {ler_numero, input, ler_numeros} from '../io_utils.js'
import { gerar_matriz, gerar_tabuleiro, print_matriz } from '../matriz_utils.js'

function main() {
    
    const [x1, y1, x2, y2] = ler_numeros('x1, y1, x2, y2')
    let num_movimentos

    if (esta_na_mesma_posicao(x1, y1, x2, y2)) {
        num_movimentos = 0

    } else if (esta_na_diagonal(x1, y1, x2, y2) || esta_na_coluna(y1, y2) || esta_na_linha(x1, x2)) {
        num_movimentos = 1
    
    } else {
        num_movimentos = 2

    }

    console.log(num_movimentos)

}

function esta_na_diagonal(x1, y1, x2, y2) {
    return x1 + y1 === x2+ y2 || x1 - y1 === x2 - y2
}

function esta_na_coluna(y1, y2) {
    return y1 === y2
}

function esta_na_linha(x1, x2) {
    return x1 === x2
}

function esta_na_mesma_posicao(x1, y1, x2, y2) {
    return x1 === x2 && y1 === y2
}

main()