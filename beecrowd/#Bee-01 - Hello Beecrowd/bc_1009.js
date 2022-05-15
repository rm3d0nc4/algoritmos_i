// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1009_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const nome_funcionario = lines[0]
    const salario_fixo = Number(lines[1])
    const vendas = Number(lines[2])

    const salario_total = (salario_fixo+(vendas*0.15)).toFixed(2)

    console.log(`TOTAL = R$ ${salario_total}`)

}
main()