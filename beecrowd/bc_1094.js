// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1094_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const qtd_experiments = Number(lines[0])
    // console.log(input)

    let total_coelhos = 0
    let total_ratos = 0
    let total_sapos = 0

    let counter = 1
    while(counter <= qtd_experiments) {

        const data = lines[counter].split(' ')
        const n_of_experiments = Number(data[0]) 
        const animal = data[1]

        console.log(`Número de experimentos: ${n_of_experiments}, Animal: ${animal}`)

        console.log(animal)
    
        console.log(animal == 'R')

        counter++

    }

}

function get_number_of_experiments_and_animal(line) {
    const [number_of_experiments, animal] = line.split(' ')

    return [animal, Number(number_of_experiments)]
}

main()