import {ler_numero, input} from '../io_utils.js'
import { eh_da_diagonal_principal, eh_da_diagonal_secundaria, eh_elemento_da_diagonal, gerar_matriz} from '../matriz_utils.js'

function main() {

    const ordem = ler_numero('Ordem')
    const matriz = gerar_matriz(ordem, ordem)
    let ordem_condicao = ordem - 1
    let pos_preencher_com_1 = Math.trunc(ordem/3)

    for(let i = 0; i < matriz.length; i++) {

        for(let j = 0; j < matriz[i].length; j++) {

            if(!eh_elemento_da_diagonal(i, j, ordem_condicao)) {
                matriz[i][j] = 0
            } else {
                matriz[i][j] = 1
            }

            if(eh_da_diagonal_principal(i, j)) {
                matriz[i][j] = 2
            }

            if(eh_da_diagonal_secundaria(i, j, ordem_condicao)) {
                matriz[i][j] = 3
            }

            //Preencher 1 aqui

            if(condicao_preencher_com_1(i, j, ordem_condicao, pos_preencher_com_1)) {
                    matriz[i][j] = 1
            }

            if(eh_da_diagonal_principal(i,j) && eh_da_diagonal_secundaria(i, j, ordem_condicao)) {
                matriz[i][j] = 4
            }
        }
    }

    for(let linha of matriz) {
        console.log( `${linha.join('')}`)
    }

    console.log('')

}



function condicao_preencher_com_1(i, j, ordem, posicao_inicial) {
    if(i >= posicao_inicial && i <= ordem - posicao_inicial) {
        if(j >= posicao_inicial && j <= ordem - posicao_inicial) {
            return true
        }
    }
    return false
}

main()