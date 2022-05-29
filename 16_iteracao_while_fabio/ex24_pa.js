import { ler_numeros } from './../io_utils.js';
function main() {

    const [razao_pa] = ler_numeros('a razão da PA')
    const [primeiro_termo] = ler_numeros('o primeiro termo da PA')
    let [n_termos] = ler_numeros('quais N primeiros termos')

    let contador = 1

    while(contador<=n_termos){
        const termo = primeiro_termo+(contador-1)*razao_pa
        console.log(termo)
        contador++
    }
}

main()