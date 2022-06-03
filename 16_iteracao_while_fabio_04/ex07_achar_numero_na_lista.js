import { ler_numeros, input } from "../io_utils.js";

function main() {
    const [numero] = ler_numeros('um número')
    console.log(numero)

    let [palpite] = ler_numeros('outro número')
    // console.log(palpite)

    
    while(palpite !== numero) {
        
        console.log(palpite !== numero)
        console.log('O número inserido não está na lista!')

        palpite = Number(input('outro número: '))
        console.log(palpite)
    }
    console.log('Número encontrado!')
}

main()