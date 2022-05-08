import { ler_numeros } from './../io_utils.js';

function main() {

    const [a,b,c] = ler_numeros('o valor de 3 coeficiente a,b e c (separados por espaço)')


    const result = calcula_equacao(a,b,c)
        console.log(result)
}

function calcula_equacao(a,b,c) {

    if (a!=0) {
        const delta = (b**2)-(4*a*c)
        if(delta>=0) {
            const x1 = ((b*-1)+(Math.sqrt(delta)))/2*a
            const x2 = ((b*-1)-(Math.sqrt(delta)))/2*a
            return `x1=${x1},x2=${x2}`
        } else {
            return "Delta menor que zero (não possui raízes reais)!"
        }
    } else {
        return "Coeficiente 'a' igual a zero!"
    }

}

main()
