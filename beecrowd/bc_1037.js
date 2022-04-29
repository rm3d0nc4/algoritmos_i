// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1037_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const [numero] = lines[0].split(' ').map(Number)
    const intervalo = identifica_intervalo(numero)
    console.log(intervalo)
}


function identifica_intervalo(n) {

    if(n>= 0 && n<=25) {
        return 'Intervalo [0,25]'
    } else if(n>25 && n<=50) {
        return 'Intervalo (25,50]'
    } else if(n>50 && n<=75) {
        return 'Intervalo (50,75]'
    } else if(n>75 && n<=100) {
        return 'Intervalo (75,100]'
    } else {
        return 'Fora de intervalo'
    }

}

main()