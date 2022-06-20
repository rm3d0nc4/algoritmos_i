import {input, ler_numeros} from '../io_utils.js'

function main() {
    
    const n = Number(input('Número: '))

    let contador1 = 1
    let contador2 = n
    
    let solucao = 0
    
    let calculo
    
    while(contador1 <= n) {
        
        if(!eh_par(contador2)){
            calculo = contador2/contador1

            solucao += calculo
        } else {
            
            calculo = contador1/contador2
            solucao += calculo
            console.log(`${contador2}/${contador1}`)
        }

        contador1++
        contador2--
    }

    console.log(`Solução: ${solucao}`)

}

const eh_par = n => n % 2 === 0

main()