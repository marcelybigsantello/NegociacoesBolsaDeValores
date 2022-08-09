export class View {
    constructor(model) {
        this.element = document.querySelector(model);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
