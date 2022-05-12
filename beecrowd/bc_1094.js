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
        let data = lines[counter].split(' ')
        

        let n_of_experiments = Number(data[0]) 
        let animal = data[1]
        
        if(animal === 'C'){
            total_coelhos+=n_of_experiments
        } 
        else if( animal === 'R') {
            total_ratos+=n_of_experiments
        } else if(animal === 'S') {
            total_sapos+=n_of_experiments
        }



        counter++

    }

    const total_cobaias = total_coelhos+total_sapos+total_ratos

    const percentual_coelhos = ((total_coelhos/total_cobaias)*100).toFixed(2)
    const percentual_sapos = ((total_sapos/total_cobaias)*100).toFixed(2)
    const percentual_ratos = ((total_ratos/total_cobaias)*100).toFixed(2)

    console.log(`Total de coelhos: ${total_coelhos}`)
    console.log(`Total de ratos: ${total_ratos}`)
    console.log(`Total de sapos: ${total_sapos}`)
    console.log(`Percentual de coelhos: ${percentual_coelhos} %`)
    console.log(`Percentual de ratos: ${percentual_ratos} %`)
    console.log(`Percentual de sapos: ${percentual_sapos} %`)

}

main()