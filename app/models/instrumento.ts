import { Modelo } from "../interfaces/modelo";

export class Instrumento implements Modelo<Instrumento> {

    private instrumentos: Instrumento[] = [];
    
    constructor(private _id: number, private _instrumento: string){

    }

    get id(): number {
        return this._id;
    }

    get instrumento(): string {
        return this._instrumento;
    }

    converterEmTexto(): string {
        return `
            Id: ${this.id},
            Instrumento: ${this.instrumento}
        `;
    }
    ehIgual(objeto: Instrumento): boolean {
        return JSON.stringify(objeto) === JSON.stringify(this.instrumento);
    }
}