// 1º passo: Ler o número da primeira prova
// 2º passo: Ler o número de nadadores da primeira prova
// 3º passo: Enquanto o número da prova e o número de nadadores for diferente de 0:
//     3.1: Para cada nadador:
//         3.1.1: Ler nome
//         3.1.2: Ler classificação
//         3.1.3: Ler tempo que levou para concluir a prova
//         3.1.4: Ler time
//         3.1.5: Obter pontuacao, de acordo com a classificacao
//         3.1.6: Somar a pontuação do nadador à pontuação geral do time
//     3.2: Ler outro número da prova
//     3.3: Ler outro número de nadadores
//     ...
// 4º passo: escrever pontuação dos dois times
// 5º passo: Verificar qual time obteve maior pontuação
// 6º passo: escrever na tela o nome do time vencedor

import {ler_numero, input} from '../io_utils.js'

function main() {
    let num_prova = ler_numero('Numero da prova')
    let num_nadadores = ler_numero('Número de nadadores')

    let nome
    let classificacao
    let tempo
    let time
    let pontuacao

    let pontuacao_time_a = 0
    let pontuacao_time_b = 0

    while (num_prova !== 0 && num_nadadores !== 0) {
        for(let indice = 0; indice < num_nadadores; indice++) {

            nome = input('Nome: ')
            classificacao = ler_numero('Classificacao')
            tempo = ler_numero('Tempo (em segundos)')
            time = input('Time: ').toUpperCase()
            pontuacao = obter_pontuacao(classificacao)

            if(time === 'A') {
                pontuacao_time_a += pontuacao
            } else {
                pontuacao_time_b += pontuacao
            }

        }

        num_prova = ler_numero('Numero da prova')
        num_nadadores = ler_numero('Número de nadadores')
    }

    console.log(`Pontuação time A: ${pontuacao_time_a}`)
    console.log(`Pontuação time B: ${pontuacao_time_b}`)

    if(pontuacao_time_a > pontuacao_time_b) {
        console.log('Time A venceu!')
    } else {
        console.log('Time A venceu!')

    }
}

function obter_pontuacao(classificacao) {
    if (classificacao === 1) {
        return 9
    } else if(classificacao === 2){
        return 6
    } else if(classificacao === 3){
        return 4
    } else {
        return 3
    }
}


main()