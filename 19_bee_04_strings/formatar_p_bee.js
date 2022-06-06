import fs from 'fs'
import { contar_elemento } from '../io_utils.js';
const input = fs.readFileSync('1243_o_quao_facil_e_input', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n')

function main() {

    for(let line of lines) {

        const enunciado = line
    
        const media_palavras = get_media_palavras(enunciado)
        const pontuacao = get_pontuacao(media_palavras)
                console.log(pontuacao)
    
    }

}

function get_pontuacao(media) {
    let pontuacao

    if(media<4){
        pontuacao = 250
    } else if (media<6){
        pontuacao = 500
    } else {
        pontuacao = 1000
    }

    return pontuacao
}

function get_media_palavras(enunciado){
    const palavras = enunciado.split(' ')
    let tamanho_total_palavras = 0
    let qtd_palavras = 0
    let tamanho_medio_palavras
    let palavra

    for(let indice = 0; indice < palavras.length; indice++){
        palavra = palavras[indice]
    
            if((contar_elemento('.',palavra) === 1) && (palavra[palavra.length-1] === '.')){
                palavra = retirar_ponto(palavras[indice])
            }
            
            if( eh_valida(palavra) && palavra !== ''){
                tamanho_total_palavras += palavra.length
                qtd_palavras++
            }        
    }

    if(qtd_palavras !== 0) {
        tamanho_medio_palavras = Math.floor(tamanho_total_palavras/qtd_palavras)
    } else {
        tamanho_medio_palavras = 0
    }


    return tamanho_medio_palavras
}

function eh_valida(palavra){
    for(let caractere of palavra){
        if(!eh_letra(caractere)){
            return false
        }
    }
    return true
}

function eh_letra(caractere){
    const char_caractere = caractere.charCodeAt(0)
    if(eh_letra_maiuscula(char_caractere) || eh_letra_minuscula(char_caractere)){
        return true
    } else {
        return false
    }
}

function retirar_ponto(palavra){
    let nova_palavra = ''
    if(palavra[palavra.length-1] === '.'){
        for(let letra = 0; letra <palavra.length-1; letra++){
            nova_palavra += palavra[letra]
        }
    } else {
        nova_palavra = palavra
    }

    return nova_palavra
}


const eh_letra_maiuscula = n => n>=65 && n<=90
const eh_letra_minuscula = n => n>=97 && n<=122

main()