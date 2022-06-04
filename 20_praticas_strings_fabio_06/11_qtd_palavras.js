import {ler_numeros, input} from '../io_utils.js'

function main() {

    const texto = input('Texto: ')
    const qtd_palavras = get_qtd_palavras(texto)
    // const qtd_palavras = texto.split(' ').length

    console.log(`Quantidade de palavras: ${qtd_palavras}`)

}


// Função não está totalmente funcional: funcionará apenas se
// o texto com uma palavra e houver apenas um espaço entre
// cada palavra
// (ex em que a função irá funcionar: "bom dia", "eu estou com fome")
// (ex em que a função não irá funcionar: " olá mundo", "o salário  tá na conta")

function get_qtd_palavras(texto){
    let qtd_palavras = 0
    let palavra = ''

    for(let caractere = 0; caractere<texto.length; caractere++){
        if(texto[caractere] !== ' '){
            palavra+=texto[caractere]
            if(texto[caractere+1] === undefined){
                qtd_palavras++
            }
        } else {
                qtd_palavras++
                palavra = ''
            
        }
        console.log(palavra)
    }

    return qtd_palavras
}

main()