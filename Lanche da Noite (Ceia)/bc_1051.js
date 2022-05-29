// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1051_input.txt', 'utf8'); 

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 

const lines = input.split('\n');

function main() {
    const salario = Number(lines[0])
    const isento = 2000.00

    let total_a_pagar = 0
    
    if(salario<2000){
        total_a_pagar = 0
    }else if (salario<=3000) {

        const incidencia1 = (salario-isento)*.08
        total_a_pagar+=incidencia1

    } else if(salario<=4500) {

        const incidencia2 = 1000*0.08
        const incidencia3 = (salario-isento-1000)*.18
        total_a_pagar+= incidencia2+incidencia3
    } else {
        
        const incidencia4 = 1000*0.08
        const incidencia5 = 1500*.18
        const incidencia6 = (salario-isento-1000-1500)*.28
        total_a_pagar+= incidencia4+incidencia5+incidencia6
    }

    if(total_a_pagar ===0) {
        console.log('Isento')
    } else {
        console.log(`R$ ${total_a_pagar.toFixed(2)}`)
    }
    
    

}

main()