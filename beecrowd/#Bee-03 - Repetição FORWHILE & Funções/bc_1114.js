// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1114_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n').map(Number);

function main() {
    let senha = 2002
    let palpite
    let controller = 0

    palpite = lines[controller]
    while(palpite !=senha) {
        console.log('Senha Invalida')
        controller++
        palpite = lines[controller]

    }

    console.log('Acesso Permitido')
}

main()