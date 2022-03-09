const prompt = require("prompt-sync");

const Contato = require('./Contato');
const Agenda = require('./Agenda');

let matheus = new Contato(1, 'matheus', 38332846);
let thiago = new Contato(2, 'thiago', 38332845);
let camargo = new Contato(3, 'camargo', 38020220);
let danilo = new Contato(4, 'danilo', 20202020)

let usuarios = new Agenda()

usuarios.inserirAgenda(matheus.getContatoId(), matheus.getContatoNome(), matheus.getContatoTelefone())
usuarios.inserirAgenda(thiago.getContatoId(), thiago.getContatoNome(), thiago.getContatoTelefone())
usuarios.inserirAgenda(camargo.getContatoId(), camargo.getContatoNome(), camargo.getContatoTelefone())
usuarios.inserirAgenda(danilo.getContatoId(), danilo.getContatoNome(), danilo.getContatoTelefone())

usuarios.listarAgenda();

usuarios.removerAgenda(3);
usuarios.listarAgenda();

console.log('Bem vindo ao programa cadastro de contatos')

/*do {
    let identificadorUsuario = 5;
    console.log('1 para inserir um novo contato')
    console.log('2 para listar os contatos cadastrados')
    console.log('3 para buscar um contato pelo ID')
    console.log('4 para remover um contato pelo ID')

    var opcao = prompt('Digite sua opção ');

    switch (opcao) {
        case 1:
            let nome = prompt('Digite seu nome')
            let telefone = prompt('Digite o seu telefone')
            usuarios.inserirAgenda(identificadorUsuario, nome, telefone)
            identificadorUsuario++;
            break;
        case 2:
            usuarios.listarAgenda();
            break;
        case 3:
            let userID = prompt('Digite o id so usuario a ser buscado');
            usuarios.buscarAgenda(userID);
            break;
        case 4:
            let userIDRemove = prompt('Digite o id para excluir');
            usuarios.removerAgenda(userIDRemove);
            break;
    }

}
while (opcao != 0)*/