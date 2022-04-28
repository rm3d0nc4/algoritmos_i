import { input} from './../io_utils.js';

function main() {
    const variavel1 = Number(input('Digite o primeiro valor:'))
    const variavel2 = Number(input('Digite o segundo valor:'))
    const operacao = fazer_operacao(variavel1,variavel2)
    console.log(operacao)
}

// Questão 17

function fazer_operacao1(numero1,numero2) {
    const resto = numero1%numero2
    if(resto===1) {

        return numero1+numero2+resto

    } else if(resto===2) {

        let n1 = ''
        let n2= ''

        if(numero1%2===0) {
            n1 = 'Par'
        } else {
            n1 = 'Impar'
        }

        if(numero2%2===0) {
            n2 = 'Par'
        } else {
            n2 = 'Impar'
        }

        return `1º Numero: ${n1}; 2º Numero: ${n2}`

    } else if(resto===3) {

        return (numero1+numero2)*numero1

    } else if(resto===4){

        if(numero2!=0){
            return (numero1+numero2)/numero2
        } else {
            return `${numero1**2},${numero2**2}`
        }

    } else {
        return `${numero1**2},${numero2**2}`
    }

}


main()