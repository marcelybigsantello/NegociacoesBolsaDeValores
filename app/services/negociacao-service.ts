import { DadosNegociacao } from "../interfaces/dados-negociacao.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {


    public obterNegociacao(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: DadosNegociacao[]) => {
            return dados.map(dadosVigente => {
                return new Negociacao(
                    dadosVigente.vezes, 
                    dadosVigente.montante,
                    new Date(),
                    dadosVigente.papel, 
                    dadosVigente.lado)
            });
        })
    }
}