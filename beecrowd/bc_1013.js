// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1013_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {

    const numeros = lines[0].split(' ')
    
    const numero_a = Number(numeros[0])
    const numero_b = Number(numeros[1])
    const numero_c = Number(numeros[2])

    const maior_ab = (numero_a+numero_b+Math.abs(numero_a-numero_b))/2
    const maior_maior_abc = (maior_ab+numero_c+Math.abs(maior_ab-numero_c))/2

    console.log(`${maior_maior_abc} eh o maior`)
}

main()