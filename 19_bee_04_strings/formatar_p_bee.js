// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
import fs from 'fs';
const input = fs.readFileSync('1257_array_hash_input', 'utf8');
const  lines = input.split('\n');

// import {ler_numeros, input} from '../io_utils.js'

function main() {

    const casos =Number(lines[0])
    let contador = 1
    let qtd_linhas
    let linhas
    let linha_atual

    for(let caso = 0; caso<casos; caso++) {

        qtd_linhas = Number(lines[contador])
        linhas = ''
    
        contador++
        
        for(let linha = contador; linha < contador + qtd_linhas; linha++){
            linha_atual = lines[linha]

            if(linha === contador){
                linhas += linha_atual
            } else {
                linhas += `\n${linha_atual}`
            }
        }

        const array = linhas.split('\n')
        const hash = gerar_hash_array(array)
        console.log(hash)

        contador+=qtd_linhas
    }

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