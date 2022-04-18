import { input, ler_numeros_tipo1 } from './../io_utils.js';

function main() {
    const input05 = ler_numeros_tipo1(3)
    const orderna_nums = ordena3_numeros(input05[0],input05[1], input05[2])
    console.log(`Ordem: ${orderna_nums[0]}, ${orderna_nums[1]}, ${orderna_nums[2]}`)
}

//Questão 05
function ordena3_numeros(n1,n2,n3) {
    let primeiro
    let segundo
    let terceiro

    if (n1>n2 && n1>n3){
        
        primeiro = n1

        if(n2>n3) {
            segundo = n2
            terceiro = n3
        } else {
            segundo = n3
            terceiro =n2
        }
    } else if(n2>n1 && n2>n3){
        primeiro = n2

        if(n1>n3) {
            segundo = n1
            terceiro = n3
        } else {
            segundo = n3
            terceiro =n1
        }
    } else if(n3>n1 && n3>n2){
        primeiro = n3

        if(n2>n1) {
            segundo = n2
            terceiro = n1
        } else {
            segundo = n1
            terceiro =n2
        }
    } else if(n1===n2 && n2===n3){
        primeiro = n1
        segundo = n1
        terceiro = n1
    }

    return [primeiro,segundo,terceiro]
}

main()