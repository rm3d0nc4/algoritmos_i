import {ler_numero, input} from '../../io_utils.js'

// nÃO CONLUÍDO



function main() {

    const family = [
        {
            name: 'John',
            age: 13
        },
        {
            name: 'Mark',
            age: 56,
        },
        {
            name: 'Rachel',
            age: 45,
        },
        {
            name: 'Nate',
            age: 67,
        },
        {
            name: 'Jeniffer',
            age: 65,
        }
    ];

    const menor = family.reduce((idades, current_value ) => {
        
        if(current_value['age'] < idades[0]) {
            idades[0] = current_value['age']
        }

        if(current_value['age'] > idades[1]) {
            idades[1] = current_value['age']
        }

        idades[2] = idades[1] - idades[0]

        return idades
    }, [Infinity, 0 , 0])

    console.log(menor)

    // Estilo croCoder
    // const ages = input.map(person => person.age);
    // [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
    // 
    // Spread operator: ...
}

main()