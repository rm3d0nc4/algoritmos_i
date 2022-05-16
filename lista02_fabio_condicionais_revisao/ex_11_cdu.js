import { input } from "../io_utils.js";

function main() {

    const numero = input('Digite um número inteiro menor que 1000: ').split('').map(Number)
    let msg
    
    if(numero.length === 3) {
        msg = get_cdu(numero)
    } else if(numero.length === 2) {
        msg = get_du(numero)
    } else if(numero.length === 1) {
        msg = get_u(numero)
    }

    console.log(msg)
}


function get_cdu(n){
    const c = is_plural(n[0], 'centena')
    const d = is_plural(n[1], 'dezena')
    const u = is_plural(n[2], 'unidade')

    const msg_retorno = `${n[0]} ${c}, ${n[1]} ${d} e ${n[2]} ${u}`

    return msg_retorno

}
function get_du(n){
    const d = is_plural(n[1], 'dezena')
    const u = is_plural(n[2], 'unidade')

    const msg_retorno = `${n[1]} ${d} e ${n[2]} ${u}`

    return msg_retorno
}
function get_u(n){
    const u = is_plural(n[2], 'unidade')

    const msg_retorno = `${n[2]} ${u}`

    return msg_retorno
}

function is_plural(n, casa_decimal){
    if(n ===1) {
        return casa_decimal
    } else {
        return casa_decimal+'s'
    }
}

main()