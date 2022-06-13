import {ler_numeros, input} from '../io_utils.js'

function main() {

    const texto = input('Texto: ')
    
    const msg_oculta = obter_mensagem_oculta(texto).toLowerCase()

    console.log(msg_oculta)
}

function obter_mensagem_oculta(texto){
    const palavras = texto.split(' ')
    let msg_oculta = ''
    
    for(let palavra of palavras){
        if( palavra !== '') {
            msg_oculta += palavra[0]
        }
    }

    return msg_oculta
}

main()