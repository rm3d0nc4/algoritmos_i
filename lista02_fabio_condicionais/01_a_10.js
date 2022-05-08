import { input } from '../io_utils.js';

function main(){
    const input01 = ler_numeros(3)
    const num_iguais = quant_numeros_iguais(input01[0],input01[1],input01[2])
    console.log(`Existem ${num_iguais} números iguais!`)

    const input02 = ler_numeros(2)
    const compara2 = compara_2numeros(input02[0], input02[1])
    console.log(compara2)

    const input03 = ler_numeros(3)
    const maior_numero = compara_3numeros(input03[0], input03[1], input03[2])
    console.log(`Maior: ${maior_numero}`)
    

    const input04 = ler_numeros(1)
    const compara_algarismos = verifica_algarismos_dezena(input04[0])
    console.log(compara_algarismos)
    
    const input05 = ler_numeros(3)
    const orderna_nums = ordena3_numeros(input05[0],input05[1], input05[2])
    console.log(`Ordem: ${orderna_nums[0]}, ${orderna_nums[1]}, ${orderna_nums[2]}`)

    const input06 = ler_numeros(3, 'ângulos')
    const verifica_triangulo = classifica_triangulo(input06[0],input06[1],input06[2])
    console.log(verifica_triangulo)

    const input07 = ler_numeros(3)
    const class_triangulo = classifica_triangulo2(input07[0],input07[1],input07[2])
    console.log(`O triângulo é: ${class_triangulo}`)

    const input08_nascimento = ler_data('de nascimento')
    const input08_atual = ler_data('atual')
    const idade = calcula_idade(input08_atual, input08_nascimento)
    console.log(`Você ${idade[0]} anos completos!`)

    const input09 = ler_numeros(1)
    const primo_ou_nao = checar_numero_primo(input09[0])
    console.log(primo_ou_nao)

    const input10 = ler_data()
    const validacao = validar_data(input10)
    console.log(`Essa data é: ${validacao}`)
}

//Questão 01
function quant_numeros_iguais(n1,n2,n3) {
    if(n1 ===n2 && n2==n3) {
        return 3
    } else if(n1!=n2 && n2!=n3 && n1!=n3) {
        return 0
    } else {
        return 2
    }
}

//Questão 02
function compara_2numeros(n1, n2){
    if(n1>n2) {
        return `Maior: ${n1}; Menor: ${n2}`
    } else if (n1===n2){
        return `${n1} igual a ${n2}`
    } else {
        return `Maior: ${n2}; Menor: ${n1}`
    }
}

//Questão 03
function compara_3numeros(n1,n2,n3) {
    let maior = n1

    if (n2>maior){
        maior = n2
    }
    if(n3>maior){
        maior = n3
    }
    
    return maior
}

//Questão 04
function verifica_algarismos_dezena(numero) {
    const numeros = String(numero).split('').map(Number)
    if(numeros[0] == numeros[1]) {
        return 'Números iguais!'
    } else {
        return 'Números diferentes!'
    }
}

//Questão 05
function ordena3_numeros(n1,n2,n3) {
    let primeiro
    let segundo
    let terceiro

    if (n1>n2 && n1>n3){
        
        primeiro = n1

        if(n2>n3) {
            segundo = n2
            terceiro = n3
        } else {
            segundo = n3
            terceiro =n2
        }
    } else if(n2>n1 && n2>n3){
        primeiro = n2

        if(n1>n3) {
            segundo = n1
            terceiro = n3
        } else {
            segundo = n3
            terceiro =n1
        }
    } else if(n3>n1 && n3>n2){
        primeiro = n3

        if(n2>n1) {
            segundo = n2
            terceiro = n1
        } else {
            segundo = n1
            terceiro =n2
        }
    } else if(n1===n2 && n2===n3){
        primeiro = n1
        segundo = n1
        terceiro = n1
    }

    return [primeiro,segundo,terceiro]
}

//Questão 06
function classifica_triangulo(angulo_i1,angulo_i2,angulo_i3) {

    if ((angulo_i1!=0 && angulo_i2!=0 && angulo_i3!=0) && angulo_i1 + angulo_i2 + angulo_i3 === 180) {

        if(angulo_i1<90 && angulo_i2<90 && angulo_i3<90) {
            return 'Triângulo agudo'
        } else if (angulo_i1===90 || angulo_i2===90 || angulo_i3===90){
            return 'Triângulo retângulo'
        } else if(angulo_i1>90 || angulo_i2>90 || angulo_i3>90){
            return 'Triângulo obtusângulo'
        }
        
    } else {
        return 'Não é um triângulo'
    }

}

//Questão 07
function classifica_triangulo2(lado1,lado2,lado3){

    if(lado1 !=0 && lado2 != 0 && lado3 != 0){
        if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
            return 'Escaleno'
        } else if(lado1===lado2 && lado2 === lado3) {
            return 'Equilátero'
        } else {
            return 'Isósceles'
        }
    } else {
        return 'Não é um triângulo'
    }
    
}

//Questão 8
function calcula_idade(data_atual, data_nascimento) {
    
    let [dia_atual, mes_atual, ano_atual] = data_atual
    let [dia_nascimento, mes_nascimento, ano_nascimento] = data_nascimento
    
    let dias
    let meses
    let anos

    if(dia_atual-dia_nascimento<0) {
        dia_atual +=30
        mes_atual -=1
    }
    dias = dia_atual-dia_nascimento

    if(mes_atual-mes_nascimento<0){
        mes_atual+=12
        ano_atual-=1
    }
    meses = mes_atual-mes_nascimento

    anos = ano_atual-ano_nascimento

    return [anos,meses,dias]
}

// Questão 9
// 1ª etapa: Verificar se o número está no intervalo
// 2ª etapa: Identificar os números primos menores 
// que a raiz do ultimo número do intervalo (100)
// 3ª etapa: verificar se o número N é um dos números 
// encontrados na etapa anterior (2, 3, 5 ou 7)
// 4ª etapa: verificar se o número N é múltiplos pelo menos
//  um dos número encontrados na 2ª etapa

function checar_numero_primo(n) {
    if(n>1 && n<100){
        if(n === 2 || n === 3 || n === 5 || n === 7){
            return 'Primo'
        } else if ( n%2 !=0 && n%3 !=0 && n%5 !=0 && n%7 !=0) {
            return 'Primo'
        } else {
            return 'Não Primo'
        }
    } else {
        return 'ERRO! Verifique se o número inserido está dentro do intervalo solicitado'
    }
}

// Questão 10
function validar_data(data){
    if (data[0]<=28 && data[1]===2 && data[2]%4!=0){
        return 'Válida'

    } else if(data[0]<=29 && data[1]===2 && data[2]%4===0) {
        return 'Válida'
        
    } else if(data[0]<=30 && data[1]=== 4 || data[1]===6 || data[1]===7 || data[1]===9 || data[1]===11){
        return 'Válida'
        
    } else if(data[0]<=31 && data[1]=== 1 || data[1]===3 || data[1]===5 || data[1]===8 || data[1]===10 || data[1]===12){
        return 'Válida'

    } else {
        return 'Inválida'
    }
}





// Função para auxiliar na leitura dos números
function ler_numeros(quantidade, tipo = 'valor(es)') {
        const numero = input(`Digite o valor de ${quantidade} ${tipo}:`).split(' ').map(Number)
        return numero
}


// Função para auxiliar na leitura das datas
function ler_data( de_que = ' '){
    const data = input(`Digite uma data ${de_que} (dd/mm/aaaa):`).split('/').map(Number)
    return data
}

main()