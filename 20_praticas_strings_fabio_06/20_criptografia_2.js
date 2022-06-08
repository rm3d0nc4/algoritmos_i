import {ler_numeros, input} from '../io_utils.js'

function main() {

    const frase = input('Frase: ')
    
    const [frase_criptografada, vogais] = criptografar(frase)
    const frase_descriptografa = descriptografar(frase_criptografada, vogais)


    console.log('Frase criptografada: ',frase_criptografada.split('*').join(''))
    console.log('Frase descriptografa: ',frase_descriptografa)
}

function criptografar(str){
    let str_criptografada = ''
    let vogais = ''

    for(let elemento = 0; elemento < str.length; elemento++){
        if(!eh_vogal(str[elemento])){
            str_criptografada += str[elemento]
        } else {
            vogais += str[elemento]
            str_criptografada += '*'
        }
    }
    
    return [str_criptografada, vogais]
}

function descriptografar(string_criptografada, vogais){
    let str_descriptografada = ''
    let posicao_vogal = 0

    for(let elemento = 0; elemento < string_criptografada.length; elemento++){

        if(string_criptografada[elemento] !== '*'){
            str_descriptografada += string_criptografada[elemento]
        } else {
            str_descriptografada += vogais[posicao_vogal]
            posicao_vogal++
        }

    }

    return str_descriptografada
}

function eh_vogal(letra){
    const vogais = ['a','e','i','o','u']

    for(let vogal of vogais){
        if(letra === vogal || letra === vogal.toUpperCase()){
            return true
        }
    }
    return false
}

main()