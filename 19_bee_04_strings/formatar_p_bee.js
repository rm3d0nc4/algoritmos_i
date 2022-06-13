import fs from 'fs';
const input = fs.readFileSync('1276_faixa_de_letras_input', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n')

function main() {
    
    while(lines.length > 1){

        const texto = lines.shift()
        const faixa = get_faixa_de_letras(texto)
    
        const saida = faixa.split(' ').join(', ')
        console.log(saida)
    }
}

main()