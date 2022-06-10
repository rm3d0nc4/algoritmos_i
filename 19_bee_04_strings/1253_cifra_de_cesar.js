import {ler_numeros, input} from '../io_utils.js'

function main() {

    const cifra_criptografada = input('Cifra criptografa: ')
    const deslocamento = Number(input('Quantidade de posições a voltar: '))
    const cifra = descriptografar_cifra(cifra_criptografada, deslocamento)

    console.log(cifra)
}

function descriptografar_cifra(cifra, deslocamento){
    let cifra_descriptografada = ''
    let elementro_descriptografado

    for(let elemento = 0; elemento< cifra.length; elemento++){
        elementro_descriptografado = descriptografar_elemento(cifra[elemento], deslocamento)

        cifra_descriptografada += elementro_descriptografado
    }

    return cifra_descriptografada
}

function descriptografar_elemento(elemento, deslocamento){
    const char_code_elemento = elemento.charCodeAt(0)
    let elementro_descriptografado
    let novo_deslocamento

    if(char_code_elemento-deslocamento<=64){
        novo_deslocamento = deslocamento - (char_code_elemento-64)
        elementro_descriptografado = String.fromCharCode(90-novo_deslocamento)
        
        
    } else {
        elementro_descriptografado = String.fromCharCode(char_code_elemento-deslocamento)
    }

    return elementro_descriptografado
}

main()