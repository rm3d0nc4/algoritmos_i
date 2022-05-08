import * as fs from 'fs'
import { get_number, get_text, } from './utils_functions.js'


// Exercício 9.1


export function read_words() {
    const path = get_text('Digite o caminho do arquivo:')
    const words = fs.readFileSync(path, {encoding: 'utf-8'}).split('\n')
    console.log(`${words.length} palavras carregadas`)
    
    return words
}

export function get_words_with_more_n_characters(words) {
    const letters_qtd = get_number('Com mais de quantos caracteres?')
    let counter = 0
    
    for (let word of words) {
        if(word.length>letters_qtd){
            console.log(word)
            counter++
        }
    }
    const percent = ((counter/words.length)*100).toFixed(3)
    console.log(`Existem ${counter} (${percent}%) palavras com mais de ${letters_qtd} letras`)
}


// Exercício 9.2


export function has_no_letter(word, letter) {
    for (let item of word ) {
        if(item ===letter) {
            return false
        }
    }
    return true
}

export function qtd_words_has_no_letter(words) {
    let counter = 0
    const letter = get_text('Sem qual letra?')

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



export function contains(letter, letters_list){
    
    for(let letter_item of letters_list) {
        if (letter === letter_item){
            return true
        }
    }
    return false
}

export function avoids(word, forbbiden_letters) {
    for(let letter of word) {
        if(contains(letter, forbbiden_letters)) {
            return false
        }
    }
    return true
}

export function qtd_word_has_no_forbbiden_letters(words) {
    let counter = 0
    const forbbiden_letters = get_text('Quais letras são proibidas?')

    for (let word of words) {
        if (avoids(word, forbbiden_letters)) {

            console.log(word)
            counter++
        }
    }

    const percent = ((counter/words.length)*100).toFixed(3)
    console.log(`Existem ${counter} (${percent}%) palavras que não possuem as letras proibidas`)
}


// Exercício 9.4



function uses_only(word, letters_list) {
    for(let letter of word) {
        if(!contains(letter, letters_list)) {
            return false
        }
    }
    return true
}

export function qtd_words_with_only_selected_letters(words) {
    let counter = 0
    const selected_letters = get_text('Com apenas quais letras:')
    
    for (let word of words) {
        if (uses_only(word, selected_letters)) {
            console.log(word)
            counter++
        }
    }

    const percent = ((counter/words.length)*100).toFixed(3)
    console.log(`Existem ${counter} (${percent}%) palavras com as letras da lista !`)
}


// Exercício 9.5


export function uses_all(palavra, letras_obrigatorias) {
    let letras_usadas =''
    let contador = 0
    
    for (let letra of palavra) {
        if( contains(letra, letras_obrigatorias) && !(contains(letra, letras_usadas))){
            letras_usadas+=letra
            contador++
        }
    }

    if(contador === letras_obrigatorias.length) {
        return true
    } else {
        return false

    }

}

export function qtd_words_with_uses_all_mandatory_letters(words) {
    const mandatory_letters = get_text('Quais letras devem ser obrigatórias?')

    let counter = 0
    for (let word of words) {

        if (uses_all(word, mandatory_letters)) {
            console.log(word)
            counter++
        }
    }

    const percent = ((counter/words.length)*100).toFixed(3)
    console.log(`Existem ${counter} (${percent}%) palavras com as letras da lista !`)

}



// Exercício 9.6


function get_letter_position(letter) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyk'

    for (let index in alphabet) {
        if(alphabet[index]=== letter){
            return Number(index)+1
        }
    }
    
}

export function is_abecedarian(word){
    
    let counter = 0
    let current_letter = 1

    while(counter != word.length) {

        let next_letter = get_letter_position(word[counter])

        if(next_letter >= current_letter) {
            current_letter = next_letter
            counter++
        } else {
            return false
        }
    }
    return true
}


export function get_words_that_is_abecedarian(words) {

    let counter = 0

    for (let word of words) {
        if(is_abecedarian(word)){
            console.log(word)
            counter++
        }
    }

    const percent = ((counter/words.length)*100).toFixed(3)
    console.log(`Existem ${counter} (${percent}%) palavras em ordem alfabética !`)
}
