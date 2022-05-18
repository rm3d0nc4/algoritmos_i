import { input } from "../io_utils.js";

function main(){
    const perguntas = [
        'Telefonou para a vítima? ',
        'Esteve no local do crime? ',
        'Mora perto da vítima? ',
        'Devia para a vítima? ',
        'Já trabalhou com a vítima? ' 
    ]

    let counter = 0 

    for (let pergunta in perguntas){
        let p = input(perguntas[pergunta]).toLowerCase()

        while(p != 'sim' && p!='nao') {
            console.log('responsta inválida!\n Responda apenas "sim" ou "nao"')
            p = input(perguntas[pergunta]).toLowerCase()
        }
        if(p=== 'sim') {
            counter++
        }

    }
    const conclusao = get_conclusao(counter)

    console.log(`Você é: ${conclusao}`)
}

function get_conclusao(numero){
    if (numero>4){
        return 'Assasino'
    } else if(numero>2){
        return 'Cúmplice'
    } else if(numero>1){
        return 'Suspeito'
    } else {
        return 'Inocente'
    }
}

main()