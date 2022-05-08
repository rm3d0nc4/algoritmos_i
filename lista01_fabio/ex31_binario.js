import {input, print} from '../io_utils.js'
function main() {
    print('----- Convertendo binário para decimal -----')

    const binario = Number(input('Digite um número binário com 4 dígitos:'))
    
    const indice0 = binario % 10
    const indice1 = ((binario - indice0) % 100) /10
    const indice2 = ((binario-indice0-(indice1*10) % 1000) /100) % 10
    const indice3 =(((binario-indice0-(indice1*10)-(indice2*100)) % 10000)/1000)

    const decimal = ((indice3*2**3)+(indice2*2**2)+(indice1*2**1)+(indice0*2**0))

    print(`O número binário ${binario} corresponde ao número decimal ${decimal}`)
}
main()