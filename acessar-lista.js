// Desafio - Acessar chaves

// Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela.

const cliente = { 
    nome:"Andre",
    idade: 36,
    cpf: "115478523",
    email: "teste@alura.com.br"
}

const chaves = ["nome", "idade", "cpf", "email"]
// console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]))