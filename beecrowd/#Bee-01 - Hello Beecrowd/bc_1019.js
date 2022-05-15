// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1019_input.txt', 'utf8'); 

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 

const lines = input.split('\n');
function main() {

    const segundos = Number(lines[0])
    const seg = segundos % 60
    const min = ((segundos - seg) %3600 )/60
    const hora = ((segundos-seg-(min*60))) / 3600
   

    



  
    console.log(`${hora}:${min}:${seg}`)

}

main()