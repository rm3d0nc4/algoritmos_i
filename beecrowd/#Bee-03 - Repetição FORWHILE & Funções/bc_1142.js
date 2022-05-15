// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1142_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n').map(Number);

function main() {

    const output = lines[0]

    let counter = 0
    let controller = 1
    let output_msg = ''
    while(controller<=output) {

        counter++

        
        if((counter%4)===0) {
            output_msg+='PUM'
            console.log(output_msg)
            output_msg = ''
            controller++
        } else{

            output_msg+= `${counter} `
        }

    }
}

main()