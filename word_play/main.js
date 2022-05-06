import { count } from 'console'
import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main() {

    let dashboard = '========== DASHBOARD =========='
    dashboard+= '\n1) Imprimir palavras com mais de 20 caracteres'
    
    // Exercício 9.1
    const words = read_words('words.txt')
    console.log(`${words.length} palavras carregadas`)

    // get_words_with_n_or_more_characters(words)

    // qtd_words_has_no_letter(words)

    
    
    // Exercício 9.2
    
    // qtd_word_has_no_forbbiden_letters(words)
    // const word = input('Digite a palavra:')
    // const has = has_no_letter(word)
    // console.log(has)


    // Exercício 9.3

    const ll = uses_only('abac', 'ab')
    console.log(ll)

}

function read_words(path) {
    const words = fs.readFileSync(path, {encoding: 'utf-8'}).split('\n')
    
    return words
}

// Exercício 9.1
function get_words_with_n_or_more_characters(words, letters_qtd) {
    
    for (let word of words) {
        if(word.length>letters_qtd){
            console.log(word)
        }
    }
}


// Exercício 9.2

function has_no_letter(word, letter) {
    for (let item of word ) {
        if(item ===letter) {
            return false
        }
    }
    return true
}

function qtd_words_has_no_letter(words) {
    let counter = 0
    const letter = input('Sem qual letra? ')

    for (let word of words) {

        if(has_no_letter(word, letter)) {
            console.log(word)

            counter++
        }
    }
    const percent = ((counter/words.length)*100).toFixed(3)
    console.log(`Existem ${counter} (${percent}%) palavras que não possuem a letra ${letter}`)
}


// Exercício 9.3

function qtd_word_has_no_forbbiden_letters(words) {
    let counter = 0
    const forbbiden_letters = input('Letras proibidas:')

    for (let word of words) {
        if (avoids(word, forbbiden_letters)) {
            counter++
        }
    }

    console.log(`${counter} palavras não contém as letras proibidas!`)
}

function avoids(word, forbbiden_letters) {
    for(let letter of word) {
        if(contains(letter, forbbiden_letters)) {
            return false
        }
    }
    return true
}

function contains(letter,forbbiden_letters){

    for(let forbbiden_letter of forbbiden_letters) {
        if (letter === forbbiden_letter){
            return true
        }
    }
    return false
}


// Exercício 9.4

// function uses_only(word, letters) {
//     for (let letter of word) {
//         if(contains_only(letter, letters)) {
//             return true
//         }
//     }
//     return false
// }

// function contains_only(letter, letters) {
//     for (let current_letter of letters) {
//         if(letter === current_letter) {
//             return true
//         }
//     }
//     return false
// }




main()