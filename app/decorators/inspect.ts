export function inspect(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor // atributo que faz a mágica acontecer
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        }

        return descriptor;
    }
    
}