// Desafio - fazendo depósitos

// Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias.

const cliente = { 
    nome:"Andre",
    idade: 36,
    cpf: "115478523",
    email: "teste@alura.com.br",
    fones: ["5583992014569","5585994215368"],
    dependentes:[
      {
      nome:"Sarah Silva",
      parantesco: "filha",
      dataNascimento: "20/03/2011"},
      {
      nome: "Maria Nayara",
      parantesco: "filha",
      dataNascimento: "04/01/2014"
      }
    ],
    saldo: 100,
    depositar:function(valor)
    {
        this.saldo+=valor
    }
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo)