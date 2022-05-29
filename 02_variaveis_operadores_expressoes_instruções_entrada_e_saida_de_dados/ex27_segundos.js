import {input, print} from '../io_utils.js'
function main() {
    print('----- Distribuindo segundos -----')

    const segundos_bruto = Number(input('Quantos segundos deseja distribuir:'))
    
    const segundos = segundos_bruto%60
    const minutos = ((segundos_bruto-segundos) %3600)/60
    const horas = ((segundos_bruto-(minutos*60)- segundos)/60)/60

    print(`${segundos_bruto} corresponde a ${horas} horas, ${minutos} minutos e ${segundos} segundos`)
    

}
main()