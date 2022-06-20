import fs from 'fs';
const input = fs.readFileSync('1174_selecao_vetor1_input', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n')
// import {ler_numero, input} from '../io_utils.js'

function main() {

    const vetor = lines.map(Number)
    // console.log(`Tam: ${vetor.length}`)

    for(let posicao = 0; posicao < vetor.length; posicao++) {

        if(!maior_q_10(vetor[posicao])) {
            console.log(`A[${posicao}] = ${vetor[posicao].toFixed(1)}`)
        }
    }
}

const maior_q_10 = n => n > 10

main()