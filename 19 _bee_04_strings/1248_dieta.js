import {ler_numeros, input} from '../io_utils.js'

function main() {

    const [qtd_casos] = ler_numeros('a quantidad de casos')

    for(let contador = 1; contador<=qtd_casos; contador++){
        let dieta = input('Dieta: ')
        let cafe = input('Café: ')
        let almoco = input('Almoço: ')
    }
}

main()