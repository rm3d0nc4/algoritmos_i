import * as fs from 'fs';
import { input } from './../io_utils.js';
const alunos = fs.readFileSync('alunos_input.txt', 'utf-8').split('\n')

function main() {

    let media_parcial_classe = 0
    let n_aprovados = 0
    let n_reprovados = 0
    let de_prova_final = 0
    let reprovados_falta = 0

    for (let aluno of alunos) {
        let dados_aluno = aluno.split(';')
        const nota1 = Number(dados_aluno[1])
        const nota2 = Number(dados_aluno[2])
        const nota3 = Number(dados_aluno[3])
        const n_faltas = dados_aluno[4].split('/').map(Number)

        const percentual_faltas = (n_faltas[0]/n_faltas[1])*100
        const media = (nota1+nota2+nota3)/3

        console.log(`Média do(a) ${dados_aluno[0]}: ${media.toFixed(2)} (${percentual_faltas.toFixed(2)}% de falta)`)

        media_parcial_classe+=media

        if(percentual_faltas>25){
            if(media>=7) {
                n_aprovados++
            } else if(media<7 && media>=4) {
                de_prova_final++
            } else {
                n_reprovados++
            }
        } else {
            n_reprovados++
            reprovados_falta++
        }

        


    }

    const media_final_classe = media_parcial_classe/alunos.length

    console.log(`Média da classe: ${media_final_classe.toFixed(2)}`)
    console.log(`Número de aprovados: ${n_aprovados}`)
    console.log(`Número de reprovados: ${n_reprovados}`)
    console.log(`Emp prova final: ${de_prova_final}`)
    console.log(`Reprovados por falta: ${reprovados_falta}`)
}

main()