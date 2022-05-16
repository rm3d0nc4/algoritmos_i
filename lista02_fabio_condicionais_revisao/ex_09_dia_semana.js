import { ler_numeros } from './../io_utils.js';

function main() {
    const numero = ler_numeros('um número equivalente a um dia da semana')

    if(numero>0 && numero<8) {
        const dia = get_dia(numero)
        console.log(dia)
    } else {
        console.log('Número inválido!')
    }
}

function get_dia(n) {
    const dias = [
        'Domingo', 'Segunda-feira', 
        'Terça-feira', 'Quarta-feira', 
        'Quinta-feira', 'Sexta-feira', 
        'Sábado'
    ]

    return dias[n-1]
}

main()