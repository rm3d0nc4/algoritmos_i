import {input, print} from '../io_utils.js'
function main() {
    print('----- Vamos decompor um número -----')
    const valor = Number(input('Digite um valor que cotenha 3 dígitos:'))
    const unidades = valor%10
    const dezenas = ((valor-unidades)%100)
    const centenas = (valor-unidades-dezenas)

    print(`${valor} equivale a ${unidades} unidades, ${dezenas/10} dezenas e ${centenas/100} centenas`)


}
main()