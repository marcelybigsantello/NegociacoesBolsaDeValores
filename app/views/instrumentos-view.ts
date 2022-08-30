import { Instrumentos } from "../models/instrumentos.js";
import { View } from "./view.js";

export class InstrumentosView extends View<Instrumentos>{

    protected template(model: Instrumentos): string {
        return `     
                ${model.listar().forEach(papel => {
                    return `<option>${papel.instrumento}</option>`;
                })}
        `;
    }

}