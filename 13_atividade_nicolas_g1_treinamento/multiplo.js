import prompt  from 'prompt-sync';
const input = prompt()

function main() {

    let pares = 0
    let impares = 0
    let positivos = 0
    let negativos = 0
    
    let n1 = Number(input('Digite um  número:'))
    let n2 = Number(input('Digite outro número:'))
    

    if(eh_par(n1)) {
        pares++
    } else {
        impares++
    }
    if(eh_positivo(n1)) {
        positivos++
    } else if(eh_negativo(n1)){
        negativos++
    }


    while (!eh_multiplo(n1,n2)) {

        if(eh_par(n2)) {
            pares++
        } else {
            impares++
        }
    
        if(eh_positivo(n2)) {
            positivos++
        } else if(eh_negativo(n2)){
            negativos++
        }

        n1 = n2
        n2 = Number(input('Digite outro número:'))
    }

    if(eh_par(n2)) {
        pares++
    } else {
        impares++
    }

    if(eh_positivo(n2)) {
        positivos++
    } else if(eh_negativo(n2)){
        negativos++
    }


    console.log(`pares = ${pares}\nimpares = ${impares}\npositivos = ${positivos}\nnegativos = ${negativos}`)
}

const eh_multiplo = (n1,n2) => n1%n2===0 || n2%n1===0
const eh_par = n => n%2===0
const eh_positivo = n => n>0
const eh_negativo = n => n<0

main()