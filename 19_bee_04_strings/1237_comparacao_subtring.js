import { input } from "../io_utils.js";


function main() {
    const string1 = input('Str1: ')
    const string2 = input('Str2: ')
    let tam_maior = 0
    let texto
    let k, l

    for(let i = 0; i < string1.length; i++) {
        
        for(let j= 0; j < string2.length; j++) {
            
            texto = ''
            if(string1[i] === string2[j]) {
                k = i, l = j
                
                while(string1[k] === string2[l]) {
                    texto+= string1[k]
                    k++, l++
                }
            }

            if(texto.length > tam_maior) {
                tam_maior = texto.length
            }
        }
    }

    console.log(`Tam maior: ${tam_maior}`)
}

main()