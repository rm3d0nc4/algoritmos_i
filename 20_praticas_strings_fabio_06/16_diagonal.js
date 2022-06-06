import {ler_numeros, input} from '../io_utils.js'

function main() {

    const texto = input('Texto: ')

    const texto_diagonal = diagonal(texto)
    console.log(texto_diagonal)
}

function diagonal(str){
    let espaco = ''
    let str_diagonal = ''

    for(let elemento of str){
        espaco+='  '

        str_diagonal+=`\n${espaco}${elemento}`
    }
    
    return str_diagonal
}

main()