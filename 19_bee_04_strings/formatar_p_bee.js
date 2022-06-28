import fs from 'fs';
const input = fs.readFileSync('1237_comparacao_subtring_input', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n')

function main() {
    let contador = 0
    let string1, string2
    let tam_maior, k, l
    let texto

    while(contador < lines.length){  
        if(lines[contador] === '') {
            break
        } 

        string1 = lines[contador]
        contador++
        string2 = lines[contador]
        tam_maior = 0

        for(let i = 0; i < string1.length; i++) {
            
            for(let j= 0; j < string2.length; j++) {
                
                texto = ''
                if(string1[i] === string2[j]) {
                    k = i, l = j
                    
                    while(string1[k] === string2[l] && string1[k] !== undefined) {
                        texto+= string1[k]
                        k++, l++
                    }
                }

                if(texto.length > tam_maior) {
                    tam_maior = texto.length
                }
            }
        }

        console.log(tam_maior)
        contador++
    }
}

main()