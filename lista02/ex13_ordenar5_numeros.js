import { input, ler_numeros_tipo2 } from './../io_utils.js';

function main() {
    const nums = ler_numeros_tipo2('5 números inteiros diferentes, separados por espaço')
    const maior_e_menor = seleciona_maior_e_menor(nums[0],nums[1],nums[2],nums[3],nums[4],)
    console.log(`Maior: ${maior_e_menor[0]}, Menor: ${maior_e_menor[1]}`)
}

//  Questão 13
function seleciona_maior_e_menor(num1,num2,num3,num4,num5) {
    let maior = num1 
    let menor = num1

    if(num2>maior) {
        maior = num2
    }
    if(num3>maior) {
        maior = num3
    }
    if(num4>maior) {
        maior = num4
    }
    if(num5>maior) {
        maior = num5
    }

    if(num2<menor) {
        menor = num2
    }
    if(num3<menor) {
        menor = num3
    }
    if(num4<menor) {
        menor = num4
    }
    if(num5<menor) {
        menor = num5
    }
    return [maior,menor]
}


main()