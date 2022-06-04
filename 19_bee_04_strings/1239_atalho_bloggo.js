
// Presentation error (100%)
// Presentation error (100%)
// Presentation error (100%)
// Presentation error (100%)
// Presentation error (100%)
// Presentation error (100%)
// Presentation error (100%)
// Presentation error (100%)
// Presentation error (100%)
// Presentation error (100%)
// Presentation error (100%)





// import {ler_numeros, input} from '../io_utils.js'
// Comentar as três próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('1239_atalho_bloggo_input', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

function main() {
    const lines = input.split('\n')

    for(let line of lines){

        const html = line
        // const html = input('texto com atalho:')
        
        const html_italico = add_tag_italico(html)
        const html_italico_e_negrito = add_tag_negrito(html_italico)
    
        console.log(html_italico_e_negrito)
    }
}

function add_tag_italico(html){
    let html_com_tag_italico = ''
    let count_underlines = 0

    for(let elemento = 0; elemento<html.length; elemento++){
        if(eh_underline(html[elemento])){

            if(eh_par(count_underlines)){
                html_com_tag_italico+='<i>'

            } else{
                html_com_tag_italico+='</i>'
            }

            count_underlines++
        } else{
            html_com_tag_italico+=html[elemento]
        }
    }

    return html_com_tag_italico

}

function add_tag_negrito(html){
    let html_com_tag_negrito = ''
    let count_asteriscos = 0

    for(let elemento = 0; elemento<html.length; elemento++){
        if(eh_asterico(html[elemento])){

            if(eh_par(count_asteriscos)){
                html_com_tag_negrito+='<b>'
            } else{
                html_com_tag_negrito+='</b>'
            }
            count_asteriscos++
        } else{
            html_com_tag_negrito+=html[elemento]
        }
    }

    return html_com_tag_negrito

}

const eh_underline = caractere => caractere==='_'
const eh_asterico = caractere => caractere==='*'
const eh_par = n => n % 2 === 0

main()