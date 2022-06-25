import {ler_numero, input} from '../io_utils.js'
import { gerar_matriz, print_matriz } from '../matriz_utils.js'

function main() {
    const matriz = gerar_matriz(6,6)

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {

            if(eh_0_ou_5(i) || eh_0_ou_5(j)) {
                matriz[i][j] = 1
            
            }else if(eh_1_ou_4(i) || eh_1_ou_4(j)) {
                matriz[i][j] = 2
            } else {
                matriz[i][j] = 3 
                // `${i},${j}`
            }
        }
    }

    print_matriz(matriz)
}

const eh_0_ou_5 = n => n === 0 || n === 5
const eh_1_ou_4 = n => n === 1 || n === 4

main()