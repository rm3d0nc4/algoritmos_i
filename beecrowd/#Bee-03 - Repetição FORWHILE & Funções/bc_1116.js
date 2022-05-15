// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1116_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {

    const qtd_divisoes = Number(lines[0])
    let counter = 1

    while(counter-1 != qtd_divisoes) {
        

        const [n1,n2] = lines[counter].split(' ').map(Number)

        if (n2===0) {
            console.log('divisao impossivel')
        } else {
            const divisao = n1/n2

            console.log(divisao.toFixed(1))
        }
        counter++
    }
}

main()