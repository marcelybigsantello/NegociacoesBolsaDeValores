import { inspect } from "../decorators/inspect.js";
import { LogarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {

    protected element: HTMLElement;

    constructor(seletor: string){
        const element = document.querySelector(seletor);
        if (element){
            this.element = element as HTMLElement;
        }
        else {
            throw new Error(`View ${seletor} não existe na DOM. Verifique`);
        }
    }

    @inspect()
    @LogarTempoDeExecucao(true)
    public update(model: T): void {
        const t1 = performance.now();
        let template = this.template(model);
        this.element.innerHTML = template;
        const t2 = performance.now();
        console.log("Tempo de execucao de update: ", (t2 - t1)/1000, " segundos");
    }

    protected abstract template(model: T): string;
}