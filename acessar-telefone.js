// Desafio - Lista de telefone

// Acessar a lista de número de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um numero em algum cadastro.

const cliente = { 
    nome:"Andre",
    idade: 36,
    cpf: "115478523",
    email: "teste@alura.com.br",
    fones: ["5583992014569","5585994215368"]
}
cliente.fones.forEach(fone => console.log(fone));

