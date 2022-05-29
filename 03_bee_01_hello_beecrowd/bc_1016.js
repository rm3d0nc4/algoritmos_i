// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1016_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');


function main() {

    const distancia = Number(lines[0])

    const tempo = distancia*2

    
    console.log(`${tempo} minutos`)

}

main()