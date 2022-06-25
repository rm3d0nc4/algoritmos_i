import { somar_elementos_vetor } from '../array_utils.js'
import {ler_numero, eh_maior_que, eh_menor_que} from '../io_utils.js'
import { gerar_matriz, povoar_matriz, print_matriz } from '../matriz_utils.js'

function main() {
    const ordem = ler_numero('Ordem da matriz')

    const matriz = gerar_matriz(ordem, ordem)

    const matriz_povoada = povoar_matriz(matriz, [0,100])
    const [linha_com_maiores_valores, maior_valor] = get_linha_com_maiores_valores(matriz)
    const [linha_com_menores_valores, menor_valor] = get_linha_com_menores_valores(matriz)

    print_matriz(matriz_povoada)
    console.log(`A linha de maior valor é: ${linha_com_maiores_valores} (${maior_valor})`)
    console.log(`A linha de menor valor é: ${linha_com_menores_valores} (${menor_valor})`)

}

function get_linha_com_maiores_valores(matriz){
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

function get_linha_com_menores_valores(matriz){
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


main()