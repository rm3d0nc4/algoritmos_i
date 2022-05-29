import { ler_numeros } from "../io_utils.js";

function main() {
    const numero = ler_numeros('um número')

    const tipo = get_type(numero)

    console.log(`O numero ${numero} é do tipo ${tipo}`)
}

function get_type([numero]) {

    if(numero === Number(numero.toFixed(0))){
        return 'Inteiro'
    } else {
        return 'Decimal'
    }
}

main()