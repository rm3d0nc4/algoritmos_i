    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA
    // NÃO TERMINADA



import {ler_numeros, input} from '../io_utils.js'
// Comentar duas próximas linhas abaixo no Beecrowd
// import fs from 'fs';
// const input = fs.readFileSync('1166_led_input.txt', 'utf8');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

function main() {
    
    // const [num_palavras_conto, num_max_linhas, num_max_caracteres_por_linhas ] = ler_numeros('número de palavras, número máximo de linhas por página e o número máximo de caracteres por linha')
    const max_caractere_por_linha = 10
    const conto = 'Se mana Piedade tem casado com Quincas Borba apenas me daria uma esperanca colateral'
    console.log(Math.round(conto.length/10)+1)
    const resultado = gerar_linhas(conto, max_caractere_por_linha)
    
}

function gerar_linhas(conto, max_caractere_por_linha){
    let numero_de_linhas = 0

    let indice_ultimo_elemento_linha = max_caractere_por_linha
    let contador_elementos = 0

    while(contador_elementos<conto.length-1){
        let linha = ''

        for(let index= contador_elementos; index<indice_ultimo_elemento_linha; index++){

            linha+=conto[index]
            contador_elementos++

            if(index=== conto.length-1){
                break
            }
        }

        if(ha_palavra_quebrada(linha, conto, contador_elementos)){
            const linha_sem_palavra_quebrada = retirar_palavra_quebrada_da_linha(linha)
            contador_elementos= linha_sem_palavra_quebrada.length
            indice_ultimo_elemento_linha = contador_elementos+max_caractere_por_linha

            console.log(linha_sem_palavra_quebrada)
        
        } else{
            indice_ultimo_elemento_linha+=max_caractere_por_linha
            console.log(linha)
        }


    }
}


function ha_palavra_quebrada(linha, conto, elementos){
    
    const ultimo_elemento_da_linha = linha[linha.length-1]
    const proximo_elemento = conto[elementos]
    // console.log(`Ultimo elemento: ${ultimo_elemento_da_linha}\nPróximo elemento: ${proximo_elemento}`)
    
    return eh_letra(ultimo_elemento_da_linha) && eh_letra(proximo_elemento)
}
const eh_letra = elemento => elemento != ' ' && elemento != undefined

function retirar_palavra_quebrada_da_linha(linha){
    let linha_sem_palavra_quebrada = ''
    const palavras_da_linha = linha.split(' ')

    for(let palavra = 0; palavra<palavras_da_linha.length - 1; palavra++){
        linha_sem_palavra_quebrada += `${palavras_da_linha[palavra]} `
    }

    return linha_sem_palavra_quebrada
}

// Condição para ñ ser letra:
// !(linha[linha.length-1] === ' ' || 
// conto[linha.length] === ' ' || 
// conto[linha.length] === undefined )



main()