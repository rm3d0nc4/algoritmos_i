import {ler_numeros, input, inverter_string} from '../io_utils.js'

function main() {

    const palavra = input('Palavra: ')

    if(eh_palindroma(palavra)) {
        console.log('É palíndroma')
    } else {
        console.log('Não é palíndroma')
    }
}

function eh_palindroma(palavra){
    const palavra_invertida = inverter_string(palavra)

    if( palavra === palavra_invertida){
        return true
    } else {
        return false
    }
}

main()