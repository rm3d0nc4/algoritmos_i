// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1101_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {

    
    for(let index in lines) {
        const numeros = lines[index].split(' ').map(Number)
        if(numeros[0] > 0 && numeros[1] > 0) {
            const sequence = get_sequence(numeros)
            console.log(sequence)
        }

    }
}


function get_sequence([n1,n2]) {
    let maior
    let menor
    
        if(n1>n2) {

            maior = n1
            menor = n2

        } else {

            maior = n2
            menor = n1

        }

        let return_value = `${menor} `
        let somador = menor

        let counter = menor

        while (counter<maior) {
            counter++
            somador+=counter
            return_value+=`${counter} `
        }

        return_value+= `Sum=${somador}`

        return return_value

}

main()