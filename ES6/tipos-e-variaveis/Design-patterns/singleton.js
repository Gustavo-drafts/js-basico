function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Gustavo' });

const p2 = Pessoa.call({ name: 'Suzana' });

console.log(p);

console.log(p2);