import {ler_numero, input} from '../io_utils.js'

function main() {

    let vetor = new Array(1,2,0,-1,-5,-7,3,66,7, -6)

    for (let indice = 0; indice < vetor.length; indice++) {

        if( !eh_positivo(vetor[indice]) ) {
            vetor[indice] = 1
        }
        
    }
    
    for (let indice = 0; indice < vetor.length; indice++) {
        console.log(`X[${indice}] = ${vetor[indice]}`)
    }

    
}

const eh_positivo = n => n>0

main()