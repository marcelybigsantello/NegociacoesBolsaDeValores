import { Negociacao } from "./negociacao"

export class Negociacoes {
    private negociacoes: Negociacao[] = [];
    //Forma mais verbosa: 
    //private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    public listar(): readonly Negociacao[]{
        return this.negociacoes;
    }
}


const lista: Array<number> = [];
lista.push(10);
lista.push(20);
lista.push(30);
lista.push(40);
lista.push(50);

for(let item of lista){
    item.valueOf();
}