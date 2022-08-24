var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/inspect.js";
import { LogarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";
export class View {
    constructor(seletor) {
        const element = document.querySelector(seletor);
        if (element) {
            this.element = element;
        }
        else {
            throw new Error(`View ${seletor} não existe na DOM. Verifique`);
        }
    }
    update(model) {
        const t1 = performance.now();
        let template = this.template(model);
        this.element.innerHTML = template;
        const t2 = performance.now();
        console.log("Tempo de execucao de update: ", (t2 - t1) / 1000, " segundos");
    }
}
__decorate([
    inspect(),
    LogarTempoDeExecucao(true)
], View.prototype, "update", null);
