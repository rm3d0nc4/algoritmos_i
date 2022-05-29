// Funções na forma arrow
// Lista01: ex23 ao ex33 + ex45
/*
const calcular_quadrado = (n) => {
    const resultado = n * n
    return resultado
}
*/

import { input } from "../../io_utils.js"


function main() {
    console.log('23----- Transformando Kg em g -----')
    const peso_kg = Number(input('Digite o peso, em Kg:'))
    console.log(ex23_kg(peso_kg))


    console.log('24----- Converter Metros para Centímetros -----')
    const valor_metro1 = Number(input('Digite a distância, em metros:'))
    console.log(ex24_metro1(valor_metro1))


    console.log('25----- Distribuição de metros -----')
    const valor_metro2 = Number(input('Digite a distância, em metros:'))
    console.log(ex25_metro2(valor_metro2))


    console.log('26----- Distribuição de dias -----')
    const n_dias = Number(input('Digite a quantidade de dias:'))
    console.log(ex26_dias(n_dias))


    console.log('27----- Distribuindo segundos -----')
    const segundos_bruto = Number(input('Quantos segundos deseja distribuir:'))
    console.log(ex27_segundos(segundos_bruto))


    console.log('28----- Distribuindo horas -----')
    const horas_bruta = Number(input('Digite a quantidade de horas:'))
    console.log(ex28_horas(horas_bruta))


    console.log('29----- Distribuindo meses -----')
    const meses_bruto = Number(input('Digite a quantidade de meses:'))
    console.log(ex29_meses(meses_bruto))


    console.log('30----- Distribuindo minutos -----')
    const minutos_bruto = Number(input('Digite a quantidade de minutos:'))
    console.log(ex30_minutos(minutos_bruto))


    console.log('31----- Convertendo binário para decimal -----')
    const binario = Number(input('Digite um número binário com 4 dígitos:'))
    console.log(ex31_binario(binario))


    console.log('32----- Diferença de um número com o seu inverso -----')
    const numero1 = Number(input('Digite um número de 3 dígitos:'))
    console.log(ex32_inverter_diferenca(numero1))


    console.log('33----- Somando um número com o seu inverso -----')
    const numero2 = Number(input('Digite um número de 3 dígitos:'))
    console.log(ex33_inverter_soma(numero2))


    console.log('45----- CAIXA ELETRÔNICO -----')
    const saque = Number(input('Informe a quantia que deseja sacar:'))
    console.log(ex45_caixa_eletronico(saque))

}

//FUNÇÕES

const ex23_kg = (peso_kg) => {
    const peso_g = peso_kg*1000

    return `${peso_kg} Kg equivale a ${peso_g} g`
}

const ex24_metro1 = (valor_metro) => {
    const valor_centimetro = valor_metro *100

    return `${valor_metro} metro(s) equivale a ${valor_centimetro} centímetro(s)`
}

const ex25_metro2 = (valor_metro) => {
    const valor_m = valor_metro % 1000
    const valor_km =  (valor_metro - valor_m)/1000

    return `${valor_metro} corresponde a ${valor_km} quilômetros e ${valor_m} metros`
}

const ex26_dias = (n_dias) => {
    const dias_total = n_dias % 7

    const semanas_total = (n_dias-dias_total)/7

    return `${n_dias} dias corresponde a ${semanas_total} semanas e ${dias_total} dias`
}

const ex27_segundos = (segundos_bruto) => {
    const segundos = segundos_bruto%60
    const minutos = ((segundos_bruto-segundos) %3600)/60
    const horas = ((segundos_bruto-(minutos*60)- segundos)/60)/60

    return `${segundos_bruto} corresponde a ${horas} horas, ${minutos} minutos e ${segundos} segundos`
}

const ex28_horas = (horas_bruta) => {
    const horas = horas_bruta % 24
    const dias = ((horas_bruta - horas) %168) /24 
    const semanas = (horas_bruta - horas - (dias * 24)) /24

    return `${horas_bruta} corresponde a ${horas} horas, ${dias} dias e ${semanas/7} semanas`
}

const ex29_meses = (meses_bruto) => {
    const meses = meses_bruto % 12
    const anos = (meses_bruto - meses)/12

    return `${meses_bruto} meses equivale a ${anos} anos e ${meses} meses `
}

const ex30_minutos = (minutos_bruto) => {
    const minutos = minutos_bruto % 60
    const horas = ((minutos_bruto-minutos)/60) % 24
    const dias = ((minutos_bruto-minutos-(horas*60))/60)/24

    return `${dias} Dias,${horas} Horas, ${minutos} Minutos`
}

const ex31_binario = (binario) => {
    const indice0 = binario % 10
    const indice1 = ((binario - indice0) % 100) /10
    const indice2 = ((binario-indice0-(indice1*10) % 1000) /100) % 10
    const indice3 =(((binario-indice0-(indice1*10)-(indice2*100)) % 10000)/1000)

    const decimal = ((indice3*2**3)+(indice2*2**2)+(indice1*2**1)+(indice0*2**0))

    return `O número binário ${binario} corresponde ao número decimal ${decimal}`
}

const ex32_inverter_diferenca = (numero) => {
    const n_unidade = numero % 10
    const n_dezena = ((numero-n_unidade) % 100) / 10
    const n_centena = (numero-n_unidade-(n_dezena*10)) / 100

    const numero_inverso = ((n_unidade*100)+(n_dezena*10)+(n_centena*1))

    return `A diferença entre ${numero} e ${numero_inverso} é: ${numero-numero_inverso} `
}

const ex33_inverter_soma = (numero) => {
    const n_unidade = numero % 10
    const n_dezena = ((numero-n_unidade) %100) /10
    const n_centena = ((numero-n_unidade-(n_dezena*10)) /100)

    const numero_inverso = ((n_unidade * 100)+(n_dezena*10)+ (n_centena*1))

    return `A soma entre ${numero} e ${numero_inverso} é igual a: ${numero+numero_inverso}}`
}

const ex45_caixa_eletronico = (saque) => {
    const nota_1_real = saque % 5
    const nota_5_reais = ((saque - nota_1_real) % 10) / 5
    const nota_10_reais = ((saque - nota_1_real - (nota_5_reais * 5)) %50 ) / 10
    const nota_50_reais = (saque- nota_1_real - (nota_5_reais*5)-(nota_10_reais*10)) / 50

    return `Você receberá ${nota_50_reais} notas de R$50 \nVocê receberá ${nota_10_reais} notas de R$10\nVocê receberá ${nota_5_reais} notas de R$5\nVocê receberá ${nota_1_real} notas de R$1`
}

main()