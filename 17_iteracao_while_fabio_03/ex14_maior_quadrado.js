import {ler_numeros} from '../io_utils.js'

function main() {

    let maior_quadrado = 0
    const [n] = ler_numeros('um número')

    let contador= 1
    while(contador**2<=n){
        maior_quadrado = contador**2
        contador++
    }

    console.log(`Maior quadrado menor: ${maior_quadrado}`)
}

main()