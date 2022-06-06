// import {ler_numeros, input} from '../io_utils.js'
// Comentar as três próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('1234_sentenca_dancante_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

function main() {
    const lines = input.split('\n')
    // const lines = [input('Sentença: ')]

    for(let line of lines) {
        const sentenca = line
        const sentenca_dancante = get_sentenca_dancante(sentenca)
        console.log(`${sentenca_dancante}`)
    }
}

function get_sentenca_dancante(sentenca){
    let sentenca_dancante = ''
    let eh_maisculo = true

    for(let elemento of sentenca){
        let novo_elemento

        if(elemento != ' '){

            if(eh_maisculo) {
                novo_elemento = elemento.toUpperCase()
                eh_maisculo = !eh_maisculo
            } else {
                novo_elemento = elemento.toLowerCase()
                eh_maisculo = !eh_maisculo
            }

        } else {
            novo_elemento = ' '
        }

        sentenca_dancante+=novo_elemento
    }
    return sentenca_dancante
}

main()