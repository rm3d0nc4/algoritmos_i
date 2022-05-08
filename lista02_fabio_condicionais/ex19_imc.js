import {ler_numeros } from './../io_utils.js';

function main() {
    const input19 = ler_numeros('a sua altura (m) e peso (kg), separados por esṕaço')
    const resultado = calcula_imc(input19[0],input19[1])

    console.log(resultado)

}

function calcula_imc(altura, peso) {

    if(altura===0 || peso===0) {
        return 'ERRO'
    }

    const imc = peso/(altura**2)
    console.log(imc)

    if(imc<25) {
        return 'Normal'
    } else if(imc>=25 && imc<=30) {
        return 'Obeso'
    } else if (imc>30){
        return 'Obeso Mórbido'
    } else {
        'ERRO'
    }

}

main()