import {ler_numeros, input, inverter_string } from '../io_utils.js'

function main() {

    const msg = input('Mensagem:')
    const msg_invertida = inverter_string(msg)
    const msg_consoantes_alteradas = alterar_consoantes(msg_invertida, '#')

    console.log(msg_consoantes_alteradas)
}

function alterar_consoantes(str, caractere){
    let str_alterada = ''

    for(let index = 0; index<str.length-1; index++){
        if(eh_consoante(str[index])){
            str_alterada+=caractere
        } else {
            str_alterada+=str[index]
        }
    }
    return str_alterada
}

function eh_consoante(letter){
    const consoantes = [
        'b','c', 'ç','d','f','g','h','j','k','l','m',
        'n','p','q','r','s','t','v','w','x','y','z'
    ]

    for(let consoante of consoantes){
        if(letter === consoante.toUpperCase() ||  letter === consoante){
            return true
        }
    }
    return false
}

main()