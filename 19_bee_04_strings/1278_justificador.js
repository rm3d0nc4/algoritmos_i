import {ler_numeros, input, contar_elemento} from '../io_utils.js'

function main() {

    let linha
    const linhas = ler_numeros('a qtd de linhas')

    // for(let i=1; i<=linhas; i++){
        // linha = input('linha:')
        linha = '      JULIET WERE  '
        const linha_formatada = formatar(linha)
        console.log(linha_formatada)

    // }
}

function formatar(texto){
    let espacos = ''
    let string_formatada = ''

    const qtd_espacos_total_do_texto = contar_elemento(' ', texto)
    const texto_sem_espacos_indesejados = retirar_espacos_indesejados(texto)
    const qtd_espacos_desejados = contar_elemento(' ', texto_sem_espacos_indesejados)
    console.log(qtd_espacos_desejados)
    const qtd_espacos_necessarios = qtd_espacos_total_do_texto-qtd_espacos_desejados

    for(let espaco = 0; espaco<qtd_espacos_necessarios; espaco++){
        espacos+= ' '
    }

    string_formatada = espacos+texto_sem_espacos_indesejados
    return string_formatada
}

function retirar_espacos_indesejados(texto){
    let text_sem_espacos_indesejados = ''

    for(let elemento = 0; elemento<texto.length; elemento++){
        if(texto[elemento] !==' '){

            if(texto[elemento+1]!==' '){
                text_sem_espacos_indesejados+=texto[elemento]

            } else {
                text_sem_espacos_indesejados += (texto[elemento] + ' ')
            }
        }
    }
    return text_sem_espacos_indesejados
}

main()