import { escape } from "../decorators/escape.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    @escape
    protected template(model: Negociacoes): string {
        return ` 
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>INSTRUMENTO</th>
                    <th>OPERACAO</th>
                </tr>
            </thead>
            <tbody>
                ${model.listar().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.converterData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.instrumento}</td>
                            <td>${negociacao.naturezaOperacao}</td>
                        </tr>
                    
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    public converterData(date: Date): string {
        return new Intl.DateTimeFormat().format(date);
    }

}