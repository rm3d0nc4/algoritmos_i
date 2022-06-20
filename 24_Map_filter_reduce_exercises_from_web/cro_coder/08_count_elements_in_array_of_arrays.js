function main() {
    const vetor_de_vetores = [
        ['a', 'b', 'c'],
        ['c', 'd', 'f'],
        ['d', 'f', 'g'],
    ]

    const vetor_destruturado = desestruturar_vetor(vetor_de_vetores)

    
    
    const ocorrencias = vetor_destruturado.reduce((p_value, c_value, _, vetor) => {
        
        p_value[c_value] = n_ocorrencias_de_um_elemento_no_vetor(c_value, vetor)
        return p_value
    }, {})
    
    console.log(ocorrencias)
    
    // Estido croCoder

    // input
    // .flat() |* <========  Método para destruturar Array*\
    // .reduce((accumulator, currentValue) => {
        
    //     if(accumulator[currentValue]) {
    //     accumulator[currentValue] += 1;

    //     } else {
    //         accumulator[currentValue] = 1;
    //     }
    //     return accumulator;
    // }, {});
}


function n_ocorrencias_de_um_elemento_no_vetor(elemento, vetor) {
    let contador = 0

    for(let elemento_vetor of vetor) {
        if(elemento === elemento_vetor) {
            contador++
        }
    }
    return contador
}

function desestruturar_vetor(vetor) {
    let novo_vetor = new Array()

    for (let sub_vetor of vetor) {

        for(let elemento of sub_vetor) {
            novo_vetor[novo_vetor.length] = elemento
        }
    }

    return novo_vetor
}

let a = {}



main()