import {ler_numeros, input} from '../io_utils.js'

function main() {

    const qtd_elementos = Number(input('Quantidade de elementos: '))
    
    const vetorA = new Array(qtd_elementos)
    const vetorB = new Array(qtd_elementos)
    const maior_indice = qtd_elementos - 1

    for(let indice = 0; indice<qtd_elementos; indice++){
        vetorA[indice] = Number(input(`A[${indice}]: `))
    }


    for(let indice = 0; indice < qtd_elementos; indice++){
        
        vetorB[indice] = vetorA[maior_indice - indice]
    }

    console.log(vetorA)
    console.log(vetorB)
}

main()