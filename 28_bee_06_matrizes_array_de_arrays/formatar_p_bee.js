import fs from 'fs';
const input = fs.readFileSync('1435_matriz_quadrada_1_input', 'utf8');

const lines = input.split('\n')

function main() {

    for(let numero of lines){

        const ordem = Number(numero)
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

}

const atende_condicao_maxima = (i, j, ordem) => 
esta_na_area_superior(i,j, ordem) 
|| esta_na_area_inferior(i,j, ordem) 
|| esta_na_area_direita(i,j, ordem) 
|| esta_na_area_esquerda(i,j, ordem)


const esta_acima_da_diagonal_principal = (i, j) => j > i
const esta_abaixo_da_diagonal_principal = (i, j) => i > j
const esta_acima_da_diagonal_secundaria = (i, j, ordem) => i + j < ordem
const esta_abaixo_da_diagonal_secundaria = (i, j, ordem) => i + j > ordem

const esta_na_area_superior = (i, j, ordem) => 
esta_acima_da_diagonal_principal(i,j) && esta_acima_da_diagonal_secundaria(i, j, ordem)

const esta_na_area_inferior = (i, j, ordem) => 
    esta_abaixo_da_diagonal_principal(i,j) && esta_abaixo_da_diagonal_secundaria(i, j, ordem)

const esta_na_area_esquerda = (i, j, ordem) => 
    esta_abaixo_da_diagonal_principal(i,j) && esta_acima_da_diagonal_secundaria(i, j, ordem)

const esta_na_area_direita = (i, j, ordem) => 
    esta_acima_da_diagonal_principal(i,j) && esta_abaixo_da_diagonal_secundaria(i, j, ordem)

const eh_elemento_da_diagonal = (i, j, ordem) => eh_da_diagonal_principal(i,j) || eh_da_diagonal_secundaria(i, j, ordem)
const eh_da_diagonal_principal = (i,j) => i === j
const eh_da_diagonal_secundaria = (i, j, ordem) => (i + j) === ordem


function gerar_matriz(n_linhas, n_colunas) {
    const matriz = new Array(n_linhas)
    
    for (let pos_linha = 0; pos_linha < n_linhas; pos_linha++) {
        matriz[pos_linha] = new Array(n_colunas)
    }
    return matriz
}

main()

