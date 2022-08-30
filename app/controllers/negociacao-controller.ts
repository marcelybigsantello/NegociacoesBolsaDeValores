import { LogarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasSemana } from "../enums/dias-semana.js";
import { Instrumentos } from "../models/instrumentos.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { InstrumentoService } from "../services/instrumento-service.js";
import { NegociacaoService } from "../services/negociacao-service.js";
import { imprimir } from "../utils/imprimir.js";
import { InstrumentosView } from "../views/instrumentos-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    
    private inputData: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputInstrumento: HTMLInputElement;
    private inputNaturezaOperacao: HTMLInputElement;
    private negociacoesView = new NegociacoesView('#negociacoesView');
    //private instrumentosView = new InstrumentosView('#instrumentosView');
    private instrumento: Instrumentos = new Instrumentos();
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoes: Negociacoes = new Negociacoes();
    
    private negociacaoService = new NegociacaoService();
    private instrumentoService = new InstrumentoService();

    constructor() {
        this.lerElementosDOM();
        this.negociacoesView.update(this.negociacoes);
        //this.instrumentosView.update(this.instrumento);
    }

    private lerElementosDOM(): void {
        this.inputData = <HTMLInputElement>document.querySelector("#data") ;
        this.inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.inputInstrumento = document.querySelector("#instrumento") as HTMLInputElement;
        this.inputNaturezaOperacao = document.querySelector("#naturezaOperacao") as HTMLInputElement;
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

    public importarDados(): void {
        this.negociacaoService.obterNegociacao()
        .then(negociacoesDoDia => {
            return negociacoesDoDia.filter(negociacaoDeHoje => {
                return !this.negociacoes
                    .listar()
                    .some(negociacao => negociacao.ehIgual(negociacaoDeHoje));
            })
        })
        .then(negociacoesHoje => {
            for (let negociacao of negociacoesHoje){
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }

    public importarInstrumentos(): void {
        this.instrumentoService.obterInstrumentos();
    }

    private atualizaMensagemView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}