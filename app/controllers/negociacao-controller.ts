import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputInstrumento: HTMLInputElement;
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    private negociacoes: Negociacoes = new Negociacoes();

    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.inputInstrumento = document.querySelector("#instrumento");
        this.negociacoesView.update(this.negociacoes);
    }

    public adicionarNegociacao(): void {
        const negociacao = this.cadastraNegociacao();
        negociacao.data.setDate(12);
        if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6){
            this.negociacoes.adiciona(negociacao);
            this.negociacoes.listar();
            this.limparFormulario();
            this.atualizaMensagemView();
        }
        else {
            this.mensagemView.update('Não é permitido adicionar negociações em dias não úteis')
        }
    }
    
    private cadastraNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const instrumento = this.inputInstrumento.value;    
        return new Negociacao(quantidade, valor, date, instrumento);
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputQuantidade.value = '';
        this.inputInstrumento.value = '';
        this.inputData.focus();
    }

    private atualizaMensagemView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negócio adicionado com sucesso');
    }
}