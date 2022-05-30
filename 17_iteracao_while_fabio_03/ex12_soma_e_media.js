import {ler_numeros} from '../io_utils.js'

function main() {

    let soma = 0

    const [n] = ler_numeros('quantos números irá ler')

    let contador= 0
    while (contador<n) {
        const [numero] = ler_numeros('um número')
        soma+=numero
        contador++
    }

    // for(let counter= 0; counter <n; counter++){
    //     const [numero] = ler_numeros('um número')
    //     soma+=numero
    // }

    const media = soma/n

    console.log(`Soma: ${soma}`)
    console.log(`Média: ${media}`)

}

main()