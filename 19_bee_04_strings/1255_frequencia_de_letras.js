import {ler_numeros, input, contar_elemento, contem} from '../io_utils.js'

function main() {

    const frase = input('Frase: ')
    const letras_letra_mais_frequentes = obter_letras_letra_mais_frequentes(frase.toLowerCase())
    console.log(letras_letra_mais_frequentes)
}

function obter_letras_letra_mais_frequentes(frase){
    let letra_mais_frequente = ''
    let frequencia = 0
    
    let letra_atual
    let frequencia_letra_atual

    for(let elemento = 0; elemento < frase.length; elemento++){

        letra_atual = frase[elemento]
        frequencia_letra_atual = contar_elemento(frase[elemento], frase)
        
        if(eh_letra(letra_atual)){
                if(frequencia_letra_atual > frequencia){
                frequencia = frequencia_letra_atual
                letra_mais_frequente = letra_atual

            } else if(frequencia_letra_atual === frequencia){

                if(!contem(letra_mais_frequente, letra_atual)){
                    letra_mais_frequente+=letra_atual
                }
            }
        }
    }

    return letra_mais_frequente.split('').sort().join('')

}

const eh_letra = e => e !==' '


main()