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
        private _instrumento: string) {
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

}