import {ler_numeros, input} from '../io_utils.js'
// Comentar as três próximas linhas abaixo no Beecrowd
// import fs from 'fs';
// const input = fs.readFileSync('1238_combinador_input.txt', 'utf8');

function main() {
    const lines = input.split('\n')

    // const qtd_combincoes = Number(lines[0])
    const [qtd_combincoes] = ler_numeros('qtd de combianções a serem feitas')

    let str1, str2
    let str_combinada

    for(let indice = 1; indice<=qtd_combincoes; indice++){

        // [str1, str2] = lines[indice].split(' ')
        [str1, str2] = input('Digite str1 e str2:').split(' ')
    
        str_combinada = combinar_strings(str1, str2)
    
        console.log(str_combinada)
    }

}

function combinar_strings(str1,str2) {
    const tamanho_maior_string = get_maior_string(str1,str2)
    let str_combinada = ''

    for(let contador = 0; contador<tamanho_maior_string; contador++){

        if(str1[contador] !== undefined){
            str_combinada+=str1[contador]
        }

        if(str2[contador] !== undefined){
            str_combinada+=str2[contador]
        }
    }
    return str_combinada
}

const get_maior_string = (str1, str2) => { 
    if(str1.length>str2.length){
        return str1.length
    } else{
        return str2.length
    }
}

main()