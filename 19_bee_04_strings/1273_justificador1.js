import {ler_numeros, input} from '../io_utils.js'

function main() {
    let qtd_linhas = -1

    while(qtd_linhas !== 0){

        [qtd_linhas] = ler_numeros('quantidade de linhas')
        let maior_texto = 0
        let texto
        let qtd_espacos
        let texto_alinhado

        for(let linha = 0; linha<qtd_linhas; linha++){
            texto = input(`Texto ${linha+1}: `)

            if(texto.length>maior_texto){
                maior_texto = texto.length
            }
        }

        for (let linha = 0; linha < qtd_linhas; linha++) {

            texto = input(`Texto ${linha+1} (novamente): `)
            qtd_espacos = maior_texto-texto.length
            texto_alinhado = alinhar_texto(texto, qtd_espacos)

            console.log(texto_alinhado)
            
        }
        console.log('')

        qtd_linhas+=1
    }

}

function alinhar_texto(texto, qtd_espaco){
    let espacos = ''
    let texto_alinhado

    for (let index = 0; index < qtd_espaco; index++) {
        espacos+=' '
    }
    texto_alinhado = espacos+texto

    return texto_alinhado

}



main()