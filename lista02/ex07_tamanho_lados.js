import { input, ler_numeros_tipo1 } from './../io_utils.js';

function main() {
    const input07 = ler_numeros_tipo1(3)
    const class_triangulo = classifica_triangulo2(input07[0],input07[1],input07[2])
    console.log(`O triângulo é: ${class_triangulo}`)
}

//Questão 07
function classifica_triangulo2(lado1,lado2,lado3){

    if(lado1 !=0 && lado2 != 0 && lado3 != 0){
        if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
            return 'Escaleno'
        } else if(lado1===lado2 && lado2 === lado3) {
            return 'Equilátero'
        } else {
            return 'Isósceles'
        }
    } else {
        return 'Não é um triângulo'
    }
    
}

main()