// import {ler_numeros, input} from '../io_utils.js'
// Comentar as três próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('1235_dentro_pra_fora_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

function main() {
    const lines = input.split('\n');
    const qtd_lines = Number(lines[0]);
    // const qtd_lines = 1

    let txt
    let txt1, txt2
    let txt2_invertido
    let txt1_invertido
    let txt_invertido


    for(let line = 1; line<=qtd_lines; line++){
        txt = lines[line];
        [txt1, txt2] = didivir_txt(txt);
        // console.log(txt1);
        // console.log(txt2);
        txt2_invertido = inverter_txt(txt2);
        txt1_invertido = inverter_txt(txt1);
        txt_invertido = txt1_invertido+txt2_invertido;

        
        console.log(txt_invertido);
    
    }

}

function didivir_txt(txt) {
    const tamanho_txts= (txt.length)/2;
    let txt1 = ''
    let txt2 = ''

    for(let item = 0; item<tamanho_txts; item++){
        txt1+=txt[item];
    }

    for(let index = tamanho_txts; index<txt.length; index++){
        txt2+=txt[index];
    }
    return [txt1, txt2];
}

function inverter_txt(txt) {
    let txt_invertido = ''

    for(let item = txt.length-1; item>=0; item--) {
        txt_invertido+=txt[item]
    }
    return txt_invertido
}



main()