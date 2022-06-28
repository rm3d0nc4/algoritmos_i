import {ler_numero, input} from '../io_utils.js'
import { gerar_matriz, print_matriz } from '../matriz_utils.js'

function main() {

    const matriz = gerar_matriz(5,5)
    let contador = 1

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            if( contador < 10) {
                matriz[i][j] = formatar_numero(contador)
            } else {
                matriz[i][j] = `${contador}`
            }
            contador++
        }
    }

    print_matriz(matriz)
}

const formatar_numero = n => `0${n}`

main()