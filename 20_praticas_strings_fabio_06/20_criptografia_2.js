import {ler_numeros, input} from '../io_utils.js'

function main() {

    const frase = input('Frase: ')
    
    const [frase_criptografada, vogais_e_posicoes] = criptografar(frase)
    const frase_descriptografa = descriptografar(frase_criptografada, vogais_e_posicoes)

    console.log(frase_criptografada)
    console.log(vogais_e_posicoes)
    console.log(frase_descriptografa)
}

function criptografar(str){
    let str_criptografada = ''
    let vogais_e_posicoes = ''

    for(let elemento = 0; elemento < str.length; elemento++){
        if(!eh_vogal(str[elemento])){
            str_criptografada += str[elemento]
        } else {
            vogais_e_posicoes += `${str[elemento]}${elemento}`
        }
    }
    
    return [str_criptografada, vogais_e_posicoes]
}

function descriptografar(str, vogais_e_posicoes){
    const lista_vogais_e_posicoes = vogais_e_posicoes.split('')
    let str_descriptografada = str
    let posicao = 1
    let str_fatiada

    for(let elemento = 0; elemento<=str_descriptografada.length; elemento++){
        

        if(elemento == lista_vogais_e_posicoes[Number(posicao)]){
            
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

function fatiar_string(str, posicao){
    let nova_string = ''

    for(let elemento = 0 ; elemento<posicao; elemento++){
        nova_string+=str[elemento]
    }
    
    nova_string+='##'
    
    for(let elemento = posicao ; elemento<str.length; elemento++){
        nova_string+=str[elemento]
    }

    return nova_string.split('##')
}

main()