// Desafio - oferta de seguro

// Percorrer um objeto, verificar se existe a chave `dependentes` e, caso exista, enviar uma mensagem de oferecer de seguro.


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

let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente [info] === "function")
    {
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}


// console.log(propsClientes);

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente))
oferecerSeguro(cliente);
