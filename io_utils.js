import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

// Função para auxiliar na leitura dos números
export function ler_numeros_tipo1(quantidade, tipo = 'valor(es)') {
    const numero = input(`Digite o valor de ${quantidade} ${tipo}:`).split(' ').map(Number)
    return numero
}

// Função para auxiliar na leitura dos números
export function ler_numeros_tipo2(o_que) {
        const numero = input(`Digite ${o_que}:`).split(' ').map(Number)
        return numero
}


// Função para auxiliar na leitura das datas
export function ler_data( de_que = ' '){
const data = input(`Digite uma data ${de_que} (dd/mm/aaaa):`).split('/').map(Number)
return data
}
