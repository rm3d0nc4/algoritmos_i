import {ler_numero, input, eh_maior_que, eh_menor_que} from '../io_utils.js'
import { gerar_matriz, povoar_matriz, print_matriz } from '../matriz_utils.js'

function main() {
    const ordem = ler_numero('Ordem da matriz')

    const matriz = gerar_matriz(ordem, ordem)
    const matriz_povoada = povoar_matriz(matriz, [0,100])
    
    const maior_valor = get_maior_ou_menor_elemento(matriz_povoada)
    const menor_valor = get_maior_ou_menor_elemento(matriz_povoada, false)

    print_matriz(matriz_povoada)
    console.log(`Maior valor: ${maior_valor}`)
    console.log(`Menor valor: ${menor_valor}`)



}

function get_maior_ou_menor_elemento(matriz, return_maior = true) {
    let maior_valor = 0
    let menor_valor = Infinity
    let linha_maior, coluna_maior, linha_menor, coluna_menor
    let elemento

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            elemento = matriz[i][j]

            if (eh_maior_que(elemento, maior_valor)) {
                maior_valor = elemento
                linha_maior = i
                coluna_maior = j
            }

            if (eh_menor_que(elemento, menor_valor)) {
                menor_valor = elemento
                linha_menor = i
                coluna_menor = j
            }
        }
    }

    if(return_maior) {
        return maior_valor
    } else {
        return menor_valor
    }

}


main()