import * as mf from "./main_functions.js"
import { show_menu, to_continue, get_number_of_range } from "./utils_functions.js"


export function menu() {

    const [min, max] = [0,7]
    let option

    console.log('Bem-vindo! Leia uma arquivo de texto para prosseguir.')
    let words = mf.read_words()

    while(option !=0 ) {
        
        to_continue()
        show_menu()
        option = get_number_of_range('Digite uma opção:', min, max)

        if(option === 1) {

            mf.get_words_with_more_n_characters(words)

        } else if(option===2) {

            mf.qtd_words_has_no_letter(words)

        } else if(option===3) {

            mf.qtd_word_has_no_forbbiden_letters(words)

        } else if(option===4) {

            mf.qtd_words_with_only_selected_letters(words)

        } else if(option===5) {

            mf.qtd_words_with_uses_all_mandatory_letters(words)

        } else if(option===6) {

            mf.get_words_that_is_abecedarian(words)

        } else if(option===7) {

            const new_words = mf.read_words()
            words = new_words
        } else if(option===8) {

        }

    }
}

menu()