
import {ler_numeros, input} from '../io_utils.js'

function main() {

    const qtd_linhas =Number(input('Qtd linhas: '))
    let linhas = ''
    let linha;
    
    for(let contador = 0; contador<qtd_linhas; contador++){
        linha = input('Linha: ')
        
        if(contador === 0){
            linhas += linha
        } else {
            linhas += `\n${linha}`
        }
    }

    const array = linhas.split('\n')
    const hash = gerar_hash_array(array)

    console.log(hash)
}

function gerar_hash_array(array){
    let hash_array = 0
    let hash_elemento

    for(let indice_elemento = 0; indice_elemento < array.length; indice_elemento++){

        hash_elemento = gerar_hash_elemento(indice_elemento, array[indice_elemento])
        hash_array+=hash_elemento
    }

    return hash_array
}

function gerar_hash_elemento(indice_elemento, elemento){
    let hash_elemento = 0
    let posicao_letra_no_alfabeto

    for(let indice_letra = 0; indice_letra < elemento.length; indice_letra++){
        posicao_letra_no_alfabeto = buscar_posicao_no_alfabeto(elemento[indice_letra].toUpperCase())

        hash_elemento += (posicao_letra_no_alfabeto + indice_elemento + indice_letra)
    }

    return hash_elemento
}

function buscar_posicao_no_alfabeto(letra){
    const char_code_letra = letra.charCodeAt(0)
    const posicao = char_code_letra - 65

    return posicao
}

main()