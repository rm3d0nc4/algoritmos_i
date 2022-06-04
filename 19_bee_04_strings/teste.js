// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
import fs, { utimes } from 'fs';
const input = fs.readFileSync('1273_justificador1_input', 'utf8');
const  lines = input.split('\n');


// import {ler_numeros, input} from '../io_utils.js'

function main() {
    let qtd_linhas = Number(lines[0])
    let primeira_linha = 1
    let ultima_linha= qtd_linhas

    while(qtd_linhas !== 0){
        let maior_texto = 0
        let texto
        let qtd_espacos
        let texto_alinhado
        
        for(let linha = primeira_linha; linha<=ultima_linha; linha++){
            texto = lines[linha]

            if(texto.length>maior_texto){
                maior_texto = texto.length
            }
            console.log(`Texto: ${texto}`)
        }
        
        // for (let linha = primeira_linha; linha < qtd_linhas+1; linha++) {
            
        //     texto = lines[linha]
        //     qtd_espacos = maior_texto-texto.length
        //     texto_alinhado = alinhar_texto(texto, qtd_espacos)

        //     console.log(texto_alinhado)
            
        // }
        console.log('')
        
        console.log(lines[ultima_linha])
        
        qtd_linhas = Number(lines[ultima_linha+1])
        primeira_linha += qtd_linhas
        ultima_linha +=qtd_linhas
        
    }
    
}

function alinhar_texto(texto, qtd_espaco){
    let espacos = ''
    let texto_alinhado

    for (let index = 0; index < qtd_espaco; index++) {
        espacos+=' '
    }
    texto_alinhado = espacos+texto

    return texto_alinhado

}



main()