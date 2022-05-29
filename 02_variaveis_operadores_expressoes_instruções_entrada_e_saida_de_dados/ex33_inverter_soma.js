import {input, print} from '../io_utils.js'
function main() {
    print('----- Somando um número com o seu inverso -----')

    const numero = Number(input('Digite um número de 3 dígitos:'))

    const n_unidade = numero % 10
    const n_dezena = ((numero-n_unidade) %100) /10
    const n_centena = ((numero-n_unidade-(n_dezena*10)) /100)

    const numero_inverso = ((n_unidade * 100)+(n_dezena*10)+ (n_centena*1))

    print(`A soma entre ${numero} e ${numero_inverso} é igual a: ${numero+numero_inverso}}`)

}
main()