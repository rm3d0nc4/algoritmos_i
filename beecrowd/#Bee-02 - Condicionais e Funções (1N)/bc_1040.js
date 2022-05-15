// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1040_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {

    const [nota1, nota2, nota3, nota4] = lines[0].split(' ').map(Number)
    const media = get_media(nota1, nota2, nota3, nota4)

    console.log(`Media: ${media.toFixed(1)}`)

    if (media<5.0) {
        console.log(`Aluno reprovado.`)

    } else if(media>=5 && media<=6.9) {
        console.log(`Aluno em exame.`)

        const [nota_exame] = lines[1].split(' ').map(Number)
        console.log(`Nota do exame: ${nota_exame.toFixed(1)}`)

        const media_final = get_media_final(nota_exame, media)

        if(media_final>=5.0) {
            console.log(`Aluno aprovado.`)
            
        } else {
            console.log(`Aluno reprovado.`)

        }

        console.log(`Media final: ${media_final.toFixed(1)}`)

    } else if(media>=7) {
        console.log(`Aluno aprovado.`)
    }
}


function get_media(n1,n2,n3,n4) {
    const nota_1 = n1*2
    const nota_2 = n2*3
    const nota_3 = n3*4
    const nota_4 = n4*1

    const media = (nota_1 + nota_2 + nota_3 + nota_4)/10

    return media
}

function get_media_final(nota_exame, media) {

    const media_final = (nota_exame+media)/2
    
    return media_final
}
main()