// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1011_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {

    const raio = Number(lines[0])

    const pi = 3.14159

    const area = (4/3)*pi*raio**3

    console.log(`VOLUME = ${area.toFixed(3)}`)
}

main()