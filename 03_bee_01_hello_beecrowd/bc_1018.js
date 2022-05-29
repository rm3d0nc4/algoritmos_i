// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1018_input.txt', 'utf8'); 

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 

const lines = input.split('\n');
function main() {

    const valor = Number(lines[0])

    const resto100 = valor%100
    const resto50 = resto100%50
    const resto20 = resto50%20
    const resto10 = resto20%10
    const resto5 = resto10%5
    const resto2 = resto5%2
    const resto1 = resto2%1

    

    const nota100 = (valor - resto100) /100
    const nota50 = (resto100-resto50) /50
    const nota20 = (resto50 - resto20) /20
    const nota10 = (resto20 - resto10) /10
    const nota5 = (resto10-resto5) /5
    const nota2 = (resto5-resto2) / 2
    const nota1 = (resto2-resto1) / 1


    console.log(`${valor}`)
    console.log(`${nota100} nota(s) de R$ 100,00`)
    console.log(`${nota50} nota(s) de R$ 50,00`)
    console.log(`${nota20} nota(s) de R$ 20,00`)
    console.log(`${nota10} nota(s) de R$ 10,00`)
    console.log(`${nota5} nota(s) de R$ 5,00`)
    console.log(`${nota2} nota(s) de R$ 2,00`)
    console.log(`${nota1} nota(s) de R$ 1,00`)

}

main()