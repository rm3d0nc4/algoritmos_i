// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1080_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {

    const numbers = lines.map(Number)

    const [bigger_value_index, bigger_value] = get_bigger_value(numbers)
    
    console.log(bigger_value)
    console.log(bigger_value_index)

}


function get_bigger_value(numbers) {
    let bigger_value = 0
    let bigger_value_index = 0

    for (let index in numbers) {
        if( numbers[index] > bigger_value) {
            bigger_value = numbers[index]
            bigger_value_index = index
        }
    }

    let position = Number(bigger_value_index)+1
    return [position, bigger_value]
}

main()