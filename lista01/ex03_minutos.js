import {input, print} from '../io_utils.js'
function main() {
    const minutos_total = Number(input('Digite os minutos:'))
    const minutos = minutos_total%60
    const horas = (minutos_total - minutos)/60

    print(`${minutos_total} minuto(s) equivalem a exatamente ${horas} hora(s) e ${minutos} minutos`)
}
main()