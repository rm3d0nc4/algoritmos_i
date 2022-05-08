import { ler_data } from './../io_utils.js';

function main() {
    const input08_nascimento = ler_data('de nascimento')
    const input08_atual = ler_data('atual')
    const idade = calcula_idade(input08_atual, input08_nascimento)
    console.log(`Você ${idade[0]} anos completos!`)
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

main()