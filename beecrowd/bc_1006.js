// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1006_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');


function main() {
    const A = Number(lines[0]).toFixed(1)
    const B = Number(lines[1]).toFixed(1)
    const C = Number(lines[2]).toFixed(1)

    const media = (A*2+B*3+C*5)/10

    console.log(`MEDIA = ${media.toFixed(1)}`)

}
main()