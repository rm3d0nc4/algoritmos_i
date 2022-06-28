import {ler_numero, input, eh_maior_que, eh_menor_que} from '../io_utils.js'
import { gerar_matriz, povoar_matriz, print_matriz } from '../matriz_utils.js'

function main() {
    const ordem = ler_numero('Ordem')

    const matriz = gerar_matriz(ordem, ordem)
    const matriz_povoada = povoar_matriz(matriz, [-11, 10])

    const soma_positivos = somar_numeros_positivos_ou_negativos(matriz_povoada)
    const soma_negativos = somar_numeros_positivos_ou_negativos(matriz_povoada, false)

    print_matriz( matriz_povoada)
    console.log(`Soma dos positivos: ${soma_positivos}`)
    console.log(`Soma dos negativos: ${soma_negativos}`)
}

function somar_numeros_positivos_ou_negativos(matriz, positivos = true) {
    let soma = 0
    let valor_atual

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            valor_atual = matriz[i][j]

            if(positivos) {
                if(eh_maior_que(valor_atual, 0)) {
                    soma += valor_atual
                }
            } else {
                if(eh_menor_que(valor_atual, 0)) {
                    soma += valor_atual
                }
            }
        }
    }

    return soma
}

main()