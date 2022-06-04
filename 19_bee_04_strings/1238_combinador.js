
// Wrong answer (15%)
// Wrong answer (15%)
// Wrong answer (15%)
// Wrong answer (15%)
// Wrong answer (15%)
// Wrong answer (15%)
// Wrong answer (15%)
// Wrong answer (15%)
// Wrong answer (15%)
// Wrong answer (15%)



// import {ler_numeros, input} from '../io_utils.js'
// Comentar as três próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('1238_combinador_input', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

function main() {
    const lines = input.split('\n')

    const qtd_combincoes = Number(lines[0])
    // const [qtd_combincoes] = ler_numeros('qtd de combianções a serem feitas')

    let str1, str2
    let str_combinada

    for(let indice = 1; indice<=qtd_combincoes; indice++){

        [str1, str2] = lines[indice].split(' ')
        // [str1, str2] = input('Digite str1 e str2:').split(' ')
    
        str_combinada = combinar_strs(str1, str2)
    
        console.log(str_combinada)
    }

}

function combinar_strs(str1,str2) {
    const tam_maior_str = get_maior_str(str1,str2)
    let str_combinada = ''

    for(let contador = 0; contador<tam_maior_str; contador++){

        if(str1[contador] !== undefined){
            str_combinada+=str1[contador]
        }

        if(str2[contador] !== undefined){
            str_combinada+=str2[contador]
        }

    }
    return str_combinada
}

const get_maior_str = (str1, str2) => { 
    if(str1>str2){
        return str1.length
    } else{
        return str2.length
    }
}

main()