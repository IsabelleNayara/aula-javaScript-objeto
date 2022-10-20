const cliente = { 
    nome:"Andre",
    idade: 36,
    cpf: "115478523",
    email: "teste@alura.com.br"
}
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(cliente.cpf.substring(0,3)); //para exibir apenas 3 primeiros numeros d CPF
