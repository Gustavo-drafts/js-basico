/*

switch (expressao) {
    case valor1:
        [break;]
    case valor2:
        [break;]

    default:
        [break;]
}

*/

const fruit = '';

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 /kg');
        break;
    case 'mamâo':
    case 'pera':
        console.log('R$ 2,00 / kg');
        break;
    default:
        console.log('Produto não existe no estoque.');
        break;
}