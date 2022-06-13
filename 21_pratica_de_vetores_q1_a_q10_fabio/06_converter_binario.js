import {ler_numero, input} from '../io_utils.js'

function main() {

    const binario = new Array(8)

    console.log('Digite os elementos de um binário (0 ou 1): ')
    
    for(let posicao = 0; posicao < binario.length; posicao++){
        binario[posicao] = ler_numero(`[${posicao+1}/8]: `)
    }
    
    let numero_decimal = get_decimal(binario)
    let numero_hexadecimal = get_hexadecimal(numero_decimal)

    console.log(`Número decimal: ${numero_decimal}`)
    console.log(`Número hexadecimal: ${numero_hexadecimal}`)

}

function get_decimal(vetor) {
    let decimal = 0

    const ultima_posicao = vetor.length - 1
    
    for(let posicao = 0; posicao < vetor.length; posicao++) {
        decimal += vetor[posicao] * 2 ** (ultima_posicao - posicao)
    }

    return decimal

}

function get_hexadecimal(numero) {
    const hexadecimal_desordenado = new Array()
    let ultimo_valor = 0 

    while(numero!==0) {
        ultimo_valor = caractere_hexadecimal(numero % 16)
        hexadecimal_desordenado[hexadecimal_desordenado.length] = ultimo_valor
    
        numero = Math.floor(numero/16)
    }

    const hexadecimal = ordenar_hexadecimal(hexadecimal_desordenado)

    return hexadecimal
}

function ordenar_hexadecimal(hexadecimal_desordenado) {
    let hexadecimal = ''

    for(let elemento = hexadecimal_desordenado.length - 1; elemento >= 0; elemento--) {
        hexadecimal += hexadecimal_desordenado[elemento]
    }

    return hexadecimal
}

function caractere_hexadecimal(numero) {
    let letras = ['A','B','C','D','E','F']
    let caractere

    if(numero>=10){
        caractere = letras[numero-10]
    } else {
        caractere = numero
    }

    return caractere
}

main()