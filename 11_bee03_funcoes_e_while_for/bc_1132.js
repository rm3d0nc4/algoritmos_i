// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1132_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n').map(Number);

function main() {

    const[maior, menor] = get_ordem(lines)

    let valor = menor
    let somador = 0

    while (valor<=maior) {
        if((valor%13)!=0){
            somador+=valor
            valor++
        } else{
            valor++
        }
    }
    
    console.log(somador)
}

function get_ordem([n1,n2]) {

    if(n1>n2) {
        return [n1,n2]
    } else {
        return [n2,n1]
    }
}

main()