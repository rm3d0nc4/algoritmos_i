import { ler_numeros } from "../io_utils.js";

function main() {
    let [matricula, nota1, nota2, nota3] = ler_numeros('a matricula, a nota1, a nota2 e a nota3')

    let media = get_media(nota1,nota2,nota3)

    console.log(`A média do aluno de matrícula nº ${matricula} teve média ${media}`)

    while(true){

        [matricula, nota1, nota2, nota3] = ler_numeros('a matricula, a nota1, a nota2 e a nota3')
        
        if(matricula===0) {
            break
        }
        
        media = get_media(nota1,nota2,nota3)
        
        console.log(`A média do aluno de matrícula nº ${matricula} teve média ${media}`)    
    }

}

const get_media = (n1,n2,n3) => ((2*n1)+(3*n2)+(5*n3)/10).toFixed(2)

main()