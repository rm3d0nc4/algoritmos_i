
import {ler_numeros} from '../io_utils.js'

function main() {

    const numero = Number((Math.random()*1000).toFixed(0))
    console.log('Número aleatório selecionado')

    let palpite = 0

    while(palpite!=numero) {
        [palpite] = ler_numeros('o seu palpite (número)')

        if(palpite>numero) {
            console.log('Menor!')
        } else {
            console.log('Maior')
        }
    }
    console.log('Número encontrado!')
}

main()