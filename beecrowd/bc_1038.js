// Comentar duas próximas linhas abaixo no Beecrowd
import fs from 'fs';
const input = fs.readFileSync('bc_1038_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n');

function main() {
    const [cod_produto, quantidade] = lines[0].split(' ').map(Number)
    
    const total = valor_a_ser_pago(cod_produto,quantidade).toFixed(2)
    console.log(`Total: R$ ${total}`)
}

function valor_a_ser_pago(cod_produto, quantidade) {

    const valor_do_produto = get_valor_do_produto(cod_produto)

    const valor_compra = valor_do_produto*quantidade

    return valor_compra
}

function get_valor_do_produto(cod_produto) {
    if(cod_produto == 1) {
        return 4.0
    } else if(cod_produto == 2) {
        return 4.50
    } else if(cod_produto == 3) {
        return 5.0
    } else if(cod_produto == 4) {
        return 2.0
    } else {
        return 1.5
    }
}

main()