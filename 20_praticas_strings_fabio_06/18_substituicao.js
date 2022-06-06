import {ler_numeros, input} from '../io_utils.js'

function main() {

    const texto = input('Texto: ')
    const sub_cadeia = input('Parte do texto a ser subtituida: ')
    const nova_cadeia = input('Substituir por: ')

    const novo_texto = substituir(texto, sub_cadeia, nova_cadeia)

    console.log(`Novo texto: ${novo_texto}`)
}

function substituir(str, sub_str, nova_sub_str){
    let nova_str = ''
    let fatia

    for(let elemento = 0; elemento < str.length; elemento++){
        
        fatia = extrair_caracteres(str, elemento, sub_str.length)

        if(fatia != sub_str){
            nova_str+= str[elemento]
        } else{
            nova_str+= nova_sub_str
            elemento+= sub_str.length-1
        }

    }

    return nova_str
}


function extrair_caracteres(str, posicao, qtd_caracteres){
    const ultima_posicao = posicao+qtd_caracteres
    let str_substr = ''    

    for(let elemento = posicao; elemento < ultima_posicao; elemento++){
        str_substr += str[elemento]
    }

    return str_substr
}

main()