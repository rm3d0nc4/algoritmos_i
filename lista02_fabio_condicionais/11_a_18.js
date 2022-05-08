import { input } from '../io_utils.js';

function main(){

    // const opcao = ler_numeros('1 número(1, 2 ou 3)')
    // const numeros = ler_numeros('3números, separados por espaço')
    // const opcao_escolhida = identifica_opcao(opcao[0], numeros[0],numeros[1],numeros[2])
    // console.log(`Opção escolhida: ${opcao_escolhida}`)

    // const insere_numero = ler_numeros('1 número inteiro')
    // const verifica_p_ou_i = par_ou_impar(insere_numero[0])
    // console.log(`O número é: ${verifica_p_ou_i}`)

    // const nums = ler_numeros('5 números inteiros diferentes, separados por espaço')
    // const maior_e_menor = seleciona_maior_e_menor(nums[0],nums[1],nums[2],nums[3],nums[4],)
    // console.log(`Maior: ${maior_e_menor[0]}, Menor: ${maior_e_menor[1]}`)

    // const input14 = ler_numeros('5 Inteiros diferentes, separados por espaço')
    // acima_da_media(input14[0],input14[1],input14[2],input14[3],input14[4],)

    // const prof1 = ler_numeros('a quantidade de horas/aula dadas e valor recebido por hora do Profesor 1 (separados por espaço)')
    // const prof2 = ler_numeros('a quantidade de horas/aula dadas e valor recebido por hora do Profesor 2 (separados por espaço)')
    // const maior_salario = salario_maior(prof1, prof2)
    // console.log(maior_salario)

    // const notas_aluno = ler_numeros('as duas notas do aluno, separadas por espaço')
    // const situacao = calcula_media_aluno(notas_aluno[0], notas_aluno[1])
    // console.log(`Situação: ${situacao}`)

    // const variavel1 = Number(input('Digite o primeiro valor:'))
    // const variavel2 = Number(input('Digite o segundo valor:'))
    // const operacao = fazer_operacao(variavel1,variavel2)
    // console.log(operacao)

    const [valor1, valor2, operacao] = ler_numeros(' 2 valores e o número da operação, separados por espaço')
    const resultado = fazer_operacao2(valor1,valor2,operacao)
    console.log(resultado)
}





// Questão 11
function identifica_opcao(opcao, num1,num2,num3) {
    if(opcao === 1) {
        return num1
    } else if(opcao === 2) {
        return num2
    } else if(opcao === 3) {
        return num3
    }
}

//  Questão 12
function par_ou_impar(numero) {
    if (numero%2==0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

//  Questão 13
function seleciona_maior_e_menor(num1,num2,num3,num4,num5) {
    let maior = num1 
    let menor = num1

    if(num2>maior) {
        maior = num2
    }
    if(num3>maior) {
        maior = num3
    }
    if(num4>maior) {
        maior = num4
    }
    if(num5>maior) {
        maior = num5
    }

    if(num2<menor) {
        menor = num2
    }
    if(num3<menor) {
        menor = num3
    }
    if(num4<menor) {
        menor = num4
    }
    if(num5<menor) {
        menor = num5
    }
    return [maior,menor]
}

// Questão 14

function acima_da_media(n1,n2,n3,n4,n5) {
    const media = (n1+n2+n3+n4+n5)/5


    if(n1>media) {
        console.log(n1)
    }
    if(n2>media) {
        console.log(n2)
    }
    if(n3>media) {
        console.log(n3)
    }
    if(n4>media) {
        console.log(n4)
    }
    if(n5>media) {
        console.log(n5)
    }
}


// Questão 15
function salario_maior(prof1, prof2) {
    const salario_prof1 = prof1[0]*prof1[1]
    const salario_prof2 = prof2[0]*prof2[1]

    if(salario_prof1>salario_prof2) {
        return 'Professor 1 tem maior salário'
    } else if(salario_prof1 === salario_prof2){
        return 'Os professores tem o mesmo salário'
    } else{
        return 'Professor 2 tem maior salário'
    }
}


// Questão 16
function calcula_media_aluno(nota1, nota2){
    const media = (nota1+nota2)/2

    if(media>=7.0){
        return 'Aprovado'
    } else {
        const exame_final  = ler_numeros('a nota do exame final')
        if(exame_final[0] >=5.0) {
            return 'Aprovado'
        } else {
            return 'Reprovado'
        }
    }
}

// Questão 17

function fazer_operacao1(numero1,numero2) {
    const resto = numero1%numero2
    if(resto===1) {

        return numero1+numero2+resto

    } else if(resto===2) {

        let n1 = ''
        let n2= ''

        if(numero1%2===0) {
            n1 = 'Par'
        } else {
            n1 = 'Impar'
        }

        if(numero2%2===0) {
            n2 = 'Par'
        } else {
            n2 = 'Impar'
        }

        return `1º Numero: ${n1}; 2º Numero: ${n2}`

    } else if(resto===3) {

        return (numero1+numero2)*numero1

    } else if(resto===4){

        if(numero2!=0){
            return (numero1+numero2)/numero2
        } else {
            return `${numero1**2},${numero2**2}`
        }

    } else {
        return `${numero1**2},${numero2**2}`
    }

}

// Questão 18

function fazer_operacao2(valor1, valor2, operacao) {
    if(operacao ===1){
        return valor1+valor2
    } else if(operacao ===2) {
        return valor1-valor2
    } else if(operacao===3) {
        return valor1*valor2
    } else if(operacao === 4) {
        return valor1/valor2
    }
}




// Função para auxiliar na leitura dos números
function ler_numeros(o_que) {
        const numero = input(`Digite ${o_que}:`).split(' ').map(Number)
        return numero
}


// Função para auxiliar na leitura das datas
function ler_data( de_que = ' '){
    const data = input(`Digite uma data ${de_que} (dd/mm/aaaa):`).split('/').map(Number)
    return data
}

main()