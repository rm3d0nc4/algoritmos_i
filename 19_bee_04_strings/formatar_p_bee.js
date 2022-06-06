import fs from 'fs'
const input = fs.readFileSync('1222_contos_input.txt', 'utf8');
// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n')

function main() {
    let num_palavras_conto, num_max_linhas, max_caractere_por_linha
    let conto
    let qtd_linhas, qtd_paginas

    for(let line = 0; line<lines.length; line++) {

        // const [num_palavras_conto, num_max_linhas, max_caractere_por_linha ] = ler_numeros('número de palavras, número máximo de linhas por página e o número máximo de caracteres por linha')
        [num_palavras_conto, num_max_linhas, max_caractere_por_linha ] = lines[line].split(' ').map(Number)
        line++
        // const conto = input('Conto: ')
        conto = lines[line]

        qtd_linhas = get_qtd_linhas(conto, max_caractere_por_linha)
        qtd_paginas = get_qtd_paginas(qtd_linhas, num_max_linhas)
    
        // console.log(`Quantidade de páginas: ${qtd_paginas}`)
        console.log(qtd_paginas)
    }
}

function get_qtd_paginas(qtd_linhas, qtd_max_linhas_por_pagina){
    let qtd_paginas

    if( qtd_linhas % qtd_max_linhas_por_pagina === 0){
        qtd_paginas = qtd_linhas/qtd_max_linhas_por_pagina
    } else {
        qtd_paginas = Math.floor(qtd_linhas/qtd_max_linhas_por_pagina)+1
    }

    return qtd_paginas
}


function get_qtd_linhas(texto, max_caractere_por_linha){
    let qtd_linhas = 0
    let linha
    let ultimo_elemento_da_linha
    let proximo_elemento_do_texto
    let pedaco_a_ser_removido
    let nova_linha
    
    for(let elemento = 0; elemento<texto.length; elemento+=max_caractere_por_linha){
        
        linha = extrair_linhas(texto, elemento, max_caractere_por_linha)
        ultimo_elemento_da_linha = linha[linha.length-1]
        proximo_elemento_do_texto =  texto[elemento+max_caractere_por_linha]
        
        if(eh_letra(ultimo_elemento_da_linha) && eh_letra(proximo_elemento_do_texto)){

            pedaco_a_ser_removido = linha.split(' ')
            pedaco_a_ser_removido= pedaco_a_ser_removido[pedaco_a_ser_removido.length-1]

            nova_linha = tirar_palavra_quebrada(linha, pedaco_a_ser_removido.length)

            elemento-=pedaco_a_ser_removido.length
            qtd_linhas++

        } else{
            qtd_linhas++
        }
    }
    return qtd_linhas
}


function tirar_palavra_quebrada(str, qtd_caracteres_a_remover){
    let linha_sem_palavra_quebrada = ''
    
    for(let elemento = 0; elemento< str.length-qtd_caracteres_a_remover; elemento++){
        linha_sem_palavra_quebrada+=str[elemento]
    }
    
    return linha_sem_palavra_quebrada
}

function extrair_linhas(str, posicao, qtd_caracteres){
    const ultima_posicao = posicao+qtd_caracteres
    let str_substr = ''    
    
    for(let elemento = posicao; elemento < ultima_posicao; elemento++){
        if(str[elemento] === undefined){
            break
        }
        str_substr += str[elemento]
    }

    return str_substr
}

const eh_letra = caractere => caractere !== ' ' && caractere !== undefined


main()