import {ler_numero, input} from '../io_utils.js'

function main() {

    const frase = input('Frase:')
    const palavras = frase.split(' ')

    let qtd_palavras_pares = 0
    let qtd_palavras_impares = 0
    let qtd_caracteres = 0

    let tam_palavra

    for(let palavra of palavras) {
        tam_palavra = palavra.length

        if(eh_par(tam_palavra)){
            qtd_palavras_pares++
        } else {
            qtd_palavras_impares++
        }

        qtd_caracteres+=tam_palavra
        
    }

    console.log(`A frase contém:`)
    console.log(`${qtd_palavras_pares} palavras pares`)
    console.log(`${qtd_palavras_impares} palavras ímpares`)
    console.log(`${qtd_caracteres} caracteres`)
}

const eh_par = n => n % 2 === 0

main()