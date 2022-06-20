import {ler_numero, input} from '../io_utils.js'

function main() {

    let vetor  = [1,2,3,4,5,6]

    let contador = vetor.length - 1
    let elemento
    
    for(let posicao = 0; posicao < vetor.length/2; posicao++) {
        
        elemento = vetor[posicao]
        
        vetor[posicao] = vetor[contador]
        vetor[contador] = elemento

        contador--
    }

    for (let indice = 0; indice < vetor.length; indice++) {
        console.log(`N[${indice}] = ${vetor[indice]}`)
    }
}



main()