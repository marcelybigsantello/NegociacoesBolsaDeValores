import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        if (model.startsWith("Negociação adicionada")) {
            return `
                <p class="alert alert-info">${model}</p>
            `;
        }
        else if (model.startsWith("Não é permitido")) {
            return `
                <p class="alert alert-danger">${model}</p>
            `;
        }
        else {
            return `
                <p class="alert alert-warning">${model}</p>
            `;
        }
    }
}
