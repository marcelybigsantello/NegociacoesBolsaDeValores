import { LogarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasSemana } from "../enums/dias-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputInstrumento: HTMLInputElement;
    private inputNaturezaOperacao: HTMLInputElement;
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector("#data") ;
        this.inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.inputInstrumento = document.querySelector("#instrumento") as HTMLInputElement;
        this.inputNaturezaOperacao = document.querySelector("#naturezaOperacao") as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @LogarTempoDeExecucao()
    public adicionarNegociacao(): void {
        const negociacao = Negociacao.criaNegociacao(
            this.inputQuantidade.value,
            this.inputValor.value, this.inputData.value, 
            this.inputInstrumento.value, 
            this.inputNaturezaOperacao.value);

        if (!this.verificarDiaUtil(negociacao.data)) {
            this.mensagemView.update('Não é permitido adicionar negociações em dias não úteis')
            return;
        }
        else {
            this.negociacoes.adiciona(negociacao);
            this.negociacoes.listar();
            this.limparFormulario();
            this.atualizaMensagemView();
        }
    
    }

    private verificarDiaUtil(data: Date) {
        return data.getDay() > DiasSemana.DOMINGO && data.getDay() < DiasSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputQuantidade.value = '';
        this.inputInstrumento.value = '';
        this.inputNaturezaOperacao.value = '';
        this.inputData.focus();
    }

    private atualizaMensagemView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}