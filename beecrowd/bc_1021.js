// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1021_input.txt', 'utf8'); 

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 

const lines = input.split('\n');
function main() {

    const valor = Number(lines[0])*100

    const resto100 = valor%10000
    const resto50 = resto100%5000
    const resto20 = resto50%2000
    const resto10 = resto20%1000
    const resto5 = resto10%500
    const resto2 = resto5%200
    const resto1 = resto2%100
    const resto050 = resto1%50
    const resto025 = resto050%25
    const resto010 = resto025%10
    const resto005 = resto010%5
    const resto001 = resto005%1


    const nota100 = (valor - resto100) /10000
    const nota50 = (resto100-resto50) /5000
    const nota20 = (resto50 - resto20) /2000
    const nota10 = (resto20 - resto10) /1000
    const nota5 = (resto10-resto5) /500
    const nota2 = (resto5-resto2) / 200
    const moeda1 = (resto2-resto1) / 100
    const moeda050 = (resto1-resto050) / 50 //OK
    const moeda025 = (resto050-resto025) / 25
    const moeda010 = (resto025-resto010) / 10
    const moeda005 = (resto010-resto005) / 5
    const moeda001 = (resto005-resto001) / 1

  
    console.log(`NOTAS:`)
    console.log(`${nota100} nota(s) de R$ 100.00`)
    console.log(`${nota50} nota(s) de R$ 50.00`)
    console.log(`${nota20} nota(s) de R$ 20.00`)
    console.log(`${nota10} nota(s) de R$ 10.00`)
    console.log(`${nota5} nota(s) de R$ 5.00`)
    console.log(`${nota2} 0 nota(s) de R$ 2.00`)
    console.log(`MOEDAS:`)
    console.log(`${moeda1} moeda(s) de R$ 1.00`)
    console.log(`${moeda050} moeda(s) de R$ 0.50`)
    console.log(`${moeda025} moeda(s) de R$ 0.25`)
    console.log(`${moeda010} moeda(s) de R$ 0.10`)
    console.log(`${moeda005} moeda(s) de R$ 0.05`)
    console.log(`${moeda001} moeda(s) de R$ 0.01`)
}

main()