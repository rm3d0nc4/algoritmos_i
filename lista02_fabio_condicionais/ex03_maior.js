import { ler_numeros } from './../io_utils.js';

function main() {
    const input03 = ler_numeros('3 valores, separados por espaço')
    const maior_numero = compara_3numeros(input03[0], input03[1], input03[2])
    console.log(`Maior: ${maior_numero}`)
}


//Questão 03
function compara_3numeros(n1,n2,n3) {
    let maior = n1

    if (n2>maior){
        maior = n2
    }
    if(n3>maior){
        maior = n3
    }
    
    return maior
}

main()