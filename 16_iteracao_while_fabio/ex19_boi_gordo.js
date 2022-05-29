
import { ler_numeros } from './../io_utils.js';
function main() {
    let [n_identificacao, peso] = ler_numeros('o número de identificação do boi e o seu peso')

    let boi_gordo = [n_identificacao, peso]
    let boi_magro = [n_identificacao, peso]

    while(n_identificacao!=0) {
        [n_identificacao, peso] = ler_numeros('o número de identificação do boi e o seu peso')

        if(peso> boi_gordo[1]) {
            boi_gordo = [n_identificacao, peso]
        }

        if(peso<boi_magro[1]) {
            boi_magro = [n_identificacao, peso]
        }
    }

    console.log(`Boi mais gordo: ${boi_gordo[0]} (${boi_gordo[1]} kg)`)
    console.log(`Boi mais magro: ${boi_magro[0]} (${boi_magro[1]} kg)`)
}

main()