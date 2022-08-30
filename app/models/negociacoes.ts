import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
    private negociacoes: Negociacao[] = [];
    //Forma mais verbosa: 
    //private negociacoes: Array<Negociacao> = [];
    
    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    
    public listar(): readonly Negociacao[]{
        return this.negociacoes;
    }

    public converterEmTexto(): string {
        return `
            Negociacoes: ${this.negociacoes}
        `;
    }

    public ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto);
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

