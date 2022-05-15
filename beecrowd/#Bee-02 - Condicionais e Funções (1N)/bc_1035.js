// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1035_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split(' ');

function main() {
    const [a,b,c,d] = lines.map(Number)

    const validacao = valida_numeros(a,b,c,d)
    console.log(validacao)
}

function valida_numeros(a,b,c,d) {
    
    const condicao1 = b>c
    const condicao2 = d>a
    const condicao3 = c+d > a+b
    const condicao4 = (c>0 && d>0)
    const condicao5 = a%2==0

    if(condicao1 && condicao2 && condicao3 && condicao4 && condicao5) {
        return 'Valores aceitos'
    } else {
        return 'Valores nao aceitos'
    }
}

main()