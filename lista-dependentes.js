// Desafio - Lista de dependentes

// Verificar a melhor forma de agregar a informação de um novo dependente ao objeto cliente.

const cliente = { 
    nome:"Andre",
    idade: 36,
    cpf: "115478523",
    email: "teste@alura.com.br",
    fones: ["5583992014569","5585994215368"],
    dependentes:[{
        nome:"Sarah Silva",
        parantesco: "filha",
        dataNascimento: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Maria Nayara",
    parantesco: "filha",
    dataNascimento: "04/01/2014"
})

console.log(cliente)

//fazendo um filtro usando a data de nascimento

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento==="04/01/2014");

console.log(`A filha mais nova é ${filhaMaisNova[0].nome}`)


