import {ler_numeros, input} from '../io_utils.js'

// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta
// incompleta

function main() {

    const str1 = input('primeira string: ')
    const str2 = input('segunda string: ')

    const substrings = gerar_substrings(str1,str2)
}

function gerar_substrings(str1, str2){
    const tamanho = str1.length-1
    let maior_substring = 0
    let current_substring
    current_substring = ''
    
    for(let item = 0; item<=tamanho; item++){
        let prox_item = str1[item]+str1[item+1]
        if(contem(str1[item], str2) && contem(prox_item,str2)){

            current_substring+= str1[item]
            console.log(current_substring)
        }
    }
}

function contem(element, elements_list){
    for(let element_item of elements_list) {
        if (element === element_item){
            return true
        }
    }
    return false
}

main()