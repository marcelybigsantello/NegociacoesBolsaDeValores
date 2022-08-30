/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

api.dados = function(req, res) {

    res.json([
        { montante: 20.5, vezes: 2, papel: "B3SA3", lado: "Venda"},
        { montante: 10.2, vezes: 5, papel: "TAEE11", lado: "Compra"},
        { montante: 50.5, vezes: 1, papel: "JHSF4", lado: "Venda"},
        { montante: 70.5, vezes: 2, papel: "BBDC4", lado: "Compra"}
    ]);
    
};

api.instrumentos = function(req, resp){
    resp.json([
        {id: 1, instrumento: "B3SA3"},
        {id: 2, instrumento: "TAEE11"},
        {id: 3, instrumento: "BBDC3"},
        {id: 4, instrumento: "BBDC4"},
        {id: 5, instrumento: "PETR3"},
        {id: 6, instrumento: "PETR4"},
        {id: 7, instrumento: "PCAR3"},
        {id: 8, instrumento: "SANB3"},
        {id: 9, instrumento: "SANB4"}, 
        {id: 10, instrumento: "SANB11"},
        {id: 11, instrumento: "USIM5"}
    ]);
};


module.exports = api;