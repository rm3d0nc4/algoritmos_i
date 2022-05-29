import { ler_numeros } from "../io_utils.js";

function main() {
    const [horas_trabalhadas, remuneracao_por_hora] = ler_numeros(' a quantidade de horas trabalhas e o valor da sua remuneração por hora')
    const salario_bruto = horas_trabalhadas*remuneracao_por_hora

    const [valor_ir, porcentagem_ir] = get_imposto_de_renda(salario_bruto)
    const inss = salario_bruto*.1
    const sindicato = salario_bruto*.03
    const fgts = salario_bruto*.11

    const descontos = inss+valor_ir+sindicato
    const salario_liquido = salario_bruto-descontos


    console.log(`Salário Bruto: (${horas_trabalhadas} * ${remuneracao_por_hora.toFixed(2)})    : R$${salario_bruto}`)
    console.log(`(-) IR(${porcentagem_ir}%)                     : R$${valor_ir.toFixed(2)}`)
    console.log(`(-) INS(10%)                   : R$${inss.toFixed(2)}`)
    console.log(`(-) Sindicato(3%)              : R$${sindicato.toFixed(2)}`)
    console.log(`FGTS(11%)                      : R$${fgts.toFixed(2)}`)
    console.log(`Total de descontos             : R$${descontos.toFixed(2)}`)
    console.log(`Salário líquido                : R$${salario_liquido.toFixed(2)}`)
    
}

function get_imposto_de_renda(salario) {
    let valor_descontado = 0
    let porcentagem = 0
    if(salario>900 && salario<=1500) {
        valor_descontado = salario*.05
        porcentagem = 5
        
    } else if(salario>1500 && salario<=2500) {
        valor_descontado = salario*.1
        porcentagem = 10
    } else if(salario>2500) {
        valor_descontado = salario*.2
        porcentagem = 20
    }

    return [valor_descontado, porcentagem]
}

main()