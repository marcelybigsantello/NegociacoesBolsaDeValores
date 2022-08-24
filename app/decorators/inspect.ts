export function inspect(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor // atributo que faz a mágica acontecer
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            console.log(`----Método update----`);
            console.log(`--- parametros: [${JSON.stringify(args)}]`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------- retorno: ${retorno}`);
            return retorno;
        }

        return descriptor;
    }
    
}