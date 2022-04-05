// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1005_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const n1 = Number(lines[0])
    const n2 = Number(lines[1])

    const media = (n1*3.5+n2*7.5)/11

    console.log(`MEDIA = ${media.toFixed(5)}`)

}
main()