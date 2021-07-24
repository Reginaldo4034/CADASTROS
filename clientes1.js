

var cliente = ["Pedro", 09865,"Rua Joaquim Faria","pedromarques@gmail.com"]


function mostrarCliente(nome,cpf,endereco,email){
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.email = email;

}
mostrarCliente();

var cliente = {  nome: "Pedro", Ativo: true, cpf: 09865, endereco: "Rua Joaquim Faria", email:"pedromarques@gmail.com", exibeNome : function()
{
        return this.nome + " " + this.cpf;
        
 }
};

console.log(cliente.nome)
console.log(cliente.cpf);
console.log(cliente.endereco);
console.log(cliente.email);

