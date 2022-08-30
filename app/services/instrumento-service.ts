import { DadosInstrumentos } from "../interfaces/dados-instrumentos";
import { Instrumento } from "../models/instrumento.js";

export class InstrumentoService {

    public obterInstrumentos(): Promise<Instrumento[]>{
        return fetch('http://localhost:8080/instrumentos')
        .then(res => res.json())
        .then((instrumentos: DadosInstrumentos[]) =>{
            return instrumentos.map(papel => {
                return new Instrumento(
                    papel.id, 
                    papel.instrumento);
            });
        })
    
    }
}