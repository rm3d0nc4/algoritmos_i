import {ler_numero, input} from '../io_utils.js'
import { converter_para_decimal } from '../string_utils.js'

function main() {

    const msg_binario = input('Digite a mensagem em binário: ').split('-')
    const valida= 'válida'
    const n_valida = 'corrompida'
    
    

    console.log(`Mensagem ${eh_msg_valida(msg_binario) ? valida : n_valida}`)
    
}

function eh_msg_valida(msg_binario) {
    let valor_byte

    for(let byte of msg_binario) {
        valor_byte = converter_para_decimal(byte)

        if(!eh_valor_valido(valor_byte)) {
            return false
        }
    }
    return true
}

const eh_valor_valido = valor => eh_letra(valor) || eh_numero(valor) || eh_espaco(valor)
const eh_letra = valor => valor >= 97 && valor <= 122
const eh_numero = valor => valor >= 48 && valor <= 57
const eh_espaco = valor => valor === 32

main()