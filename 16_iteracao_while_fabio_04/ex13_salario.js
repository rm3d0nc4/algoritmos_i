
// PRECISA DE UM PEQUENO AJUSTE
// PRECISA DE UM PEQUENO AJUSTE
// PRECISA DE UM PEQUENO AJUSTE
// PRECISA DE UM PEQUENO AJUSTE
// PRECISA DE UM PEQUENO AJUSTE


import { ler_numeros } from './../io_utils.js';
function main() {

    let soma_salarios_atuais = 0
    let soma_salarios_reajustados = 0

    let salario
    let novo_salario

    while(true){
        if(salario===0) {
            break
        }

        [salario] = ler_numeros('o seu salário, funcionário')
        novo_salario = get_reajuste(salario)
        
        console.log(`Salário reajustado para R$${novo_salario.toFixed(2)}`)

        soma_salarios_atuais+=salario
        soma_salarios_reajustados+=novo_salario
    }

    let reajuste_total = soma_salarios_reajustados-soma_salarios_atuais

    console.log(`Soma dos salários atuais: ${soma_salarios_atuais.toFixed(2)}`)
    console.log(`Soma dos salários reajustados: ${soma_salarios_reajustados.toFixed(2)}`)
    console.log(`Valor do reajuste total: ${reajuste_total.toFixed(2)}`)
}

function get_reajuste(salario){

    if(salario>=10000) {
        return salario+(salario*.1)
    } else if(salario>=6000){
        return salario+(salario*.15)
    } else if(salario>=3000){
        return salario+(salario*.2)
    } else {
        return salario+(salario*.25)
    }
}

main()