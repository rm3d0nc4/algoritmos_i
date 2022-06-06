import { contem } from "./io_utils.js"


function main() {
    const a = 'romero'
    const b = fatiar_string(a, 3)
    console.log(b)    
    
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

// function retirar_espacos_indesejados(texto){

//     let text_sem_espacos_indesejados = ''

//     for(let elemento = 0; elemento<texto.length; elemento++){
//         if(texto[elemento] !==' '){

//             if(texto[elemento+1]!==' '){
//                 text_sem_espacos_indesejados+=texto[elemento]

//             } else {
//                 text_sem_espacos_indesejados += (texto[elemento] + ' ')

//             }
//         }
//     }
//     return text_sem_espacos_indesejados
// }


// função de ordenar caracteres
// let letra
//     let letra_atual
//     let txt
//     let string = 'SBA'
//     let final = ''

//     for(let index = 0; index<string.length; index++){
//         letra = string[index]

//         if(index===0){
//             final+=letra

//         } else{
//             txt = ''

//             for(let i= 0; i<final.length; i++){
//                 letra_atual = final[i]

//                 if(letra<letra_atual){

//                 }
//             }
        

//         }

//     }

//     console.log(final)