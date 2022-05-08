import {input, print} from '../io_utils.js'
function main() {
    const n = Number(input('Digite um número que cotenha três dígitos:'))

    const unidade = n%10
    const dezena = (n-unidade)%100
    const centena = (n-unidade-dezena)

    const n_invertido = `${unidade/1}${dezena/10}${centena/100}`

    print(`O inverso de ${n} é ${n_invertido}`)
}
main()