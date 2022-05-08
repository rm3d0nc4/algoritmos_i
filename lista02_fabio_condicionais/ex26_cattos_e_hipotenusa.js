import {ler_numeros } from './../io_utils.js';

// Não entendi

function main() {
    const lados_do_triangulo = ler_numeros('o valor dos três lados de um triângulo (entre espaços)')
    
    const [cateto1,cateto2,hipotenusa] = extrair_catetos_e_hipotenusa(lados_do_triangulo[0], lados_do_triangulo[1],lados_do_triangulo[2])

    const validacao = (cateto1**2+cateto2**2)===hipotenusa**2
    
    if(validacao) {
        console.log(`Cateto 1: ${cateto1}; Cateto 2: ${cateto2}; Hipotenusa: ${hipotenusa}`)

    } else {
        console.log('ERRO! verifique os valores inseridos!')
    }

    

}


function  extrair_catetos_e_hipotenusa(lado1,lado2,lado3){
    let hipotenusa = lado1;
    let cateto1 = lado2;
    let cateto2 = lado3;

    if(lado2>hipotenusa) {
        cateto1 = hipotenusa
        hipotenusa = lado2
    }
    if(lado3>hipotenusa) {
        cateto2 = hipotenusa
        hipotenusa = lado3
    }

    return [cateto1,cateto2,hipotenusa]



}

main()