import {ler_numeros} from '../io_utils.js'

// e (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e 
// a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1)

function main() {

    const possiveis_notas = [1,2,3,4]
    let otimo = 0
    let bom = 0
    let regular = 0
    let pessimo = 0
    let idade_otimo = 0


    while(true){
        let [idade, nota] = ler_numeros('a sua idade e a sua nota para o filme')

        if(idade===-1) {
            break
        }

        if(nota ===1) {
            otimo++
            idade_otimo+=idade
        } else if( nota===2) {
            bom++
        } else if( nota===3) {
            regular++
        } else if( nota===4) {
            pessimo++
        }
    }

    const total_entrevistados = otimo+bom+regular+pessimo
    const media_idade_otimo = idade_otimo/otimo
    const perc_bom = (bom/total_entrevistados)*100

    console.log(`Média das idades das pessoas que responderam ótimo: ${media_idade_otimo.toFixed(2)}`)
    console.log(`quantidade de pessoas que respondeu regular: ${regular}`)
    console.log(`percentual de pessoas que respondeu bom: ${perc_bom.toFixed(2)}%`)

}

main()