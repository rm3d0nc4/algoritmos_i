import {ler_numeros } from './../io_utils.js';

function main() {
    const input20 = ler_numeros('o valor de um ângulo (entre 0 e 360)')

    const result = get_quadrante(input20[0])

    console.log(result)

}

function get_quadrante(angulo) {


    if (angulo<0 || angulo>360) {
        return 'ERRO'
    }

    if(angulo<=90) {
        return 'Quadrante 1'
    } else if(angulo<=180) {
        return 'Quadrante 2'
    } else if(angulo<=230) {
        return 'Quadrante 3'
    } else if(angulo>=230) {
        return 'Quadrante 4'
    }

}

main()