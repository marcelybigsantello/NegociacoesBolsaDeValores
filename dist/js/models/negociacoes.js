export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return this.negociacoes;
    }
}
const lista = [];
lista.push(10);
lista.push(20);
lista.push(30);
lista.push(40);
lista.push(50);
for (let item of lista) {
    item.valueOf();
}
