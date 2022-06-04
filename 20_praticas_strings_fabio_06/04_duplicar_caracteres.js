import {ler_numeros, input} from '../io_utils.js'

function main() {

    const frase = input('Frase:')
    const nova_frase = duplicar_caracteres(frase)
    console.log(nova_frase)
}

function duplicar_caracteres(str){
    let str_duplicada = ''

    for(let caractere of str) {
        str_duplicada+= `${caractere}${caractere}`
    }

    return str_duplicada
}

main()