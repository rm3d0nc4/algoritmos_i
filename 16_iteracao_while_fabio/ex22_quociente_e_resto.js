
import { ler_numeros } from './../io_utils.js';
function main() {

    let [n1, n2] = ler_numeros('dois números inteiros')
    
    let resto
    let quociente = 1

    while (quociente*n2<=n1){
        quociente++
    }

    quociente--
    resto = n1-(n2*quociente)

    console.log(`Quociente: ${quociente}`)
    console.log(`Resto: ${resto}`)

    
    


}

main()