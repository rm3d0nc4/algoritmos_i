import {ler_numeros, input} from '../io_utils.js'

function main() {

    const binario = input('um valor binário: ')
    const decimal = converter_para_decimal(binario)

    console.log(decimal)
}

function converter_para_decimal(bin) {
    let expoente = bin.length-1
    let decimal = 0
    let valor_posicao_atual

    for(let num = 0; num<bin.length; num++){
        valor_posicao_atual = Number(bin[num])*2**expoente
        decimal+=valor_posicao_atual
        expoente--
    }

    return decimal

}

main()