import {ler_numero, input} from '../io_utils.js'

function main() {

    const objetivo = input('Objetivo:')
    const valor_objetivo = ler_numero('Quanto você precisa p/ alcançar o seu objetivo')
    const salario = ler_numero('Salário:')
    
    let perc_destinado_ao_objetivo = ler_numero('Percentual do salário destinado ao objetivo (%)')

    while(perc_destinado_ao_objetivo >= 30) {
        console.log('O percentual deve ser no máxio 30%')
        perc_destinado_ao_objetivo = ler_numero('Percentual do salário destinado ao objetivo (%)')
    }
    
    let taxa_juros = ler_numero('Taxa de juros mensal (%)')

    while(taxa_juros < 0.01 && taxa_juros < 1) {
        console.log('Taxa de juros deve estar entre 0.01% e 1%')
        taxa_juros = ler_numero('Taxa de juros mensal (%)')
    }

    let contador_mes = 0
    let investimento = 0
    const investimento_mensal = salario * perc_destinado_ao_objetivo / 100

    while(investimento < valor_objetivo) {
        
        investimento += investimento_mensal
        investimento += investimento * taxa_juros / 100

        contador_mes++
    }

    console.log(`Objtetivo alcançado: R$${investimento.toFixed(2)} `)

    let tempo_ano, tempo_meses

    if(Math.floor(contador_mes / 12) === 0){
        tempo_meses = contador_mes

        console.log(`Objetivo alcançado em ${tempo_meses} meses`)
    } else {
        tempo_ano = Math.floor(contador_mes / 12)
        tempo_meses = contador_mes % 12

        console.log(`Objetivo alcançado em ${tempo_ano} ano(s) ${tempo_meses} mes(es)`)
    }

}

main()