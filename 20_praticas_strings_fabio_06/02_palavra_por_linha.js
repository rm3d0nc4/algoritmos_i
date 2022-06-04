import {ler_numeros, input} from '../io_utils.js'

function main() {

    const frase = input('Frase: ')
    const palavras = frase.split(' ')

    for(let palavra = 0; palavra<palavras.length; palavra++){
        console.log(palavras[palavra])
    }
}

main()