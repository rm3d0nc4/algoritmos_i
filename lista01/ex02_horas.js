import {input, print} from '../io_utils.js'
function main() {
    print('Vamos encontrar os minutos!')
    const hora = Number(input('Digite a hora:'))
    const minutos = Number(input('Digite os minutos:'))
    const minutos_totais = (hora*60)+ minutos

    print(`${hora} hora(s) e ${minutos} munito(s) equivalem a exatamente ${minutos_totais} minuto(s)`)
}
main()