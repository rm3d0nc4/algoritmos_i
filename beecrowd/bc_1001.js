// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1001_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {

    
    const  numero_1 = Number(lines[0])
    const  numero_2 = Number(lines[1])

    const soma = numero_1+numero_2

    console.log(`X= ${soma}`)
    
}
main()