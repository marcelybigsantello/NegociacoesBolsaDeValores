export class Negociacao {
    /* private _quantidade: number;
    private _valor: number;
    private _data: Date;
    private _instrumento: string;

    constructor(quantidade: number, valor: number, data: Date, instrumento: string){
        this._quantidade = quantidade;
        this._valor = valor;
        this._data = data;
        this._instrumento = instrumento;
    } */
    constructor(_quantidade, _valor, _data, _instrumento, _naturezaOperacao) {
        this._quantidade = _quantidade;
        this._valor = _valor;
        this._data = _data;
        this._instrumento = _instrumento;
        this._naturezaOperacao = _naturezaOperacao;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    /*  get data(): Date {
         return this._data;
     } */
    get instrumento() {
        return this._instrumento;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get naturezaOperacao() {
        return this._naturezaOperacao;
    }
    static criaNegociacao(quantidadeStr, valorStr, dataStr, instrumentoStr, naturezaOperacaoStr) {
        const exp = /-/g;
        const date = new Date(dataStr.replace(exp, ','));
        const quantidade = parseInt(quantidadeStr);
        const valor = parseFloat(valorStr);
        const instrumento = instrumentoStr;
        const naturezaOperacao = naturezaOperacaoStr;
        return new Negociacao(quantidade, valor, date, instrumento, naturezaOperacao);
    }
}
