import { gerar_numero_aleatorio } from "./04_utils.js"


export const eh_negativo = n => n < 0

export const eh_positivo = n => n > 0

export const multiplicar = (n1, multiplicador) => n1 * multiplicador

export const elevar = (n1, potencia) => n1 ** potencia

export const reduzir_a_fracao = (n, fracao) => n * fracao

export const substituir_negativos = (n, seq) => eh_negativo(n) ? gerar_numero_aleatorio(seq) : n

export const media_elementos = vetor => somar_todos_elementos(vetor) / vetor.length

export function somar_todos_elementos(vetor) {
    let soma = 0

    for(let elemento of vetor) {
        soma += elemento
    }

    return soma
}

export function posicao_esta_preenchida(numero, posicoes) {
    for(let elemento of posicoes) {
        if(elemento === numero) {
            return true
        }
    }

    return false
}


