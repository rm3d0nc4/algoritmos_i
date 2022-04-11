// Funções na forma anônima
// Lista01: ex12 ao ex22
/*
const calcular_quadrado = function(n){
    const resultado = n * n
    return resultado
}
*/


import { input} from "../../io_utils.js";

function main() {
    console.log('12-----Vamos aumentar o seu salário-----')
    const salario = Number(input('Insira o seu salário atual (em R$):'))
    console.log(ex12_salario(salario))


    console.log('13-----calculando 70% de um valor-----')
    const valor = Number(input('Insira um valor em R$:'))
    console.log(ex13_porcentagem(valor))


    console.log('14-----calculando média ponderada-----')
    const n1 = Number(input('Digite a primeira nota:'))
    const p1 = Number(input('Digite o peso da primeira nota:'))

    const n2 = Number(input('Digite a segunda nota:'))
    const p2 = Number(input('Digite o peso da segunda nota:'))

    const n3 = Number(input('Digite a terceira nota:'))
    const p3 = Number(input('Digite o peso da terceira nota:'))
    console.log(ex14_notas(n1,p1,n2,p2,n3,p3))


    console.log('15----- Vamos calcular a área de um triângulo -----')
    const base1 = Number(input('Digite o valor da base do triângulo (em cm):'))
    const altura1 = Number(input('Digite o valor da altura do triângulo (em cm):'))
    console.log(ex15_triangulo(base1, altura1))


    console.log('16----- Vamos calcular a área de um quadrado -----')
    const lado = Number(input('Digite o valor do lado do quadrado  (em cm):'))
    console.log(ex16_quadrado(lado))


    console.log('17----- Vamos calcular a área de um retângulo -----')
    const base2 = Number(input('Digite o valor da base (em cm):'))
    const altura2 = Number(input('Digite o valor da altura (em cm):'))
    console.log(ex17_retangulo(base2, altura2))


    console.log('18----- Vamos calcular o comprimento de uma circunferência -----')
    const raio1 = Number(input('Digite o valor do raio (em cm):'))
    console.log(ex18_circunferencia(raio1))


    console.log('19----- Vamos calcular o volume de uma esfera -----')
    const raio2 = Number(input('Digite o valor do raio da esfera (em cm):'))
    console.log(ex19_esfera(raio2))


    console.log('20----- Transformando ºC em ºF -----')
    const temperatura_c = Number(input('Digite o valor da temperatura, em °C:'))
    console.log(ex20_temperatura1(temperatura_c))


    console.log('21----- Transformando ºF em ºC -----')
    const temperatura_f = Number(input('Digite o valor da temperatura, em °F:'))
    console.log(ex21_temperatura2(temperatura_f))


    console.log('22----- Convertendo de KM pra M -----')
    const valor_km = Number(input('Digite a distância em KM:'))
    console.log(ex22_km(valor_km))
}

// FUNÇÕES

const ex12_salario = function(salario){
    const aumento = salario*0.25
    const novo_salario = salario + aumento

    return `Parabéns, seu novo salário passará a ser R$ ${novo_salario.toFixed(2)} (aumento de R$ ${aumento.toFixed(2)})`
}

const ex13_porcentagem = function(valor){
    const setenta_por_cento = valor*0.7

    return `70% de R$ ${valor.toFixed(2)} equivale a R$ ${setenta_por_cento.toFixed(2)}`
}

const ex14_notas = function(n1,p1,n2,p2,n3,p3){
    const preliminar1 = n1*p1
    const preliminar2 = n2*p2
    const preliminar3 = n3*p3

    const nota_final = (preliminar1+preliminar2+preliminar3)/(p1+p2+p3)

    return `Sua média final é: ${nota_final}`
}

const ex15_triangulo = function(base, altura){
    const area = (base*altura)/2

    return `A área do triângulo é: ${area} cm²`
}

const ex16_quadrado = function(lado){
    const area = lado*lado

    return `A área do quadrado é: ${area} cm²`
}

const ex17_retangulo = function(base, altura){
    const area = (base*altura)

    return `A área do retângulo é: ${area} cm²`
}

const ex18_circunferencia = function(raio){
    const comprimento = 2 * Math.PI * raio

    return `O comprimento da circunferência é: ${comprimento.toFixed(2)} cm`

}

const ex19_esfera = function(raio){
    const pi = 3.14

    const volume = (4*pi*(raio*raio*raio))/3

    return `O volume da esfera é: ${volume.toFixed(2)} cm³`
}

const ex20_temperatura1 = function(temperatura_c){
    const temperatura_f = (9*temperatura_c+160)/5

    return `A temperatura ${temperatura_c} °C equivale a ${temperatura_f} °F`
}

const ex21_temperatura2 = function(temperatura_f){
    const temperatura_c = (5*temperatura_f-160)/9

    return `A temperatura ${temperatura_f} °F equivale a ${temperatura_c} °C`
}

const ex22_km = function(valor_km){
    const valor_m = valor_km*1000

    return `${valor_km} km equivalem a ${valor_m} m`
}


main()
