

function Pessoa(customProps) {
    return {
        name: 'Gustavo',
        lastname: 'Trindade',
        ...customProps
    }
}

const p = Pessoa({name: 'Guga', age: 32});
console.log(p);