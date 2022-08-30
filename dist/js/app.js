import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionarNegociacao();
    });
}
else {
    throw new Error('Não foi possível carregar a aplicação. Verifique se o form foi instanciado');
}
const botaoImportar = document.querySelector("#btnImportar");
if (botaoImportar) {
    botaoImportar.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw new Error('Botão importar não foi encontrado');
}
