import {ler_numero, input} from '../../io_utils.js'

function main() {

    const frase = 'Every developer likes to mix kubernetes and javascript'
    
    const nova_frase = frase.split(' ').map(formatar_palavra).join(' ')

    console.log(nova_frase)
}


// const createNumeronym = (word) => word[0] + (word.length - 2) +  word[word.length - 1]; =====> Arrow function da questão


function formatar_palavra(palavra) {
    let nova_palavra = palavra[0]
    let contador = 0

    if(palavra.length > 3) {

        for(let letra = 1; letra < palavra.length - 1; letra++){
            contador++
        }
        nova_palavra += contador
        nova_palavra += palavra[palavra.length-1]
        
        return nova_palavra
    } else {
        return palavra
    } 


}

main()