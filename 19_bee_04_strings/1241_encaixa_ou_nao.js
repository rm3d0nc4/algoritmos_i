
import {ler_numeros, input} from '../io_utils.js'

function main() {

    const [qtd_casos] = ler_numeros(' quantidade de casos')
    let numero, final
    
    for(let caso = 0; caso<qtd_casos; caso++){

        [numero, final] = input('um número A e B: ').split(' ')

        if(termina_com_final_esperado(numero, final)){
            console.log('encaixa')
        } else {
            console.log('nao encaixa')
        }
        
    }
}

function termina_com_final_esperado(numero, final){

    const indice_inicial = numero.length - final.length
    const ultimos_numeros = extrair_n_ultimos_numeros(numero, indice_inicial)

    return ultimos_numeros === final

}

function extrair_n_ultimos_numeros(numero, indice_inicial ){
    let n_ultimos_numeros = ''

    for(let index = indice_inicial; index<numero.length; index++){
        n_ultimos_numeros += numero[index]
    }

    return n_ultimos_numeros
}

main()