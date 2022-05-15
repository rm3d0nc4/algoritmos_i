import { ler_numeros } from "../io_utils.js";

function main() {
    const numero = ler_numeros('um número')
    const verificacao = verifica_numero(numero)
    console.log(verificacao)
}

function verifica_numero(numero) {
    if(numero<0) {
        return 'negativo'
    }
    return 'positivo'
}

main()