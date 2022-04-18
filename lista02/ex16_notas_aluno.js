import { input, ler_numeros_tipo2 } from './../io_utils.js';

function main() {
    const notas_aluno = ler_numeros_tipo2('as duas notas do aluno, separadas por espaço')
    const situacao = calcula_media_aluno(notas_aluno[0], notas_aluno[1])
    console.log(`Situação: ${situacao}`)
}

// Questão 16
function calcula_media_aluno(nota1, nota2){
    const media = (nota1+nota2)/2

    if(media>=7.0){
        return 'Aprovado'
    } else {
        const exame_final  = ler_numeros('a nota do exame final')
        if(exame_final[0] >=5.0) {
            return 'Aprovado'
        } else {
            return 'Reprovado'
        }
    }
}


main()