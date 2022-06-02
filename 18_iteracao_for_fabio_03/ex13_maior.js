import {ler_numeros} from '../io_utils.js'

function main() {

    let maior = 0
    const [n] = ler_numeros('quantos números irá ler')


    for(let counter = 0; counter<n; counter++){
        const [numero] = ler_numeros('um número')
        if(numero>maior){
            maior=numero
        }
    }

    console.log(`Maior: ${maior}`)
}

main()