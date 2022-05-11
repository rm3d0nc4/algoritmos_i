// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1131_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    let controller_while = 1
    let index_lines = 0
    let inter = 0
    let gremio = 0
    let count_grenais =0
    let empates = 0

    while( controller_while !=2 ) {
        const grenal = lines[index_lines].split(' ').map(Number)

        if(grenal[0]>grenal[1]) {
            inter++
        } else if(grenal[0]<grenal[1]) {
            gremio++
        } else {
            inter++
            gremio++
            empates++
        }
        count_grenais++

        console.log('Novo grenal (1-sim 2-nao)')

        index_lines++

        controller_while = lines[index_lines]

        index_lines++
        
        
    }

    console.log(`${count_grenais} grenais`)
    console.log(`Inter:${inter}`)
    console.log(`Gremio:${gremio}`)
    console.log(`Empates:${empates}`)

    if (inter>gremio) {
        console.log('Inter venceu mais')
    } else if(inter<gremio) {
        console.log('Gremio venceu mais')
    } else {
        console.log('Nao houve vencedor')
    }

   
}



main()