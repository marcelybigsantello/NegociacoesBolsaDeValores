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

    constructor(private _quantidade: number,
        private _valor: number,
        private _data: Date,
        private _instrumento: string,
        private _naturezaOperacao: string) {
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

   /*  get data(): Date {
        return this._data;
    } */

    get instrumento(): string {
        return this._instrumento;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get naturezaOperacao(): string {
        return this._naturezaOperacao;
    }

    public static criaNegociacao(quantidadeStr: string, valorStr: string, dataStr: string,
        instrumentoStr: string, naturezaOperacaoStr: string){
        const exp = /-/g;
        const date = new Date(dataStr.replace(exp, ','));
        const quantidade = parseInt(quantidadeStr);
        const valor = parseFloat(valorStr);
        const instrumento = instrumentoStr;
        const naturezaOperacao = naturezaOperacaoStr;
        return new Negociacao(quantidade, valor, date, instrumento, naturezaOperacao);
    }

}