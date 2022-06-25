import {ler_numeros, input} from '../io_utils.js'

function main() {
    let qtd_linhas = Number(input('quantidade de linhas: '))

    while(qtd_linhas !== 0){

        let tam_maior_texto = 0
        let textos = ''
        let texto
        let qtd_espacos
        let texto_alinhado

        for(let linha = 0; linha<qtd_linhas; linha++) {
            texto = input(`Texto ${linha+1}: `)

            if(linha === 0 ){
                textos += texto
            } else {
                textos += ` ${texto}`
            }

            if(eh_maior(texto.length, tam_maior_texto)) {
                tam_maior_texto = texto.length
            }
        }
        const palavras = textos.split(' ')

        for(let palavra of palavras) {
            qtd_espacos = tam_maior_texto-palavra.length
            texto_alinhado = alinhar_texto_a_direita(palavra, qtd_espacos)
        
            console.log(texto_alinhado)
            
        }

        qtd_linhas = Number(input('quantidade de linhas: '))
    }

}

function alinhar_texto_a_direita(texto, qtd_espaco){
    let espacos = ''
    let texto_alinhado

    for (let index = 0; index < qtd_espaco; index++) {
        espacos+=' '
    }
    texto_alinhado = espacos+texto

    return texto_alinhado

}

const eh_maior = (n1, n2) => n1>n2



main()