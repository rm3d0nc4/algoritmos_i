import {ler_numeros, input} from '../io_utils.js'

function main() {

    const frase = input('Frase: ')

    const nova_frase = trocar_algarismos(frase)
    console.log(nova_frase)
}

function trocar_algarismos(str){
    const algarismos = [
        'zero', 'um', 'dois', 'três', 'quatro', 
        'cinco', 'seis', 'sete', 'oito','nove',
    ]

    let nova_str = ''

    for(let elemento of str){
        if(eh_algarismo(elemento)){
            nova_str+=algarismos[elemento]
        } else {
            nova_str+=elemento
        }
    }
    return nova_str
}

function eh_algarismo(elemento){
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    for(let numero of numeros){
        if(elemento === numero){
            return true
        }
    }
    return false
}

main()