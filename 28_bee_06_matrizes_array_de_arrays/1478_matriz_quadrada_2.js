import {ler_numero, input} from '../io_utils.js'
import { eh_da_diagonal_principal, gerar_matriz, print_matriz } from '../matriz_utils.js'

function main() {
    const ordem = ler_numero('Ordem')
    let valor_referencia
    let elemento_anterior
    let valor

    const matriz = gerar_matriz(ordem, ordem)

    //  Povoando a 1ª coluna

    for(let i = 0; i < matriz.length; i++) {
        valor = `${i + 1}`
        matriz[i][0] = get_espaco(3 - valor.length) + valor
    }

    // Povoando linhas
    for(let i = 0; i < matriz.length; i++) {

        valor_referencia = 1
        for(let j = 1; j < matriz[i].length; j++) {
            elemento_anterior = matriz[i][j - 1]

            if(elemento_anterior > valor_referencia) {
                valor = `${elemento_anterior - 1}`

                matriz[i][j] = get_espaco(4 - valor.length) + valor
            } else {
                valor_referencia++
                valor = `${valor_referencia}`

                matriz[i][j] = get_espaco(4 - valor.length) + valor
            }
        }
    }

    for(let linha of matriz) {
        console.log( `${linha.join('')}`)
    }

    console.log('')
}

function get_espaco(numero) {
    let espaco = ''
    for(let i = 0; i < numero; i++) {
        espaco += ' '
    }

    return espaco
}

main()