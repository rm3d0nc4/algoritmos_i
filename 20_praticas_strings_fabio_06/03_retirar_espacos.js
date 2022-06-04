import {ler_numeros, input} from '../io_utils.js'

function main() {

    const frase = input('Frase: ')

    const nova_frase = retirar_espacos(frase)
    console.log(nova_frase)
}

function retirar_espacos(str){
    let nova_str = ''

    for(let elemento of str){
        if(elemento !== ' '){
            nova_str+=elemento
        }
    }
    return nova_str
}

main()