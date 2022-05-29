import { input } from "../io_utils.js";

function main() {
    const turno = input('Em qual turno estamos (M - Matutino, V - Vespertino, N - Noturno)? >').toLocaleUpperCase()

    const saudacao = get_saudacao(turno)
    console.log(saudacao)
}


function get_saudacao(turno) {
    if( turno === 'M') {
        return 'Bom dia seu lindo!'
    } else if (turno === 'V') {
        return 'Boa tarde xará!'
    } else if(turno === 'N') {
        return 'Boa noite gente boa!'
    }
    return 'Valor inválido'
}

main()