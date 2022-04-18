// Funções na forma tradicional/comum/normal
// Lista01: ex01 ao ex11

/*
function calcular_quadrado(n){
    const resultado = n*n
    return resultado
}
*/
import { input } from '../io_utils.js';

function main() {

    console.log('01----- Convertendo m/s para km/h -----')
    const velocidade_ms = Number(input('Insira a velocidade em m/s:'))
    console.log(ex01_velocidade(velocidade_ms))


    console.log('02----- Vamos encontrar os minutos -----')
    const hora = Number(input('Digite a hora:'))
    const minutos = Number(input('Digite os minutos:'))
    console.log(ex02_horas(hora,minutos))


    console.log('03----- Vamos encontrar as horas e os minutos -----')
    const minutos_total = Number(input('Digite os minutos:'))
    console.log(ex03_minutos(minutos_total))


    console.log('04-----Convertendo Dólar (U$) em Real (R$)-----')
    const valor_em_dolar = Number(input('Digite o valor em U$ a ser convertido:'))
    const dolar_atual = Number(input('Digite a cotação do dólar em R$:'))
    console.log(ex04_dolar(valor_em_dolar, dolar_atual))


    console.log('05----- Vamos decompor um número inteiro -----')
    const valor = Number(input('Digite um valor que contenha 3 dígitos:'))
    console.log(ex05_inteiro(valor))


    console.log('06----- Convertendo km/h para m/s -----')
    const kmh = Number(input('Digite uma valocidade, em km/h:'))
    console.log(ex06_km_p_ms(kmh))


    console.log('07----- Soma de dois número e Diferença de outros dois -----')
    const n1 = Number(input('Digite o primeiro número:'))
    const n2 = Number(input('Digite o segundo número:'))
    const n3 = Number(input('Digite o terceiro número:'))
    console.log(ex07_numeros(n1,n2,n3))


    console.log('08----- Divisão da soma pela subtração de dois números -----')
    const num1 = Number(input('Digite o primeiro número:'))
    const num2 = Number(input('Digite o segundo número:'))
    console.log(ex08_operacao(num1, num2))


    console.log('09----- Invertendo numero -----')
    const numero1 = Number(input('Digite o primero número:'))
    const numero2 = Number(input('Digite o segundo número:'))
    console.log(ex09_inverter_num(numero1, numero2))


    console.log('10----- Quociente e resto da divisão entre dois números -----')
    const n01 = Number(input('Digite o primeiro número:'))
    const n02 = Number(input('Digite o segundo número:'))
    console.log(ex10_quociente_e_resto(n01, n02))


    console.log('11----- Invertendo um número inteiro -----')
    const n = Number(input('Digite um número que cotenha três dígitos:'))
    console.log(ex11_inverter_num(n))



}

//FUNÇÕES


function ex01_velocidade(velocidade_ms){

    const velocidade_kmh = velocidade_ms * 3.6

    return `A velocidade ${velocidade_ms} m/s equivale a ${velocidade_kmh} km/h`

}

function ex02_horas(hora, minutos){
    const minutos_totais = (hora*60)+ minutos

    return `${hora} hora(s) e ${minutos} munito(s) equivalem a exatamente ${minutos_totais} minuto(s)`
}

function ex03_minutos(minutos_total){

    const minutos = minutos_total%60
    const horas = (minutos_total - minutos)/60

    return `${minutos_total} minuto(s) equivalem a exatamente ${horas} hora(s) e ${minutos} minutos`
}

function ex04_dolar(valor_em_dolar, dolar_atual){
    const convertido_em_real = valor_em_dolar * dolar_atual

    return `hoje, ${valor_em_dolar} U$ equivale a ${convertido_em_real.toFixed(2)} R$ `
}

function ex05_inteiro(valor){
    const unidades = valor%10
    const dezenas = ((valor-unidades)%100)
    const centenas = (valor-unidades-dezenas)

    return `${valor} equivale a ${unidades} unidades, ${dezenas/10} dezenas e ${centenas/100} centenas`
}

function ex06_km_p_ms(kmh){
    const ms = kmh/ 3.6

    return `${kmh} km/h equivale a exatamente ${ms.toFixed(2)} m/s`
}

function ex07_numeros(n1,n2,n3){
    return `Soma entre ${n1} e ${n2} número é: ${n1+n2} \nA diferença entre ${n2} e ${n3} é:${n2-n3}`
}

function ex08_operacao(num1, num2){
    const operacao = (num1+num2)/(num1-num2)

    return `Resultado: ${operacao}`
}

function ex09_inverter_num(numero1, numero2){
    return `o inverso de ${numero1},${numero2} é ${numero2},${numero1}`
}

function ex10_quociente_e_resto(n01, n02){
    const resto = n01%n02
    const quociente = (n01-resto)/n02

    return `Quociente de ${n01}/${n02}: ${quociente} \nResto da divisão de ${n01}/${n02}: ${resto}`
}

function ex11_inverter_num(n){

    const unidade = n%10
    const dezena = (n-unidade)%100
    const centena = (n-unidade-dezena)

    const n_invertido = `${unidade/1}${dezena/10}${centena/100}`

    return `O inverso de ${n} é ${n_invertido}`
}


main()