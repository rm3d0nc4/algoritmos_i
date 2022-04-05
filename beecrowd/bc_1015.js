// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1015_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');


function main() {

    const par_ordenado_1 = lines[0].split(' ')
    const par_ordenado_2 = lines[1].split(' ')

    const x1 = Number(Number(par_ordenado_1[0]).toFixed(1))
    const y1 = Number(Number(par_ordenado_1[1]).toFixed(1))

    const x2 = Number(Number(par_ordenado_2[0]).toFixed(1))
    const y2 = Number(Number(par_ordenado_2[1]).toFixed(1))

    const calculo1 = (x2-x1)**2
    const calculo2 = (y2-y1)**2
    const calculo3 = Math.sqrt(calculo1+calculo2)
    

    console.log(`${calculo3.toFixed(4)}`)
    

}

main()