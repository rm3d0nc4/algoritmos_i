import { input, ler_numeros_tipo2 } from './../io_utils.js';

// Não concluída!!!

function main() {

    const [a,b,c] = ler_numeros_tipo2('o valor de 3 coeficiente a,b e c (separados por espaço)')

    if(valida_coeficiente_a(a)) {
        const result = calcula_equacao(a,b,c)
        console.log(result)
    } else {
        console.log('Coeficiente "a" inválido!')
    }
}

const valida_coeficiente_a = (a) => a!=0

function calcula_equacao(a,b,c) {

    const delta = b**2-4*a*c
    console.log(delta)

    const x1 = (-b+(Math.sqrt(delta)))/2*a
    console.log(x1)
    const x2 = (-b-(Math.sqrt(delta)))/2*a
    return `x1=${x1},x2=${x2}`

}

main()
