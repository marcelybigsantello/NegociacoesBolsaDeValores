import { Modelo } from "../interfaces/modelo.js";
import { Instrumento } from "./instrumento.js";

export class Instrumentos implements Modelo<Instrumentos> {
    
    private instrumentos: Instrumento[] = [];

    public adiciona(item: Instrumento){
        this.instrumentos.push(item);
    }

    public listar(): readonly Instrumento[]{
        return this.instrumentos;
    }

    converterEmTexto(): string {
        return `
            Instrumentos: ${this.instrumentos}
        `;
    }

    ehIgual(objeto: Instrumentos): boolean {
        return JSON.stringify(this.instrumentos) === JSON.stringify(objeto);
    }
}