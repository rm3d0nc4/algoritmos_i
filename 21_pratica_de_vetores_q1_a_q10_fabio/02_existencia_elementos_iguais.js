import {ler_numeros, input} from '../io_utils.js'

function main() {

    const num_elementos = Number(input('Número de elementos: '))
    const vetor = new Array(num_elementos)

    for(let indice = 0; indice < vetor.length; indice++) {
        vetor[indice] = Number(input(`[${indice}]: `))
    }

    if(ha_elemento_repetido(vetor)) {
        console.log('Há elementos repetidos!')
    } else {
        console.log('Não há elementos repetidos!')
    }
    
}

function ha_elemento_repetido(vetor){ 
    for(let elemento of vetor){
        if (contar_elemento_vetor(elemento, vetor)>1){
            return true
        }
    }
    return false
}

function contar_elemento_vetor(elemento, vetor){
    let qtd = 0

    for(let valor of vetor){
        if(valor === elemento){
            qtd++
        }
    }
    return qtd
}

main()