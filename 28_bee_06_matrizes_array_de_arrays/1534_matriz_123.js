import {ler_numero, input} from '../io_utils.js'
import { eh_da_diagonal_principal, eh_da_diagonal_secundaria, esta_na_area_direita, esta_na_area_esquerda, esta_na_area_inferior, esta_na_area_superior, gerar_matriz, print_matriz } from '../matriz_utils.js'

function main() {

    const ordem = ler_numero('Ordem')
    const matriz = gerar_matriz(ordem, ordem)
    let elemento_anterior
    let ordem_condicao = ordem - 1

    for(let i = 0; i < matriz.length; i++) {

        for(let j = 0; j < matriz[i].length; j++) {

            if(atende_condicao_maxima(i, j, ordem_condicao)) {
                matriz[i][j] = 3
            }

            if(eh_da_diagonal_principal(i, j)) {
                matriz[i][j] = 1
            }

            if(eh_da_diagonal_secundaria(i, j, ordem_condicao)) {
                matriz[i][j] = 2
            }

            

        }
    }

    for(let linha of matriz) {
        console.log(linha.join(''))
    }

}

const atende_condicao_maxima = (i, j, ordem) => 
esta_na_area_superior(i,j, ordem) 
|| esta_na_area_inferior(i,j, ordem) 
|| esta_na_area_direita(i,j, ordem) 
|| esta_na_area_esquerda(i,j, ordem)

main()