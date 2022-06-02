import {ler_numeros} from '../io_utils.js'

function main() {

    const [n] = ler_numeros('um número inteiro')

    let contador= 1
    let soma = 0
    while(contador<=n){
        soma+=contador
        contador++
    }
    console.log(`Soma de todos os número ente 1 e ${n}: ${soma}`)
}

main()