let listaJson = [
    {
        nome: "fulano 1",
        idade: 30
    },
    {
        nome: "fulano 2",
        idade: 25
    },
    {
        nome: "fulano 3",
        idade: 35
    }
];

function getNome(pessoaJson){
    return { nome: pessoaJson.nome, idade: pessoaJson.idade };
}

let novaListaPessoas = listaJson.map(getNome)
console.log(novaListaPessoas);