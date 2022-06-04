import {ler_numeros, input, contem} from '../io_utils.js'

function main() {

    const [qtd_casos] = ler_numeros('a quantidad de casos')
    let dieta
    let cafe 
    let almoco
    let o_que_comeu
    let janta

    for(let contador = 1; contador<=qtd_casos; contador++){
        dieta = input('Dieta: ')
        cafe = input('Café: ')
        almoco = input('Almoço: ')

        o_que_comeu = cafe+almoco

        if(comeu_o_que_nao_devia(dieta, o_que_comeu)) {
            console.log('CHEATER')
        } else {
            janta = o_que_faltou(dieta, o_que_comeu).split('').sort().join('')
            console.log(janta)
        }
    }
}

function o_que_faltou(dieta, o_que_comeu){
    let faltou = ''

    for(let comida of dieta){
        if(!contem(o_que_comeu, comida)){
            faltou+=comida
        }
    }

    return faltou
}

function comeu_o_que_nao_devia(dieta, o_que_comeu) {

    for(let comida of o_que_comeu){
        if(!contem(dieta, comida)){
            return true
        }
    }
    return false
}

function ordernar(caracteres){
    let ordenados = ''

}

main()