export abstract class View<T> {

    protected element: HTMLElement;

    constructor(model: string){
        this.element = document.querySelector(model);
    }

    public update(model: T): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
}