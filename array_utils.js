import { ler_numero, input } from "./io_utils.js"

export function criar_vetor() {
    const tamanho = ler_numero('Tamanho')
    const valor_inicial_padrao = input('Valor inicial padrão:')
    let vetor

    if( valor_inicial_padrao !== '') {
        vetor = new Array(tamanho).fill(valor_inicial_padrao)
    } else {
        vetor = new Array(tamanho)
    }

    return vetor
}

export function criar_vetor_2(tamanho, valor_inicial) {
    let vetor

        vetor = new Array(tamanho).fill( undefined || valor_inicial)

    return vetor
}

export function get_maior_valor_e_posicao(vetor) {
    let maior_valor = 0
    let posicao_maior_valor
    let menor_valor = 0
    let posicao_menor_valor
    
    for(let posicao in vetor){
        // console.log(typeof(posicao))
        if(posicao === '0') {

            maior_valor = vetor[posicao]
            posicao_maior_valor = posicao
        } else {

            if(vetor[posicao] > maior_valor){
                maior_valor = vetor[posicao]
                posicao_maior_valor = posicao
            }
        }
    }

    return [maior_valor, Number(posicao_maior_valor)]
}
export function get_menor_valor_e_posicao(vetor) {
    let menor_valor = 0
    let posicao_menor_valor
    
    for(let posicao in vetor){
        // console.log(typeof(posicao))
        if(posicao === '0') {

            menor_valor = vetor[posicao]
            posicao_menor_valor = posicao
        } else {
            if(vetor[posicao] < menor_valor) {
                menor_valor = vetor[posicao]
                posicao_menor_valor = posicao
            }
        }
    }

    return [menor_valor, Number(posicao_menor_valor)]
}



export function ordenar_vetor(vetor) {
    let novo_vetor = []
    let posicao_menor_elemento

    for(let elemento of vetor){

        posicao_menor_elemento = get_posicao_menor_valor(vetor)
        novo_vetor[novo_vetor.length] = vetor[posicao_menor_elemento]

        vetor = remover_elemento(posicao_menor_elemento, vetor)
    }

    return novo_vetor
}

export function get_posicao_menor_valor(vetor) {
    let posicao_menor_elemento = 0

    for(let posicao = 0; posicao < vetor.length; posicao++) {

        if(vetor[posicao] < vetor[posicao_menor_elemento]) {
            posicao_menor_elemento = posicao
        }
    }

    return posicao_menor_elemento
}

export function remover_elemento(posicao_elemento,vetor) {
    let novo_vetor = []

    for(let posicao = 0; posicao < vetor.length; posicao++) {

        if(posicao !== posicao_elemento) {
            novo_vetor[novo_vetor.length] = vetor[posicao]
        }
    }
    return novo_vetor
}

export function n_ocorrencias_de_um_elemento_no_vetor(elemento, vetor) {
    let contador = 0

    for(let elemento_vetor of vetor) {
        if(elemento === elemento_vetor) {
            contador++
        }
    }
    return contador
}

export function contar_elemento_vetor(elemento, vetor){
    let qtd = 0

    for(let indice = 0; indice < vetor.length; indice++){
        if(vetor[indice] === elemento){
            qtd++
        }
    }
    return qtd
}

export function somar_elementos_vetor(vetor) {
    let soma = 0

    for(let valor of vetor) {
        soma += valor
    }

    return soma
}

export function multiplicar_elementos_vetor(vetor) {
    let resultado = 1

    for(let elemento of vetor) {
        resultado *= elemento
    }

    return resultado
}


export function media_elementos_vetor(vetor) {
    const soma  = somar_elementos_vetor(vetor)
    const media = soma/vetor.length

    return media
}

