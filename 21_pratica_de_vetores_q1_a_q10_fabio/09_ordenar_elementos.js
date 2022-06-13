import { get_menor_valor_e_posicao } from '../array_utils.js'
import {ler_numero, input} from '../io_utils.js'

function main() {

    const num_elementos = Number(input('Número de elementos: '))
    const vetor = new Array(num_elementos)

    for(let indice = 0; indice < vetor.length; indice++) {
        vetor[indice] = Number(input(`[${indice}]: `))
    }

    const vetor_ordenado = ordenar_de_forma_crescente(vetor)
    
    console.log('Ordem: ')
    console.log(vetor_ordenado)
}

function ordenar_de_forma_crescente(vetor) {

    const vetor_ordenado = new Array()
    let menor_elemento
    let posicao_menor_elemento
    let tamanho_incial_vetor = vetor.length

    for(let elemento = 0; elemento < tamanho_incial_vetor; elemento++) {
        
        [menor_elemento, posicao_menor_elemento] = get_menor_valor_e_posicao(vetor)
        
        vetor_ordenado[vetor_ordenado.length] = menor_elemento 
        vetor = remover_elemento(posicao_menor_elemento, vetor)
    }
    return vetor_ordenado
}

function remover_elemento(posicao_elemento, vetor) {
    const novo_vetor = new Array()

    for(let posicao = 0; posicao < vetor.length; posicao++) {

        if(posicao !== posicao_elemento) {
            novo_vetor[novo_vetor.length] = vetor[posicao]
        }
    }
    return novo_vetor
}

main()