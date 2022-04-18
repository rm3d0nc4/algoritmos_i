import { input, ler_numeros_tipo1 } from './../io_utils.js';

function main() {
    const input06 = ler_numeros_tipo1(3, 'ângulos')
    const verifica_triangulo = classifica_triangulo(input06[0],input06[1],input06[2])
    console.log(verifica_triangulo)
}

//Questão 06
function classifica_triangulo(angulo_i1,angulo_i2,angulo_i3) {

    if ((angulo_i1!=0 && angulo_i2!=0 && angulo_i3!=0) && angulo_i1 + angulo_i2 + angulo_i3 === 180) {

        if(angulo_i1<90 && angulo_i2<90 && angulo_i3<90) {
            return 'Triângulo agudo'
        } else if (angulo_i1===90 || angulo_i2===90 || angulo_i3===90){
            return 'Triângulo retângulo'
        } else if(angulo_i1>90 || angulo_i2>90 || angulo_i3>90){
            return 'Triângulo obtusângulo'
        }
        
    } else {
        return 'Não é um triângulo'
    }

}


main()