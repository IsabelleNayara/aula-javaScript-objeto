// Desafio - compondo um objeto

// Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

const cliente = { 
    nome:"Andre",
    idade: 36,
    cpf: "115478523",
    email: "teste@alura.com.br",
    fones: ["5583992014569","5585994215368"]
}

cliente.dependentes = {
    nome:"Sarah",
    parantesco: "filha",
    dataNascimento: "30/01/1990"
}

console.log(cliente)

cliente.dependentes.nome = "Sarah Silva"

console.log(cliente)