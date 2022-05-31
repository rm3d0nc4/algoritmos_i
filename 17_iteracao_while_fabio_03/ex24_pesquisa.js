import {ler_numeros} from '../io_utils.js'

function main() {

    const [n_pessoas] = ler_numeros('a quantidade de pessoas')

    let n_filhos_total = 0
    let salarios_total = 0
    let salarios_acima_1000 = 0
    
    let contador = 1

    while(contador<=n_pessoas){

        const [salario, n_filhos] = ler_numeros(' o salário e o nº de filhos')

        n_filhos_total+=n_filhos
        salarios_total+=salario
        if(salario>1000){
            salarios_acima_1000++
        }

        contador++
    }

    // for(let counter =1; counter<=n_pessoas; counter++){

    //     const [salario, n_filhos] = ler_numeros(' o salário e o nº de filhos')

    //     n_filhos_total+=n_filhos
    //     salarios_total+=salario
    //     if(salario>1000){
    //         salarios_acima_1000++
    //     }
    // }

    const med_salarial_sem_filhos = salarios_total/n_pessoas
    const med_numero_filhos = n_filhos_total/n_pessoas
    const perc_pessoas_com_salario_acima_de_1000 = (salarios_acima_1000/n_pessoas)*100

    console.log('Resultado da pesquisa:')
    console.log(`Média salarial da população (sem incluir filhos ): ${med_salarial_sem_filhos.toFixed(2)}`)
    console.log(`Média de números de filhos por entrevistado: ${med_numero_filhos.toFixed(2)}`)
    console.log(`Percentual de pessoas com sálario acima de R$ 1.000,00: ${perc_pessoas_com_salario_acima_de_1000.toFixed(2)}`)

}

main()