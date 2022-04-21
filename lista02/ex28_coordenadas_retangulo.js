import { ler_numeros_tipo2 } from "../io_utils.js"

function main() {
 const [x1,x2] = ler_numeros_tipo2('os valores da coordenada x')
 const [y1,y2] = ler_numeros_tipo2('os valores da coordenada y')

 const area = calcula_area_retangulo(x1,x2,y1,y2)
 console.log(`A área do retângulo é: ${area}`)

}

function calcula_area_retangulo(x1,x2,y1,y2) {
    const area = (x2-x1) * (y2-y1)
    if(area<0) {
        return area*(-1)
    } else {
        return area
    }
}

main()