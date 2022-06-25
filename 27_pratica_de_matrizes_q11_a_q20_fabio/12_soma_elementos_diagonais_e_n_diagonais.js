import {ler_numero} from '../io_utils.js'
import { gerar_matriz, povoar_matriz, print_matriz } from '../matriz_utils.js'

function main() {

    const ordem = ler_numero('Ordem da matriz')

    const matriz = gerar_matriz(ordem, ordem)
    const matriz_povoada = povoar_matriz(matriz, [0,20])

    print_matriz(matriz_povoada)

    const soma_elementos_diagonal_principal = somar_diagonal_matriz(matriz_povoada)
    console.log(`Soma diagonal principal: ${soma_elementos_diagonal_principal}`)
    
    const soma_elementos_diagonal_secundaria = somar_diagonal_matriz(matriz_povoada, false)
    console.log(`Soma diagonal secundária: ${soma_elementos_diagonal_secundaria}`)
    
    const soma_elementos_fora_das_diagonais = somar_elementos_fora_das_diagonais(matriz)
    console.log(`Soma dos elementos fora das diagonais: ${soma_elementos_fora_das_diagonais}`)

}

function somar_diagonal_matriz(matriz, eh_principal = true) {
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
const eh_elemento_da_diagonal = (i, j, ordem) => eh_da_diagonal_principal(i,j) || eh_da_diagonal_secundaria(i, j, ordem)
const eh_da_diagonal_principal = (i,j) => i === j
const eh_da_diagonal_secundaria = (i, j, ordem) => (i + j) === ordem




main()