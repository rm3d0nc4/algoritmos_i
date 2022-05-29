import { ler_numeros } from "../io_utils.js";


function main() {

    let numero = ler_numeros('um número (entre 0 e 255)')[0]

    while(!(numero>=0 && numero<=255)) {
        console.log(`Número inválido.`)
        numero = ler_numeros('um número entre 0 e 255 (novamente)')[0]
    }

    const binario = converter_p_binario(numero)
    const hexadecimal = converter_p_hexadecimal(numero)

    console.log(`Binário: ${binario}`)
    console.log(`Hexadecimal: ${hexadecimal}`)
}


function converter_p_binario(num) {
    let bin = ''
    let count = num

    while(count>=1) {
        const bit = count%2
        bin+=bit
        count = Math.floor(count/2)
    }
    
    const bin_convertido = ordenar_caracteres(bin)
    return bin_convertido
}

function converter_p_hexadecimal(num) {
    let hex = ''
    let count = num

    while(count>=1) {
        let bit = count%16

        if(bit>9) {
            bit = get_letra_correspondente(bit)
        }
        hex+=bit
        count = Math.floor(count/16)
    }

    const hex_convertido = ordenar_caracteres(hex)
    return hex_convertido
}

function get_letra_correspondente(numero) {
    const equivalencias = ['A','B','C','D','E','F']
    const caractere = equivalencias[numero-10]
    return caractere
}

function ordenar_caracteres(numero) {
    let caracteres_ordenados = ''
    for(let i=1 ;i<=numero.length ; i++){
        const bit = numero[numero.length-i]
        caracteres_ordenados+=bit
    }
    return caracteres_ordenados
}

main()