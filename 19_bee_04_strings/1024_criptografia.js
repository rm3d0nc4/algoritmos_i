import { input } from "../io_utils.js"


function main() {
    const mensagem = input('Mensagem: ')

    const passo1 = primeira_passada(mensagem)
    const passo2 = segunda_passada(passo1)
    const passo3 = terceira_passada(passo2)
    console.log(passo3)
        
}



function primeira_passada(texto){
    let retorno = ''
    for(let caractere of texto){

        if(eh_letra_maiuscula(caractere) || eh_letra_minuscula(caractere)){
            let char = caractere.charCodeAt(0)
            char+=3

            const char_criptografado = String.fromCharCode(char)
            retorno+=char_criptografado
        } else {
            retorno+=caractere
        }
    }
    
    return retorno
}

function segunda_passada(texto) {
    let retorno = ''

    for(let caractere = texto.length-1; caractere>=0; caractere--){
        retorno+=texto[caractere]
    }
    return retorno
}

function terceira_passada(texto){
    let retorno = ''
    const tamanho = Math.trunc(texto.length/2)

    for(let caractere = 0; caractere<=texto.length-1; caractere++){

        if (caractere>=tamanho){

            let char = texto[caractere].charCodeAt(0)
            char--

            const char_criptografado = String.fromCharCode(char)
            retorno+=char_criptografado

        } else {
            retorno+=texto[caractere]
        }
    }

    return retorno

}

const eh_letra_maiuscula = n => n.charCodeAt(0) >=65 && n.charCodeAt(0)<=90 
const eh_letra_minuscula = n => n.charCodeAt(0)>=97 && n.charCodeAt(0)<=122 


main()