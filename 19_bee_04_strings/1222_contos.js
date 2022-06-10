import {ler_numeros, input} from '../io_utils.js'
// Comentar duas próximas linhas abaixo no Beecrowd
// import fs from 'fs';
// const input = fs.readFileSync('1166_led_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

function main() {
    
    const conto = input('Conto: ')
    const [num_palavras_conto, num_max_linhas, max_caractere_por_linha ] = ler_numeros('número de palavras, número máximo de linhas por página e o número máximo de caracteres por linha')
    const qtd_linhas = get_qtd_linhas(conto, max_caractere_por_linha)
    const qtd_paginas = get_qtd_paginas(qtd_linhas,num_max_linhas)

    console.log(`Quantidade de linhas: ${qtd_linhas}`)
    console.log(`Quantidade de páginas: ${qtd_paginas}`)
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

function get_qtd_linhas(conto, max_caractere_por_linha){
    let qtd_linhas = 0
    let linha
    let ultimo_elemento_da_linha
    let proximo_elemento_do_conto
    let pedaco_a_ser_removido
    let nova_linha

    for(let elemento = 0; elemento<conto.length; elemento+=max_caractere_por_linha){
        if(conto[elemento] === ' '){
            elemento++
        }

        linha = extrair_linhas(conto, elemento, max_caractere_por_linha)
        ultimo_elemento_da_linha = linha[linha.length-1]
        proximo_elemento_do_conto =  conto[elemento+max_caractere_por_linha]
        
        if(eh_letra(ultimo_elemento_da_linha) && eh_letra(proximo_elemento_do_conto)){

            pedaco_a_ser_removido = linha.split(' ')
            pedaco_a_ser_removido= pedaco_a_ser_removido[pedaco_a_ser_removido.length-1]

            nova_linha = tirar_palavra_quebrada(linha, pedaco_a_ser_removido.length)
            elemento-=pedaco_a_ser_removido.length
        }
            qtd_linhas++
    }
    return qtd_linhas
}

function tirar_palavra_quebrada(string, qtd_caracteres_a_remover){
    let linha_sem_palavra_quebrada = ''
    
    for(let elemento = 0; elemento< string.length-qtd_caracteres_a_remover; elemento++){
        linha_sem_palavra_quebrada+=string[elemento]
    }
    return linha_sem_palavra_quebrada
}

function extrair_linhas(string, posicao, qtd_caracteres){
    const ultima_posicao = posicao+qtd_caracteres
    let substring = ''    
    
    for(let elemento = posicao; elemento < ultima_posicao; elemento++){
        if(string[elemento] === undefined){
            break
        }
        substring += string[elemento]
    }
    return substring
}

const eh_letra = caractere => caractere !== ' ' && caractere !== undefined

main()