import {ler_numeros, input} from '../io_utils.js'

function main() {

    const texto = input('Texto: ')
    const [coluna] = ler_numeros('a coluna')

    const sub_rotina = vertical(coluna, texto)
    console.log(sub_rotina)
}

function vertical(coluna, str){
    let espaco = ''
    let str_vertical = ''

    for(let index = 0; index<coluna-1; index++){
        espaco+= ' '
    }

    for(let elemento = 0; elemento<str.length; elemento++){
        str_vertical+= `\n${espaco}${str[elemento]}`
    }

    return str_vertical
}

main()