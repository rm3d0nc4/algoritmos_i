import { input } from "../io_utils.js";

function main() {

    let [nome, altura, peso] = input('Digite o seu nome, altura e peso:').split(' ')

    let mais_alta = [nome, altura, peso]
    let mais_baixa = [nome, altura, peso]
    let mais_gorda = [nome, altura, peso]
    let mais_magra = [nome, altura, peso]

    while(nome!='FIM') {
        [nome, altura, peso] = input('Digite o seu nome, altura e peso:').split(' ')
        console.log(nome)
        if(altura>mais_alta[1]) {
            mais_alta = [nome, altura, peso]
        }
        if(altura<mais_baixa[1]) {
            mais_baixa = [nome, altura, peso]
        }

        if(peso>mais_gorda[2]) {
            mais_gorda = [nome, altura, peso]
        }
        if(peso<mais_magra[2]) {
            mais_magra = [nome, altura, peso]
        }

    }

    console.log(`A mais alta é ${mais_alta[0]}`)
    console.log(`A mais baixa é ${mais_baixa[0]}`)
    console.log(`A mais gorda é ${mais_gorda[0]}`)
    console.log(`A mais magra é ${mais_magra[0]}`)
}

main()