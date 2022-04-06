// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1020_input.txt', 'utf8'); 

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 

const lines = input.split('\n');
function main() {

    const dias_total = Number(lines[0])

    const resto_anos = dias_total % 365
    const resto_meses = resto_anos % 30
    const resto_dias = resto_meses

    const anos = (dias_total-resto_anos) /365
    const meses = (resto_anos-resto_meses) /30
    const dias = resto_dias
  
    console.log(`${anos} ano(s)`)
    console.log(`${meses} mes(es)`)
    console.log(`${dias} dia(s)`)
}

main()



