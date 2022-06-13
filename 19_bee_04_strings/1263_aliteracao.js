import {ler_numeros, input} from '../io_utils.js'

function main() {

    const frase = input('Frase: ').toLowerCase()

    const qtd_aliteracoes = get_aliteracoes(frase)
    console.log(qtd_aliteracoes)
}

function get_aliteracoes(frase) {
    const palavras = frase.split(' ')
    let qtd_aliteracoes = 0
    let palavra_atual
    let proxima_palavra
    let palavra_anterior
    
    for (let palavra = 0; palavra < palavras.length; palavra++) {
        palavra_atual = palavras[palavra]
        proxima_palavra = palavras[palavra + 1]
        palavra_anterior = palavras[palavra - 1]

        if(eh_aliteracao(palavra_atual, proxima_palavra) && !eh_aliteracao(palavra_atual, palavra_anterior)){
            qtd_aliteracoes++
        }
    }

    return qtd_aliteracoes
}

function eh_aliteracao(palavra1, palavra2) {
    if(palavra1 !== undefined && palavra2 !== undefined){
        return palavra1[0] === palavra2[0]
    } else {
        return false
    }
}

main()