import {ler_numeros, input} from '../io_utils.js'

function main() {

    const [hora, minuto, segundo] = input('Digite um horário (hh:mm:ss) : ').split(':').map(Number)

    const hora_por_extenso = get_numero_por_extenso(hora, minuto, segundo)
    console.log(hora_por_extenso)
}

function get_numero_por_extenso(hora, minuto, segundo) {

    return `${hora} hora(s), ${minuto} minuto(s) e ${segundo} segundo(s)`
}

main()