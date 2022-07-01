import {ler_numero, input} from '../io_utils.js'
import { gerar_matriz, print_matriz, map_matriz_todos_elementos } from '../matriz_utils.js'

function main() {

    const ordem = ler_numero('Ordem')
    const matriz = gerar_matriz(ordem, ordem)
    let elemento_anterior

    for(let i = 0; i < matriz.length; i++) {
        
        if(i <= 1) {
            matriz[i][0] = i+1
        } else {
            elemento_anterior = matriz[i - 1][0]

            matriz[i][0] = elemento_anterior * 2
        }
    }

    for(let i = 0; i < matriz.length; i++) {

        for(let j = 1; j < matriz[i].length; j++) {
            elemento_anterior = matriz[i][j - 1]

            matriz[i][j] =  elemento_anterior * 2

        }
    }

    const nova_matriz = map_matriz_todos_elementos(matriz, (e) => String(e))

    const tam_maior_elemento = get_tam_maior_elemento(nova_matriz)

    const nova_matriz_formatada = formatar_matriz(nova_matriz, tam_maior_elemento)

    for(let linha of nova_matriz_formatada) {
        console.log(linha.join(' '))
    }
    console.log('')

}

function formatar_matriz(matriz, tam_maior_elemento) {
    const nova_matriz = gerar_matriz(matriz.length)
    let elemento

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            elemento = matriz[i][j]
            nova_matriz[i][j] = get_espaco(tam_maior_elemento - elemento.length) + elemento
        }
    }
    return nova_matriz
}

function get_tam_maior_elemento(matriz) {
    let tam_maior = 0

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 1; j < matriz[i].length; j++) {
            if(matriz[i][j].length > tam_maior) {
                tam_maior = matriz[i][j].length
            }

        }
    }
    return tam_maior
}

function get_espaco(numero) {
    let espaco = ''
    for(let i = 0; i < numero; i++) {
        espaco += ' '
    }

    return espaco
}



main()