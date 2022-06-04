import {ler_numeros, input} from '../io_utils.js'
// Comentar duas próximas linhas abaixo no Beecrowd
// import fs from 'fs';
// const input = fs.readFileSync('1166_led_input.txt', 'utf8');


// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

function main() {

    // const lines = input.split('\n')

    const [qtd_numeros] = ler_numeros('quantidade de números a serem lidos')
    // const qtd_numeros = Number(lines[0])
    
    for(let line = 1; line<=qtd_numeros; line++){
        
        let qtd_leds = 0
        const numero = input('Digite um número:')
        // const numero = lines[line]
        
        for(let indice = 0; indice < numero.length; indice++){

            const elemento = Number(numero[indice])
            const qtd_let_elemento = get_qtd_led(elemento)

            qtd_leds += qtd_let_elemento
        }

        console.log(`${qtd_leds} leds`)

    }
}

function get_qtd_led(n) {
    const qtd_leds_cada_numero = [6,2,5,5,4,5,6,3,7,6,6]
    const qtd_leds_n = qtd_leds_cada_numero[n]

    return qtd_leds_n
}

main()