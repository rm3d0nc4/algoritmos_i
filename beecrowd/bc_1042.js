// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1042_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const [n1,n2,n3] = lines[0].split(' ').map(Number)

    const ordem = ordenar_numeros(n1,n2,n3)

    const numeros = (`${n1}\n${n2}\n${n3}`)

    console.log(`${ordem}\n\n${numeros}`)
}

function ordenar_numeros(n1, n2, n3)  {
        
    if(n1<n2) {
        if(n2<n3) {
            return `${n1}\n${n2}\n${n3}`
        } else if (n3<n1) {
            return `${n3}\n${n1}\n${n2}`
        } else {
            return `${n1}\n${n3}\n${n2}`
            
        }
        
    } else {
        if(n1<n3) {
            return `${n2}\n${n1}\n${n3}`
        } else if(n3<n2) {
            return `${n3}\n${n2}\n${n1}`
        } else {
            return `${n2}\n${n3}\n${n1}`
        }
    }
}

main()

// ORDENAR DE FORMA DECRESCENTE

// function ordenar_numeros2(n1, n2, n3)  {
        
//     if(n1>n2) {
//         if(n2>n3) {
//             return `${n1}\n${n2}\n${n3} `
//         } else if (n3>n1) {
//             return `${n3}\n${n1}\n${n2} `
//         } else {
//             return `${n1}\n${n3}\n${n2} `
            
//         }
        
//     } else {
//         if(n1>n3) {
//             return `${n2}\n${n1}\n${n3} `
//         } else if(n3>n2) {
//             return `${n3}\n${n2}\n${n1} `
//         } else {
//             return `${n2}\n${n3}\n${n1} `
//         }
//     }
// }
