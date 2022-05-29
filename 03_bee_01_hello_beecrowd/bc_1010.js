// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1010_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {

    const peca1 = lines[0].split(' ')
    const peca2 = lines[1].split(' ')
    
    const cod_peca_1 = Number(peca1[0])
    const numero_pecas_1 = Number(peca1[1])
    const preco_unitario_1 = Number(peca1[2])

    const cod_peca_2 = Number(peca2[0])
    const numero_pecas_2 = Number(peca2[1])
    const preco_unitario_2 = Number(peca2[2])

    const total_peca_1 = numero_pecas_1*preco_unitario_1
    const total_peca_2 = numero_pecas_2*preco_unitario_2
    
    const total_compra = (total_peca_1+total_peca_2).toFixed(2)

    console.log(`VALOR A PAGAR: R$ ${total_compra}`)
}

main()