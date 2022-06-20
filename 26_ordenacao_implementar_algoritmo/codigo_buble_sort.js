import { criar_vetor } from "../array_utils.js"
import { get_numero_aleatorio, ler_numero } from "../io_utils.js"

function main() {
    let valores = criar_vetor()
    
    console.log('=======================================')
    console.log('Intervalo para gerar números aleatórios:')
    const valor_inicial = ler_numero('Valor inicial')
    const valor_final = ler_numero('Valor final')
    
    for(let posicao = 0; posicao < valores.length; posicao++) {
        valores[posicao] = get_numero_aleatorio(valor_inicial, valor_final)
    }
    console.log('Vetor desordenado:')
    console.log(valores)
    
    valores = bubble_sort(valores)
    
    console.log('Vetor ordenado:')
    console.log(valores)
}

function bubble_sort(elementos) {
    let contador = elementos.length -1
    let elemento_armazenado

    while (contador >= 0) {
        for(let posicao = 0; posicao <= contador; posicao++) {
            
            if(elementos[posicao] > elementos[posicao+1]) {
                elemento_armazenado = elementos[posicao]
                
                elementos[posicao] = elementos[posicao+1]
                elementos[posicao+1] = elemento_armazenado
            }
        }
        contador--
    }

    return elementos
}

main()