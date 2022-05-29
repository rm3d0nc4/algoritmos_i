import {input, print} from '../io_utils.js'
function main() {
    print('----- Vamos calcular o comprimento de uma circunferência -----')
    const raio = Number(input('Digite o valor do raio (em cm):'))

    const comprimento = 2 * Math.PI * raio

    print(`O comprimento da circunferência é: ${comprimento.toFixed(2)} cm`)

}
main()