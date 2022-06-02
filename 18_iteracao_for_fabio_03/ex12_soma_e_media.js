import {ler_numeros} from '../io_utils.js'

function main() {

    let soma = 0

    const [n] = ler_numeros('quantos números irá ler')

    for(let counter= 0; counter <n; counter++){
        const [numero] = ler_numeros('um número')
        soma+=numero
    }

    const media = soma/n

    console.log(`Soma: ${soma}`)
    console.log(`Média: ${media}`)

}

main()