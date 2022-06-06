import {ler_numeros, input} from '../io_utils.js'

function main() {

    const texto = input('Texto: ')
    const posicao = Number(input('A partir a posição: '))
    const qtd_caracteres = Number(input('Quantidade de caracteres: '))
    const texto_substr = substr(texto, posicao, qtd_caracteres)

    console.log(texto_substr)
    console.log(texto_substr.length)
}

function substr(str, posicao, qtd_caracteres){
    const ultima_posicao = posicao+qtd_caracteres
    let str_substr = ''
    

    for(let elemento = posicao; elemento < ultima_posicao; elemento++){
        str_substr += str[elemento]
    }

    return str_substr
}

main()