// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1012_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {

    const numeros = lines[0].split(' ')

    const num_A = Number(Number(numeros[0]).toFixed(2))
    const num_B = Number(Number(numeros[1]).toFixed(2))
    const num_C = Number(Number(numeros[2]).toFixed(2))

    const pi = 3.14159
    const area_triangulo = (num_A*num_C)/2
    const area_circulo = pi*num_C**2
    const area_trapezio = ((num_A+num_B) * num_C)/2
    const area_quadrado = num_B**2
    const area_retangulo = num_A*num_B

    console.log(`TRIANGULO: ${area_triangulo.toFixed(3)}`)
    console.log(`CIRCULO: ${area_circulo.toFixed(3)}`)
    console.log(`TRAPEZIO: ${area_trapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${area_quadrado.toFixed(3)}`)
    console.log(`RETANGULO: ${area_retangulo.toFixed(3)}`)

}

main()