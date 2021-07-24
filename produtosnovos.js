var produtos = ["Televisão","Notebook","Janela","Armario"];
var nome = String;
let preco = (1500,3500,350,300);
let quantidade = 4;
var produto;

class criarProdutos {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        
    }
}
criarProdutos = new criarProdutos();

var produtos = {  nome: "Televisão" , criarProdutos : function()
{
        return this.nome + " " + this.preco + " ", this.quantidade;
 }

};

console.log(produto.nome)
console.log(produto.preco);
console.log(produto.quantidade);


