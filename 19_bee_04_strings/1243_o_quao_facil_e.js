import {ler_numeros, input, contar_elemento} from '../io_utils.js'

function main() {

    const enunciado = input('Enunciado: ')

    const media_palavras = get_media_palavras(enunciado)
    const pontuacao = get_pontuacao(media_palavras)
    console.log(media_palavras)
    console.log(pontuacao)
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
        
        if( eh_valida(palavra)){
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