// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1036_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split(' ').map(Number);

function main() {
    
    const [a,b,c] = lines

    if(a===0 || get_delta(a,b,c) <0) {
        console.log('Impossivel calcular')
    } else {

        const raizes = calcular_equacao_de_bhaskara(a,b,c)

        console.log(`R1 = ${raizes[0]}`)
        console.log(`R2 = ${raizes[1]}`)
    }
}

function get_delta(a,b,c){ return  (b**2)-4*a*c }

function calcular_equacao_de_bhaskara(a, b, c) {
    
    const delta = get_delta(a,b,c)
    const x1 = (-b + Math.sqrt(delta))/ (2 * a)
    const x2 = (-b - Math.sqrt(delta))/ (2 * a)
    
    return [x1.toFixed(5),x2.toFixed(5)]
}


main()