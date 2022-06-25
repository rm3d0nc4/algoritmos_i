
import { ler_numero, input } from '../io_utils.js';

function main() { 
    
    const qtd_alunos = ler_numero('Qtd alunos')
    const nome_alunos = input('Nomes dos alunos: ').split(' ')
    const frequencia_alunos = input('Frequencia dos alunos: ').split(' ')
    
    let frequencia_aluno
    let nome_aluno
    let percentual_ausencia
    let alunos_impedidos = ''

    for(let posicao = 0; posicao < nome_alunos.length; posicao++) {
        nome_aluno = nome_alunos[posicao]
        frequencia_aluno = frequencia_alunos[posicao]

        percentual_ausencia = get_percentual_ausencia(frequencia_aluno)

        if(contar_elemento('M', frequencia_aluno) !== frequencia_aluno.length) {
            if( percentual_ausencia > .25 ) {

                if(alunos_impedidos === '') {
                    alunos_impedidos += `${nome_aluno}`
                } else {
                    alunos_impedidos += ` ${nome_aluno}`
                }
            }
        }
    }
    console.log(alunos_impedidos)
}

function get_percentual_ausencia(frequencia_aluno) {
    let contador_ausencia = 0
    let contador_falta_justificada = 0

    for(let frequencia of frequencia_aluno) {
        if(frequencia === 'A') {
            contador_ausencia++
        }

        if(frequencia === 'M') {
            contador_falta_justificada++
        }
    }
    const num_frequencia_a_ser_considerada = frequencia_aluno.length - contador_falta_justificada 
    const percentual_ausencia = contador_ausencia / num_frequencia_a_ser_considerada

    return percentual_ausencia
}

function contar_elemento(elemento, string){
    let qtd = 0

    for(let indice = 0; indice < string.length; indice++){
        if(string[indice] === elemento){
            qtd++
        }
    }
    return qtd
}


main()