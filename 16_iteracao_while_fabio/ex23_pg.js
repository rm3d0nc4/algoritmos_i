
import { ler_numeros } from './../io_utils.js';
function main() {

    const [razao_pg] = ler_numeros('a razão da PG')
    const [primeiro_termo] = ler_numeros('o primeiro termo da PG')
    const [n_termos] = ler_numeros('quais N primeiros termos')

    for (let i= 1; i<=n_termos; i++) {
        const termo = primeiro_termo*razao_pg**(i-1)
        console.log(termo)
    }
}

main()