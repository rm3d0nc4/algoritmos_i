import {ler_numero, input, contem} from '../io_utils.js'
import { gerar_matriz, map_matriz_todos_elementos, povoar_matriz, print_matriz } from './../matriz_utils.js';

function main() {

    const ordem = ler_numero('Ordem')

    const matriz = gerar_matriz(ordem, ordem)

    let ordem_min = 0 
    let ordem_max = matriz.length - 1
    let elemento

    while(ordem_min < ordem ) {

        for(let i = 0; i < matriz.length; i++) {

            for(let j = 0; j < matriz[i].length; j++) {

                if(contem([i,j], ordem_min) || contem([i,j], ordem_max)) {
                    
                    if(!campo_esta_preenchido(matriz, i, j)){
                        elemento = `${ordem_min  + 1}`
                        if(j === 0) {

                            matriz[i][j] = get_espaco(3 - elemento.length) + elemento
                        } else {
                            matriz[i][j] = get_espaco(4 - elemento.length) + elemento

                        }
                    }
                }
            }
        }
        ordem_min++
        ordem_max--

    }
    
    print_matriz(matriz)
    for(let linha of matriz) {
        console.log(linha.join(''))
    }
    console.log('')
}

const campo_esta_preenchido = (matriz, i, j) => matriz[i][j] !== undefined

function get_espaco(numero) {
    let espaco = ''
    for(let i = 0; i < numero; i++) {
        espaco += ' '
    }

    return espaco
}

main()