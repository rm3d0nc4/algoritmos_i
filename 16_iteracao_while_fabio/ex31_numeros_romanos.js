import {ler_numeros, input} from '../io_utils.js'

function main() {

    const numero = input('um número decimal de até 3 dígitos: ')

    const n_romano = get_romano(numero)

    console.log(n_romano)
}

function get_romano(numero) {
    const n_string = String(numero);

    const unidade = Number(n_string[2])
    const dezena = Number(n_string[1])
    const centena = Number(n_string[0])

    const unidade_romano = get_unidade_romano(unidade)
    const dezena_romano = get_dezena_romano(dezena)
    const centena_romano = get_centena_romano(centena)

    return centena_romano+dezena_romano+unidade_romano

}

function get_unidade_romano(numero) {
    let romano = ''

    if(numero<=3){
        romano = get_qtd_simbolo('I', numero)
    } else if(numero === 4) {
        romano = 'IV'
    } else if (numero===5){
        romano = 'V'
    } else if(numero<9) {
        romano = 'V'+get_qtd_simbolo('I', numero-5)
    } else if( numero===9){
        romano = 'IX' 
    }

    return romano
}

function get_dezena_romano(numero) {
    let romano = ''

    if(numero<=3){
        romano = get_qtd_simbolo('X', numero)
    } else if(numero === 4) {
        romano = 'XL'
    } else if (numero===5){
        romano = 'L'
    } else if(numero<9) {
        romano = 'L'+get_qtd_simbolo('X', numero-5)
    } else if( numero===9){
        romano = 'XC' 
    }

    return romano
}

function get_centena_romano(numero) {
    let romano = ''

    if(numero<=3){
        romano = get_qtd_simbolo('C', numero)
    } else if(numero === 4) {
        romano = 'CD'
    } else if (numero===5){
        romano = 'D'
    } else if(numero<9) {
        romano = 'D'+get_qtd_simbolo('C', numero-5)
    } else if( numero===9){
        romano = 'CM' 
    }

    return romano
}

function get_qtd_simbolo(simbolo, qtd) {
    let retorno = ''

    for (let i=1; i<=qtd; i++ ){
        retorno+=simbolo
    }
    return retorno
}



main()