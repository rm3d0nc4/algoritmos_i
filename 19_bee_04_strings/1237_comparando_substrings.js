import fs from 'fs';

const input = fs.readFileSync('1237_comparando_substrings_input', 'utf8');
const lines = input.split('\n');

function main() {
    let line = 0
    
    while(line<lines.length){
        const str1 = lines[line]
        line++
        const str2 = lines[line]
        
        const tamanho_substring = get_maior_substring(str1,str2)
        console.log(tamanho_substring)
        
        line++
    }

}

function get_maior_substring(str1, str2){
    const tamanho = str1.length
    let tamanho_maior_substring = 0
    let indice_proxima_letra = 0
    let maior_substring
    
    for(let item = 0; item < tamanho; item++){

        if(contem(str1[item], str2)){

            indice_proxima_letra = item + 1
            maior_substring=str1[item]

            while (str2.indexOf(maior_substring + str1[indice_proxima_letra]) !== -1){
                
                maior_substring += str1[indice_proxima_letra]
                indice_proxima_letra++
            }
            if(maior_substring.length > tamanho_maior_substring){
                tamanho_maior_substring = maior_substring.length
            }

        }
    }

    return tamanho_maior_substring
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