import { somar_elementos_vetor } from "./array_utils.js"
import { eh_igual, eh_maior_que, eh_menor_que, get_numero_aleatorio } from "./io_utils.js"

export function print_matriz(matriz) {
    console.table(matriz)
}

export function gerar_matriz(n_linhas, n_colunas = n_linhas) {
    
    const matriz = new Array(n_linhas)
    
    for (let pos_linha = 0; pos_linha < n_linhas; pos_linha++) {
        matriz[pos_linha] = new Array(n_colunas)
    }
    
    return matriz
}

export function povoar_matriz(matriz, [min, max]) {
    const matriz_povoada = matriz

    for( let i = 0; i < matriz_povoada.length; i++) {
        for(let j = 0; j < matriz_povoada[i].length; j++) {
            matriz_povoada[i][j] = get_numero_aleatorio(min, max)
        }
    }

    return matriz_povoada
}

export function transpor_matriz(matriz) {
    const nova_matriz = gerar_matriz(matriz[0].length, matriz.length)

    for(let i = 0; i < nova_matriz.length; i++ ) {
        for (let j = 0; j < nova_matriz[i].length; j++) {
            nova_matriz[i][j] = matriz[j][i]
        }
    }

    return nova_matriz
}

export function somar_todos_elementos(matriz) {
    let soma = 0

    for(let i = 0; i < matriz.length; i++ ) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]
        }
    }

    return soma
}

export function somar_diagonal_matriz(matriz, eh_principal = true) {
    const ordem = matriz.length - 1
    let soma_principal = 0
    let soma_secundaria = 0
    let elemento

    for(let i = 0; i < matriz.length; i++ ) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            elemento = matriz[i][j]

            if(eh_da_diagonal_principal(i, j)) {
                soma_principal+= elemento
            }

            if(eh_da_diagonal_secundaria(i, j, ordem)) {
                soma_secundaria += elemento
            }
        }
    }

    if(eh_principal) {
        return soma_principal
    } else {
        return soma_secundaria
    }
}

export function somar_elementos_fora_das_diagonais(matriz) {
    const ordem = matriz.length - 1
    let soma = 0
    let elemento

    for(let i = 0; i < matriz.length; i++ ) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            elemento = matriz[i][j]

            if(!eh_elemento_da_diagonal(i, j, ordem)){
                soma += elemento
            }
        }
    }

    return soma
}

export function matriz_eh_simetrica(matriz) {
    let valor1, valor2
    

    for(let i= 0; i < matriz.length; i++ ) {
        for(let j = 0; j < matriz[i].length; j++) {
            
            valor1 = matriz[i][j]
            valor2 = matriz[j][i] 
            if ( !eh_igual(valor1, valor2)) {
                return false
            }
        }
    }
    return true
}

export function get_linha_com_maiores_valores(matriz){
    let linha_de_maior_valor
    let maior_valor = 0
    let valor_linha = 0

    for(let i = 0; i < matriz.length; i++) {
        valor_linha = somar_elementos_vetor(matriz[i])

        if( eh_maior_que(valor_linha, maior_valor)) {
            maior_valor = valor_linha
            linha_de_maior_valor = i
        }
    }

    return [linha_de_maior_valor, maior_valor]
}

export function get_linha_com_menores_valores(matriz){
    let linha_de_menor_valor
    let menor_valor = Infinity
    let valor_linha

    for(let i = 0; i < matriz.length; i++) {
        valor_linha = somar_elementos_vetor(matriz[i])

        if( eh_menor_que(valor_linha, menor_valor)) {
            menor_valor = valor_linha
            linha_de_menor_valor = i
        }
    }

    return [linha_de_menor_valor, menor_valor]
}

export function remover_linha_matriz(pos_linha, matriz) {

    const matriz_sem_linha = new Array()

    for(let i = 0; i < matriz.length; i++) {
        if(i !== pos_linha) {
            matriz_sem_linha[matriz_sem_linha.length] = matriz[i]
        }
    }

    return matriz_sem_linha
}

export function push_linha_na_matriz(linha, matriz) {

    const nova_matriz = matriz
    nova_matriz[nova_matriz.length] = linha

    return  nova_matriz
}

