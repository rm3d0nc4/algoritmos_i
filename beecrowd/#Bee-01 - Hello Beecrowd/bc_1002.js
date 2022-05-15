// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1002_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const n = 3.14159

    const raio =  Number(lines[0])

    const area = (n*(raio**2)).toFixed(4)

    console.log(`A=${area}`)
}
main()