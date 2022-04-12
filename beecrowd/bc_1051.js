// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1051_input.txt', 'utf8'); 

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 

const lines = input.split('\n');

function main() {
    const salario = Number(lines[0])

    let tributavel = salario-2000.0
    const faixa1 = tributavel-1000.00
    let faixa2 = faixa1 - 1500.00
    let faixa3 = faixa2
    
    let total_a_pagar = 0
    
    if (faixa1-1500<0) {
        faixa2 = 0
    } else if (faixa2<0){
        faixa3 = 0
    }

    
    if(salario>2000.00) {

        const incidencia1 = (tributavel-faixa1)
        total_a_pagar+=incidencia1*.08

    }
    
    if (salario>3000.00) {
        const incidencia2 = (faixa1-faixa2)
        total_a_pagar+=incidencia2*.18
    } 

    if(salario>4500.00) {
        total_a_pagar+=faixa3*.28
    }

    if(salario<2000.00) {
        console.log('Isento')
    } else {
        console.log(`R$ ${total_a_pagar.toFixed(2)}`)
    }
    
    

}

main()