export function multiplicar_diagonal_matriz(matriz, eh_principal = true) {
    const ordem = matriz.length - 1
    let multiplicacao_principal = 1
    let multiplicacao_secundaria = 1
    let elemento

    for(let i = 0; i < matriz.length; i++ ) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            
            elemento = matriz[i][j]

            if(eh_da_diagonal_principal(i, j)) {
                multiplicacao_principal *= elemento
            }
            
            if(eh_da_diagonal_secundaria(i, j, ordem)) {
                multiplicacao_secundaria *= elemento
            }

        }
    }
    console.log(`Principal: ${multiplicacao_principal}`)
    console.log(`Secundária: ${multiplicacao_secundaria}`)

    if(eh_principal) {
        return multiplicacao_principal
    } else {
        return multiplicacao_secundaria
    }
}

export function push_coluna(coluna, matriz) {

    const matriz_transposta = transpor_matriz(matriz)
    matriz_transposta[matriz_transposta.length] = coluna

    const nova_matriz = transpor_matriz(matriz_transposta)

    return nova_matriz
}

export function shift_coluna(posicao, matriz) {
    const matriz_transposta = transpor_matriz(matriz)
    
    const nova_matriz = remover_linha_matriz(posicao, matriz_transposta)
    const nova_matriz_transposta= transpor_matriz(nova_matriz)

    return nova_matriz_transposta
}

export function gerar_tabuleiro(x1, y1, x2, y2) {
    const matriz = gerar_matriz(8,8)
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {

            if((i === y1 - 1 && j === x1 - 1) || (i === y2 - 1 && j === x2 - 1)) {
                matriz[i][j] = 1

            } else {
                matriz[i][j] = 0
            }
        }
    }
    console.table(matriz)
}

export function filtrar_elementos_matriz(matriz, condicao) {
    const ordem = matriz.length - 1
    let matriz_filtrada = new Array()
    let k = 0
    let l

    for(let i =0; i < matriz.length; i++) {
        matriz_filtrada[k] = new Array()
        l = 0

        for(let j = 0; j < matriz[i].length; j++) {

            if(condicao(i, j, ordem)) {
                matriz_filtrada[k][l] = matriz[i][j]
                l++
            }
        }
        k++
    }

    matriz_filtrada = filtrar_linhas_validas(matriz_filtrada)
    return matriz_filtrada
}

function filtrar_linhas_validas(matriz) {
    let nova_matriz = new Array()

    let i = 0
    for(let linha of matriz) {
        if(linha.length !== 0) {
            nova_matriz[i] = linha
            i++
        }
    }

    return nova_matriz
}

export function get_qtd_elementos_matriz(matriz) {
    let contador = 0

    for(let i = 0; i < matriz.length; i++ ) {
        contador += matriz[i].length
    }
    return  contador
}

export function map_matriz_todos_elementos(matriz, operacao) {
    let nova_matriz = gerar_matriz(matriz.length)

    for(let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            nova_matriz[i][j] = operacao(matriz[i][j])
        }
    }

    return nova_matriz
}

export const esta_acima_da_diagonal_principal = (i, j) => j > i
export const esta_abaixo_da_diagonal_principal = (i, j) => i > j
export const esta_acima_da_diagonal_secundaria = (i, j, ordem) => i + j < ordem
export const esta_abaixo_da_diagonal_secundaria = (i, j, ordem) => i + j > ordem

export const esta_na_area_superior = (i, j, ordem) => 
esta_acima_da_diagonal_principal(i,j) && esta_acima_da_diagonal_secundaria(i, j, ordem)

export const esta_na_area_inferior = (i, j, ordem) => 
    esta_abaixo_da_diagonal_principal(i,j) && esta_abaixo_da_diagonal_secundaria(i, j, ordem)

export const esta_na_area_esquerda = (i, j, ordem) => 
    esta_abaixo_da_diagonal_principal(i,j) && esta_acima_da_diagonal_secundaria(i, j, ordem)

export const esta_na_area_direita = (i, j, ordem) => 
    esta_acima_da_diagonal_principal(i,j) && esta_abaixo_da_diagonal_secundaria(i, j, ordem)

export const eh_elemento_da_diagonal = (i, j, ordem) => eh_da_diagonal_principal(i,j) || eh_da_diagonal_secundaria(i, j, ordem)
export const eh_da_diagonal_principal = (i,j) => i === j
export const eh_da_diagonal_secundaria = (i, j, ordem) => (i + j) === ordem