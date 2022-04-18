import { input, ler_numeros_tipo2 } from './../io_utils.js';

function main() {
    const prof1 = ler_numeros_tipo2('a quantidade de horas/aula dadas e valor recebido por hora do Profesor 1 (separados por espaço)')
    const prof2 = ler_numeros_tipo2('a quantidade de horas/aula dadas e valor recebido por hora do Profesor 2 (separados por espaço)')
    const maior_salario = salario_maior(prof1, prof2)
    console.log(maior_salario)
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


main()