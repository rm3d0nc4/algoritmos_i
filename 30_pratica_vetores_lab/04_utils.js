import prompt from 'prompt-sync'


export const input = prompt()

export const limpar = console.clear

export const print = console.log

export const continuar = _ => input('\npressione [Enter] para continuar')

export const ler_numero = texto => Number(input(`${texto}`))

export function ler_numero_intervalo(texto, [min, max]) {
    let n =Number(input(`${texto}`))
    
    while(n < min || n > max){
        print(`Valor fora do intervalo (${min}-${max})`)
        
        n =Number(input(`${texto}`))
    } 

    return n
}
export function ler_intervalo(texto) {
    let [min, max] = ler_lista_numeros(texto)

    while( min > max) {
        print('Valores fora da sequencia. Por favor digite o menor valor seguido do maior valor')

        min, max = ler_lista_numeros(texto)
    }
    return [min, max]
}

export const ler_lista_numeros = texto => input(texto).split(' ').map(Number)
export const ler_fracao = texto => input(texto).split('/').map(Number)

export const gerar_vetor_vazio = (num_elementos = 0) => new Array(num_elementos)

export const  gerar_numero_aleatorio = ([min, max])  => Math.floor(Math.random() * (max - min)) + min
