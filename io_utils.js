import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

// Função para auxiliar na leitura dos números
export function ler_numeros(o_que) {
        const numero = input(`Digite ${o_que}:`).split(' ').map(Number)
        return numero
}


// Função para auxiliar na leitura das datas
export function ler_data( de_que = ' '){
const data = input(`Digite uma data ${de_que} (dd/mm/aaaa): `).split('/').map(Number)
return data
}


// Função para verificar se um determinado elemento
// Está contido numa lista de elementos
export function contem(lista_elementos, elemento){
    
    for(let elemento_item of lista_elementos) {
        if (elemento === elemento_item){
            return true
        }
    }
    return false
}

// função para contar ocorrencias de um elemento numa lista
export function contar_elemento(elemento, string){
    let qtd = 0

    for(let indice = 0; indice < string.length; indice++){
        
        if(string[indice] === elemento){
            qtd++
        }
    }
    return qtd
}

// Funcao para inverter uma string
export function inverter_string(str){
    let string_invertida = ''

    for(let index = str.length-1; index>=0; index--){
        string_invertida+=str[index]
    }

    return string_invertida
}
