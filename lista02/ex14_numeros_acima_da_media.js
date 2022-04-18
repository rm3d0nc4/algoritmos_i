import { input, ler_numeros_tipo2 } from './../io_utils.js';

function main() {
    const input14 = ler_numeros_tipo2('5 Inteiros diferentes, separados por espaço')
    const resultado = acima_da_media(input14[0],input14[1],input14[2],input14[3],input14[4])
    console.log(`Maiores que a média: ${resultado}`)

}

// Questão 14

function acima_da_media(n1,n2,n3,n4,n5) {
    const media = (n1+n2+n3+n4+n5)/5

    let num1_acima
    let num2_acima
    let num3_acima
    let num4_acima
    let num5_acima

    if(n1>media) {
        num1_acima = n1
    }
    if(n2>media) {
        num2_acima = n2
    }
    if(n3>media) {
        num3_acima = n3
    }
    if(n4>media) {
        num4_acima = n4
    }
    if(n5>media) {
        num5_acima = n5
    }

    const result = [num1_acima,num2_acima,num3_acima,num4_acima,num5_acima]  
    return result.filter(Number)
}


main()