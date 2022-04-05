// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1007_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const A = (lines[0])
    const B = Number(lines[1])
    const C = Number(lines[2])
    const D = Number(lines[3])

    const dif = (A*B)-(C*D)

    console.log(`DIFERENCA = ${dif}`)

}
main()