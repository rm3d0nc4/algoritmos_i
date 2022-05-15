// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
// import { input } from './../io_utils.js';
const input = fs.readFileSync('bc_1118_input.txt', 'utf8');
// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n').map(Number);

function main() {
    let controller_lines = 0
    let controller_while = 1

    while (controller_while !=2) {
        let nota1 = lines[controller_lines]

        while( is_valid(nota1) === false){

            console.log('nota invalida')
            controller_lines++
            nota1 = lines[controller_lines]

        }
        
        controller_lines++
        let nota2 = lines[controller_lines]
        
        while( is_valid(nota2) === false){
            console.log('nota invalida')
            controller_lines++
            nota2 = lines[controller_lines]
        }

        const media = (nota1+nota2)/2

        console.log(`media = ${media.toFixed(2)}`)
        console.log('novo calculo (1-sim 2-nao)')
        
        controller_lines++

        
        controller_while = lines[controller_lines]

        while((controller_while<1 || controller_while>2)===true){
            console.log('novo calculo (1-sim 2-nao)')
            controller_lines++
            controller_while = lines[controller_lines]
        }
        controller_lines++

    }
    
}


function is_valid(nota) {
    if (nota>=0 && nota<=10){
        return true 
    } else {
        return false
    }
}

main()