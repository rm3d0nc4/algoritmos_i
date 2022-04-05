// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1008_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const n_funcionario = Number(lines[0])
    const carga_horaria = Number(lines[1])
    const salario_por_hora = Number(lines[2]).toFixed(2)

    const salario = carga_horaria*salario_por_hora

    console.log(`NUMBER = ${n_funcionario}`)
    console.log(`SALARY = U$ ${salario.toFixed(2)}`)

}
main()