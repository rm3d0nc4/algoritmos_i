import {ler_numero, input} from '../io_utils.js'

function main() {

    const peso = ler_numero('Digite o seu peso (kg)')
    const altura = ler_numero('Digite a sua altura (m)')
    
    const imc = peso / (altura ** 2)

    let kg_a_perder, kg_a_ganhar, calorias_diarias_consumidas
    let deficit_calorico, superavit_calorico
    let calorias_dias_uteis, calorias_sabado

    if (imc_abaixo(imc)) {
        kg_a_ganhar = ((altura ** 2) * 19.8) - peso
        
        console.log(`\nAbaixo do ideal! Você precisa ganhar ${kg_a_ganhar.toFixed(2)} kg.`)
        console.log(`Sua meta é chegar a ${(peso + kg_a_ganhar).toFixed(2)} kg`)
        

        calorias_diarias_consumidas = ler_numero(`Calorias consumidas diariamente`)

        deficit_calorico = kg_a_ganhar * 7000
        calorias_dias_uteis = deficit_calorico / (23 * 3)
        calorias_sabado = calorias_dias_uteis / 2

        console.log(`\nDe segunda a sexta, você deverá consumir ${calorias_dias_uteis.toFixed(2)} cal a mais.`)
        console.log(`Ao sábado, você deverá consumir ${calorias_sabado.toFixed(2)} cal a mais.`)
        console.log('Domingo é dia de descanso.')

    } else if(imc_acima(imc)) {
        kg_a_perder = peso - ((altura ** 2) * 24.9)

        console.log(`\nAcima do ideal! Você precisa perder ${kg_a_perder.toFixed(2)} kg.`)
        console.log(`Sua meta é chegar a ${(peso-kg_a_perder).toFixed(2)} kg`)

        calorias_diarias_consumidas = ler_numero('Calorias consumidas diariamente')

        superavit_calorico = kg_a_perder * 7000
        calorias_dias_uteis = superavit_calorico / (23 * 3)
        calorias_sabado = calorias_dias_uteis / 2

        console.log(`\nDe segunda a sexta, você deverá consumir ${calorias_dias_uteis.toFixed(2)} cal a menos.`)
        console.log(`Ao sábado, você deverá consumir ${calorias_sabado.toFixed(2)} cal a menos.`)
        console.log('Domingo é dia de descanso.')
        

    } else {
        console.log('\nDentro da faixa ideal!')

    }

}


const imc_abaixo = imc => imc < 19.8
const imc_acima = imc => imc > 24.9

main()