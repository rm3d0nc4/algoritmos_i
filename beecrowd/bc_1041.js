// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1041_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const [x,y] = lines[0].split(' ').map(Number)

    const identifica_quadrante = localiza_coordenadas(x,y)

    console.log(identifica_quadrante)
}

function localiza_coordenadas(x,y) {

    if( x === y && y===0) {
        return 'Origem'
    } else if (x===0) { //Não necessitava a condição (y!=0)
        return 'Eixo Y'
    } else if (y===0) { //Não necessitava a condição (x!=0)
        return 'Eixo X'

    } else {
        const quadrante = get_quadrande(x,y)
        return quadrante
    }
}

function get_quadrande(x,y) {
    if(x>0 && y>0){
        return 'Q1'
    } else if(x<0 && y>0){
        return 'Q2'
    } else if(x<0 && y<0){
        return 'Q3'
    } else {
        return 'Q4'
    }
}

main()