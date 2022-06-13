import {ler_numero, input, contem} from '../io_utils.js'
import { extrair_letras_utilizadas, ordenar_letras_crescente } from '../string_utils.js'

function main() {

    const texto = input('Texto: ')
    const faixa = get_faixa_de_letras(texto)

    const saida = faixa.split(' ').join(', ')
    console.log(saida)
}


function get_faixa_de_letras(texto) {
    let faixas = ''
    let proxima_letra = ''

    let faixa_atual
    let char_code_letra_atual

    const letras_do_texto = extrair_letras_utilizadas(texto)
    const letras_ordenadas = ordenar_letras_crescente(letras_do_texto)

    for(let letra = 0; letra < letras_ordenadas.length; letra++) {
        
        faixa_atual = ''

        if(letras_ordenadas[letra] !== ' ') {

            char_code_letra_atual = letras_ordenadas[letra].charCodeAt(0)
            proxima_letra = String.fromCharCode(char_code_letra_atual+1)
            
            faixa_atual += `${letras_ordenadas[letra]}:`
            
            while(contem(letras_ordenadas, proxima_letra)) {
                letra++
                char_code_letra_atual++
                proxima_letra = String.fromCharCode(char_code_letra_atual+1)
            }
            
            faixa_atual+=String.fromCharCode(char_code_letra_atual)


            if(faixas !== '') {
                faixas += ` ${faixa_atual}`
            } else {
                faixas += faixa_atual
            }
            
        }
        
    }
    
    return faixas
}

main()