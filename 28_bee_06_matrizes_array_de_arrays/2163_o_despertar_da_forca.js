import { print_matriz } from "../matriz_utils.js"


function main() {

    // const [qtd_linhas, qtd_colunas] = ler_numeros('Qtd de linhas e colunas')

    // const matriz = gerar_matriz(qtd_linhas, qtd_colunas)

    const matriz_preenchida = 
    [
        [11, 12, 7, 7, 7, 13, 14],
        [15, 6, 7, 42, 7, 7, 42],
        [98, -5, 7, 7, 7, 42, 7],
        [-1, 42, 3, 9, 7, 7, 7,],
    ]
    // povoar_matriz(matriz, [0, 100])

    const coordenadas_sabre_de_luz = get_sabre_de_luz(matriz_preenchida)
    const [linha, coluna] = coordenadas_sabre_de_luz

    console.log(`${linha} ${coluna}`)
}

function get_sabre_de_luz(matriz) {
    let elemento
    let vizinhos    

    for(let i = 1; i < matriz.length -1; i++) {
        for(let j = 1; j < matriz[i].length -1; j++) {
            elemento = matriz[i][j]            
            
            vizinhos = get_vizinhos(matriz, i, j)

            if(elemento === 42 && todos_elementos_sao_iguais(vizinhos, 7)) {
                return [i+1, j+1]
            }
        
        }
    }

    return [0,0]
}

function todos_elementos_sao_iguais(vetor, valor) {
    for (let elemento of vetor) {
        if(elemento !== valor) {
            return false
        }
    }

    return true
}

function get_vizinhos(matriz, i, j) {
    let anterior, posterior
    let superior, inferior
    let diagonal_superior_anterior, diagonal_superior_posterior
    let diagonal_inferior_anterior, diagonal_inferior_posterior

    diagonal_superior_anterior = matriz[i-1][j-1]
    superior = matriz[i-1][j]
    diagonal_superior_posterior = matriz[i-1][j+1]
    anterior = matriz[i][j-1]
    posterior = matriz[i][j+1]
    diagonal_inferior_anterior = matriz[i+1][j-1]
    inferior = matriz[i+1][j]
    diagonal_inferior_posterior = matriz[i+1][j+1]

    const vizinhos = [
        diagonal_superior_anterior, superior, 
        diagonal_superior_posterior, anterior, 
        posterior, diagonal_inferior_anterior, 
        inferior, diagonal_inferior_posterior]

    return vizinhos

}

main()