import {ler_numero, input, eh_igual} from '../io_utils.js'
import { gerar_matriz, povoar_matriz, print_matriz } from '../matriz_utils.js'

function main() {

    const ordem = ler_numero('Ordem da matriz')
    let matriz = gerar_matriz(ordem, ordem)
    
    const matriz_povoada = povoar_matriz(matriz, [0,6])
    // [[1,2,3], [2,4,5], [3,5,6]]

    print_matriz(matriz_povoada)
    
    matriz_eh_simetrica(matriz_povoada) ? console.log('É simétrica') : console.log('Não é simétrica')
}


function matriz_eh_simetrica(matriz) {
    let valor1, valor2
    

    for(let i= 0; i < matriz.length; i++ ) {
        for(let j = 0; j < matriz[i].length; j++) {
            
            valor1 = matriz[i][j]
            valor2 = matriz[j][i] 
            if ( !eh_igual(valor1, valor2)) {
                return false
            }
        }
    }
    return true
}


main()