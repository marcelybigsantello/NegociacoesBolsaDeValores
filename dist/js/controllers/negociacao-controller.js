var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LogarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasSemana } from "../enums/dias-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.inputInstrumento = document.querySelector("#instrumento");
        this.inputNaturezaOperacao = document.querySelector("#naturezaOperacao");
        this.negociacoesView.update(this.negociacoes);
    }
    adicionarNegociacao() {
        const negociacao = Negociacao.criaNegociacao(this.inputQuantidade.value, this.inputValor.value, this.inputData.value, this.inputInstrumento.value, this.inputNaturezaOperacao.value);
        if (!this.verificarDiaUtil(negociacao.data)) {
            this.mensagemView.update('Não é permitido adicionar negociações em dias não úteis');
            return;
        }
        else {
            this.negociacoes.adiciona(negociacao);
            this.negociacoes.listar();
            this.limparFormulario();
            this.atualizaMensagemView();
        }
    }
    verificarDiaUtil(data) {
        return data.getDay() > DiasSemana.DOMINGO && data.getDay() < DiasSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputQuantidade.value = '';
        this.inputInstrumento.value = '';
        this.inputNaturezaOperacao.value = '';
        this.inputData.focus();
    }
    atualizaMensagemView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
__decorate([
    LogarTempoDeExecucao()
], NegociacaoController.prototype, "adicionarNegociacao", null);
