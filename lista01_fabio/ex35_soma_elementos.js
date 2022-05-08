import {input, print} from '../io_utils.js'
function main() {
    print('----- Soma dos elementos de um número -----')

    const numero = Number(input('Digite um número de 4 dígitos:'))

    const unidade = numero % 10
    const dezena = ((numero - unidade) % 100) /10
    const centena = ((numero - unidade - (dezena * 10)) % 1000) / 100
    const unidade_milhar = ((numero-unidade)- (dezena*10)-(centena*100)) / 1000

    const soma = unidade+dezena+centena+unidade_milhar

    print(`${numero} = ${unidade_milhar}+${centena}+${dezena}+${unidade}`)
    print(`A soma do elementos de ${numero} é: ${soma}`)
}
main()