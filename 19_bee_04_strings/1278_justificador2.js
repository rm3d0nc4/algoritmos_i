import {ler_numeros, input, contar_elemento} from '../io_utils.js'
import { alinhar_texto_a_direita } from '../string_utils.js'

function main() {

    const qtd_linhas = ler_numeros('a qtd de qtd_linhas')
    let linha
    let linha_formatada
    let textos
    let qtd_espacos
    let texto_alinhado
    let tam_maior_texto = 0
    let linhas_formatadas = ''
    let saida = ''

    for(let i = 1; i <= qtd_linhas; i++){
        linha = input('linha: ').split(' ')
        
        linha_formatada = formatar(linha)

        if(eh_maior(linha_formatada.length, tam_maior_texto)) {
            tam_maior_texto = linha_formatada.length
        }

        i === 1 ? linhas_formatadas += `${linha_formatada}`
        : linhas_formatadas += `*${linha_formatada}`
        
    }

    textos = linhas_formatadas.split('*')

    for (let i = 0; i < textos.length; i++) {
        qtd_espacos = tam_maior_texto - textos[i].length

        texto_alinhado = alinhar_texto_a_direita(textos[i], qtd_espacos)
        
        i === 0 ? saida += texto_alinhado
        : saida += `*${texto_alinhado}` 
    }

    saida = saida.split('*').join('\n')
    console.log(saida)
}

function formatar(elementos){
    let string_formatada = ''

    for( let elemento of elementos) {
        if(elemento !== '') {

            string_formatada === '' ? string_formatada += elemento
            : string_formatada += ` ${elemento}`
            
        }
    }

    return string_formatada
}

const eh_maior = (n1, n2) => n1>n2


main()