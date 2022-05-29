import { ler_numeros, input } from "../io_utils.js";

function main() {

    const [salario] = ler_numeros('seu salário atual (R$)')

    const novo_salario = get_aumento(salario)
    
    const valor_aumento = novo_salario-salario
    const percentual_aumento = (valor_aumento/salario)*100

    console.log(`Salário antes do aumento: ${salario}`)
    console.log(`Percentual do aumento: ${percentual_aumento}%`)
    console.log(`Valor do aumento: ${valor_aumento}`)
    console.log(`Novo Salário: ${novo_salario}`)

}

function get_aumento(salario) {
    let novo_salario
    
    if( salario<=280) {
        novo_salario = salario+(salario*0.2)
    } else if(salario>280 && salario<=700) {
        novo_salario = salario+(salario*0.15)
    } else if(salario>700 && salario<=1500) {
        novo_salario = salario+(salario*0.1)
        console.log(salario+salario*0.1)
    } else {
        novo_salario = salario+(salario*0.05)
    }

    return novo_salario
}

main()